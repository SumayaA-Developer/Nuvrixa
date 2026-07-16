"use client";

import { FormEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import { CalBookingPanel } from "@/components/conversion/cal-booking-panel";
import { HubSpotAuditForm } from "@/components/conversion/hubspot-audit-form";
import { cn } from "@/lib/utils";
import { hasCalBooking, hasHubSpotAuditForm, integrationsConfig } from "@/lib/integrations";
import { siteConfig } from "@/lib/site";

type AuditRequest = {
  name: string;
  email: string;
  company: string;
  role: string;
  teamSize: string;
  bottleneck: string;
  tools: string;
  timeline: string;
  outcome: string;
};

const initialRequest: AuditRequest = {
  name: "",
  email: "",
  company: "",
  role: "",
  teamSize: "",
  bottleneck: "",
  tools: "",
  timeline: "",
  outcome: "",
};

const buttonVariants = {
  primary:
    "bg-cyan-300 text-slate-950 shadow-[0_0_35px_rgba(34,211,238,0.28)] hover:-translate-y-0.5 hover:bg-cyan-200 hover:shadow-[0_0_55px_rgba(34,211,238,0.38)]",
  secondary:
    "border border-white/15 bg-white/[0.04] text-white hover:-translate-y-0.5 hover:border-cyan-200/45 hover:bg-cyan-300/10",
  dark: "border border-slate-950/20 bg-slate-950 text-white hover:-translate-y-0.5 hover:bg-slate-900",
};

const fields: Array<{
  id: keyof AuditRequest;
  label: string;
  placeholder: string;
  type?: "text" | "email";
  required?: boolean;
}> = [
  { id: "name", label: "Name", placeholder: "Your name", required: true },
  { id: "email", label: "Email", placeholder: "you@company.com", type: "email", required: true },
  { id: "company", label: "Company", placeholder: "Company name", required: true },
  { id: "role", label: "Role", placeholder: "Founder, Ops Lead, Director..." },
  { id: "teamSize", label: "Team size", placeholder: "1-5, 6-20, 21-50..." },
  { id: "timeline", label: "Timeline", placeholder: "This month, this quarter..." },
];

function buildEmailBody(request: AuditRequest) {
  return [
    "Nuvrixa AI Systems Audit Request",
    "",
    `Name: ${request.name}`,
    `Email: ${request.email}`,
    `Company: ${request.company}`,
    `Role: ${request.role || "Not provided"}`,
    `Team size: ${request.teamSize || "Not provided"}`,
    `Timeline: ${request.timeline || "Not provided"}`,
    "",
    "Primary bottleneck:",
    request.bottleneck || "Not provided",
    "",
    "Current tools:",
    request.tools || "Not provided",
    "",
    "Desired outcome:",
    request.outcome || "Not provided",
  ].join("\n");
}

function auditMailto(request: AuditRequest) {
  const subject = encodeURIComponent(`Nuvrixa AI Systems Audit - ${request.company || request.name || "New request"}`);
  const body = encodeURIComponent(buildEmailBody(request));
  return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
}

export function AuditRequestButton({
  children = "Book AI Systems Audit",
  className,
  variant = "primary",
}: {
  children?: ReactNode;
  className?: string;
  variant?: keyof typeof buttonVariants;
}) {
  return (
    <button
      type="button"
      className={cn(
        "focus-ring inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300",
        buttonVariants[variant],
        className,
      )}
      onClick={() => window.dispatchEvent(new Event("nuvrixa:open-audit-request"))}
    >
      {children}
    </button>
  );
}

export function AuditRequestModal() {
  const [open, setOpen] = useState(false);
  const [request, setRequest] = useState<AuditRequest>(initialRequest);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const body = useMemo(() => buildEmailBody(request), [request]);
  const mailto = useMemo(() => auditMailto(request), [request]);
  const markSubmitted = useCallback(() => setSubmitted(true), []);

  useEffect(() => {
    const openModal = () => setOpen(true);
    window.addEventListener("nuvrixa:open-audit-request", openModal);
    return () => window.removeEventListener("nuvrixa:open-audit-request", openModal);
  }, []);

  useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  function updateField(field: keyof AuditRequest, value: string) {
    setRequest((current) => ({ ...current, [field]: value }));
  }

  function submitRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    window.location.href = mailto;
  }

  async function copyRequest() {
    try {
      await navigator.clipboard.writeText(body);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-slate-950/82 px-4 py-6 backdrop-blur-xl sm:py-10">
      <button
        type="button"
        className="absolute inset-0 h-full w-full cursor-default"
        aria-label="Close audit request"
        tabIndex={-1}
        onClick={() => setOpen(false)}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="audit-request-title"
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] border border-cyan-300/20 bg-slate-950 shadow-[0_0_120px_rgba(34,211,238,0.16)]"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(34,211,238,0.18),transparent_26rem),radial-gradient(circle_at_90%_16%,rgba(124,58,237,0.18),transparent_28rem)]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(34,211,238,0.045)_1px,transparent_1px),linear-gradient(rgba(124,58,237,0.045)_1px,transparent_1px)] bg-[size:64px_64px] opacity-60" />

        <div className="relative grid gap-0 lg:grid-cols-[0.82fr_1.18fr]">
          <aside className="border-b border-white/10 p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 via-blue-500 to-cyan-300 text-lg font-black tracking-[-0.08em] text-white shadow-[0_0_30px_rgba(34,211,238,0.3)]">
                  N
                </span>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">Nuvrixa intake</p>
                  <p className="text-sm text-slate-400">AI systems audit</p>
                </div>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-xl text-slate-200 transition hover:border-cyan-300/40 hover:text-white"
                aria-label="Close"
                onClick={() => setOpen(false)}
              >
                X
              </button>
            </div>

            <h2 id="audit-request-title" className="mt-10 text-4xl font-semibold tracking-[-0.045em] text-white sm:text-5xl">
              Turn your workflow notes into an audit-ready brief.
            </h2>
            <p className="mt-5 leading-8 text-slate-300">
              Share the bottleneck, the tools involved and the outcome you want. Nuvrixa will use this to frame the first systems conversation.
            </p>

            <div className="mt-8 grid gap-3">
              {["Workflow bottlenecks", "Current tool stack", "Priority outcome", "Build-readiness signal"].map((item, index) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm text-slate-200">{item}</span>
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-300/10 text-xs font-semibold text-cyan-100">
                      0{index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          <form onSubmit={submitRequest} className="p-6 sm:p-8 lg:p-10">
            <div className="mb-6 grid gap-3 sm:grid-cols-3">
              {[
                ["HubSpot", hasHubSpotAuditForm ? "Form connected" : "Needs form ID"],
                ["Cal.com", hasCalBooking ? "Booking connected" : "Needs booking URL"],
                ["Google", integrationsConfig.googleDriveUrl ? "Drive linked" : "Drive optional"],
              ].map(([name, status]) => (
                <div key={name} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{name}</p>
                  <p className="mt-2 text-sm font-semibold text-white">{status}</p>
                </div>
              ))}
            </div>

            <div className="mb-6">
              <HubSpotAuditForm onSubmitted={markSubmitted} />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {fields.map((field) => (
                <label key={field.id} className="block">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">{field.label}</span>
                  <input
                    required={field.required}
                    type={field.type || "text"}
                    value={request[field.id]}
                    onChange={(event) => updateField(field.id, event.target.value)}
                    placeholder={field.placeholder}
                    className="focus-ring mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 hover:border-cyan-300/30"
                  />
                </label>
              ))}
            </div>

            <label className="mt-4 block">
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Primary bottleneck</span>
              <textarea
                required
                value={request.bottleneck}
                onChange={(event) => updateField("bottleneck", event.target.value)}
                placeholder="Where is work getting stuck, repeated, delayed or hidden?"
                rows={4}
                className="focus-ring mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 hover:border-cyan-300/30"
              />
            </label>

            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Current tools</span>
                <textarea
                  value={request.tools}
                  onChange={(event) => updateField("tools", event.target.value)}
                  placeholder="CRM, forms, email, sheets, WhatsApp, Slack..."
                  rows={4}
                  className="focus-ring mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 hover:border-cyan-300/30"
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">Desired outcome</span>
                <textarea
                  value={request.outcome}
                  onChange={(event) => updateField("outcome", event.target.value)}
                  placeholder="What should feel clearer, faster or more controlled after Nuvrixa?"
                  rows={4}
                  className="focus-ring mt-2 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-slate-600 hover:border-cyan-300/30"
                />
              </label>
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-cyan-300/15 bg-cyan-300/[0.06] p-4">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">Launch-safe fallback</p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    This prepares an email to Nuvrixa if HubSpot or Cal.com details are not live yet.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={copyRequest}
                  className="focus-ring rounded-full border border-cyan-300/25 px-4 py-2 text-sm font-semibold text-cyan-100 transition hover:bg-cyan-300/10"
                >
                  {copied ? "Copied" : "Copy brief"}
                </button>
              </div>
            </div>

            {submitted ? (
              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-emerald-300/25 bg-emerald-300/10 p-4 text-sm leading-6 text-emerald-100">
                  Your audit request is prepared. If HubSpot is connected, the CRM record is created there; otherwise send the prepared email draft to complete the request.
                </div>
                <CalBookingPanel />
              </div>
            ) : null}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200"
              >
                Prepare Audit Request
              </button>
              <a
                href={mailto}
                className="focus-ring inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-200/45 hover:bg-cyan-300/10"
              >
                Open Email Draft
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
