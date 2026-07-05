export default function GraphInfoPanel({ selectedNode, neighbors, graph }) {
  return (
    <aside className="space-y-6 rounded-4xl border border-zinc-200 bg-white/95 p-6 shadow-sm shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-950/95 dark:shadow-black/10">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">Node inspector</p>
        <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white">{selectedNode.title}</h2>
        <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">{selectedNode.description}</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {Object.entries(selectedNode.metrics).map(([key, value]) => (
          <div key={key} className="rounded-3xl bg-zinc-50 p-4 dark:bg-zinc-900">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">{key}</p>
            <p className="mt-2 text-xl font-semibold text-zinc-950 dark:text-white">{value}</p>
          </div>
        ))}
      </div>

      <div className="rounded-3xl bg-zinc-100 p-5 dark:bg-zinc-900">
        <p className="text-sm font-semibold text-zinc-900 dark:text-white">Connected nodes</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {neighbors.length === 0 ? (
            <span className="rounded-full bg-zinc-200 px-3 py-2 text-sm text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
              No connected nodes in current filter.
            </span>
          ) : (
            neighbors.map((edge) => {
              const otherId = edge.source === selectedNode.id ? edge.target : edge.source;
              const node = graph.nodes.find((item) => item.id === otherId);
              return (
                <span
                  key={`${edge.source}-${edge.target}`}
                  className="rounded-full bg-white px-3 py-2 text-sm text-zinc-700 shadow-sm dark:bg-zinc-950 dark:text-zinc-200"
                >
                  {node?.title ?? otherId}
                </span>
              );
            })
          )}
        </div>
      </div>

      <div className="space-y-3 rounded-3xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900">
        <p className="text-sm font-semibold text-zinc-900 dark:text-white">Action summary</p>
        <ul className="space-y-2 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
          <li>Focus on the selected item to inspect relationships.</li>
          <li>Use the search box to surface specific story or technical assets.</li>
          <li>Switch views to compare graph structure with card-driven details.</li>
        </ul>
      </div>
    </aside>
  );
}
