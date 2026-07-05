export default function StoryboardGallery({ images, isLoading }) {
  return (
    <section className="rounded-[2rem] border border-zinc-200 bg-white/95 p-6 shadow-sm shadow-zinc-200/40 dark:border-zinc-800 dark:bg-zinc-950/95 dark:shadow-black/10">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600">
            Storyboard frames
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-950 dark:text-white">
            Generated visual scenes
          </h2>
        </div>
        <span className="rounded-full bg-zinc-100 px-3 py-2 text-sm font-medium text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300">
          {images.length} available
        </span>
      </div>

      {isLoading && images.length === 0 ? (
        <div className="mt-6 rounded-3xl border border-dashed border-zinc-300 bg-zinc-50 p-5 text-sm text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400">
          Waiting for the background worker to finish rendering scenes...
        </div>
      ) : null}

      {!isLoading && images.length === 0 ? (
        <div className="mt-6 rounded-3xl border border-dashed border-zinc-300 bg-zinc-50 p-5 text-sm text-zinc-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-400">
          No storyboard images are available yet. Submit a prompt and let the
          backend generate them.
        </div>
      ) : null}

      <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {images.map((image) => (
          <figure
            key={image.filename}
            className="overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900"
          >
            <img
              src={image.url}
              alt={image.filename}
              className="h-56 w-full object-cover"
            />
            <figcaption className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-300">
              {image.filename}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
