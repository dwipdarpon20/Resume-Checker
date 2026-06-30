import { Upload, PlayCircle, Sparkles, TrendingUp, Target, MessageSquareText, CalendarCheck, Lightbulb } from "lucide-react";

import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[image:var(--gradient-hero)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-semibold text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-accent" /> AI-powered career toolkit
          </span>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">
            Build <span className="text-gradient">ATS-Optimized</span> Resumes & Prepare for Interviews with AI
          </h1>
          <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
            Upload your resume, compare it with any job description, receive an ATS
            score, identify skill gaps, generate interview questions, and get a
            personalized interview preparation plan in seconds.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#report"
              className="inline-flex items-center gap-2 rounded-xl bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5"
            >
              <Upload className="h-4 w-4" /> Upload Resume
            </a>
            <button className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary">
              <PlayCircle className="h-4 w-4" /> View Demo
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl border border-border bg-card/80 p-5 shadow-card backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-medium text-muted-foreground">Resume Score</p>
                <p className="font-display text-3xl font-bold text-gradient">92%</p>
              </div>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-soft">
                <TrendingUp className="h-6 w-6" />
              </span>
            </div>
            <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-secondary">
              <div className="h-full w-[92%] rounded-full bg-[image:var(--gradient-primary)]" />
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {[
                { icon: Target, label: "ATS Match", value: "Excellent" },
                { icon: Lightbulb, label: "Skill Gap", value: "3 found" },
                { icon: MessageSquareText, label: "Questions", value: "24 ready" },
                { icon: CalendarCheck, label: "Prep Plan", value: "7 days" },
              ].map((c) => (
                <div key={c.label} className="rounded-2xl border border-border bg-background p-3">
                  <c.icon className="h-5 w-5 text-primary" />
                  <p className="mt-2 text-xs text-muted-foreground">{c.label}</p>
                  <p className="text-sm font-semibold">{c.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 flex items-start gap-3 rounded-2xl border border-accent/30 bg-accent/5 p-3">
              <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">AI Suggestion:</span> Add 2
                measurable achievements to your experience section to boost impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero