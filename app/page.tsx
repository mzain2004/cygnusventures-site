"use client";

import { Inter, Syne } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne", weight: ["700", "800"] });

const trustedTechnologies = ["Next.js", "Supabase", "Gemini", "Wazuh", "Cloudflare", "Tailwind CSS"];

const phishSlayerTags = [
  "L1/L2/L3 investigation workflow",
  "LangGraph multi-agent architecture",
  "Wazuh, Microsoft Graph, Entra ID, VirusTotal, Shodan, AbuseIPDB integrations",
  "Tenant-aware MSSP design",
  "Evidence-backed security verdicts",
  "Approval-based response actions",
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });

    const revealElements = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
    );
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`${inter.className} ${syne.variable} relative bg-brand-bg text-brand-text antialiased min-h-screen flex flex-col`}>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-brand-purple focus:p-4 focus:border focus:border-brand-border rounded-lg">
        Skip to main content
      </a>

      {/* Navbar */}
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled 
            ? "bg-brand-bg/95 border-brand-border/60 shadow-[0_1px_3px_0_rgba(32,24,39,0.02)] backdrop-blur-md" 
            : "bg-brand-bg/85 border-transparent backdrop-blur-sm"
        }`}
      >
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#hero" className="flex items-center gap-3 group">
            <img 
              src="/Cygnus_Ventures_Logo-2.png" 
              alt="Cygnus Ventures Logo" 
              width={32} 
              height={32} 
              className="object-contain transition-transform duration-300 group-hover:scale-105" 
            />
            <span className="font-[var(--font-syne)] font-bold text-sm tracking-[0.15em] text-brand-text">
              CYGNUS VENTURES
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex text-xs font-semibold tracking-wider text-brand-muted uppercase">
            <a href="#studio" className="transition-colors duration-200 hover:text-brand-purple">Studio</a>
            <a href="#products" className="transition-colors duration-200 hover:text-brand-purple">Products</a>
            <a href="#company" className="transition-colors duration-200 hover:text-brand-purple">Company</a>
            <a href="#founder" className="transition-colors duration-200 hover:text-brand-purple">Founder</a>
            <a href="#contact" className="transition-colors duration-200 hover:text-brand-purple">Contact</a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-brand-dark-cta text-white px-5 py-2 text-xs font-semibold hover:bg-brand-purple hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 tracking-wide shadow-sm"
          >
            Book Intro
          </a>
        </nav>
      </header>

      <main id="main-content" className="flex-grow">
        {/* Hero Section */}
        <section id="hero" className="relative isolate overflow-hidden bg-brand-bg-warm">
          {/* Subtle light background grid */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.25]"
            style={{
              backgroundImage:
                "linear-gradient(#7C3AED 1px, transparent 1px), linear-gradient(90deg, #7C3AED 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          {/* Warm gradients */}
          <div className="pointer-events-none absolute left-1/2 top-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(243,232,255,0.7),rgba(255,255,255,0)_70%)] blur-3xl" />
          <div className="pointer-events-none absolute right-12 top-6 h-[280px] w-[280px] rounded-full bg-brand-purple-surface/40 blur-3xl" />

          <div className="mx-auto w-full max-w-6xl px-4 pb-20 pt-24 sm:px-6 lg:px-8 lg:pt-32 text-center relative z-10">
            <p className="hero-1 text-xs font-extrabold uppercase tracking-[0.26em] text-brand-purple">
              Cygnus Ventures SMC Pvt Ltd
            </p>

            <h1 className="hero-2 mt-6 max-w-4xl mx-auto font-[var(--font-syne)] text-4xl font-extrabold leading-[1.15] text-brand-text sm:text-5xl lg:text-6xl tracking-tight">
              Building autonomous security <br className="hidden sm:inline" />
              <span className="text-brand-purple">
                products for modern teams
                <span
                  aria-hidden="true"
                  className="cursor-blink ml-2 inline-block h-[0.9em] w-0.5 bg-brand-purple align-[-0.05em]"
                />
              </span>
            </h1>

            <p className="hero-3 mx-auto mt-8 max-w-2xl text-base leading-relaxed text-brand-muted sm:text-lg">
              Cygnus Ventures is a cybersecurity product company building PhishSlayer, an autonomous SOC intelligence platform for MSSPs and enterprise security teams.
            </p>

            <div className="hero-4 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#products"
                className="inline-flex items-center justify-center rounded-full bg-brand-dark-cta text-white px-8 py-3.5 text-sm font-semibold tracking-wide hover:bg-brand-purple hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md w-full sm:w-auto"
              >
                Explore PhishSlayer
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-brand-border bg-white text-brand-text px-8 py-3.5 text-sm font-semibold tracking-wide hover:border-brand-purple hover:text-brand-purple hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 w-full sm:w-auto"
              >
                Book an Intro
              </a>
            </div>
          </div>
        </section>

        {/* Credibility Strip */}
        <section className="reveal border-y border-brand-border bg-white py-6 shadow-[0_1px_2px_0_rgba(32,24,39,0.01)]">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-brand-muted/70">
              Corporate Registry
            </span>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-xs font-semibold text-brand-text">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-purple shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>SECP Incorporated</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-purple shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>FBR Registered Taxpayer</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-purple shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>PSEB Registered</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-brand-purple shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Building from Pakistan</span>
              </div>
            </div>
          </div>
        </section>

        {/* Studio / What we build section */}
        <section id="studio" className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="reveal text-xs font-bold uppercase tracking-[0.2em] text-brand-purple mb-3">Core Expertise</p>
            <h2 className="reveal font-[var(--font-syne)] text-3xl font-extrabold text-brand-text sm:text-4xl">
              What We Build
            </h2>
            <p className="reveal mt-4 text-brand-muted text-sm sm:text-base leading-relaxed">
              We design and engineer security tools optimized for scalability, multi-tenant architectures, and automated responder workflows.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                num: "01",
                title: "Autonomous SOC Systems",
                body: "Agent-assisted workflows for alert triage, investigation, response approval, and evidence-backed verdicts.",
                icon: (
                  <svg className="w-6 h-6 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                  </svg>
                ),
              },
              {
                num: "02",
                title: "Cloud-Native Security Products",
                body: "Secure, scalable infrastructure using modern deployment, observability, CI/CD, and product engineering practices.",
                icon: (
                  <svg className="w-6 h-6 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
                  </svg>
                ),
              },
              {
                num: "03",
                title: "MSSP-Focused Architecture",
                body: "Tenant-aware workflows, RBAC, credential isolation, and operational design for multi-client security teams.",
                icon: (
                  <svg className="w-6 h-6 text-brand-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.109A11.386 11.386 0 0110.089 21m-2.13-2.13a9.38 9.38 0 002.13.111 9.38 9.38 0 002.13-.111m-4.26 0a4.125 4.125 0 00-7.534 2.493 9.337 9.337 0 004.121.952m4.26-3.447v-.004c0-1.113.285-2.16.786-3.07M8.217 19.128v.109A11.386 11.386 0 0013.91 21M13.25 7.75a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm5.25 3a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm-10.5 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                ),
              },
            ].map((card) => (
              <article
                key={card.title}
                className="reveal group bg-white border border-brand-border p-8 rounded-2xl hover:border-brand-purple/40 hover:shadow-[0_10px_30px_0_rgba(124,58,237,0.03)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-purple-surface flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                      {card.icon}
                    </div>
                    <span className="text-3xl font-extrabold text-brand-purple/15 font-[var(--font-syne)] select-none">
                      {card.num}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-brand-text mb-3 tracking-tight">{card.title}</h3>
                  <p className="text-sm text-brand-muted leading-relaxed">{card.body}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Products section */}
        <section id="products" className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:px-8 border-t border-brand-border/60">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="reveal text-xs font-bold uppercase tracking-[0.2em] text-brand-purple mb-3">Product Portfolio</p>
            <h2 className="reveal font-[var(--font-syne)] text-3xl font-extrabold text-brand-text sm:text-4xl">
              Flagship Product
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
            {/* PhishSlayer */}
            <div className="reveal bg-white border border-brand-border p-8 sm:p-10 rounded-3xl hover:border-brand-purple/40 hover:shadow-[0_20px_40px_0_rgba(124,58,237,0.03)] transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-700">
                    <span className="relative flex h-2 w-2" aria-hidden="true">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    </span>
                    Active Product
                  </span>
                  <span className="text-[10px] font-extrabold text-brand-purple bg-brand-purple-surface px-2.5 py-1 rounded-md tracking-wider uppercase">
                    Flagship
                  </span>
                </div>

                <h3 className="font-[var(--font-syne)] text-3xl font-extrabold text-brand-text mb-4">
                  PhishSlayer
                </h3>
                
                <p className="text-brand-muted text-sm sm:text-base leading-relaxed mb-8">
                  An autonomous SOC intelligence platform for MSSPs and enterprise security teams, designed to reduce manual analyst workload across L1 triage, L2 identity investigation, and L3 forensic reconstruction workflows.
                </p>

                <div className="space-y-4 mb-8">
                  <h4 className="text-xs font-bold text-brand-text uppercase tracking-wider">Key Highlights</h4>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {phishSlayerTags.map((tag) => (
                      <div key={tag} className="flex items-start gap-2.5 text-xs text-brand-muted leading-relaxed">
                        <span className="w-5 h-5 rounded-full bg-brand-purple-surface text-brand-purple flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </span>
                        <span>{tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <a
                  href="https://phishslayer.tech"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brand-dark-cta text-white px-7 py-3 text-sm font-semibold hover:bg-brand-purple hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-sm"
                >
                  View PhishSlayer
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Port Patrol */}
            <div className="reveal bg-brand-cream/20 border border-dashed border-brand-border p-8 rounded-3xl flex flex-col justify-between min-h-[350px]">
              <div>
                <div className="mb-6">
                  <span className="inline-flex items-center rounded-full bg-brand-purple-surface/60 border border-brand-purple/10 px-3 py-1 text-xs font-bold text-brand-purple">
                    Research Track
                  </span>
                </div>

                <h3 className="font-[var(--font-syne)] text-2xl font-extrabold text-brand-text mb-4">
                  Port Patrol
                </h3>

                <p className="text-brand-muted text-sm leading-relaxed mb-6">
                  Lightweight internet-exposure scanner for lean security teams that need fast perimeter visibility. Designed as a self-hosted scanning agent for continuous perimeter mapping.
                </p>
              </div>

              <div>
                <span className="inline-flex items-center gap-2 text-xs font-bold text-brand-muted uppercase tracking-wider">
                  <svg className="w-4 h-4 text-brand-muted animate-pulse shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Company milestones section */}
        <section id="company" className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:px-8 border-t border-brand-border/60">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="reveal text-xs font-bold uppercase tracking-[0.2em] text-brand-purple mb-3">Corporate Milestones</p>
            <h2 className="reveal font-[var(--font-syne)] text-3xl font-extrabold text-brand-text sm:text-4xl">
              Company Foundation
            </h2>
            <p className="reveal mt-4 text-brand-muted text-sm sm:text-base leading-relaxed">
              Cygnus Ventures SMC Pvt Ltd is a registered private limited corporate entity built to support enterprise-grade software and security automation.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "SECP Incorporation",
                date: "Apr 2026",
                description: "Incorporated through SECP (Securities and Exchange Commission of Pakistan) as a Single Member Private Limited Company.",
              },
              {
                title: "FBR Taxpayer Registration",
                date: "Apr 2026",
                description: "Completed Federal Board of Revenue taxpayer registration, established as an active corporate tax filing entity.",
              },
              {
                title: "PSEB Registration",
                date: "Apr 2026 – Mar 2027",
                description: "Software export registry valid through Pakistan Software Export Board, supporting compliant cloud-native services.",
              },
              {
                title: "Flagship Active",
                date: "Active",
                description: "PhishSlayer platform deployment active, scaling operational security workflows for MSSP integrations.",
              },
            ].map((milestone) => (
              <article
                key={milestone.title}
                className="reveal bg-white border border-brand-border p-6 rounded-2xl hover:border-brand-purple/30 hover:shadow-[0_8px_20px_0_rgba(124,58,237,0.02)] transition-all duration-300"
              >
                <span className="text-[10px] font-extrabold text-brand-purple bg-brand-purple-surface px-2.5 py-1 rounded-md mb-4 inline-block uppercase tracking-wider">
                  {milestone.date}
                </span>
                <h3 className="text-base font-bold text-brand-text mb-2 tracking-tight">{milestone.title}</h3>
                <p className="text-xs text-brand-muted leading-relaxed">{milestone.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Founder section */}
        <section id="founder" className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6 lg:px-8 border-t border-brand-border/60 bg-brand-bg-warm/50">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] items-center">
            <div className="reveal">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-purple mb-3">Leadership</p>
              <h2 className="font-[var(--font-syne)] text-3xl font-extrabold text-brand-text sm:text-4xl">
                Founder-Led Security Product Engineering
              </h2>
              <p className="mt-6 text-brand-muted text-sm sm:text-base leading-relaxed">
                Cygnus Ventures is led by Muhammad Zain, CEO & Director and founder of PhishSlayer. The company is focused on building practical cybersecurity products across autonomous SOC workflows, cloud infrastructure, DevSecOps, and MSSP operations.
              </p>
            </div>

            <div className="reveal">
              <div className="bg-white border border-brand-border p-8 rounded-3xl relative overflow-hidden shadow-[0_15px_30px_0_rgba(32,24,39,0.02)]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle,rgba(124,58,237,0.05),transparent_70%)] pointer-events-none" />
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src="/founder-image.png"
                    alt="Muhammad Zain, CEO & Director of Cygnus Ventures"
                    className="w-16 h-16 rounded-full object-cover object-center border border-[#E8E1D8] ring-2 ring-[#F3E8FF] shadow-sm shrink-0"
                  />
                  <div>
                    <h3 className="text-lg font-extrabold text-brand-text">Muhammad Zain</h3>
                    <p className="text-xs text-brand-purple font-semibold mt-0.5">CEO & Director, Cygnus Ventures</p>
                    <p className="text-xs text-brand-muted mt-0.5">Founder & Lead Engineer, PhishSlayer</p>
                  </div>
                </div>
                <div className="border-t border-brand-border pt-6">
                  <h4 className="text-xs font-bold text-brand-text uppercase tracking-wider mb-3">Core Directives</h4>
                  <ul className="space-y-2.5 text-xs text-brand-muted">
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-purple shrink-0" />
                      <span>Autonomous SOC workflows & Agentic Triage</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-purple shrink-0" />
                      <span>Cloud-native product engineering & compliance</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-purple shrink-0" />
                      <span>Multi-tenant security orchestration for MSSPs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="relative border-t border-brand-border bg-brand-cream/20">
          <div className="mx-auto w-full max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
            <div className="reveal">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-purple mb-3">Collaboration</p>
              <h2 className="font-[var(--font-syne)] text-4xl font-extrabold text-brand-text sm:text-5xl tracking-tight mb-6">
                Build with Cygnus Ventures
              </h2>
              <p className="mx-auto max-w-xl text-brand-muted text-sm sm:text-base leading-relaxed mb-10">
                For security practitioners, MSSPs, advisors, and partners interested in autonomous SOC intelligence and security product development.
              </p>
            </div>

            <div className="reveal flex flex-col justify-center items-center sm:flex-row gap-4">
              <a
                href="mailto:zain@cygnusventures.dev?subject=Intro%20Request%20-%20Cygnus%20Ventures"
                className="inline-flex items-center justify-center rounded-full bg-brand-dark-cta text-white px-8 py-3.5 text-sm font-semibold tracking-wide hover:bg-brand-purple hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md w-full sm:w-auto"
              >
                Book an Intro
              </a>
              <a
                href="mailto:zain@cygnusventures.dev"
                className="inline-flex items-center justify-center rounded-full border border-brand-border bg-white text-brand-text px-8 py-3.5 text-sm font-semibold tracking-wide hover:border-brand-purple hover:text-brand-purple hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 w-full sm:w-auto"
              >
                Email Us (zain@cygnusventures.dev)
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-brand-border bg-white py-12">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-3">
                <img 
                  src="/Cygnus_Ventures_Logo-2.png" 
                  alt="Cygnus Ventures" 
                  width={24} 
                  height={24} 
                  className="object-contain" 
                />
                <span className="font-[var(--font-syne)] font-bold text-xs tracking-[0.12em] text-brand-text uppercase">
                  CYGNUS VENTURES
                </span>
              </div>
              <p className="text-xs text-brand-muted mt-2 font-medium">
                Cygnus Ventures SMC Pvt Ltd — Cybersecurity product company
              </p>
              <p className="text-[11px] text-brand-muted mt-0.5">
                Founder-led from Pakistan
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/cygnus-ventures-smc-pvt-ltd"
                target="_blank"
                rel="noreferrer"
                aria-label="Cygnus Ventures on LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brand-border bg-white text-brand-muted hover:text-brand-purple hover:border-brand-purple hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="border-t border-brand-border/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-brand-muted">
            <p>© 2026 Cygnus Ventures SMC Pvt Ltd. All rights reserved.</p>
            <div className="flex gap-4">
              <span className="hover:text-brand-purple cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-brand-purple cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .cursor-blink {
          animation: cursor-blink 1.1s steps(1, end) infinite;
        }

        @keyframes cursor-blink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
