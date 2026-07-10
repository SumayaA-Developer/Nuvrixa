"use client";

import { useEffect, useId, useState } from "react";
import { integrationsConfig } from "@/lib/integrations";

type HubSpotFormsCreateOptions = {
  region: string;
  portalId: string;
  formId: string;
  target: string;
  onFormSubmitted?: () => void;
};

declare global {
  interface Window {
    hbspt?: {
      forms?: {
        create: (options: HubSpotFormsCreateOptions) => void;
      };
    };
  }
}

let hubSpotScriptPromise: Promise<void> | null = null;

function loadHubSpotFormsScript() {
  if (typeof window === "undefined") {
    return Promise.resolve();
  }

  if (window.hbspt?.forms) {
    return Promise.resolve();
  }

  if (!hubSpotScriptPromise) {
    hubSpotScriptPromise = new Promise((resolve, reject) => {
      const existingScript = document.querySelector<HTMLScriptElement>('script[src="//js.hsforms.net/forms/embed/v2.js"]');

      if (existingScript) {
        existingScript.addEventListener("load", () => resolve(), { once: true });
        existingScript.addEventListener("error", () => reject(new Error("HubSpot forms script failed to load.")), { once: true });
        return;
      }

      const script = document.createElement("script");
      script.src = "//js.hsforms.net/forms/embed/v2.js";
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("HubSpot forms script failed to load."));
      document.head.appendChild(script);
    });
  }

  return hubSpotScriptPromise;
}

export function HubSpotAuditForm({ onSubmitted }: { onSubmitted: () => void }) {
  const rawId = useId();
  const targetId = `hubspot-audit-form-${rawId.replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">(
    integrationsConfig.hubSpotAuditFormId ? "loading" : "idle",
  );

  useEffect(() => {
    if (!integrationsConfig.hubSpotAuditFormId) {
      return;
    }

    let cancelled = false;

    loadHubSpotFormsScript()
      .then(() => {
        if (cancelled) {
          return;
        }

        window.hbspt?.forms?.create({
          region: integrationsConfig.hubSpotRegion,
          portalId: integrationsConfig.hubSpotPortalId,
          formId: integrationsConfig.hubSpotAuditFormId,
          target: `#${targetId}`,
          onFormSubmitted: onSubmitted,
        });
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) {
          setStatus("error");
        }
      });

    return () => {
      cancelled = true;
    };
  }, [onSubmitted, targetId]);

  if (!integrationsConfig.hubSpotAuditFormId) {
    return (
      <div className="rounded-[1.5rem] border border-amber-300/25 bg-amber-300/10 p-5">
        <p className="text-sm font-semibold text-amber-100">HubSpot form not selected yet</p>
        <p className="mt-2 text-sm leading-6 text-amber-50/80">
          Add your HubSpot audit form ID as <span className="font-mono">NEXT_PUBLIC_HUBSPOT_AUDIT_FORM_ID</span> to send submissions directly into HubSpot.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-[1.5rem] border border-cyan-300/20 bg-white/[0.035] p-5">
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">HubSpot audit form</p>
          <p className="mt-1 text-xs text-slate-400">Portal {integrationsConfig.hubSpotPortalId} · Region {integrationsConfig.hubSpotRegion}</p>
        </div>
        <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">
          {status === "ready" ? "Connected" : status === "error" ? "Fallback active" : "Loading"}
        </span>
      </div>
      {status === "error" ? (
        <p className="text-sm leading-6 text-red-100">
          HubSpot could not load in this browser session. Use the email fallback below, then check that the form ID is published in HubSpot.
        </p>
      ) : null}
      <div id={targetId} className="hubspot-form-shell min-h-24" />
    </div>
  );
}
