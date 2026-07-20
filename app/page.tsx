/* eslint-disable @next/next/no-html-link-for-pages */
import styles from "./home.module.css";
import { BrandLogo } from "@/components/brand/brand-logo";

const capabilities = [
  ["⌘", "Workflow", "Automation"], ["AI", "AI", "Assistants"], ["▣", "Client", "Portals"], ["◎", "CRM", "Systems"],
  ["↗", "Dashboards &", "Reporting"], ["⚙", "System", "Integrations"], ["▤", "Document", "Processing"], ["♬", "Support", "Automation"],
];
const problems = [
  ["◷", "Wasted Time", "Repetitive tasks and admin work consume your day."],
  ["⌯", "Disconnected Systems", "Tools don’t talk to each other. Data gets lost."],
  ["△", "Human Errors", "Manual processes lead to costly mistakes."],
  ["◉", "No Visibility", "You lack real-time insights to make confident decisions."],
  ["♙", "Unhappy Customers", "Slow responses and poor communication lose trust."],
];
const industries = [
  ["▥","Property","Management"],["▣","Professional","Services"],["⌕","Field","Services"],["◇","Training","Providers"],
  ["♡","NGOs &","Community"],["♜","Contractors",""],["🛒","Retail","Operations"],["⚙","Service","Businesses"],
];
const outcomes = [
  ["◷","Reduce Repetitive","Administration"],["ϟ","Improve Response","Times"],["↗","Connect Disconnected","Tools"],
  ["▥","Increase Operational","Visibility"],["♢","Reduce Avoidable","Errors"],["☺","Create Consistent","Client Experiences"],
];

function Logo({ tiny = false }: { tiny?: boolean }) { return <BrandLogo className={`${styles.logo} ${tiny ? styles.tinyLogo : ""}`} compact={tiny}/>; }

function Laptop() {
  return <div className={styles.deviceScene} aria-label="Nuvrixa automation dashboard">
    <div className={styles.wave}>{Array.from({length: 12},(_,i)=><i key={i}/>)}</div>
    <div className={styles.laptop}>
      <div className={styles.screen}>
        <div className={styles.screenTop}><Logo tiny/><span>◉　◉　◉</span></div>
        <div className={styles.screenBody}>
          <aside>{["▣ Dashboard","◉ Projects","♧ Automations","♙ Tasks","♙ Clients","▤ Reports","⚙ Settings"].map((x,i)=><span className={i===0?styles.dashActive:""} key={x}>{x}</span>)}</aside>
          <main><h3>Overview</h3><div className={styles.miniStats}>{[["Automations","Active","23","+12%"],["Hours Saved","This Month","1,248","+18%"],["Tasks Automated","This Month","4,562","+24%"]].map(x=><article key={x[0]}><small>{x[0]}</small><em>{x[1]}</em><strong>{x[2]} <b>{x[3]}</b></strong></article>)}</div>
          <div className={styles.miniGrid}><div className={styles.workflow}><small>Workflow Activity</small><div><span>♙</span>⌁<span>♙</span>⌁<span>♙</span><br/><span>♙</span></div></div><div className={styles.impact}><small>System Impact</small><div className={styles.impactRing}><strong>68%</strong><em>Reduction in<br/>Manual Work</em></div></div></div></main>
        </div>
      </div>
      <div className={styles.keyboard}>{Array.from({length:36},(_,i)=><i key={i}/>)}</div><div className={styles.trackpad}/><div className={styles.base}/>
    </div>
    <div className={styles.phone}><div className={styles.notch}/><div className={styles.phoneTop}>9:41　　⌁ ▪</div><h3>Automation<br/>Impact</h3><small>This Month</small>{[["▣","Time Saved","1,248 hrs"],["▤","Tasks Automated","4,562"],["▣","Errors Reduced","87%"],["◎","Response Time","-42%"]].map(x=><div className={styles.phoneRow} key={x[1]}><i>{x[0]}</i><span>{x[1]}</span><b>{x[2]}</b></div>)}</div>
  </div>
}

function Panel({ children, className="" }: { children: React.ReactNode; className?: string }) { return <section className={`${styles.panel} ${className}`}>{children}</section> }

export default function HomePage() {
  return <main className={styles.page}>
    <header className={styles.header}><a href="/"><Logo/></a><nav>{[["Home","/"],["Solutions","/solutions"],["Services","/services"],["Process","/process"],["Results","/results"]].map(([label,href],i)=><a className={i===0?styles.active:""} href={href} key={label}>{label}</a>)}</nav><a className={styles.auditButton} href="/audit">Book Free Automation Audit <span>→</span></a></header>

    <section className={styles.hero} id="top"><div className={styles.heroCopy}><div className={styles.eyebrow}>AI AUTOMATION &amp; BUSINESS SYSTEMS</div><h1>Intelligent Systems.<br/><span>Better Business.</span></h1><p>We design and build AI-powered systems and automations that eliminate manual work, connect your tools and give you the clarity to grow with confidence.</p><div className={styles.heroButtons}><a className={styles.auditButton} href="#audit">Book Your Free Automation Audit <span>→</span></a><a className={styles.outlineButton} href="#solutions">Explore Solutions <i>▶</i></a></div><div className={styles.promises}><div><b>◷</b><span><strong>30-Minute Audit</strong><small>100% Free</small></span></div><div><b>♢</b><span><strong>No Obligation</strong><small>Built Around You</small></span></div><div><b>♙</b><span><strong>Secure &amp; Private</strong><small>Your Data Is Safe</small></span></div></div></div><Laptop/></section>

    <div className={styles.sections}>
      <Panel><div className={styles.heading}><h2>Built For Modern Businesses</h2><p>We build connected systems that help organisations operate smarter and scale sustainably.</p></div><div className={styles.capabilities}>{capabilities.map(([icon,a,b],i)=><article key={a+b}><div className={i%3===0?styles.purpleIcon:styles.blueIcon}>{icon}</div><p>{a}<br/>{b}</p></article>)}</div></Panel>
      <Panel><div className={styles.heading}><h2>The Problems We Solve</h2><p>Outdated processes and disconnected systems slow your business down.</p></div><div className={styles.problems}>{problems.map(([icon,title,copy],i)=><article key={title}><div className={i%2?styles.blueIcon:styles.purpleIcon}>{icon}</div><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div></Panel>
      <Panel><div className={styles.heading}><h2>Systems Designed For Businesses Like Yours</h2></div><div className={styles.industries}>{industries.map(([icon,a,b],i)=><article key={a}><div className={i%3===0?styles.blueIcon:styles.purpleIcon}>{icon}</div><p>{a}<br/>{b}</p></article>)}</div><p className={styles.disclaimer}><i>ⓘ</i> Outcomes depend on your business, current processes, implementation scope and system usage.</p></Panel>
      <Panel><div className={styles.heading}><h2>Outcomes Our Systems Are Designed To Support</h2></div><div className={styles.outcomes}>{outcomes.map(([icon,a,b],i)=><article key={a}><div className={i%3===2?styles.blueIcon:styles.purpleIcon}>{icon}</div><p>{a}<br/>{b}</p></article>)}</div></Panel>
      <section className={styles.cta} id="audit"><div className={styles.calendar}><div className={styles.binder}/><div className={styles.calendarGrid}>{Array.from({length:9},(_,i)=><i key={i}/>)}</div><span>◷</span></div><div className={styles.ctaCopy}><h2>Ready To Unlock Your <span>Next Level Of Growth?</span></h2><p>Book your free 30-minute Automation Discovery Session and let us show you how Nuvrixa can help you work smarter, reduce costs and build scalable systems.</p><div><span>✓　30 Minutes</span><span>✓　100% Free</span><span>✓　No Obligation</span><span>✓　Built Around Your Business</span></div></div><div className={styles.ctaAction}><a className={styles.auditButton} href="/audit">Book My Free 30-Minute Audit　→</a><p>No credit card required.</p></div></section>
    </div>
  </main>
}
