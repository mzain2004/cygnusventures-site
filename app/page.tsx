"use client";

import { Inter, JetBrains_Mono, Syne } from "next/font/google";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const syne = Syne({ subsets: ["latin"], variable: "--font-syne", weight: ["700", "800"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains-mono" });

const credibilityStack = ["Next.js", "Supabase", "Google Gemini", "Groq", "Wazuh", "Cloudflare"];

const phishSlayerTags = [
  "L1/L2/L3 Agents",
  "Wazuh Integration",
  "Sigma Rules",
  "IOC Enrichment",
  "Deep Scan",
];

export default function Home() {
  useEffect(() => {
    const revealElements = document.querySelectorAll<HTMLElement>("[data-reveal]");

    revealElements.forEach((element) => {
      element.classList.add("opacity-0", "translate-y-6");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-6");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      },
    );

    revealElements.forEach((element) => {
      element.classList.add("transition-all", "duration-700", "ease-out");
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className={`${inter.className} ${syne.variable} ${jetbrainsMono.variable} bg-[#080808] text-white antialiased`}
    >
      <a href="#hero" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080808]/85 backdrop-blur-md">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#hero" className="flex items-center gap-3">
            <span className="font-[var(--font-syne)] text-xl font-extrabold tracking-tight text-[#C9A84C]">
              CV
            </span>
            <span className="font-[var(--font-syne)] text-xs font-bold tracking-[0.2em] text-white sm:text-sm">
              CYGNUS VENTURES
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-white/85 md:flex">
            <a href="#about" className="transition-colors hover:text-[#C9A84C]">
              About
            </a>
            <a href="#products" className="transition-colors hover:text-[#C9A84C]">
              Products
            </a>
            <a href="#contact" className="transition-colors hover:text-[#C9A84C]">
              Contact
            </a>
          </div>

          <a
            href="https://phishslayer.com"
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-[#C9A84C] px-4 py-2 text-sm font-semibold text-[#C9A84C] transition-colors hover:bg-[#C9A84C] hover:text-[#080808]"
          >
            View PhishSlayer
          </a>
        </nav>
      </header>

      <main id="hero" className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-60">
          <div className="absolute inset-0">
            {Array.from({ length: 14 }).map((_, index) => (
              <span
                key={`v-${index}`}
                className="absolute top-0 h-full w-px bg-white/5"
                style={{ left: `${index * 8}%`, animationDelay: `${index * 0.08}s` }}
              />
            ))}
            {Array.from({ length: 12 }).map((_, index) => (
              <span
                key={`h-${index}`}
                className="absolute left-0 w-full border-t border-white/5"
                style={{ top: `${index * 9}%`, animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
          <div className="absolute inset-0 animate-pulse-slow bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.1),rgba(8,8,8,0))]" />
        </div>

        <section className="mx-auto flex w-full max-w-6xl flex-col px-4 pb-20 pt-24 sm:px-6 lg:px-8 lg:pt-28">
          <p
            data-reveal
            className="w-fit border border-[#C9A84C]/40 bg-[#C9A84C]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.26em] text-[#C9A84C]"
          >
            AI-Powered Cybersecurity Studio
          </p>

          <h1
            data-reveal
            className="mt-6 max-w-4xl font-[var(--font-syne)] text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            We Build the Tools That Stop Threats Before They Start
          </h1>

          <p data-reveal className="mt-6 max-w-3xl text-base leading-8 text-white/75 sm:text-lg">
            Cygnus Ventures is a product studio engineering next-generation agentic security infrastructure
            for modern enterprises.
          </p>

          <div data-reveal className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#products"
              className="rounded-md bg-[#C9A84C] px-6 py-3 text-center text-sm font-semibold text-[#080808] transition hover:brightness-110"
            >
              Explore PhishSlayer
            </a>
            <a
              href="#contact"
              className="rounded-md border border-white/20 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:border-[#C9A84C] hover:text-[#C9A84C]"
            >
              Get in Touch
            </a>
          </div>
        </section>

        <section data-reveal className="border-y border-white/10 bg-white/5">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-6 text-sm text-white/55 sm:flex-row sm:items-center sm:px-6 lg:px-8">
            <span className="font-semibold uppercase tracking-[0.16em] text-white/70">Built on</span>
            <div className="flex flex-wrap items-center gap-2">
              {credibilityStack.map((item) => (
                <span
                  key={item}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1 font-[var(--font-jetbrains-mono)] text-xs uppercase tracking-wide"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 data-reveal className="font-[var(--font-syne)] text-3xl font-bold text-white sm:text-4xl">
            The Studio
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <article
              data-reveal
              className="rounded-md border border-white/10 border-t-[#C9A84C] bg-white/[0.04] p-6"
            >
              <h3 className="font-[var(--font-syne)] text-xl font-bold text-white">Agentic Security</h3>
              <p className="mt-3 leading-7 text-white/72">
                We engineer autonomous AI agents that triage, respond, and hunt threats across your entire
                infrastructure.
              </p>
            </article>

            <article
              data-reveal
              className="rounded-md border border-white/10 border-t-[#C9A84C] bg-white/[0.04] p-6"
            >
              <h3 className="font-[var(--font-syne)] text-xl font-bold text-white">Enterprise Infrastructure</h3>
              <p className="mt-3 leading-7 text-white/72">
                Production-grade platforms built for scale, compliance, and real-world deployment from day
                one.
              </p>
            </article>

            <article
              data-reveal
              className="rounded-md border border-white/10 border-t-[#C9A84C] bg-white/[0.04] p-6"
            >
              <h3 className="font-[var(--font-syne)] text-xl font-bold text-white">Founder-Led Speed</h3>
              <p className="mt-3 leading-7 text-white/72">
                No committees. No bloat. We ship fast, iterate faster, and stay obsessed with what actually
                works.
              </p>
            </article>
          </div>
        </section>

        <section id="products" className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 data-reveal className="font-[var(--font-syne)] text-3xl font-bold text-white sm:text-4xl">
            Our Products
          </h2>

          <div className="mt-10 grid gap-6 lg:grid-cols-[2fr_1fr]">
            <article
              data-reveal
              className="group rounded-md border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:border-[#C9A84C]/80 hover:shadow-[0_0_40px_rgba(201,168,76,0.24)]"
            >
              <p className="inline-flex rounded-md border border-[#C9A84C]/40 bg-[#C9A84C]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#C9A84C]">
                Live · Agentic SOC Platform
              </p>
              <h3 className="mt-5 font-[var(--font-syne)] text-3xl font-extrabold text-white">PhishSlayer</h3>
              <p className="mt-4 max-w-3xl leading-8 text-white/75">
                A three-tier autonomous SOC platform with L1/L2/L3 AI agents. Real-time threat detection,
                IOC enrichment, Sigma rule generation, and endpoint response — all automated.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {phishSlayerTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-white/15 px-3 py-1 font-[var(--font-jetbrains-mono)] text-xs text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="https://phishslayer.com"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex rounded-md border border-[#C9A84C] px-4 py-2 text-sm font-semibold text-[#C9A84C] transition-colors hover:bg-[#C9A84C] hover:text-[#080808]"
              >
                Visit PhishSlayer →
              </a>
            </article>

            <article
              data-reveal
              className="rounded-md border border-white/10 bg-white/[0.02] p-6 text-white/65"
            >
              <p className="inline-flex rounded-md border border-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                In Development
              </p>
              <h3 className="mt-5 font-[var(--font-syne)] text-2xl font-bold text-white/80">Port Patrol</h3>
              <p className="mt-4 leading-8">
                Lightweight web-facing vulnerability scanner for SMBs. Instant exposure detection, no
                agents required.
              </p>
              <p className="mt-6 font-[var(--font-jetbrains-mono)] text-xs uppercase tracking-[0.16em] text-white/45">
                Locked · Coming Soon
              </p>
            </article>
          </div>
        </section>

        <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 data-reveal className="font-[var(--font-syne)] text-3xl font-bold text-white sm:text-4xl">
            Founded by a Builder
          </h2>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <p data-reveal className="rounded-md border border-white/10 bg-white/[0.04] p-6 text-lg leading-9 text-white/80">
              Cygnus Ventures was founded by Muhammad Zain, a cybersecurity engineer and BS Cybersecurity
              student building production AI security tools from the ground up. No VC. No team. Just
              obsession.
            </p>

            <div data-reveal className="rounded-md border border-[#C9A84C]/40 bg-[#C9A84C]/5 p-6">
              <ul className="space-y-5 font-[var(--font-syne)] text-xl font-bold text-[#C9A84C] sm:text-2xl">
                <li>01 — Founder</li>
                <li>02 — Products in Development</li>
                <li>03 — Enterprise Features, Zero Compromise</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="border-y border-white/10 bg-white/[0.03]">
          <div className="mx-auto w-full max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
            <h2 data-reveal className="font-[var(--font-syne)] text-3xl font-bold text-white sm:text-4xl">
              Ready to Secure Your Infrastructure?
            </h2>
            <p data-reveal className="mt-4 text-lg leading-8 text-white/75">
              Get early access to PhishSlayer or reach out to discuss partnerships.
            </p>
            <div data-reveal className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://phishslayer.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-md bg-[#C9A84C] px-6 py-3 text-sm font-semibold text-[#080808] transition hover:brightness-110"
              >
                Get Early Access
              </a>
              <a
                href="mailto:contact@cygnusventures.dev"
                className="rounded-md border border-white/20 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-[#C9A84C] hover:text-[#C9A84C]"
              >
                contact@cygnusventures.dev
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p className="font-[var(--font-syne)] font-bold text-white">CV CYGNUS VENTURES</p>
          <p className="text-white/60">© 2026 Cygnus Ventures. All rights reserved.</p>
          <div className="flex items-center gap-4 text-white/70">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-[#C9A84C]"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M6.94 8.5v9h-3v-9h3ZM5.44 4.25a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5ZM20.06 12.32v5.18h-3v-4.83c0-1.22-.44-2.06-1.52-2.06-.83 0-1.33.56-1.55 1.1-.08.2-.1.48-.1.76v5.03h-3s.04-8.16 0-9h3v1.27c.4-.62 1.12-1.5 2.73-1.5 2 0 3.44 1.31 3.44 4.05Z" />
              </svg>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="transition-colors hover:text-[#C9A84C]"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M18.9 2h3.68l-8.04 9.2L24 22h-7.41l-5.8-6.77L4.87 22H1.18l8.6-9.83L0 2h7.6l5.25 6.19L18.9 2Zm-1.3 17.77h2.04L6.5 4.13H4.31L17.6 19.77Z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.4;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
