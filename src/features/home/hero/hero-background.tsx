/**
 * Minimal drafting-paper atmosphere.
 * The actual hero visual lives in HeroSection so it can use the client/project image
 * instead of a random generated architecture sketch as a background decoration.
 */
export function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-hero-paper text-hero-line"
      aria-hidden
    >
      <div className="absolute inset-0 bg-hero-paper" />
      <div className="absolute inset-0 bg-[color-mix(in_oklch,var(--hero-paper-warm)_58%,transparent)]" />

      <svg
        className="absolute inset-0 h-full w-full opacity-[0.12]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id="draft-grid"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.35"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#draft-grid)" />
      </svg>

      <div className="absolute inset-x-[2.5vw] top-[calc(var(--nav-height)+1rem)] bottom-10 border border-charcoal/[0.045]" />

      <svg
        className="absolute top-[calc(var(--nav-height)+2rem)] left-[var(--container-padding)] h-12 w-12 opacity-20"
        viewBox="0 0 48 48"
        fill="none"
      >
        <path d="M4 4 H20 M4 4 V20" stroke="currentColor" strokeWidth="0.6" />
      </svg>

      <svg
        className="absolute right-[var(--container-padding)] bottom-14 h-12 w-12 opacity-16"
        viewBox="0 0 48 48"
        fill="none"
      >
        <path d="M44 44 H28 M44 44 V28" stroke="currentColor" strokeWidth="0.6" />
      </svg>

      <div
        className="absolute inset-0 opacity-[0.075] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.32'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
        }}
      />
    </div>
  )
}
