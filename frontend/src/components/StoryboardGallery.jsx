export default function StoryboardGallery({ images, isLoading }) {
  return (
    <section className="glass-panel rounded-[2rem] p-8 shadow-2xl">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-indigo-400">
            Storyboard frames
          </p>
          <h2 className="mt-2 text-2xl font-bold text-white">
            Generated visual scenes
          </h2>
        </div>
        <span className="rounded-full bg-indigo-950 border border-indigo-900 px-3 py-1.5 text-xs font-semibold text-indigo-300">
          {images.length} available
        </span>
      </div>

      {isLoading && images.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-5 text-sm text-zinc-500">
          Waiting for the background worker to finish rendering scenes...
        </div>
      ) : null}

      {!isLoading && images.length === 0 ? (
        <div className="mt-6 rounded-2xl border border-dashed border-zinc-800 bg-zinc-950/60 p-5 text-sm text-zinc-500">
          No storyboard images are available yet. Submit a prompt and let the
          backend generate them.
        </div>
      ) : null}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {images.map((image) => (
          <figure
            key={image.filename}
            className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/20 transition-all duration-300 hover:border-indigo-500/30"
          >
            <div className="overflow-hidden">
              <img
                src={image.url}
                alt={image.filename}
                className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <figcaption className="px-4 py-3 text-xs font-mono text-zinc-400">
              {image.filename}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
