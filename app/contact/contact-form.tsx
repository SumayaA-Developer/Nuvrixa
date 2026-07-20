"use client";

import { useState } from "react";
import styles from "./contact.module.css";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const body = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      if (!response.ok) throw new Error();
      setStatus("sent");
      form.reset();
    } catch { setStatus("error"); }
  }
  return <form className={styles.form} onSubmit={submit}>
    <div className={styles.formTitle}><i>▰</i><div><h2>Send Us a Message</h2><p>Fill in the form below and we’ll respond within 1 business day.</p></div></div>
    <div className={styles.fields}>
      <label>Full Name *<input name="firstname" required placeholder="e.g. John Smith"/></label>
      <label>Company Name *<input name="company" required placeholder="e.g. Acme Solutions"/></label>
      <label>Work Email *<input type="email" name="email" required placeholder="e.g. john@company.com"/></label>
      <label>Job Title<input name="jobtitle" placeholder="e.g. Operations Manager"/></label>
    </div>
    <label>What best describes your business? *<select name="industry" required defaultValue=""><option value="" disabled>Select your industry</option><option>Professional Services</option><option>Property Management</option><option>Retail &amp; E-commerce</option><option>Training &amp; Education</option><option>Healthcare</option><option>Other</option></select></label>
    <label>How can we help you? *<select name="inquiry_type" required defaultValue=""><option value="" disabled>Select an option</option><option>Automation Opportunity</option><option>Service Inquiry</option><option>Partnership</option><option>Support</option><option>Other</option></select></label>
    <label>Subject *<input name="subject" required placeholder="e.g. Automation Opportunity, Service Inquiry, Partnership, Other"/></label>
    <label>Tell us more about your question or project<textarea name="message" required placeholder="Provide as much detail as possible so we can assist you better..."/></label>
    <label>What is your expected timeline? *</label>
    <div className={styles.radios}>{["Within 1 Month","1 – 3 Months","3 – 6 Months","6+ Months","Not Sure"].map(value=><label key={value}><input type="radio" name="timeline" required value={value}/>{value}</label>)}</div>
    <label>Estimated Budget (USD, Optional)<select name="budget" defaultValue=""><option value="">Select a range</option><option>Under $2,500 USD</option><option>$2,500–$5,000 USD</option><option>$5,000–$10,000 USD</option><option>$10,000–$25,000 USD</option><option>$25,000+ USD</option></select></label>
    <label className={styles.consent}><input type="checkbox" required/>I agree to Nuvrixa’s <a href="/privacy-policy">Privacy Policy</a> and <a href="/terms">Terms &amp; Conditions.</a></label>
    {status === "sent" && <div className={styles.success}>Thank you. Your message has been sent to our team.</div>}
    {status === "error" && <div className={styles.error}>We couldn’t send your message. Please email hello@nuvrixa.co.za.</div>}
    <div className={styles.submit}><button disabled={status === "sending"}>{status === "sending" ? "Sending..." : "Send Message　→"}</button><span>♙　Your information is secure and<br/>　　will never be shared.</span></div>
  </form>;
}
