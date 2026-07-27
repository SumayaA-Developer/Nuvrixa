import type { Metadata } from "next";
import Link from "next/link";
import { Clock3, LockKeyhole, Menu, Sparkles } from "lucide-react";
import { BrandLogo } from "@/components/brand/brand-logo";
import { ReferralForm } from "./referral-form";
import styles from "./referral.module.css";

export const metadata: Metadata = {
  title: "Referral Business Discovery",
  description: "Private Nuvrixa discovery questionnaire for referred businesses, used to prepare a tailored prototype before the first meeting.",
  robots: { index: false, follow: false },
};

const navigation = [["Home", "/"], ["Solutions", "/solutions"], ["Services", "/services"], ["Process", "/process"], ["Results", "/results"], ["Contact", "/contact"]] as const;

export default function ReferralDiscoveryPage() {
  return <main className={styles.page}>
    <header className={styles.siteHeader}>
      <Link href="/" aria-label="Nuvrixa home"><BrandLogo className={styles.logo}/></Link>
      <nav aria-label="Primary navigation">{navigation.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
      <Link className={styles.headerCta} href="/audit">Book Free Audit</Link>
      <details className={styles.mobileMenu}><summary aria-label="Open navigation"><Menu/></summary><div>{navigation.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div></details>
    </header>
    <section className={styles.hero}>
      <span className={styles.eyebrow}>PRIVATE REFERRAL DISCOVERY</span>
      <h1>Tell us how the business works.<br/><em>See a solution before we meet.</em></h1>
      <p className={styles.lead}>This private questionnaire gives Nuvrixa enough context to research your operation, map the priority process and prepare a practical prototype for the first meeting.</p>
      <div className={styles.heroMeta}>
        <span><Clock3/><b>12–18 minutes</b><small>Progress saves on this device</small></span>
        <span><Sparkles/><b>Prototype-led meeting</b><small>Designed around your priority workflow</small></span>
        <span><LockKeyhole/><b>Private and secure</b><small>Shared only with the Nuvrixa team</small></span>
      </div>
    </section>
    <ReferralForm/>
  </main>;
}

