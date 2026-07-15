export default function DashboardHeader({ onBackToLanding }) {
  return (
    <header className="rounded-[2rem] border border-zinc-800/80 bg-zinc-900/60 p-8 shadow-xl backdrop-blur-xl">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            {onBackToLanding && (
              <button
                onClick={onBackToLanding}
                className="group mr-2 flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-400 transition hover:border-zinc-700 hover:text-white"
                title="Return to Gate"
              >
                <svg
                  className="h-4 w-4 transition-transform group-hover:-translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              </button>
            )}
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-400">
              GraphLore Studio
            </p>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Build interactive narrative maps with clarity.
          </h1>
          <p className="max-w-2xl text-sm leading-6 text-zinc-400">
            Explore your story structure, surface entity relationships, and refine search-driven scenes with an adaptive workspace designed for rapid iteration.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-850 bg-zinc-950/80 px-5 py-4 text-right text-white shadow-xl shadow-indigo-500/5 sm:w-[260px]">
          <p className="text-xs uppercase tracking-[0.2em] text-indigo-400">Live pipeline health</p>
          <p className="mt-2 text-2xl font-bold text-white">97%</p>
          <p className="text-xs text-zinc-500">Connection status stable</p>
        </div>
      </div>
    </header>
  );
}

