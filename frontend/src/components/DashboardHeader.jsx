export default function DashboardHeader() {
  return (
    <header className="rounded-4xl border border-zinc-200 bg-white/90 p-8 shadow-lg shadow-zinc-200/50 backdrop-blur-xl dark:border-zinc-800 dark:bg-zinc-950/95 dark:shadow-black/10">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
            GraphLore Studio
          </p>
          <h1 className="text-3xl font-semibold text-zinc-950 dark:text-white">
            Build interactive narrative maps with clarity.
          </h1>
          <p className="max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-300">
            Explore your story structure, surface entity relationships, and refine search-driven scenes with an adaptive workspace designed for rapid iteration.
          </p>
        </div>
        <div className="rounded-3xl bg-zinc-950 px-5 py-4 text-right text-white shadow-xl shadow-sky-500/10 sm:w-[260px]">
          <p className="text-sm uppercase tracking-[0.2em] text-sky-300">Live pipeline health</p>
          <p className="mt-3 text-3xl font-semibold">97%</p>
          <p className="text-sm text-zinc-300">Connection status stable · last sync 2m ago</p>
        </div>
      </div>
    </header>
  );
}
