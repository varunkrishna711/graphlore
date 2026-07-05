export default function StoryComposer({
  formValues,
  onFieldChange,
  onSubmit,
  isLoading,
  error,
  status,
}) {
  return (
    <section className="rounded-[2rem] border border-zinc-200 bg-white/95 p-6 shadow-sm shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-950/95 dark:shadow-black/10">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
          Narrative intake
        </p>
        <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white">
          Send raw story ideas to the GraphLore pipeline.
        </h2>
        <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-300">
          The backend will sanitize the input, build a structured plot, and
          generate storyboard visuals for the strongest scenes.
        </p>
      </div>

      <form className="mt-6 space-y-4" onSubmit={onSubmit}>
        <label className="block text-sm text-zinc-700 dark:text-zinc-200">
          <span className="mb-2 block font-medium">
            Story ideas or raw plot notes
          </span>
          <textarea
            value={formValues.rawText}
            onChange={(event) => onFieldChange("rawText", event.target.value)}
            rows={7}
            placeholder="Add a chaotic brainstorm, a dream fragment, or a loose set of story concepts..."
            className="w-full rounded-3xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-sky-400 dark:focus:ring-sky-500/20"
            required
          />
        </label>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="block text-sm text-zinc-700 dark:text-zinc-200">
            <span className="mb-2 block font-medium">Client identifier</span>
            <input
              value={formValues.clientId}
              onChange={(event) =>
                onFieldChange("clientId", event.target.value)
              }
              placeholder="client_001"
              className="w-full rounded-3xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-sky-400 dark:focus:ring-sky-500/20"
              required
            />
          </label>

          <label className="block text-sm text-zinc-700 dark:text-zinc-200">
            <span className="mb-2 block font-medium">GraphLore token</span>
            <input
              type="password"
              value={formValues.token}
              onChange={(event) => onFieldChange("token", event.target.value)}
              placeholder="Paste your backend token"
              className="w-full rounded-3xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-200 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100 dark:focus:border-sky-400 dark:focus:ring-sky-500/20"
              required
            />
          </label>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="submit"
            disabled={isLoading}
            className="rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isLoading ? "Processing..." : "Transform into story structure"}
          </button>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            {status}
          </span>
        </div>

        {error ? (
          <div className="rounded-3xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700 dark:border-rose-900/70 dark:bg-rose-950/30 dark:text-rose-300">
            {error}
          </div>
        ) : null}
      </form>
    </section>
  );
}
