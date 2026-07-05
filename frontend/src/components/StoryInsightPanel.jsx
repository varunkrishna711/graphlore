export default function StoryInsightPanel({ story }) {
  if (!story) {
    return (
      <section className="rounded-[2rem] border border-zinc-200 bg-white/95 p-6 shadow-sm shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-950/95 dark:shadow-black/10">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
          Story output
        </p>
        <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
          Relevant narrative details will appear here after the backend returns
          a structured story payload.
        </p>
      </section>
    );
  }

  const architecture = story.narrative_architecture?.three_act_structure || {};

  return (
    <section className="space-y-6 rounded-[2rem] border border-zinc-200 bg-white/95 p-6 shadow-sm shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-950/95 dark:shadow-black/10">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
          Story insight
        </p>
        <h2 className="text-2xl font-semibold text-zinc-950 dark:text-white">
          {story.primary_genre}
        </h2>
        <p className="text-sm leading-7 text-zinc-600 dark:text-zinc-300">
          {story.world_description}
        </p>
      </div>

      <div className="rounded-3xl bg-zinc-50 p-5 dark:bg-zinc-900">
        <p className="text-sm font-semibold text-zinc-900 dark:text-white">
          Inciting incident
        </p>
        <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
          {story.narrative_architecture?.inciting_incident}
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {[
          { title: "Act I", body: architecture.act_1_setup },
          { title: "Act II", body: architecture.act_2_confrontation },
          { title: "Act III", body: architecture.act_3_resolution },
        ].map((act) => (
          <div
            key={act.title}
            className="rounded-3xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <p className="text-sm font-semibold text-zinc-900 dark:text-white">
              {act.title}
            </p>
            <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
              {act.body}
            </p>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        <p className="text-sm font-semibold text-zinc-900 dark:text-white">
          Key entities
        </p>
        <div className="grid gap-3 lg:grid-cols-2">
          {(story.entities || []).map((entity) => (
            <div
              key={entity.name}
              className="rounded-3xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-900"
            >
              <p className="text-base font-semibold text-zinc-950 dark:text-white">
                {entity.name}
              </p>
              <p className="mt-1 text-sm text-sky-600">{entity.type}</p>
              <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">
                {entity.description}
              </p>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                {entity.narrative_function}
              </p>
            </div>
          ))}
        </div>
      </div>

      {story.compliance_logs ? (
        <div className="rounded-3xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700 dark:border-emerald-900/70 dark:bg-emerald-950/30 dark:text-emerald-300">
          {story.compliance_logs}
        </div>
      ) : null}
    </section>
  );
}
