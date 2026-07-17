export default function StoryComposer({
  formValues,
  onFieldChange,
  onSubmit,
  isLoading,
  error,
  status,
}) {
  return (
    <section className="glass-panel rounded-[2rem] p-8 shadow-2xl">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-400">
          Narrative intake
        </p>
        <h2 className="text-2xl font-bold text-white">
          Send raw story ideas to the GraphLore pipeline.
        </h2>
        <p className="text-sm leading-6 text-zinc-400">
          The backend will sanitize the input, build a structured plot, and
          generate storyboard visuals for the strongest scenes.
        </p>
      </div>

      <form className="mt-6 space-y-5" onSubmit={onSubmit}>
        <label className="block text-sm text-zinc-200">
          <span className="mb-2 block font-medium">
            Story ideas or raw plot notes
          </span>
          <textarea
            value={formValues.rawText}
            onChange={(event) => onFieldChange("rawText", event.target.value)}
            rows={7}
            placeholder="Add a chaotic brainstorm, a dream fragment, or a loose set of story concepts..."
            className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-sm text-zinc-100 outline-none transition placeholder-zinc-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            required
          />
        </label>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="block text-sm text-zinc-200">
            <span className="mb-2 block font-medium">Client identifier</span>
            <input
              value={formValues.clientId}
              onChange={(event) =>
                onFieldChange("clientId", event.target.value)
              }
              placeholder="client_001"
              className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-sm text-zinc-100 outline-none transition placeholder-zinc-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              required
            />
          </label>

          <label className="block text-sm text-zinc-200">
            <span className="mb-2 block font-medium">GraphLore token</span>
            <input
              type="password"
              value={formValues.token}
              onChange={(event) => onFieldChange("token", event.target.value)}
              placeholder="Paste your backend token"
              className="w-full rounded-2xl border border-zinc-800 bg-zinc-900/40 px-4 py-3 text-sm text-zinc-100 outline-none transition placeholder-zinc-500 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              required
            />
          </label>
        </div>

        <div className="flex flex-wrap items-center gap-4 pt-2">
          <button
            type="submit"
            disabled={isLoading}
            className="rounded-full bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(99,102,241,0.25)] transition hover:bg-indigo-700 hover:shadow-[0_0_25px_rgba(99,102,241,0.45)] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isLoading ? "Processing..." : "Transform into story structure"}
          </button>
          <span className="text-sm font-mono text-indigo-300">
            {status}
          </span>
        </div>

        {error ? (
          <div className="rounded-2xl border border-rose-900/50 bg-rose-950/20 p-4 text-sm text-rose-300">
            {error}
          </div>
        ) : null}
      </form>
    </section>
  );
}
