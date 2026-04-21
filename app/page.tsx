"use client";

import { Inter, Syne } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne", weight: ["700", "800"] });

const trustedTechnologies = ["Next.js", "Supabase", "Gemini", "Groq", "Wazuh", "Cloudflare"];
const phishSlayerTags = [
  "L1/L2/L3 AI Agents",
  "IOC Enrichment",
  "Sigma Generation",
  "Endpoint Response",
  "SIEM Integrations",
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`${inter.className} ${syne.variable} relative bg-[#000000] text-zinc-400 antialiased`}>
      <a href="#hero" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>

      {/* Navbar */}
      <header
        className={`sticky top-0 z-50 border-b border-white/5 backdrop-blur-md transition-colors duration-300 ${
          scrolled ? "bg-black/95" : "bg-black/90"
        }`}
      >
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#hero" className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="CV" width={32} height={32} style={{ objectFit: "contain" }} />
              <span className="font-[var(--font-syne)] font-bold text-sm tracking-[0.15em] text-white">CYGNUS VENTURES</span>
            </div>
          </a>

          <div className="hidden items-center gap-8 md:flex" style={{ fontSize: "13px" }}>
            <a href="#studio" className="transition-colors duration-300 hover:text-white tracking-wide" style={{ color: "rgba(255,255,255,0.6)" }}>Studio</a>
            <a href="#products" className="transition-colors duration-300 hover:text-white tracking-wide" style={{ color: "rgba(255,255,255,0.6)" }}>Products</a>
            <a href="#founder" className="transition-colors duration-300 hover:text-white tracking-wide" style={{ color: "rgba(255,255,255,0.6)" }}>Founder</a>
            <a href="#contact" className="transition-colors duration-300 hover:text-white tracking-wide" style={{ color: "rgba(255,255,255,0.6)" }}>Contact</a>
          </div>

          <a
            href="#contact"
            className="px-5 py-2 text-sm font-medium border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-200 tracking-wide"
          >
            Book Intro
          </a>
        </nav>
      </header>

      <main id="hero" className="relative isolate overflow-hidden">
        {/* Animated grid background */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="pointer-events-none absolute left-1/2 top-20 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.24),rgba(139,92,246,0)_68%)]" />
        <div className="pointer-events-none absolute right-10 top-8 h-[320px] w-[320px] rounded-full bg-violet-900/30 blur-3xl" />

        {/* Hero */}
        <section className="mx-auto w-full max-w-6xl px-4 pb-20 pt-24 sm:px-6 lg:px-8 lg:pt-32">
          <p className="hero-1 text-xs font-semibold uppercase tracking-[0.26em] text-violet-400">
            AI-Powered Cybersecurity Studio
          </p>

          <h1 className="hero-2 mt-6 max-w-5xl font-[var(--font-syne)] text-6xl font-extrabold leading-[1.03] text-white sm:text-7xl lg:text-8xl">
            <span>We Build Autonomous</span>
            <br />
            <span className="text-violet-400">
              Cyber Defense
              <span
                aria-hidden="true"
                className="cursor-blink ml-2 inline-block h-[0.9em] w-px bg-white align-[-0.05em]"
              />
            </span>
          </h1>

          <p className="hero-3 mt-7 max-w-lg text-base leading-8 text-zinc-400 sm:text-lg">
            Cygnus Ventures engineers premium, agentic security products for teams that need speed,
            precision, and resilient infrastructure from day one.
          </p>

          <div className="hero-3 mt-6 flex flex-wrap items-center gap-5 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            <span>3 Products</span>
            <span aria-hidden="true" className="h-4 w-px bg-white/10" />
            <span>L1/L2/L3 Agents</span>
            <span aria-hidden="true" className="h-4 w-px bg-white/10" />
            <span>Production Ready</span>
          </div>

          <div className="hero-4 mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#products"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition-all duration-200"
            >
              Explore Products
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-white/20 text-white text-sm font-medium tracking-wide hover:border-white/40 transition-all duration-200"
            >
              Contact Us
            </a>
          </div>
        </section>

        <section className="reveal border-y border-white/5">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-6 sm:flex-row sm:items-center sm:px-6 lg:px-8">
            <span className="text-xs font-semibold uppercase tracking-[0.34em] text-zinc-600 sm:mr-2">
              BUILT WITH
            </span>
            <div className="flex flex-wrap gap-2">
              {trustedTechnologies.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Studio */}
        <section id="studio" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="reveal font-[var(--font-syne)] text-3xl font-extrabold text-white sm:text-4xl">
            The Studio
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                num: "01",
                title: "Agentic Response Systems",
                body: "Autonomous triage and response flows designed for modern SOC workloads and rapid containment.",
              },
              {
                num: "02",
                title: "Enterprise-Ready Architecture",
                body: "Infrastructure-first products with observability, secure defaults, and deployment reliability built in.",
              },
              {
                num: "03",
                title: "Founder-Led Velocity",
                body: "Small, high-intensity execution loops that ship meaningful improvements every cycle.",
              },
            ].map((card) => (
              <article
                key={card.title}
                className="reveal group relative bg-white/[0.02] border border-white/[0.06] p-8 hover:bg-white/[0.04] hover:border-violet-500/30 transition-all duration-300"
              >
                <span className="pointer-events-none absolute top-4 right-4 text-5xl font-bold text-violet-500/20 font-[var(--font-syne)] select-none leading-none">
                  {card.num}
                </span>
                <span className="w-8 h-[1px] bg-violet-500 mb-6 block" />
                <h3 className="text-base font-semibold text-white tracking-wide mb-3">{card.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Products */}
        <section id="products" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="reveal text-sm tracking-[0.2em] uppercase text-white/25 mb-2">What we ship</p>
          <h2 className="reveal font-[var(--font-syne)] text-3xl font-bold text-white">
            Products
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.8fr_1fr]">
            {/* PhishSlayer */}
            <div
              className="reveal border border-white/[0.08] p-10 hover:border-violet-500/30 transition-all duration-300 relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.04) 0%, transparent 60%)" }}
            >
              <p className="inline-flex items-center gap-2 text-xs text-emerald-400 tracking-[0.1em] uppercase mb-4">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Live
              </p>
              <h3 className="font-[var(--font-syne)] text-4xl font-bold text-white mb-4">PhishSlayer</h3>
              <p className="max-w-3xl leading-8 text-white/40">
                An AI-native SOC platform with coordinated L1/L2/L3 agents for detection, investigation,
                and response.
              </p>
              <div className="mt-6 flex flex-wrap">
                {phishSlayerTags.map((tag) => (
                  <span key={tag} className="inline-flex items-center px-3 py-1 text-xs text-white/40 border border-white/[0.08] tracking-wide mr-2 mb-2">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://phishslayer.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mt-6 tracking-wide"
              >
                Visit PhishSlayer
                <span aria-hidden="true">→</span>
              </a>
            </div>

            {/* Port Patrol */}
            <article className="reveal border border-white/[0.04] p-10 opacity-40 hover:opacity-60 transition-opacity duration-300">
              <p className="inline-flex border border-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
                Coming Soon
              </p>
              <h3 className="mt-5 font-[var(--font-syne)] text-2xl font-bold text-white">Port Patrol</h3>
              <p className="mt-4 leading-8 text-white/40">
                Lightweight internet-exposure scanner for lean security teams that need fast perimeter
                visibility.
              </p>
            </article>
          </div>
        </section>

        {/* Founder */}
        <section id="founder" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
            <div className="reveal">
              <h2 className="font-[var(--font-syne)] text-3xl font-extrabold text-white sm:text-4xl">
                Founder-Led by Design
              </h2>
              <p className="mt-6 border-l border-violet-500/20 pl-6 text-sm text-white/40 leading-8 max-w-md">
                Cygnus Ventures is led by Muhammad Zain, building cybersecurity products with a direct focus
                on operational quality, technical depth, and pragmatic deployment speed.
              </p>
            </div>

            <div className="reveal grid gap-8">
              {[
                { value: "01", label: "Founder" },
                { value: "02", label: "Products in Market" },
                { value: "03", label: "Core Security Tracks" },
              ].map((item) => (
                <div key={item.label}>
                  <span className="font-[var(--font-syne)] text-5xl font-bold text-violet-400 leading-none mb-1 block">{item.value}</span>
                  <span className="text-xs text-white/30 tracking-[0.15em] uppercase">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact / CTA */}
        <section id="contact" className="relative border-y border-white/10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08),rgba(0,0,0,0)_65%)]" />
          <div className="relative mx-auto w-full max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
            <h2 className="reveal font-[var(--font-syne)] text-5xl font-bold text-white mb-4">
              Build the Next Layer of Defense
            </h2>
            <p className="reveal mx-auto max-w-2xl text-sm text-white/40 mb-10 tracking-wide">
              Partner with Cygnus Ventures to deploy AI-powered security systems that move as fast as your
              attackers.
            </p>
            <div className="reveal flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://phishslayer.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 bg-white text-black text-sm font-medium tracking-wide hover:bg-white/90 transition-all duration-200"
              >
                Request Early Access
              </a>
              <a
                href="mailto:contact@cygnusventures.dev"
                className="inline-flex items-center justify-center px-8 py-3 border border-white/20 text-white text-sm font-medium tracking-wide hover:border-white/40 transition-all duration-200"
              >
                contact@cygnusventures.dev
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="flex items-center">
            <img src="/logo.png" alt="CV" width={20} height={20} style={{ objectFit: "contain", marginRight: "8px" }} />
            <p className="text-xs text-white/20 tracking-[0.12em]">CYGNUS VENTURES</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://x.com/mzain2004"
              target="_blank"
              rel="noreferrer"
              aria-label="Cygnus Ventures on X"
              className="inline-flex h-9 w-9 items-center justify-center text-white/20 hover:text-white transition-colors duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.259 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/mzain2004"
              target="_blank"
              rel="noreferrer"
              aria-label="Cygnus Ventures on LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center text-white/20 hover:text-white transition-colors duration-200"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </div>
          <p className="text-xs text-white/20 tracking-[0.12em]">© 2026 Cygnus Ventures. All rights reserved.</p>
        </div>
      </footer>

      <style jsx global>{`
        .hero-word {
          display: inline-block;
          opacity: 0;
          transform: translateY(20px);
          animation: hero-word-in 0.75s ease-out forwards;
        }

        @keyframes hero-word-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

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
