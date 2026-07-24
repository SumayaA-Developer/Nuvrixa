"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft, ArrowRight, Building2, Check, CheckCircle2, ChevronRight,
  CircleAlert, ClipboardCheck, FileLock2, FileUp, Plus, RotateCcw, Save,
  ShieldCheck, Trash2, Users, Wrench
} from "lucide-react";
import {
  consentStatements, departmentOptions, discoverySections, requiredKeysForSection,
  toolOptions, type DiscoveryField
} from "@/lib/business-discovery";
import styles from "./discovery.module.css";

type Primitive = string | string[];
type DetailRecord = Record<string, Record<string, string>>;
type ProcessRecord = Record<string, string>;
type Answers = Record<string, Primitive | DetailRecord | ProcessRecord[]>;

const STORAGE_KEY = "nuvrixa-business-discovery-v1";
const departmentQuestions = [
  ["teamSize", "Approximate team size"], ["leader", "Department leader"],
  ["responsibilities", "Main responsibilities"], ["challenge", "Biggest operational challenge"],
  ["manualTasks", "Repeated manual tasks"], ["documents", "Key documents used"],
  ["software", "Software or tools used"]
] as const;
const toolQuestions = [
  ["platform", "Name of software or platform"], ["purpose", "What is it used for?"],
  ["users", "Which employees use it?"], ["worksWell", "Does it work well?"],
  ["limitation", "Biggest limitation"], ["manualExport", "Is information exported manually?"],
  ["integrationNeed", "Does it need to connect to another system?"]
] as const;
const processQuestions = [
  ["name", "Process name", "e.g. New customer onboarding"], ["improveFirst", "Should Nuvrixa improve this process first?", "Yes, no or unsure"],
  ["trigger", "What triggers the process?", ""], ["starter", "Who starts the process?", ""],
  ["people", "Which employees or departments are involved?", ""], ["steps", "Describe the process step by step", "Include every hand-off and decision"],
  ["paper", "Which steps happen on paper?", ""], ["email", "Which steps happen by email?", ""],
  ["whatsapp", "Which steps happen through WhatsApp?", ""], ["spreadsheets", "Which steps happen in spreadsheets?", ""],
  ["software", "Which steps happen in existing software?", ""], ["approvals", "Which approvals are required?", ""],
  ["delays", "Where do delays normally happen?", ""], ["mistakes", "Where do mistakes normally happen?", ""],
  ["duplicateEntry", "What information is entered more than once?", ""], ["keyPerson", "Which parts rely on one specific employee?", ""],
  ["absence", "What happens when that employee is absent?", ""], ["duration", "How long does the process usually take?", ""],
  ["volume", "How often is the process completed?", "Per day, week or month"], ["output", "What is the final output?", ""],
  ["tracking", "How is the process currently tracked?", ""], ["completion", "How do managers know it is complete?", ""]
] as const;

function blankProcess(): ProcessRecord { return { name: "", steps: "" }; }
function initialAnswers(): Answers {
  return { departments: [], departmentDetails: {}, processes: [blankProcess()], tools: [], toolDetails: {}, consent: [], painRanking: ["", "", "", "", ""] };
}
function valuePresent(value: unknown) {
  if (Array.isArray(value)) return value.length > 0 && value.some((item) => String(item).trim());
  return typeof value === "string" ? Boolean(value.trim()) : Boolean(value);
}

export function DiscoveryForm() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>(initialAnswers);
  const [ready, setReady] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "error" | "success">("idle");
  const [reference, setReference] = useState("");
  const [submissionId, setSubmissionId] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const section = discoverySections[step];

  useEffect(() => {
    const restore = window.setTimeout(() => {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
          const parsed = JSON.parse(saved) as { answers?: Answers; step?: number; submissionId?: string };
          if (parsed.answers) setAnswers({ ...initialAnswers(), ...parsed.answers });
          if (typeof parsed.step === "number") setStep(Math.min(Math.max(parsed.step, 0), discoverySections.length - 1));
          setSubmissionId(parsed.submissionId || crypto.randomUUID());
        } else {
          setSubmissionId(crypto.randomUUID());
        }
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

  const completion = Math.round(((step + 1) / discoverySections.length) * 100);
  const selectedDepartments = (answers.departments as string[]) || [];
  const selectedTools = (answers.tools as string[]) || [];

  function setValue(key: string, value: Primitive | DetailRecord | ProcessRecord[]) {
    setAnswers((current) => ({ ...current, [key]: value }));
    setErrors([]);
  }
  function toggleValue(key: string, option: string) {
    const selected = (answers[key] as string[]) || [];
    setValue(key, selected.includes(option) ? selected.filter((item) => item !== option) : [...selected, option]);
  }
  function updateDetail(group: "departmentDetails" | "toolDetails", item: string, key: string, value: string) {
    const details = (answers[group] as DetailRecord) || {};
    setValue(group, { ...details, [item]: { ...(details[item] || {}), [key]: value } });
  }
  function updateProcess(index: number, key: string, value: string) {
    const processes = [...((answers.processes as ProcessRecord[]) || [])];
    processes[index] = { ...processes[index], [key]: value };
    setValue("processes", processes);
  }
  function validateCurrent() {
    const missing = requiredKeysForSection(section).filter((key) => !valuePresent(answers[key]));
    if (section.id === 5) {
      const processes = (answers.processes as ProcessRecord[]) || [];
      if (!processes.length || processes.some((process) => !process.name?.trim() || !process.steps?.trim())) missing.push("process details");
    }
    if (section.id === 16) {
      if (((answers.consent as string[]) || []).length !== consentStatements.length) missing.push("all confirmations");
      if (String(answers.typedConfirmation || "").trim().toLowerCase() !== String(answers.fullName || "").trim().toLowerCase()) missing.push("typed full-name confirmation");
    }
    if (missing.length) {
      setErrors([`Complete the required information before continuing: ${missing.join(", ")}.`]);
      document.getElementById("discovery-errors")?.focus();
      return false;
    }
    return true;
  }
  function next() {
    if (!validateCurrent()) return;
    setStep((current) => Math.min(current + 1, discoverySections.length - 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function back() {
    setStep((current) => Math.max(current - 1, 0));
    setErrors([]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function resetDraft() {
    if (!window.confirm("Clear all saved discovery answers on this device?")) return;
    localStorage.removeItem(STORAGE_KEY);
    setAnswers(initialAnswers()); setSubmissionId(crypto.randomUUID()); setStep(0); setErrors([]); setStatus("idle");
  }
  async function submit() {
    if (!validateCurrent()) return;
    setStatus("submitting");
    try {
      const response = await fetch("/api/business-discovery", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ answers, submissionId }) });
      const payload = await response.json() as { ok?: boolean; reference?: string; error?: string };
      if (!response.ok || !payload.ok || !payload.reference) throw new Error(payload.error || "Submission failed");
      localStorage.removeItem(STORAGE_KEY);
      setReference(payload.reference); setStatus("success"); window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      setStatus("error");
      setErrors([error instanceof Error ? error.message : "We could not submit your discovery. Your answers remain saved on this device."]);
    }
  }

  const reviewGroups = useMemo(() => discoverySections.slice(0, 15).map((item) => {
    const entries: Array<readonly [string, unknown]> = item.fields
      .map((field) => [field.label, answers[field.key]] as const)
      .filter(([, value]) => valuePresent(value));
    if (item.id === 4 && valuePresent(answers.departmentDetails)) entries.push(["Department follow-up details", answers.departmentDetails]);
    if (item.id === 8 && valuePresent(answers.toolDetails)) entries.push(["Tool and system follow-up details", answers.toolDetails]);
    return { section: item, entries };
  }), [answers]);

  if (!ready) return <div className={styles.loading} aria-live="polite">Restoring your saved assessment…</div>;
  if (status === "success") return <section className={styles.success} aria-labelledby="success-title">
    <div className={styles.successIcon}><CheckCircle2 aria-hidden="true"/></div>
    <span className={styles.eyebrow}>SUBMISSION COMPLETE</span>
    <h2 id="success-title">Your Business Discovery Has Been Submitted</h2>
    <p>Thank you for giving Nuvrixa a detailed view of your business.</p>
    <p>Our team will review your processes, identify suitable automation opportunities and determine whether a prototype can be prepared for your first consultation.</p>
    <div className={styles.reference}>Reference number <strong>{reference}</strong></div>
    <ol className={styles.nextSteps}>
      <li>Nuvrixa reviews the submitted information.</li><li>We identify the highest-impact process opportunities.</li><li>We prepare a proposed workflow, system concept or prototype where practical.</li><li>We contact you regarding the next suitable step.</li>
    </ol>
    <div className={styles.successActions}><Link href="/">Return to Home</Link><Link href="/solutions">Visit Our Solutions</Link><Link href="/contact">Contact Nuvrixa</Link></div>
  </section>;

  return <div className={styles.experience}>
    <aside className={styles.rail} aria-label="Discovery sections">
      <div className={styles.railIntro}><ClipboardCheck aria-hidden="true"/><div><strong>Business Discovery</strong><span>{completion}% complete</span></div></div>
      <div className={styles.progressTrack}><span style={{ width: `${completion}%` }}/></div>
      <nav>{discoverySections.map((item, index) => <button type="button" key={item.id} className={index === step ? styles.currentStep : index < step ? styles.completedStep : ""} onClick={() => index < step || step === 15 ? setStep(index) : undefined} aria-current={index === step ? "step" : undefined} disabled={index > step && step !== 15}><i>{index < step ? <Check aria-hidden="true"/> : item.id}</i><span>{item.title}</span></button>)}</nav>
      <button type="button" className={styles.reset} onClick={resetDraft}><RotateCcw aria-hidden="true"/> Clear saved progress</button>
    </aside>

    <section className={styles.formPanel} aria-labelledby="section-title">
      <label className={styles.honeypot} aria-hidden="true">Leave this field empty<input name="websiteFax" tabIndex={-1} autoComplete="off" value={String(answers.websiteFax || "")} onChange={(event) => setValue("websiteFax", event.target.value)}/></label>
      <div className={styles.mobileProgress}><span>Section {section.id} of {discoverySections.length}</span><strong>{completion}%</strong><div><i style={{ width: `${completion}%` }}/></div></div>
      <header className={styles.sectionHeader}><div className={styles.sectionIcon}>{section.id === 4 ? <Users/> : section.id === 8 ? <Wrench/> : section.id === 13 ? <ShieldCheck/> : <Building2/>}</div><div><span className={styles.eyebrow}>SECTION {section.id} OF {discoverySections.length}</span><h2 id="section-title">{section.title}</h2><p>{section.description}</p></div></header>
      {section.id === 13 && <div className={styles.notice}><ShieldCheck aria-hidden="true"/><p>Nuvrixa does not provide legal advice. Final compliance requirements may need review by your legal, IT or compliance professionals.</p></div>}
      {section.id === 14 && <div className={styles.warning}><CircleAlert aria-hidden="true"/><p>Do not upload or enter passwords, banking credentials or highly sensitive live data.</p></div>}
      {errors.length > 0 && <div id="discovery-errors" className={styles.error} role="alert" tabIndex={-1}><CircleAlert aria-hidden="true"/><span>{errors[0]}</span></div>}

      {section.id === 16 ? <Review groups={reviewGroups} onEdit={setStep}/> : <div className={styles.fields}>{section.fields.map((field) => <Field key={field.key} field={field} answers={answers} setValue={setValue} toggleValue={toggleValue} selectedDepartments={selectedDepartments} selectedTools={selectedTools} updateDetail={updateDetail} updateProcess={updateProcess}/>)}</div>}

      <footer className={styles.formActions}>
        <div className={styles.saveState}><Save aria-hidden="true"/><span>Progress is saved privately on this device.</span></div>
        <div>{step > 0 && <button type="button" className={styles.back} onClick={back}><ArrowLeft aria-hidden="true"/> Back</button>}{step < discoverySections.length - 1 ? <button type="button" className={styles.continue} onClick={next}>Continue <ArrowRight aria-hidden="true"/></button> : <button type="button" className={styles.submit} disabled={status === "submitting"} onClick={submit}>{status === "submitting" ? "Submitting securely…" : "Submit Business Discovery"} <CheckCircle2 aria-hidden="true"/></button>}</div>
      </footer>
    </section>
  </div>;
}

type FieldProps = {
  field: DiscoveryField; answers: Answers;
  setValue: (key: string, value: Primitive | DetailRecord | ProcessRecord[]) => void;
  toggleValue: (key: string, option: string) => void;
  selectedDepartments: string[]; selectedTools: string[];
  updateDetail: (group: "departmentDetails" | "toolDetails", item: string, key: string, value: string) => void;
  updateProcess: (index: number, key: string, value: string) => void;
};

function Field({ field, answers, setValue, toggleValue, selectedDepartments, selectedTools, updateDetail, updateProcess }: FieldProps) {
  const value = (answers[field.key] as string) || "";
  const label = <span className={styles.labelText}>{field.label}{field.required && <b aria-label="required">Required</b>}{field.helper && <small>{field.helper}</small>}</span>;
  if (field.type === "multiselect") return <fieldset className={styles.full}><legend>{label}</legend><div className={styles.choiceGrid}>{field.options?.map((option) => { const active = ((answers[field.key] as string[]) || []).includes(option); return <button type="button" aria-pressed={active} className={active ? styles.choiceActive : ""} onClick={() => toggleValue(field.key, option)} key={option}><span>{active && <Check aria-hidden="true"/>}</span>{option}</button>; })}</div></fieldset>;
  if (field.type === "departments") return <fieldset className={styles.full}><legend>{label}</legend><div className={styles.choiceGrid}>{departmentOptions.map((option) => { const active = selectedDepartments.includes(option); return <button type="button" aria-pressed={active} className={active ? styles.choiceActive : ""} onClick={() => toggleValue("departments", option)} key={option}><span>{active && <Check aria-hidden="true"/>}</span>{option}</button>; })}</div><div className={styles.detailStack}>{selectedDepartments.map((department) => <div className={styles.detailCard} key={department}><h3><Users aria-hidden="true"/>{department}</h3><div className={styles.compactGrid}>{departmentQuestions.map(([key, question]) => <label key={key}><span>{question}</span>{["responsibilities","challenge","manualTasks","documents","software"].includes(key) ? <textarea value={((answers.departmentDetails as DetailRecord)?.[department]?.[key]) || ""} onChange={(event) => updateDetail("departmentDetails", department, key, event.target.value)}/> : <input value={((answers.departmentDetails as DetailRecord)?.[department]?.[key]) || ""} onChange={(event) => updateDetail("departmentDetails", department, key, event.target.value)}/>}</label>)}</div></div>)}</div></fieldset>;
  if (field.type === "tools") return <fieldset className={styles.full}><legend>{label}</legend><div className={styles.choiceGrid}>{toolOptions.map((option) => { const active = selectedTools.includes(option); return <button type="button" aria-pressed={active} className={active ? styles.choiceActive : ""} onClick={() => toggleValue("tools", option)} key={option}><span>{active && <Check aria-hidden="true"/>}</span>{option}</button>; })}</div><div className={styles.detailStack}>{selectedTools.filter((tool) => tool !== "None").map((tool) => <div className={styles.detailCard} key={tool}><h3><Wrench aria-hidden="true"/>{tool}</h3><div className={styles.compactGrid}>{toolQuestions.map(([key, question]) => <label key={key}><span>{question}</span><input value={((answers.toolDetails as DetailRecord)?.[tool]?.[key]) || ""} onChange={(event) => updateDetail("toolDetails", tool, key, event.target.value)}/></label>)}</div></div>)}</div></fieldset>;
  if (field.type === "processes") {
    const processes = (answers.processes as ProcessRecord[]) || [blankProcess()];
    return <fieldset className={styles.full}><legend>{label}</legend><div className={styles.detailStack}>{processes.map((process, index) => <div className={styles.processCard} key={index}><div className={styles.cardHeading}><h3>Process {index + 1}{process.name ? `: ${process.name}` : ""}</h3>{processes.length > 1 && <button type="button" aria-label={`Remove process ${index + 1}`} onClick={() => setValue("processes", processes.filter((_, processIndex) => processIndex !== index))}><Trash2 aria-hidden="true"/></button>}</div><div className={styles.compactGrid}>{processQuestions.map(([key, question, placeholder]) => <label className={["steps","people","paper","email","whatsapp","spreadsheets","software","approvals","delays","mistakes","duplicateEntry","keyPerson","absence","output","tracking","completion"].includes(key) ? styles.wide : ""} key={key}><span>{question}{["name","steps"].includes(key) && <b aria-label="required">Required</b>}</span>{["steps","people","paper","email","whatsapp","spreadsheets","software","approvals","delays","mistakes","duplicateEntry","keyPerson","absence","output","tracking","completion"].includes(key) ? <textarea placeholder={placeholder} value={process[key] || ""} onChange={(event) => updateProcess(index, key, event.target.value)}/> : <input placeholder={placeholder} value={process[key] || ""} onChange={(event) => updateProcess(index, key, event.target.value)}/>}</label>)}</div></div>)}</div><button type="button" className={styles.addButton} onClick={() => setValue("processes", [...processes, blankProcess()])}><Plus aria-hidden="true"/> Add another process</button></fieldset>;
  }
  if (field.type === "ranking") {
    const ranking = (answers[field.key] as string[]) || ["", "", "", "", ""];
    return <fieldset className={styles.full}><legend>{label}</legend><div className={styles.ranking}>{ranking.map((item, index) => <label key={index}><i>{index + 1}</i><span className={styles.srOnly}>Pain point rank {index + 1}</span><input value={item} placeholder={`Priority ${index + 1}`} onChange={(event) => { const next = [...ranking]; next[index] = event.target.value; setValue(field.key, next); }}/></label>)}</div></fieldset>;
  }
  if (field.type === "uploads") return <div className={`${styles.full} ${styles.uploadPanel}`}><div><FileLock2 aria-hidden="true"/><h3>Secure supporting files</h3><p>Sample forms, screenshots, spreadsheets, SOPs, reports, invoices, quotations, workflow diagrams and photos of paper registers can be attached once secure file storage is configured.</p></div><label className={styles.disabledUpload}><FileUp aria-hidden="true"/><span>File upload is not connected yet</span><small>Your assessment can still be submitted without files. Nuvrixa will request examples securely using your reference number.</small><input type="file" multiple disabled aria-describedby="upload-status"/></label><p id="upload-status" className={styles.uploadStatus}>No files will be transmitted from this control until the documented secure storage integration is enabled.</p></div>;
  if (field.type === "consent") {
    const accepted = (answers.consent as string[]) || [];
    return <div className={styles.full}><fieldset className={styles.consent}><legend>{label}</legend>{consentStatements.map((statement, index) => <label key={statement}><input type="checkbox" checked={accepted.includes(String(index))} onChange={() => toggleValue("consent", String(index))}/><span>{index === 5 ? <>I agree to the Nuvrixa <Link href="/privacy-policy">Privacy Policy</Link>.</> : statement}</span></label>)}</fieldset><label className={styles.confirmName}><span className={styles.labelText}>Type your full name to confirm<b aria-label="required">Required</b></span><input value={String(answers.typedConfirmation || "")} onChange={(event) => setValue("typedConfirmation", event.target.value)} autoComplete="name"/></label></div>;
  }
  const common = { id: field.key, name: field.key, value, required: field.required, placeholder: field.placeholder, onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setValue(field.key, event.target.value) };
  if (field.type === "textarea") return <label className={styles.wide}>{label}<textarea {...common}/></label>;
  if (field.type === "select" || field.type === "yesno") return <label>{label}<select {...common}><option value="">Select an option</option>{field.options?.map((option) => <option key={option}>{option}</option>)}</select></label>;
  return <label>{label}<input {...common} type={field.type}/></label>;
}

function Review({ groups, onEdit }: { groups: Array<{ section: (typeof discoverySections)[number]; entries: ReadonlyArray<readonly [string, unknown]> }>; onEdit: (index: number) => void }) {
  return <div className={styles.review}><div className={styles.notice}><ClipboardCheck aria-hidden="true"/><p>Review your answers before submitting. Use Edit section to make changes; your draft remains saved.</p></div>{groups.map(({ section, entries }, index) => <section key={section.id}><header><div><span>Section {section.id}</span><h3>{section.title}</h3></div><button type="button" onClick={() => onEdit(index)}>Edit section <ChevronRight aria-hidden="true"/></button></header>{entries.length ? <dl>{entries.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{formatReviewValue(value)}</dd></div>)}</dl> : <p className={styles.empty}>No optional information supplied.</p>}</section>)}</div>;
}

function formatReviewValue(value: unknown): string {
  if (Array.isArray(value)) {
    if (value.every((item) => typeof item === "string")) return value.filter(Boolean).join(", ");
    return value.map((item, index) => `Item ${index + 1}: ${formatReviewValue(item)}`).join(" | ");
  }
  if (value && typeof value === "object") return Object.entries(value as Record<string, unknown>).map(([key, item]) => `${key}: ${formatReviewValue(item)}`).join("; ");
  return String(value || "Not supplied");
}
