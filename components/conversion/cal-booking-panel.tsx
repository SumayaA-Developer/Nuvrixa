"use client";

import { integrationsConfig } from "@/lib/integrations";

export function CalBookingPanel() {
  if (!integrationsConfig.calBookingUrl) {
    return (
      <div className="rounded-[1.5rem] border border-violet-300/20 bg-violet-300/10 p-5">
        <p className="text-sm font-semibold text-violet-100">Cal.com booking link pending</p>
        <p className="mt-2 text-sm leading-6 text-violet-50/80">
          Add <span className="font-mono">NEXT_PUBLIC_CAL_BOOKING_URL</span> to show the live booking action after an audit request.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-[1.5rem] border border-cyan-300/20 bg-cyan-300/[0.06] p-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-white">Next step: book the audit call</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Pick a time through Cal.com so the HubSpot record and calendar workflow can stay aligned.
          </p>
        </div>
        <a
          href={integrationsConfig.calBookingUrl}
          target="_blank"
          rel="noreferrer"
          className="focus-ring inline-flex shrink-0 items-center justify-center rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-200"
        >
          Open Cal.com
        </a>
      </div>
    </div>
  );
}
