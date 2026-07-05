export default function GraphControls({
  query,
  onQueryChange,
  categories,
  activeCategory,
  onCategoryChange,
  viewMode,
  onToggleView,
  resultCount,
}) {
  return (
    <section className="flex flex-col gap-5 rounded-4xl border border-zinc-200 bg-white/90 p-6 shadow-sm shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-950/95 dark:shadow-black/10">
      <div className="grid gap-4 md:grid-cols-[1.8fr_1.2fr]">
        <label className="block">
          <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
            Search graph assets
          </span>
          <input
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="Find nodes, entities, story beats..."
            className="mt-2 w-full rounded-3xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-sky-400 dark:focus:ring-sky-500/20"
          />
        </label>
        <label className="block">
          <span className="text-sm font-medium text-zinc-700 dark:text-zinc-200">
            Filter by category
          </span>
          <select
            value={activeCategory}
            onChange={(event) => onCategoryChange(event.target.value)}
            className="mt-2 w-full rounded-3xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-sky-400 dark:focus:ring-sky-500/20"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="flex flex-col gap-4 rounded-3xl bg-zinc-100 p-5 text-sm text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold">{resultCount} matching items</p>
          <p className="text-zinc-500 dark:text-zinc-400">
            Use the controls to refine the interactive graph viewport.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => onToggleView("graph")}
            className={`rounded-full px-4 py-2 text-sm transition ${
              viewMode === "graph"
                ? "bg-sky-600 text-white shadow-lg shadow-sky-500/20"
                : "bg-white text-zinc-800 ring-1 ring-zinc-200 hover:bg-zinc-100 dark:bg-zinc-950 dark:text-zinc-100 dark:ring-zinc-700"
            }`}
          >
            Graph view
          </button>
          <button
            type="button"
            onClick={() => onToggleView("cards")}
            className={`rounded-full px-4 py-2 text-sm transition ${
              viewMode === "cards"
                ? "bg-sky-600 text-white shadow-lg shadow-sky-500/20"
                : "bg-white text-zinc-800 ring-1 ring-zinc-200 hover:bg-zinc-100 dark:bg-zinc-950 dark:text-zinc-100 dark:ring-zinc-700"
            }`}
          >
            Detail cards
          </button>
        </div>
      </div>
    </section>
  );
}
