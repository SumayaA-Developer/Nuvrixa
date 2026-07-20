"use client";

import { useState } from "react";
import { integrationsConfig } from "@/lib/integrations";
import styles from "./audit.module.css";

export function AuditForm(){
 const [status,setStatus]=useState<"idle"|"saving"|"error">("idle");
 async function submit(e:React.FormEvent<HTMLFormElement>){
  e.preventDefault(); setStatus("saving");
  const form=new FormData(e.currentTarget); const entries:Record<string,FormDataEntryValue|FormDataEntryValue[]>=Object.fromEntries(form.entries());
  entries.improvement_areas=form.getAll("improvement_areas");
  try{
   const response=await fetch("/api/audit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(entries)});
   if(!response.ok) throw new Error("HubSpot submission failed");
   const cal=new URL(integrationsConfig.calBookingUrl); if(entries.email) cal.searchParams.set("email",String(entries.email)); if(entries.firstname) cal.searchParams.set("name",`${entries.firstname} ${entries.lastname||""}`.trim()); window.location.href=cal.toString();
  }catch{setStatus("error")}
 }
 return <form className={styles.form} onSubmit={submit}>
  <h2>Tell Us About Your Business</h2><p>This helps us understand your needs and prepare for a productive session.</p>
  <div className={styles.steps}>{["Your Business","Your Needs","Challenges","Contact Details"].map((x,i)=><div key={x}><i>{i+1}</i><span>{x}</span></div>)}</div>
  <h3>1. YOUR BUSINESS</h3><div className={styles.fields}>
   <label>Company Name *<input name="company" required placeholder="e.g. Acme Solutions"/></label><label>Website (Optional)<input name="website" placeholder="e.g. www.acmesolutions.com"/></label>
   <label>Industry *<select name="industry" required defaultValue=""><option value="" disabled>Select your industry</option><option>Professional Services</option><option>Property Management</option><option>Retail</option><option>Healthcare</option><option>Education</option><option>Other</option></select></label><label>Company Size *<select name="numberofemployees" required defaultValue=""><option value="" disabled>Select company size</option><option value="1-10">1–10</option><option value="11-50">11–50</option><option value="51-200">51–200</option><option value="201+">201+</option></select><small>This helps us understand the scope and complexity of your operations.</small></label>
   <label>Where are you based? *<select name="country" required defaultValue=""><option value="" disabled>Select your country</option><option>South Africa</option><option>United Kingdom</option><option>United States</option><option>Other</option></select></label><label>What best describes your role? *<select name="jobtitle" required defaultValue=""><option value="" disabled>Select your role</option><option>Founder / Owner</option><option>Director</option><option>Operations</option><option>Marketing / Sales</option><option>Other</option></select></label>
  </div>
  <h3>2. YOUR NEEDS</h3><label>What are you looking to achieve with automation? *<textarea name="automation_goal" required placeholder="e.g. Save time, reduce costs, improve customer experience, scale operations..."/></label>
  <label>Which areas of your business are you looking to improve? (Select all that apply) *</label><div className={styles.checks}>{["Operations","Sales & Marketing","Finance & Accounting","Customer Service","HR & Recruitment","IT & Systems","Reporting & Analytics","Other"].map(x=><label key={x}><input type="checkbox" name="improvement_areas" value={x}/>{x}</label>)}</div>
  <label>What tools & systems are you currently using? (Optional)<textarea name="current_tools" placeholder="e.g. HubSpot, Zoho, QuickBooks, Excel, Slack, etc."/></label>
  <h3>3. CHALLENGES</h3><div className={styles.fields}><label>Biggest operational challenge *<input name="biggest_challenge" required placeholder="What slows your team down?"/></label><label>Desired timeframe *<select name="timeframe" required defaultValue=""><option value="" disabled>Select timeframe</option><option>Immediately</option><option>Within 3 months</option><option>Within 6 months</option><option>Exploring options</option></select></label><label>Estimated Budget (USD, Optional)<select name="budget" defaultValue=""><option value="">Select a range</option><option>Under $2,500 USD</option><option>$2,500–$5,000 USD</option><option>$5,000–$10,000 USD</option><option>$10,000–$25,000 USD</option><option>$25,000+ USD</option></select></label></div>
  <h3>4. CONTACT DETAILS</h3><div className={styles.fields}><label>First Name *<input name="firstname" required/></label><label>Last Name *<input name="lastname" required/></label><label>Email Address *<input name="email" type="email" required/></label><label>Phone Number *<input name="phone" type="tel" required/></label></div>
  {status==="error"&&<div className={styles.error}>We couldn’t save your details. Please try again.</div>}
  <div className={styles.submit}><button disabled={status==="saving"}>{status==="saving"?"Saving...":"Save & Continue　→"}</button><span>Takes less than 2 minutes</span></div>
 </form>
}
