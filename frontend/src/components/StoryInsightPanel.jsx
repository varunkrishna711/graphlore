export default function StoryInsightPanel({ story }) {
  if (!story) {
    return (
      <section className="glass-panel rounded-[2rem] p-8 shadow-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-400">
          Story output
        </p>
        <p className="mt-3 text-sm leading-6 text-zinc-400">
          Relevant narrative details will appear here after the backend returns
          a structured story payload.
        </p>
      </section>
    );
  }

  const architecture = story.narrative_architecture?.three_act_structure || {};

  return (
    <section className="space-y-6 glass-panel rounded-[2rem] p-8 shadow-2xl">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-400">
          Story insight
        </p>
        <h2 className="text-2xl font-bold text-white">
          {story.primary_genre}
        </h2>
        <p className="text-sm leading-7 text-zinc-300">
          {story.world_description}
        </p>
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5">
        <p className="text-sm font-bold text-white">
          Inciting incident
        </p>
        <p className="mt-2 text-sm leading-6 text-zinc-400">
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
            className="rounded-2xl border border-zinc-850 bg-zinc-950/60 p-4"
          >
            <p className="text-sm font-bold text-white">
              {act.title}
            </p>
            <p className="mt-2 text-xs leading-5 text-zinc-400">
              {act.body}
            </p>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <p className="text-sm font-bold text-white">
          Key entities
        </p>
        <div className="grid gap-4 lg:grid-cols-2">
          {(story.entities || []).map((entity) => (
            <div
              key={entity.name}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-5 space-y-2"
            >
              <div className="flex items-center justify-between gap-2">
                <p className="text-base font-bold text-white">
                  {entity.name}
                </p>
                <span className="rounded-full bg-indigo-950/60 border border-indigo-900 px-3 py-0.5 text-xs font-semibold text-indigo-400">
                  {entity.type}
                </span>
              </div>
              <p className="text-xs leading-5 text-zinc-300">
                {entity.description}
              </p>
              <p className="text-xs font-medium text-indigo-300">
                <span className="text-zinc-500 mr-1">Function:</span>
                {entity.narrative_function}
              </p>
            </div>
          ))}
        </div>
      </div>

      {story.compliance_logs ? (
        <div className="rounded-2xl border border-emerald-900/50 bg-emerald-950/20 p-4 text-sm text-emerald-300">
          {story.compliance_logs}
        </div>
      ) : null}
    </section>
  );
}
