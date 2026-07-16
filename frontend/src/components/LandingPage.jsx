"use client";

import React from "react";

export default function LandingPage({ onEnterSandbox }) {
  return (
    <div className="relative min-h-screen bg-zinc-950 font-sans text-zinc-100 grid-bg">
      {/* Background Floating Orbs */}
      <div className="pointer-events-none absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[120px] orb-float-1" />
      <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-violet-600/15 blur-[150px] orb-float-2" />
      <div className="pointer-events-none absolute top-[30%] right-[20%] h-[400px] w-[400px] rounded-full bg-emerald-500/5 blur-[100px] orb-float-3" />

      {/* Navigation Bar Section */}
      <nav className="relative z-20 border-b border-zinc-900 bg-zinc-950/60 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-6 py-4 sm:px-12 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 shadow-[0_0_20px_rgba(99,102,241,0.5)]">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </div>
            <div>
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
                GraphLore
              </span>
              <span className="ml-2 text-xs font-semibold uppercase tracking-widest text-indigo-400">
                Engine
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#features" className="transition hover:text-indigo-400">
              Features
            </a>
            <a href="#topology" className="transition hover:text-indigo-400">
              Pipeline Topology
            </a>
            <a href="#metrics" className="transition hover:text-indigo-400">
              System Stats
            </a>
          </div>

          <div>
            <button
              onClick={onEnterSandbox}
              className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-5 py-2 text-xs font-semibold text-indigo-300 transition hover:bg-indigo-600 hover:text-white"
            >
              Enter B2B Studio
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative z-10 mx-auto max-w-7xl px-6 pt-16 pb-20 sm:px-12 lg:pt-24 lg:pb-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Column */}
          <div className="space-y-8 lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
              </span>
              v2.5 Ingestion Gateway Active
            </div>

            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl leading-none">
              Stateful Narrative Ingestion
              <span className="block mt-2 bg-gradient-to-r from-indigo-400 via-violet-400 to-indigo-500 bg-clip-text text-transparent">
                &amp; Structural IP Automation
              </span>
            </h1>

            <p className="max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
              Eliminate creative friction on your platform. GraphLore ingests
              high-entropy brainstorms, dream logs, and unstructured outlines,
              processing them through a deterministic LangGraph machine. Receive
              production-ready JSON schemas complete with Hollywood plot acts,
              compliance-scrubbed entities, and automated storyboard
              visualization.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                onClick={onEnterSandbox}
                className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-8 py-4.5 font-semibold text-white shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(99,102,241,0.5)] active:scale-[0.98]"
              >
                Access B2B Studio
                <svg
                  className="h-5 w-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>

              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/40 px-8 py-4.5 font-medium transition hover:border-zinc-700 hover:bg-zinc-900"
              >
                Learn Architecture
              </a>
            </div>
          </div>

          {/* Right Column: Floating Cybernetic Brain */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Ambient background glow */}
            <div className="absolute top-1/2 left-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-[80px]" />

            <div className="relative group p-4 animate-float-avatar">
              <div className="absolute -inset-0.5 rounded-[2.5rem] bg-gradient-to-r from-indigo-500 to-violet-600 opacity-20 blur transition duration-1000 group-hover:opacity-40" />
              <div className="relative rounded-[2.5rem] border border-zinc-800 bg-zinc-950/60 p-3 shadow-2xl backdrop-blur-md overflow-hidden">
                <img
                  src="/images/avatar.png"
                  alt="GraphLore Storytelling Brain"
                  className="h-96 w-96 rounded-[2rem] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Floating interactive node stats on the image */}
              <div className="absolute -bottom-4 -left-4 glass-panel rounded-2xl p-4 shadow-xl border border-indigo-500/20">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-indigo-400">
                  GPU Render Node
                </span>
                <span className="text-sm font-bold text-white">
                  Active (100 FPS)
                </span>
              </div>

              <div className="absolute -top-4 -right-4 glass-panel rounded-2xl p-4 shadow-xl border border-violet-500/20">
                <span className="block text-[10px] font-bold uppercase tracking-wider text-violet-400">
                  State Memory
                </span>
                <span className="text-sm font-bold text-white">
                  Graph-Linked
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Feature Section */}
      <section
        id="features"
        className="relative z-10 border-t border-zinc-900 bg-zinc-950/40 px-6 py-24 sm:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-sm font-bold uppercase tracking-[0.24em] text-indigo-400">
              Core Capabilities
            </h2>
            <h3 className="text-3xl font-extrabold text-white sm:text-4xl">
              Eliminate Unstructured Narrative Bloat
            </h3>
            <p className="mx-auto max-w-2xl text-zinc-400">
              B2B services require clean, consistent database shapes. Our engine
              secures the pipeline and wraps unpredictable AI nodes into a
              deterministic logic layout.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="glass-panel glass-panel-hover rounded-[2rem] p-8 space-y-5">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white">
                LangGraph Memory Engine
              </h4>
              <p className="text-sm leading-6 text-zinc-400">
                Maintains a sequential memory graph, replacing erratic
                single-shot prompts with self-correcting logic blocks that flow
                sequentially.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="glass-panel glass-panel-hover rounded-[2rem] p-8 space-y-5">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white">
                Strict Pydantic Validation
              </h4>
              <p className="text-sm leading-6 text-zinc-400">
                Leverages native Gemini `json_schema` rules. Inputs map cleanly
                to structured interfaces, preventing database serialization
                exceptions.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="glass-panel glass-panel-hover rounded-[2rem] p-8 space-y-5">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-400">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-white">
                Automated Compliance Filter
              </h4>
              <p className="text-sm leading-6 text-zinc-400">
                Built-in safety nodes intercept, clean, and abstract copyrighted
                characters or corporate trademarks, defending your commercial
                operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Topology Section */}
      <section
        id="topology"
        className="relative z-10 border-t border-zinc-900 bg-zinc-950/60 px-6 py-24 sm:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-sm font-bold uppercase tracking-[0.24em] text-indigo-400">
              Pipeline Topology
            </h2>
            <h3 className="text-3xl font-extrabold text-white sm:text-4xl">
              How GraphLore Generates Content
            </h3>
            <p className="mx-auto max-w-2xl text-zinc-400">
              From loose raw plot ideas to optimized visual storyboards, see our
              automated, deterministic processing sequence.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4 relative">
            {/* Step 1 */}
            <div className="glass-panel rounded-[2rem] p-6 space-y-4 relative">
              <span className="absolute top-6 right-6 text-xs font-mono text-indigo-400 font-bold bg-indigo-500/10 px-3 py-1 rounded-full">
                Node 01
              </span>
              <div className="h-10 w-10 rounded-lg bg-zinc-800 flex items-center justify-center text-white font-bold text-sm">
                I
              </div>
              <h4 className="text-base font-bold text-white">
                Ingestion Gateway
              </h4>
              <p className="text-xs leading-5 text-zinc-400">
                Receives chaotic outline strings and formats them into sanitized
                strings.
              </p>
            </div>

            {/* Step 2 */}
            <div className="glass-panel rounded-[2rem] p-6 space-y-4 relative">
              <span className="absolute top-6 right-6 text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1 rounded-full">
                Node 02
              </span>
              <div className="h-10 w-10 rounded-lg bg-zinc-800 flex items-center justify-center text-white font-bold text-sm">
                C
              </div>
              <h4 className="text-base font-bold text-white">
                Compliance Scan
              </h4>
              <p className="text-xs leading-5 text-zinc-400">
                Filters out trademarked brands, protected characters, and
                inappropriate content.
              </p>
            </div>

            {/* Step 3 */}
            <div className="glass-panel rounded-[2rem] p-6 space-y-4 relative">
              <span className="absolute top-6 right-6 text-xs font-mono text-violet-400 font-bold bg-violet-500/10 px-3 py-1 rounded-full">
                Node 03
              </span>
              <div className="h-10 w-10 rounded-lg bg-zinc-800 flex items-center justify-center text-white font-bold text-sm">
                A
              </div>
              <h4 className="text-base font-bold text-white">
                Narrative Architect
              </h4>
              <p className="text-xs leading-5 text-zinc-400">
                Structures the narrative into a Hollywood 3-act pacing format
                with pydantic schemas.
              </p>
            </div>

            {/* Step 4 */}
            <div className="glass-panel rounded-[2rem] p-6 space-y-4 relative">
              <span className="absolute top-6 right-6 text-xs font-mono text-cyan-400 font-bold bg-cyan-500/10 px-3 py-1 rounded-full">
                Node 04
              </span>
              <div className="h-10 w-10 rounded-lg bg-zinc-800 flex items-center justify-center text-white font-bold text-sm">
                M
              </div>
              <h4 className="text-base font-bold text-white">
                Media Generator
              </h4>
              <p className="text-xs leading-5 text-zinc-400">
                Assembles multi-frame visual storyboards depicting the critical
                acts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section
        id="metrics"
        className="relative z-10 border-t border-zinc-900 bg-zinc-950/40 px-6 py-24 sm:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-sm font-bold uppercase tracking-[0.24em] text-indigo-400">
                System Stats
              </h2>
              <h3 className="text-3xl font-extrabold text-white sm:text-4xl">
                Engine Reliability &amp; Speed Metrics
              </h3>
              <p className="text-zinc-400 leading-7">
                GraphLore operates with high concurrency, managing background
                media rendering tasks on automated threads. Review our live
                operational benchmarks.
              </p>
            </div>

            <div className="lg:col-span-6 grid gap-6 sm:grid-cols-2">
              <div className="glass-panel p-6 rounded-2xl">
                <span className="block text-3xl font-extrabold text-white">
                  99.9%
                </span>
                <span className="text-xs font-medium uppercase text-zinc-500 tracking-wider">
                  Uptime SLA
                </span>
              </div>
              <div className="glass-panel p-6 rounded-2xl">
                <span className="block text-3xl font-extrabold text-white">
                  &lt; 1.2s
                </span>
                <span className="text-xs font-medium uppercase text-zinc-500 tracking-wider">
                  Avg Latency
                </span>
              </div>
              <div className="glass-panel p-6 rounded-2xl">
                <span className="block text-3xl font-extrabold text-white">
                  100%
                </span>
                <span className="text-xs font-medium uppercase text-zinc-500 tracking-wider">
                  Type Safety
                </span>
              </div>
              <div className="glass-panel p-6 rounded-2xl">
                <span className="block text-3xl font-extrabold text-white">
                  50+
                </span>
                <span className="text-xs font-medium uppercase text-zinc-500 tracking-wider">
                  Stories Parsed
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-900 bg-zinc-950 py-12 px-6 text-center text-xs text-zinc-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p>
            &copy; {new Date().getFullYear()} GraphLore Engine Gateway. All
            rights reserved. Enterprise B2B Sandbox.
          </p>
          <div className="flex gap-6 text-zinc-400">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition">
              Contact Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
