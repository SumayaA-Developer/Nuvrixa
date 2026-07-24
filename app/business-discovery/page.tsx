import type { Metadata } from "next";
import Link from "next/link";
import { Clock3, LockKeyhole, Menu } from "lucide-react";
import { BrandLogo } from "@/components/brand/brand-logo";
import { DiscoveryForm } from "./discovery-form";
import styles from "./discovery.module.css";

export const metadata: Metadata = {
  title: "Business Discovery",
  description: "Complete Nuvrixa's private business discovery assessment so we can prepare a tailored automation workflow or prototype.",
};

const navigation = [["Home", "/"], ["Solutions", "/solutions"], ["Services", "/services"], ["Process", "/process"], ["Results", "/results"], ["Contact", "/contact"]] as const;

export default function BusinessDiscoveryPage() {
  return <main className={styles.page}>
    <header className={styles.siteHeader}>
      <Link href="/" aria-label="Nuvrixa home"><BrandLogo className={styles.logo}/></Link>
      <nav aria-label="Primary navigation">{navigation.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav>
      <Link className={styles.headerCta} href="/audit">Book Free Audit</Link>
      <details className={styles.mobileMenu}><summary aria-label="Open navigation"><Menu aria-hidden="true"/></summary><div>{navigation.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div></details>
    </header>

    <section className={styles.hero} aria-labelledby="discovery-title">
      <span className={styles.eyebrow}>NUVRIXA BUSINESS DISCOVERY</span>
      <h1 id="discovery-title">Understand the business.<br/><em>Design the right system.</em></h1>
      <p className={styles.lead}>Help us understand how your business operates so we can prepare a tailored automation prototype before our first meeting.</p>
      <p>This structured assessment replaces unnecessary introductory meetings. It allows Nuvrixa to understand your current operations, manual processes, bottlenecks, documents, software, team structure and automation goals before we meet.</p>
      <p>The first consultation can therefore focus on reviewing a proposed solution or prototype rather than collecting basic information.</p>
      <div className={styles.heroMeta}><span><Clock3 aria-hidden="true"/><b>15–25 minutes</b><small>Estimated completion time</small></span><span><LockKeyhole aria-hidden="true"/><b>Private assessment</b><small>Saved securely on this device until submitted</small></span></div>
      <aside><LockKeyhole aria-hidden="true"/>Your information will be reviewed privately and used only to assess your business requirements and prepare your proposed solution.</aside>
    </section>

    <DiscoveryForm/>
  </main>;
}
