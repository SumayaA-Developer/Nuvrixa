import styles from "./global-footer.module.css";
import { BrandLogo } from "@/components/brand/brand-logo";
import { NewsletterForm } from "@/components/conversion/newsletter-form";
import { siteConfig } from "@/lib/site";

function Logo(){return <BrandLogo className={styles.logo}/>}

export function GlobalFooter(){
 const linkedin=process.env.NEXT_PUBLIC_LINKEDIN_URL;
 const xUrl=process.env.NEXT_PUBLIC_X_URL;
 return <footer className={styles.footer}><div className={styles.grid}>
  <section className={styles.brand}><Logo/><p>AI-powered automation systems<br/>that help businesses save time,<br/>reduce costs and scale with<br/>confidence.</p><a className={styles.email} href={`mailto:${siteConfig.email}`}><i>✉</i><span>Email Us<b>{siteConfig.email}</b></span></a><a className={styles.audit} href="/audit">Book Free 30-Minute Audit　→</a><div className={styles.social}>{linkedin&&<a href={linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>}{xUrl&&<a href={xUrl} target="_blank" rel="noreferrer" aria-label="X">𝕏</a>}<a href={`mailto:${siteConfig.email}`} aria-label="Email">✉</a></div></section>
  <section className={styles.column}><i className={styles.colIcon}>⌂</i><h2>NAVIGATION</h2>{[["Home","/"],["Solutions","/solutions"],["Services","/services"],["Process","/process"],["Results","/results"],["Contact","/contact"]].map(([label,href])=><a href={href} key={label}>›　{label}</a>)}</section>
  <section className={styles.column}><i className={styles.colIcon}>▤</i><h2>RESOURCES</h2><a href="/faq">›　FAQs</a><a href="/privacy-policy">›　Privacy Policy</a><a href="/terms">›　Terms &amp; Conditions</a></section>
  <section className={styles.news}><i className={styles.colIcon}>♢</i><h2>STAY UPDATED</h2><p>Get insights on AI, automation<br/>and business transformation<br/>delivered to your inbox.</p><NewsletterForm/><small>♙　 No spam. Unsubscribe<br/>　　 anytime.</small></section>
  <section className={styles.connect}><i className={styles.colIcon}>♧</i><h2>CONNECT</h2><p>Have a question or want to<br/>explore how Nuvrixa can<br/>help your business?<br/>We’re here to help.</p><a className={styles.message} href="/contact">♢　Send Us a Message</a><div className={styles.or}><i/>OR<i/></div><a className={styles.direct} href={`mailto:${siteConfig.email}`}>✉<span>Email Us Directly<b>{siteConfig.email}</b></span></a></section>
 </div><div className={styles.rule}/><div className={styles.bottom}><span>© 2026 Nuvrixa. All rights reserved.</span><span className={styles.trust}>♢ <i>Your trust is important to us. We are committed<br/>to protecting your data and your business.</i></span><span>Designed for impact. Built for growth.</span></div></footer>
}
