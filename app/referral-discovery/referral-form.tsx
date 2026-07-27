"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Check, ChevronLeft, ChevronRight, LockKeyhole, Save, UploadCloud } from "lucide-react";
import { integrationsConfig } from "@/lib/integrations";
import { referralSections, type ReferralField } from "@/lib/referral-discovery";
import styles from "./referral.module.css";

type Answers = Record<string, string | string[]>;
const STORAGE_KEY = "nuvrixa-referral-discovery-v1";

function present(value: unknown) {
  return Array.isArray(value) ? value.length > 0 : typeof value === "string" && Boolean(value.trim());
}

export function ReferralForm() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [files, setFiles] = useState<File[]>([]);
  const [submissionId, setSubmissionId] = useState("");
  const [ready, setReady] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState("");
  const [reference, setReference] = useState("");
  const [bookingUrl, setBookingUrl] = useState("");
  const [uploadMessage, setUploadMessage] = useState("");
  const section = referralSections[step];
  const completion = Math.round(((step + 1) / referralSections.length) * 100);

  useEffect(() => {
    const restore = window.setTimeout(() => {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored) as { answers?: Answers; step?: number; submissionId?: string };
          setAnswers(parsed.answers || {});
          setStep(Math.min(parsed.step || 0, referralSections.length - 1));
          setSubmissionId(parsed.submissionId || crypto.randomUUID());
        } else setSubmissionId(crypto.randomUUID());
      } catch {
        localStorage.removeItem(STORAGE_KEY);
        setSubmissionId(crypto.randomUUID());
      }
      setReady(true);
    }, 0);
    return () => window.clearTimeout(restore);
  }, []);

  useEffect(() => {
    if (!ready || status === "success") return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ answers, step, submissionId, savedAt: new Date().toISOString() }));
  }, [answers, ready, status, step, submissionId]);

  function setValue(key: string, value: string | string[]) {
    setAnswers((current) => ({ ...current, [key]: value }));
    setError("");
  }

  function toggle(key: string, option: string) {
    const current = (answers[key] as string[]) || [];
    setValue(key, current.includes(option) ? current.filter((item) => item !== option) : [...current, option]);
  }

  function validate() {
    const missing = section.fields.filter((field) => field.required && !present(answers[field.key])).map((field) => field.label);
    if (missing.length) {
      setError(`Complete the required information: ${missing.join(", ")}.`);
      document.getElementById("referral-error")?.focus();
      return false;
    }
    return true;
  }

  function next() {
    if (!validate()) return;
    setStep((current) => Math.min(current + 1, referralSections.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function submit() {
    if (!validate()) return;
    const totalSize = files.reduce((sum, file) => sum + file.size, 0);
    if (totalSize > 4_000_000) {
      setError("Supporting files must total less than 4 MB. You can paste secure document links instead.");
      return;
    }
    setStatus("submitting");
    setError("");
    try {
      const body = new FormData();
      body.append("payload", JSON.stringify({ answers, submissionId }));
      files.forEach((file) => body.append("files", file));
      const response = await fetch("/api/referral-discovery", { method: "POST", body });
      const result = await response.json() as { ok?: boolean; reference?: string; uploadedFiles?: number; fileUploadWarning?: boolean; error?: string };
      if (!response.ok || !result.ok || !result.reference) throw new Error(result.error || "Submission failed.");
      const cal = new URL(integrationsConfig.calBookingUrl);
      cal.searchParams.set("embed", "1");
      cal.searchParams.set("name", String(answers.fullName || ""));
      cal.searchParams.set("email", String(answers.email || ""));
      cal.searchParams.set("metadata[referralReference]", result.reference);
      localStorage.removeItem(STORAGE_KEY);
      setReference(result.reference);
      setBookingUrl(cal.toString());
      setUploadMessage(files.length === 0 ? "Your questionnaire is now attached to your Nuvrixa CRM record." : result.fileUploadWarning ? `Your questionnaire was saved. ${result.uploadedFiles || 0} of ${files.length} supporting files reached secure storage; Nuvrixa will contact you for any missing files.` : `Your questionnaire and ${result.uploadedFiles || files.length} supporting file(s) are now stored with your Nuvrixa CRM record.`);
      setStatus("success");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (caught) {
      setStatus("error");
      setError(caught instanceof Error ? caught.message : "Your answers remain saved. Please try again.");
    }
  }

  if (!ready) return <p>Restoring your saved referral discovery…</p>;
  if (status === "success") return <section className={styles.success}>
    <Check size={46} color="#25e2ef"/>
    <span className={styles.eyebrow}>DISCOVERY RECEIVED</span>
    <h2>Thank you. Let’s prepare your prototype.</h2>
    <p>{uploadMessage}</p>
    <div className={styles.reference}>Reference <strong>{reference}</strong></div>
    <p>Book the first meeting below. You can choose an online or face-to-face meeting in the calendar.</p>
    <div className={styles.booking}>
      <header><div><strong>Select a date and meeting type</strong><p>Your name and email are prefilled.</p></div><Link href="/">Return Home</Link></header>
      <iframe title="Book your Nuvrixa referral discovery meeting" src={bookingUrl} loading="eager"/>
      <footer><span>Cal.com will send the confirmation and add the appointment to the connected calendar.</span><Link href="/">← Nuvrixa Home</Link></footer>
    </div>
    <div className={styles.successLinks}><Link href="/">Return Home</Link><Link href="/contact">Contact Nuvrixa</Link></div>
  </section>;

  return <div className={styles.experience}>
    <aside className={styles.rail}>
      <h2>Referral Discovery</h2><p>Section {step + 1} of {referralSections.length} · {completion}% complete</p>
      <div className={styles.progress}><span style={{ width: `${completion}%` }}/></div>
      <nav>{referralSections.map((item, index) => <button type="button" key={item.id} className={index === step ? styles.current : index < step ? styles.done : ""} onClick={() => index <= step && setStep(index)} disabled={index > step}><i>{index < step ? <Check size={13}/> : item.id}</i><span>{item.title}</span></button>)}</nav>
    </aside>
    <section className={styles.formPanel}>
      <label className={styles.honeypot}>Leave blank<input value={String(answers.websiteFax || "")} onChange={(event) => setValue("websiteFax", event.target.value)}/></label>
      <header className={styles.sectionHead}><span className={styles.eyebrow}>SECTION {section.id} OF {referralSections.length}</span><h2>{section.title}</h2><p>{section.description}</p></header>
      {error && <div id="referral-error" className={styles.error} role="alert" tabIndex={-1}>{error}</div>}
      <div className={styles.fields}>
        {section.fields.map((field) => <Field key={field.key} field={field} value={answers[field.key]} setValue={setValue} toggle={toggle}/>)}
        {section.id === 10 && <label className={styles.upload}><UploadCloud/><strong>Optional supporting files</strong><input type="file" multiple accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.png,.jpg,.jpeg,.webp,.txt" onChange={(event) => setFiles(Array.from(event.target.files || []))}/><small>Up to 4 MB total. Upload forms, spreadsheets, job cards, flowcharts, reports, paperwork photos, logos or brand guides. Never upload passwords, banking credentials or sensitive live customer data.</small>{files.length > 0 && <small>{files.length} file(s) selected: {files.map((file) => file.name).join(", ")}</small>}</label>}
      </div>
      <footer className={styles.actions}>
        <p><Save size={14}/> Progress is saved privately on this device.</p>
        <div>{step > 0 && <button type="button" className={styles.back} onClick={() => setStep((current) => current - 1)}><ChevronLeft size={17}/> Back</button>}{step < referralSections.length - 1 ? <button type="button" className={styles.next} onClick={next}>Continue <ChevronRight size={17}/></button> : <button type="button" className={styles.submit} onClick={submit} disabled={status === "submitting"}>{status === "submitting" ? "Submitting securely…" : "Submit and Book Meeting"} <LockKeyhole size={17}/></button>}</div>
      </footer>
    </section>
  </div>;
}

function Field({ field, value, setValue, toggle }: { field: ReferralField; value: string | string[] | undefined; setValue: (key: string, value: string | string[]) => void; toggle: (key: string, option: string) => void }) {
  const wide = field.type === "textarea" || field.type === "multi";
  if (field.type === "multi") return <fieldset className={`${styles.field} ${styles.wide}`}><span>{field.label}{field.required && <b>REQUIRED</b>}</span><div className={styles.choices}>{field.options?.map((option) => <button type="button" key={option} className={(value as string[] || []).includes(option) ? styles.selected : ""} aria-pressed={(value as string[] || []).includes(option)} onClick={() => toggle(field.key, option)}>{(value as string[] || []).includes(option) ? "✓ " : ""}{option}</button>)}</div></fieldset>;
  return <label className={`${styles.field} ${wide ? styles.wide : ""}`}><span>{field.label}{field.required && <b>REQUIRED</b>}</span>
    {field.type === "textarea" ? <textarea value={String(value || "")} placeholder={field.placeholder} onChange={(event) => setValue(field.key, event.target.value)}/> :
      field.type === "select" ? <select value={String(value || "")} onChange={(event) => setValue(field.key, event.target.value)}><option value="">Select an option</option>{field.options?.map((option) => <option key={option}>{option}</option>)}</select> :
      <input type={field.type} value={String(value || "")} placeholder={field.placeholder} min={field.type === "number" ? "0" : undefined} onChange={(event) => setValue(field.key, event.target.value)}/>}
  </label>;
}
