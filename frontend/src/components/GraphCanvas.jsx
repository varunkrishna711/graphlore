export default function GraphCanvas({
  nodes,
  edges,
  selectedNodeId,
  onSelectNode,
  mode,
}) {
  return (
    <section className="grid gap-6">
      <div className="rounded-4xl border border-zinc-200 bg-white/95 p-6 shadow-sm shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-950/95 dark:shadow-black/10">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
              Interactive graph canvas
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-950 dark:text-white">
              {mode === "graph" ? "Network overview" : "Story asset cards"}
            </h2>
          </div>
          <span className="rounded-full bg-zinc-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200">
            {nodes.length} nodes visible
          </span>
        </div>

        {mode === "graph" ? (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {nodes.map((node) => (
              <button
                key={node.id}
                type="button"
                onClick={() => onSelectNode(node.id)}
                className={`group flex flex-col gap-4 rounded-[1.75rem] border p-5 text-left transition duration-200 hover:-translate-y-0.5 hover:border-sky-400 hover:bg-sky-50 dark:border-zinc-800 dark:hover:border-sky-500 dark:hover:bg-sky-950/70 ${
                  node.id === selectedNodeId
                    ? "border-sky-500 bg-sky-50 dark:bg-sky-950/80"
                    : "bg-white dark:bg-zinc-950"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-700 dark:bg-sky-900/70 dark:text-sky-200">
                    {node.category}
                  </span>
                  <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
                    {node.metrics.nodes ??
                      node.metrics.queries ??
                      node.metrics.chapters ??
                      "–"}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zinc-950 dark:text-white">
                    {node.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                    {node.subtitle}
                  </p>
                </div>
                <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">
                  {node.description}
                </p>
              </button>
            ))}
          </div>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {nodes.map((node) => (
              <article
                key={node.id}
                className="rounded-[1.75rem] border border-zinc-200 bg-zinc-50 p-5 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-600 text-white">
                    {node.title.charAt(0)}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">
                      {node.title}
                    </p>
                    <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                      {node.category}
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-6 text-zinc-700 dark:text-zinc-200">
                  {node.description}
                </p>
                <div className="mt-5 grid gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                  {Object.entries(node.metrics).map(([key, value]) => (
                    <div
                      key={key}
                      className="rounded-3xl bg-white/80 px-3 py-2 dark:bg-zinc-950"
                    >
                      <span className="block text-xs uppercase tracking-[0.24em] text-zinc-500 dark:text-zinc-400">
                        {key}
                      </span>
                      <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        )}
      </div>

      <div className="rounded-4xl border border-zinc-200 bg-white/95 p-6 shadow-sm shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-950/95 dark:shadow-black/10">
        <h3 className="text-lg font-semibold text-zinc-950 dark:text-white">
          Relationship stream
        </h3>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
          Explore how selected nodes connect to the rest of the storytelling
          pipeline.
        </p>
        <div className="mt-6 grid gap-3">
          {edges.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-zinc-300 bg-zinc-50 p-5 text-sm text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400">
              No visible relations for the current filter. Refine search or
              choose a different category.
            </div>
          ) : (
            edges.map((edge) => (
              <div
                key={`${edge.source}-${edge.target}`}
                className="flex flex-col gap-2 rounded-3xl border border-zinc-200 bg-white p-4 transition hover:border-sky-400 hover:bg-sky-50 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-sky-500 dark:hover:bg-sky-950/70"
              >
                <div className="flex items-center justify-between gap-3 text-sm font-semibold text-zinc-900 dark:text-white">
                  <span>{edge.source}</span>
                  <span className="text-sky-600">{edge.label}</span>
                  <span>{edge.target}</span>
                </div>
                <div className="flex flex-wrap gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                  <button
                    type="button"
                    onClick={() => onSelectNode(edge.source)}
                    className="rounded-full bg-zinc-100 px-3 py-1 transition hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800"
                  >
                    View {edge.source}
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectNode(edge.target)}
                    className="rounded-full bg-zinc-100 px-3 py-1 transition hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800"
                  >
                    View {edge.target}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
