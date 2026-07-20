type BrandLogoProps = { className?: string; compact?: boolean; showWordmark?: boolean };

export function BrandLogo({ className, compact = false, showWordmark = true }: BrandLogoProps) {
  return <span className={className} aria-label="Nuvrixa">
    <svg width={compact ? 22 : 50} height={compact ? 24 : 54} viewBox="0 0 100 108" role="img" aria-hidden="true">
      <defs>
        <linearGradient id="nuvrixa-a" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#08d7f5"/><stop offset=".48" stopColor="#4f16e5"/><stop offset="1" stopColor="#1c3aed"/></linearGradient>
        <linearGradient id="nuvrixa-b" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#23d9f6"/><stop offset=".5" stopColor="#4777ff"/><stop offset="1" stopColor="#9b28f5"/></linearGradient>
      </defs>
      <path d="M10 92V13l18 18v43L10 92Z" fill="url(#nuvrixa-a)"/>
      <path d="M10 13h20l49 58v25H62L10 35V13Z" fill="url(#nuvrixa-b)"/>
      <path d="M28 31 46 52 28 74V31Z" fill="#117be9" opacity=".8"/>
      <path d="M62 71 80 92V57" fill="none" stroke="#8c29f0" strokeWidth="5" strokeLinecap="round"/>
      <g fill="none" strokeLinecap="round" strokeWidth="2.7">
        <path d="M75 75V47l9-9V20" stroke="#4f16e5"/><path d="M81 82V59l10-10V35" stroke="#6c29ef"/><path d="M69 69V40l8-8V9" stroke="#0886d4"/><path d="M86 85V69l8-8" stroke="#8f2bed"/>
      </g>
      <g fill="#08bfe9"><circle cx="84" cy="17" r="4"/><circle cx="77" cy="7" r="4"/><circle cx="91" cy="32" r="4"/></g><circle cx="95" cy="59" r="4" fill="#7d35ed"/>
    </svg>
    {showWordmark ? <b>NUVRIXA</b> : null}
  </span>;
}
