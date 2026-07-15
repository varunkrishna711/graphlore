"use client";

import React from "react";

export default function LandingPage({ onEnterSandbox }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-zinc-950 font-sans text-zinc-100 grid-bg">
      {/* Background Floating Orbs */}
      <div className="pointer-events-none absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[120px] orb-float-1" />
      <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-violet-600/15 blur-[150px] orb-float-2" />
      <div className="pointer-events-none absolute top-[30%] right-[20%] h-[400px] w-[400px] rounded-full bg-emerald-500/5 blur-[100px] orb-float-3" />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-12">
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
        <div>
          <button
            onClick={onEnterSandbox}
            className="rounded-full border border-zinc-800 bg-zinc-900/60 px-5 py-2 text-sm font-medium transition hover:border-zinc-700 hover:bg-zinc-900 hover:text-white"
          >
            Access Sandbox
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <main className="relative z-10 mx-auto max-w-7xl px-6 pt-12 pb-24 sm:px-12 lg:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Left Hero Column */}
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
              Eliminate creative friction on your platform. GraphLore ingests high-entropy brainstorms, dream logs, and unstructured outlines, processing them through a deterministic LangGraph machine. Receive production-ready JSON schemas complete with Hollywood plot acts, compliance-scrubbed entities, and automated storyboard visualization.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                onClick={onEnterSandbox}
                className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 px-8 py-4 font-semibold text-white shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(99,102,241,0.5)] active:scale-[0.98]"
              >
                Enter B2B Studio
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
                className="inline-flex items-center justify-center rounded-full border border-zinc-800 bg-zinc-900/40 px-8 py-4 font-medium transition hover:border-zinc-700 hover:bg-zinc-900"
              >
                Learn Architecture
              </a>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6 border-t border-zinc-800/80 pt-8 text-left">
              <div>
                <p className="text-3xl font-extrabold text-white">97%</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Uptime Reliability
                </p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white">&lt; 3.2s</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  Schema Assembly
                </p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white">100%</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-zinc-500">
                  IP Compliance
                </p>
              </div>
            </div>
          </div>

          {/* Right Hero Column: Interactive Diagram */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[2rem] border border-zinc-800 bg-zinc-900/20 p-6 shadow-2xl backdrop-blur-md">
              <div className="absolute top-4 right-4 flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-rose-500/60" />
                <span className="h-3 w-3 rounded-full bg-amber-500/60" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/60" />
              </div>

              <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 block mb-6">
                Active Node Topology
              </span>

              {/* Node Graph Display */}
              <div className="space-y-6">
                {/* Node 1 */}
                <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 transition-all duration-300 hover:border-indigo-500/40 hover:bg-zinc-900">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800 text-xs font-bold text-zinc-400 group-hover:bg-indigo-950 group-hover:text-indigo-400">
                      01
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-white">Ingestion Gateway</h4>
                      <p className="text-xs text-zinc-500">Normalizes chaotic outline strings</p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center -my-3">
                  <div className="h-6 w-0.5 bg-gradient-to-b from-indigo-500 to-emerald-500" />
                </div>

                {/* Node 2 */}
                <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 transition-all duration-300 hover:border-emerald-500/40 hover:bg-zinc-900">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800 text-xs font-bold text-zinc-400 group-hover:bg-emerald-950 group-hover:text-emerald-400">
                      02
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-white">Compliance &amp; IP Filter</h4>
                      <p className="text-xs text-zinc-500">Abstracts trademark violations</p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center -my-3">
                  <div className="h-6 w-0.5 bg-gradient-to-b from-emerald-500 to-violet-500" />
                </div>

                {/* Node 3 */}
                <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 transition-all duration-300 hover:border-violet-500/40 hover:bg-zinc-900">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800 text-xs font-bold text-zinc-400 group-hover:bg-violet-950 group-hover:text-violet-400">
                      03
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-white">Narrative Architect</h4>
                      <p className="text-xs text-zinc-500">Maps deterministic Pydantic schemas</p>
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex justify-center -my-3">
                  <div className="h-6 w-0.5 bg-gradient-to-b from-violet-500 to-cyan-500" />
                </div>

                {/* Node 4 */}
                <div className="group relative rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 transition-all duration-300 hover:border-cyan-500/40 hover:bg-zinc-900">
                  <div className="flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-800 text-xs font-bold text-zinc-400 group-hover:bg-cyan-950 group-hover:text-cyan-400">
                      04
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-white">Media Worker</h4>
                      <p className="text-xs text-zinc-500">Generates storyboard visual sequences</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Feature Section */}
      <section id="features" className="relative z-10 border-t border-zinc-900 bg-zinc-950/80 px-6 py-24 sm:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-sm font-bold uppercase tracking-[0.24em] text-indigo-400">
              Core Capabilities
            </h2>
            <h3 className="text-3xl font-extrabold text-white sm:text-4xl">
              Eliminate Unstructured Narrative Bloat
            </h3>
            <p className="mx-auto max-w-2xl text-zinc-400">
              B2B services require clean, consistent database shapes. Our engine secures the pipeline and wraps unpredictable AI nodes into a deterministic logic layout.
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
              <h4 className="text-xl font-bold text-white">LangGraph Memory Engine</h4>
              <p className="text-sm leading-6 text-zinc-400">
                Maintains a sequential memory graph, replacing erratic single-shot prompts with self-correcting logic blocks that flow sequentially.
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
              <h4 className="text-xl font-bold text-white">Strict Pydantic Validation</h4>
              <p className="text-sm leading-6 text-zinc-400">
                Leverages native Gemini `json_schema` rules. Inputs map cleanly to structured interfaces, preventing runtime database serialization exceptions.
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
              <h4 className="text-xl font-bold text-white">Automated Compliance Filter</h4>
              <p className="text-sm leading-6 text-zinc-400">
                Built-in safety nodes intercept, clean, and abstract copyrighted characters or corporate trademarks, defending your commercial operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-900 bg-zinc-950 py-8 px-6 text-center text-xs text-zinc-600">
        <p>&copy; {new Date().getFullYear()} GraphLore Engine Gateway. All rights reserved. Enterprise B2B Sandbox.</p>
      </footer>
    </div>
  );
}
