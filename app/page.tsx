"use client";

import { Inter, Syne } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne", weight: ["700", "800"] });

const trustedTechnologies = ["Next.js", "Supabase", "Wazuh", "Cloudflare", "Gemini", "Groq"];
const phishSlayerTags = [
  "L1/L2/L3 AI Agents",
  "IOC Enrichment",
  "Sigma Generation",
  "Endpoint Response",
  "SIEM Integrations",
];

export default function Home() {
  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    revealElements.forEach((element) => {
      element.classList.add("reveal-hidden");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -70px 0px",
      },
    );

    revealElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`${inter.className} ${syne.variable} relative bg-[#000000] text-zinc-400 antialiased`}>
      <a href="#hero" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-md">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#hero" className="group flex items-center gap-3">
            <svg viewBox="0 0 44 24" className="h-6 w-11 text-white" aria-hidden="true">
              <path d="M2 22L16 12L2 2H10L24 12L10 22H2Z" fill="currentColor" />
              <path d="M20 22L34 12L20 2H28L42 12L28 22H20Z" fill="currentColor" />
            </svg>
            <span className="font-[var(--font-syne)] text-xs font-extrabold tracking-[0.2em] text-white sm:text-sm">
              CYGNUS VENTURES
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-zinc-400 md:flex">
            <a href="#studio" className="transition-colors duration-300 hover:text-white">
              Studio
            </a>
            <a href="#products" className="transition-colors duration-300 hover:text-white">
              Products
            </a>
            <a href="#founder" className="transition-colors duration-300 hover:text-white">
              Founder
            </a>
            <a href="#contact" className="transition-colors duration-300 hover:text-white">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-white px-4 py-2 text-sm font-semibold text-black transition duration-300 hover:scale-105"
          >
            Book Intro
          </a>
        </nav>
      </header>

      <main id="hero" className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="pointer-events-none absolute left-1/2 top-24 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.24),rgba(139,92,246,0)_68%)]" />

        <section className="mx-auto w-full max-w-6xl px-4 pb-20 pt-24 sm:px-6 lg:px-8 lg:pt-32">
          <p
            data-reveal
            className="text-xs font-semibold uppercase tracking-[0.26em] text-violet-400"
          >
            AI-Powered Cybersecurity Studio
          </p>

          <h1 className="mt-6 max-w-5xl font-[var(--font-syne)] text-5xl font-extrabold leading-[1.03] text-white sm:text-6xl lg:text-7xl">
            <span className="hero-word" style={{ animationDelay: "0.05s" }}>
              We Build Autonomous
            </span>{" "}
            <br />
            <span className="hero-word text-violet-400" style={{ animationDelay: "0.28s" }}>
              Cyber Defense
            </span>
          </h1>

          <p data-reveal className="mt-7 max-w-lg text-base leading-8 text-zinc-400 sm:text-lg">
            Cygnus Ventures engineers premium, agentic security products for teams that need speed,
            precision, and resilient infrastructure from day one.
          </p>

          <div data-reveal className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#products"
              className="inline-flex items-center justify-center bg-white px-7 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-105"
            >
              Explore Products
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center border border-white/20 bg-transparent px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:border-white/45"
            >
              Contact Us
            </a>
          </div>
        </section>

        <section data-reveal className="border-y border-white/10 bg-black/70">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-6 sm:flex-row sm:items-center sm:px-6 lg:px-8">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-300 sm:mr-2">
              Trusted Technologies
            </span>
            <div className="flex flex-wrap gap-2">
              {trustedTechnologies.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-medium text-zinc-400"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="studio" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 data-reveal className="font-[var(--font-syne)] text-3xl font-extrabold text-white sm:text-4xl">
            The Studio
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Agentic Response Systems",
                body: "Autonomous triage and response flows designed for modern SOC workloads and rapid containment.",
              },
              {
                title: "Enterprise-Ready Architecture",
                body: "Infrastructure-first products with observability, secure defaults, and deployment reliability built in.",
              },
              {
                title: "Founder-Led Velocity",
                body: "Small, high-intensity execution loops that ship meaningful improvements every cycle.",
              },
            ].map((card) => (
              <article
                key={card.title}
                data-reveal
                className="group rounded-[12px] border border-white/10 bg-[rgba(255,255,255,0.02)] p-6 transition duration-300 hover:scale-[1.02] hover:border-white/20 hover:shadow-[0_0_36px_rgba(255,255,255,0.08)]"
              >
                <span className="mb-5 block h-[2px] w-8 bg-violet-500" />
                <h3 className="font-[var(--font-syne)] text-xl font-bold text-white">{card.title}</h3>
                <p className="mt-3 leading-7 text-zinc-400">{card.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="products" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 data-reveal className="font-[var(--font-syne)] text-3xl font-extrabold text-white sm:text-4xl">
            Products
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-[1.8fr_1fr]">
            <article
              data-reveal
              className="group rounded-[12px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-7 transition duration-300 hover:scale-[1.02] hover:border-transparent hover:[background:linear-gradient(#050505,#050505)_padding-box,linear-gradient(135deg,rgba(139,92,246,0.9),rgba(34,211,238,0.9))_border-box]"
            >
              <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Live
              </p>
              <h3 className="mt-5 font-[var(--font-syne)] text-3xl font-extrabold text-white">PhishSlayer</h3>
              <p className="mt-4 max-w-3xl leading-8 text-zinc-400">
                An AI-native SOC platform with coordinated L1/L2/L3 agents for detection, investigation,
                and response.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {phishSlayerTags.map((tag) => (
                  <span key={tag} className="rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://phishslayer.com"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-violet-400"
              >
                Visit PhishSlayer
                <span aria-hidden="true">→</span>
              </a>
            </article>

            <article
              data-reveal
              className="rounded-[12px] border border-white/10 bg-[rgba(255,255,255,0.02)] p-6 grayscale transition duration-300 hover:scale-[1.02] hover:border-white/20"
            >
              <p className="inline-flex rounded-full border border-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
                Coming Soon
              </p>
              <h3 className="mt-5 font-[var(--font-syne)] text-2xl font-bold text-white">Port Patrol</h3>
              <p className="mt-4 leading-8 text-zinc-400">
                Lightweight internet-exposure scanner for lean security teams that need fast perimeter
                visibility.
              </p>
            </article>
          </div>
        </section>

        <section id="founder" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div data-reveal>
              <h2 className="font-[var(--font-syne)] text-3xl font-extrabold text-white sm:text-4xl">
                Founder-Led by Design
              </h2>
              <p className="mt-6 text-lg leading-9 text-zinc-300">
                Cygnus Ventures is led by Muhammad Zain, building cybersecurity products with a direct focus
                on operational quality, technical depth, and pragmatic deployment speed.
              </p>
            </div>

            <div data-reveal className="grid gap-5 rounded-[12px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-7">
              {[
                { value: "01", label: "Founder" },
                { value: "02", label: "Products in Market" },
                { value: "03", label: "Core Security Tracks" },
              ].map((item) => (
                <div key={item.label} className="flex items-end justify-between border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                  <span className="font-[var(--font-syne)] text-5xl font-extrabold text-violet-400">{item.value}</span>
                  <span className="pb-1 text-base font-medium text-white">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="relative border-y border-white/10">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.2),rgba(0,0,0,0)_65%)]" />
          <div className="relative mx-auto w-full max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
            <h2 data-reveal className="font-[var(--font-syne)] text-4xl font-extrabold text-white sm:text-5xl">
              Build the Next Layer of Defense
            </h2>
            <p data-reveal className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
              Partner with Cygnus Ventures to deploy AI-powered security systems that move as fast as your
              attackers.
            </p>
            <div data-reveal className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://phishslayer.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center bg-white px-7 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-105"
              >
                Request Early Access
              </a>
              <a
                href="mailto:contact@cygnusventures.dev"
                className="inline-flex items-center justify-center border border-white/20 bg-transparent px-7 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:border-white/50"
              >
                contact@cygnusventures.dev
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-8 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>CYGNUS VENTURES</p>
          <p>© 2026 Cygnus Ventures. All rights reserved.</p>
        </div>
      </footer>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        .hero-word {
          display: inline-block;
          opacity: 0;
          transform: translateY(20px);
          animation: hero-word-in 0.75s ease-out forwards;
        }

        .reveal-hidden {
          opacity: 0;
          transform: translateY(26px);
          transition: opacity 700ms ease, transform 700ms ease;
        }

        .reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes hero-word-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
