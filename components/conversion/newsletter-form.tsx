"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  async function subscribe(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") || "");
    const consent = data.get("consent") === "on";
    try {
      const response = await fetch("/api/newsletter", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, consent }) });
      if (!response.ok) throw new Error();
      form.reset();
      setStatus("sent");
    } catch { setStatus("error"); }
  }
  return <div>
    <form onSubmit={subscribe} style={{height:"auto",display:"block",overflow:"visible",border:0,background:"transparent"}}>
      <div style={{height:48,display:"flex",border:"1px solid #07548a",borderRadius:11,overflow:"hidden"}}><label htmlFor="global-footer-email">Email address</label><input id="global-footer-email" name="email" type="email" required autoComplete="email" placeholder="Enter your email"/><button type="submit" disabled={status === "sending"} aria-label="Subscribe">{status === "sending" ? "…" : "→"}</button></div>
      <label style={{position:"static",width:"auto",height:"auto",overflow:"visible",display:"flex",gap:8,alignItems:"flex-start",marginTop:10,fontSize:11,lineHeight:1.4,color:"#9da7b6"}}><input name="consent" type="checkbox" required style={{marginTop:2}}/>I agree to receive Nuvrixa updates and accept the <a href="/privacy-policy" style={{color:"#22d3ee"}}>Privacy Policy</a>.</label>
    </form>
    <span aria-live="polite">{status === "sent" ? "You’re subscribed." : status === "error" ? "Signup is unavailable. Please try again later." : ""}</span>
  </div>;
}
