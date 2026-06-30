import { useState } from "react";
import {
  ScanLine,
  Sparkles,
  MessageSquareText,
  Lightbulb,
  CalendarCheck,
  GraduationCap,
  Upload,
  ClipboardPaste,
  Cpu,
  Download,
  Check,
  Star,
  ChevronDown,
  FileText,
} from "lucide-react";

export function TrustedBy() {
  const companies = ["Google", "Microsoft", "Amazon", "Meta", "Netflix"];
  return (
    <section className="border-y border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Trusted by professionals hired at
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {companies.map((c) => (
            <div
              key={c}
              className="rounded-xl border border-border bg-background px-5 py-2.5 text-sm font-bold text-muted-foreground shadow-sm transition-colors hover:text-foreground"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const features = [
  { icon: ScanLine, title: "ATS Resume Checker", desc: "Analyze your resume against any job description for instant compatibility." },
  { icon: Sparkles, title: "AI Resume Feedback", desc: "Receive detailed, actionable suggestions to improve your resume." },
  { icon: MessageSquareText, title: "Interview Preparation", desc: "Generate technical and behavioral questions with ideal answers." },
  { icon: Lightbulb, title: "Skill Gap Analysis", desc: "Discover the missing skills required for your target role." },
  { icon: CalendarCheck, title: "Personalized Study Plan", desc: "Get a day-by-day preparation roadmap tailored to you." },
  { icon: GraduationCap, title: "AI Career Coach", desc: "Practical recommendations to improve your chances of getting hired." },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Everything you need to get hired</h2>
        <p className="mt-3 text-muted-foreground">
          A complete AI toolkit to optimize your resume and ace every interview.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="group rounded-3xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-primary/40"
          >
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-[image:var(--gradient-primary)] group-hover:text-primary-foreground">
              <f.icon className="h-6 w-6" />
            </span>
            <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const steps = [
  { icon: Upload, title: "Upload Resume (PDF)", desc: "Drop your current resume to get started." },
  { icon: ClipboardPaste, title: "Paste Job Description", desc: "Add the role you're aiming for." },
  { icon: Cpu, title: "AI Analysis", desc: "Our AI scores and reviews instantly." },
  { icon: Download, title: "Download Report", desc: "Get your report & prepare for interview." },
];

export function HowItWorks() {
  return (
    <section className="bg-secondary/30 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">How it works</h2>
          <p className="mt-3 text-muted-foreground">Four simple steps from resume to ready.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.title} className="relative rounded-3xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-soft">
                  <s.icon className="h-6 w-6" />
                </span>
                <span className="font-display text-4xl font-extrabold text-secondary-foreground/15">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-4 font-bold">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const stats = [
  { value: "50K+", label: "Resumes Analyzed" },
  { value: "95%", label: "ATS Accuracy" },
  { value: "100K+", label: "Interview Questions Generated" },
  { value: "10K+", label: "Happy Users" },
];

export function Stats() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Why choose us</h2>
        <p className="mt-3 text-muted-foreground">Trusted results that speak for themselves.</p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-3xl border border-border bg-[image:var(--gradient-soft)] p-8 text-center shadow-card"
          >
            <p className="font-display text-4xl font-extrabold text-gradient">{s.value}</p>
            <p className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const testimonials = [
  { name: "Sarah Chen", role: "Software Engineer", quote: "I boosted my ATS score from 64% to 93% and landed 3 interviews in a week.", img: "https://i.pravatar.cc/120?img=47" },
  { name: "Marcus Reed", role: "Product Manager", quote: "The interview questions were spot on. I walked in feeling completely prepared.", img: "https://i.pravatar.cc/120?img=12" },
  { name: "Aisha Patel", role: "Data Analyst", quote: "The skill gap analysis showed exactly what to learn. Game changer for my career.", img: "https://i.pravatar.cc/120?img=32" },
];

export function Testimonials() {
  return (
    <section className="bg-secondary/30 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Loved by job seekers</h2>
          <p className="mt-3 text-muted-foreground">Real stories from people who got hired.</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-3xl border border-border bg-card p-6 shadow-card">
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm text-foreground/90">"{t.quote}"</blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <img src={t.img} alt={t.name} className="h-11 w-11 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-bold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}


const faqs = [
  { q: "What is an ATS score and why does it matter?", a: "An ATS (Applicant Tracking System) score measures how well your resume matches a job description. A higher score means recruiters' software is more likely to surface your resume." },
  { q: "Is my resume data kept private?", a: "Yes. Your documents are processed securely and never shared. You can delete your data at any time." },
  { q: "How accurate is the AI analysis?", a: "Our models are trained on real hiring data and deliver 95% ATS accuracy, with continuously improving suggestions." },
  { q: "What file formats are supported?", a: "We currently support PDF resumes for the most reliable parsing and formatting analysis." },
  { q: "Can I use it for free?", a: "Absolutely. The Free plan includes resume upload, ATS scoring, and basic suggestions with no credit card required." },
];

export function FAQ() {
  const [open, setOpen] = useState();
  return (
    <section id="contact" className="bg-secondary/30 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Frequently asked questions</h2>
          <p className="mt-3 text-muted-foreground">Everything you need to know.</p>
        </div>
        <div className="mt-10 flex flex-col gap-3">
          {faqs.map((f, i) => (
            <div key={f.q} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-sm font-semibold">{f.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <p className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
      <div className="relative overflow-hidden rounded-[2rem] bg-[image:var(--gradient-primary)] px-6 py-16 text-center shadow-soft sm:px-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,rgba(255,255,255,0.25),transparent_60%)]" />
        <h2 className="relative text-3xl font-extrabold text-primary-foreground sm:text-4xl">
          Ready to Land Your Dream Job?
        </h2>
        <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/85">
          Let AI optimize your resume and prepare you for your next interview.
        </p>
        <a
          href="#report"
          className="relative mt-8 inline-flex items-center gap-2 rounded-2xl bg-background px-8 py-4 text-sm font-bold text-primary shadow-soft transition-transform hover:-translate-y-0.5"
        >
          <Sparkles className="h-4 w-4" /> Get Started Free
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  const cols = [
    { title: "Product", links: ["Features", "Pricing", "Demo"] },
    { title: "Company", links: ["About", "Contact", "Careers"] },
    { title: "Legal", links: ["Privacy Policy", "Terms", "Security"] },
  ];
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-[image:var(--gradient-primary)] text-primary-foreground">
                <FileText className="h-5 w-5" />
              </span>
              <span className="font-display text-lg font-bold">
                AI Resume <span className="text-gradient">Builder</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Build ATS-optimized resumes and prepare for interviews with AI.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-bold">{c.title}</h4>
              <ul className="mt-4 flex flex-col gap-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} AI Resume Builder. All rights reserved.
        </div>
      </div>
    </footer>
  );
}