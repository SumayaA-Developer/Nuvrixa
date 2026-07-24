import Link from "next/link";
import { Bell, BookOpenText, ChevronRight, Home, LockKeyhole, Mail, Send, ShieldCheck, Users, X } from "lucide-react";
import styles from "./global-footer.module.css";
import { BrandLogo } from "@/components/brand/brand-logo";
import { NewsletterForm } from "@/components/conversion/newsletter-form";
import { siteConfig } from "@/lib/site";

const navigation = [["Home", "/"], ["Solutions", "/solutions"], ["Services", "/services"], ["Process", "/process"], ["Results", "/results"], ["Contact", "/contact"]] as const;
const resources = [["Business Discovery", "/business-discovery"], ["FAQs", "/faq"], ["Privacy Policy", "/privacy-policy"], ["Terms & Conditions", "/terms"]] as const;

export function GlobalFooter() {
  const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_URL;
  const xUrl = process.env.NEXT_PUBLIC_X_URL;
  return <footer className={styles.footer}><div className={styles.grid}>
    <section className={styles.brand} aria-labelledby="footer-brand"><BrandLogo className={styles.logo}/><h2 id="footer-brand" className={styles.srOnly}>Nuvrixa</h2><p>AI-powered automation systems that help businesses save time, reduce costs and scale with confidence.</p><a className={styles.email} href={`mailto:${siteConfig.email}`}><Mail aria-hidden="true"/><span>Email us<b>{siteConfig.email}</b></span></a><Link className={styles.audit} href="/business-discovery">Start Business Discovery<ChevronRight aria-hidden="true"/></Link><div className={styles.social}>{linkedin && <a href={linkedin} target="_blank" rel="noreferrer" aria-label="Nuvrixa on LinkedIn"><span aria-hidden="true">in</span></a>}{xUrl && <a href={xUrl} target="_blank" rel="noreferrer" aria-label="Nuvrixa on X"><X aria-hidden="true"/></a>}<a href={`mailto:${siteConfig.email}`} aria-label="Email Nuvrixa"><Mail aria-hidden="true"/></a></div></section>
    <section className={styles.column}><span className={styles.colIcon}><Home aria-hidden="true"/></span><h2>NAVIGATION</h2>{navigation.map(([label, href]) => <Link href={href} key={label}><ChevronRight aria-hidden="true"/>{label}</Link>)}</section>
    <section className={styles.column}><span className={styles.colIcon}><BookOpenText aria-hidden="true"/></span><h2>RESOURCES</h2>{resources.map(([label, href]) => <Link href={href} key={label}><ChevronRight aria-hidden="true"/>{label}</Link>)}</section>
    <section className={styles.news}><span className={styles.colIcon}><Bell aria-hidden="true"/></span><h2>STAY UPDATED</h2><p>Get insights on AI, automation and business transformation delivered to your inbox.</p><NewsletterForm/><small><LockKeyhole aria-hidden="true"/>No spam. Unsubscribe anytime.</small></section>
    <section className={styles.connect}><span className={styles.colIcon}><Users aria-hidden="true"/></span><h2>CONNECT</h2><p>Have a question or want to explore how Nuvrixa can help your business? We&apos;re here to help.</p><Link className={styles.message} href="/contact"><Send aria-hidden="true"/>Send us a message</Link><div className={styles.or}><i/>OR<i/></div><a className={styles.direct} href={`mailto:${siteConfig.email}`}><Mail aria-hidden="true"/><span>Email us directly<b>{siteConfig.email}</b></span></a></section>
  </div><div className={styles.rule}/><div className={styles.bottom}><span>© 2026 Nuvrixa. All rights reserved.</span><span className={styles.trust}><ShieldCheck aria-hidden="true"/><i>Your trust is important to us. We are committed to protecting your data and your business.</i></span><span>Designed for impact. Built for growth.</span></div></footer>;
}
