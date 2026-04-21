"use client";

import { Inter, Syne } from "next/font/google";
import { useEffect } from "react";

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

      <header className="sticky top-0 z-50 border-b border-white/5 bg-black/90 backdrop-blur-md">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#hero" className="group flex items-center gap-3">
            <svg
              viewBox="0 0 44 24"
              className="h-6 w-12 text-white"
              shapeRendering="geometricPrecision"
              aria-hidden="true"
            >
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
            className="inline-flex items-center justify-center border border-white/20 bg-transparent px-4 py-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-black"
          >
            Book Intro
          </a>
        </nav>
      </header>

      <main id="hero" className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="pointer-events-none absolute left-1/2 top-20 h-[540px] w-[540px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.24),rgba(139,92,246,0)_68%)]" />
        <div className="pointer-events-none absolute right-10 top-8 h-[320px] w-[320px] rounded-full bg-violet-900/30 blur-3xl" />

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
              <span
                aria-hidden="true"
                className="cursor-blink ml-2 inline-block h-[0.9em] w-px bg-white align-[-0.05em]"
              />
            </span>
          </h1>

          <p data-reveal className="mt-7 max-w-lg text-base leading-8 text-zinc-400 sm:text-lg">
            Cygnus Ventures engineers premium, agentic security products for teams that need speed,
            precision, and resilient infrastructure from day one.
          </p>

          <div
            data-reveal
            className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500"
          >
            <span>3 Products</span>
            <span aria-hidden="true" className="h-4 w-px bg-white/10" />
            <span>L1/L2/L3 Agents</span>
            <span aria-hidden="true" className="h-4 w-px bg-white/10" />
            <span>Production Ready</span>
          </div>

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

        <section data-reveal className="border-y border-white/5">
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
                className="group rounded-[12px] border border-white/10 bg-[rgba(255,255,255,0.02)] p-8 transition duration-300 hover:scale-[1.02] hover:border-white/20 hover:shadow-[0_0_0_1px_rgba(139,92,246,0.3)]"
              >
                <span className="mb-6 block h-px w-8 bg-violet-500" />
                <div className="flex items-center gap-3">
                  <span className="text-violet-400" aria-hidden="true">
                    {card.title === "Agentic Response Systems" ? (
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                        <path
                          d="M12 2L20 6V12C20 16.6 16.8 20.3 12 22C7.2 20.3 4 16.6 4 12V6L12 2Z"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        />
                        <path
                          d="M9 12.5L11 14.5L15.5 10"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : card.title === "Enterprise-Ready Architecture" ? (
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                        <path
                          d="M6 7H18V11H6V7Z"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6 13H18V17H6V13Z"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.5 9H8.51"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                        <path
                          d="M8.5 15H8.51"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                        <path
                          d="M13 2L4 14H11L9 22L20 10H13L13 2Z"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </span>
                  <h3 className="font-[var(--font-syne)] text-xl font-bold text-white">{card.title}</h3>
                </div>
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
            <div
              data-reveal
              className="group rounded-xl p-[1px] bg-gradient-to-br from-violet-500/50 via-transparent to-cyan-500/20 transition duration-300 hover:scale-[1.02]"
            >
              <div className="rounded-xl bg-black p-6 ring-1 ring-white/10">
                <p className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
                  <span className="relative flex h-2 w-2" aria-hidden="true">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
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
              </div>
            </div>

            <article
              data-reveal
              className="rounded-[12px] border border-white/10 bg-[rgba(255,255,255,0.02)] p-6 grayscale opacity-50 transition duration-300 hover:scale-[1.02] hover:border-white/20 hover:grayscale-0 hover:opacity-100"
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
              <p className="mt-6 border-l-2 border-violet-500/30 pl-4 text-lg leading-9 text-zinc-300">
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
                  <span className="font-[var(--font-syne)] text-4xl font-extrabold text-violet-400">{item.value}</span>
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
          <div className="flex items-center gap-3">
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Cygnus Ventures on X"
              className="inline-flex h-9 w-9 items-center justify-center text-zinc-600 transition-colors duration-300 hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M18.2 2H21l-6.5 7.4L22 22h-6.8l-5.3-6.9L3.8 22H1l7-8L2 2h7l4.8 6.4L18.2 2ZM17 20h1.6L8.9 4H7.2L17 20Z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Cygnus Ventures on LinkedIn"
              className="inline-flex h-9 w-9 items-center justify-center text-zinc-600 transition-colors duration-300 hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M6.94 6.5A2.19 2.19 0 1 1 6.94 2.1a2.19 2.19 0 0 1 0 4.4ZM5.5 21.9H8.4V8.7H5.5v13.2ZM12 8.7h2.8v1.8h.04c.4-.75 1.38-1.55 2.84-1.55 3.04 0 3.6 2 3.6 4.6v8.35h-2.9v-7.4c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.92v7.53H12V8.7Z" />
              </svg>
            </a>
          </div>
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

        .cursor-blink {
          animation: cursor-blink 1.1s steps(1, end) infinite;
        }

        @keyframes cursor-blink {
          0%,
          49% {
            opacity: 1;
          }
          50%,
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
