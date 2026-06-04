export default function Loading() {
  return (
    <div className="min-h-full flex flex-col">
      <header className="border-b border-warm-border">
        <div className="max-w-5xl mx-auto px-6 h-16" />
      </header>

      <main className="flex-1 max-w-2xl mx-auto w-full px-6 py-20 md:py-28 animate-pulse">
        <div className="h-3.5 bg-warm-border rounded w-32 mb-6" />
        <div className="h-10 bg-warm-border rounded w-4/5 mb-3" />
        <div className="h-10 bg-warm-border rounded w-3/5 mb-8" />
        <div className="h-5 bg-warm-border rounded w-full mb-2" />
        <div className="h-5 bg-warm-border rounded w-11/12 mb-12" />

        <hr className="border-warm-border mb-12" />

        <div className="space-y-4">
          {[100, 95, 88, 100, 92, 85, 97, 90].map((w, i) => (
            <div
              key={i}
              className="h-4 bg-warm-border rounded"
              style={{ width: `${w}%` }}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
