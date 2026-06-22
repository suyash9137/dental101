export default function Loading() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-surface-bright">
      <div className="text-center">
        <div className="inline-block animate-pulse">
          <span className="material-symbols-outlined text-4xl text-primary/50">
            hours
          </span>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant mt-4">
          Loading your SmileCraft Dental experience...
        </p>
      </div>
    </div>
  );
}