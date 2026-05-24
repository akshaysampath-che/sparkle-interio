/**
 * Abstract atmospheric layer — gradients, geometry, soft light, grain.
 * Pure CSS/SVG; no photography.
 */
export function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      {/* Base atmosphere */}
      <div className="absolute inset-0 bg-background" />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_70%_20%,color-mix(in_oklch,var(--palette-gold-subtle)_55%,transparent),transparent_55%)]"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_10%_90%,color-mix(in_oklch,var(--palette-beige)_70%,transparent),transparent_50%)]"
      />
      <div className="absolute inset-0 bg-linear-to-br from-background/40 via-transparent to-[color-mix(in_oklch,var(--palette-beige)_35%,var(--background))]" />

      {/* Soft vertical light wash */}
      <div
        className="absolute inset-y-0 right-0 w-1/2 max-w-2xl opacity-60 dark:opacity-40"
        style={{
          background:
            "linear-gradient(105deg, transparent 20%, color-mix(in oklch, var(--palette-ivory-soft) 40%, transparent) 70%)",
        }}
      />

      {/* Architectural grid */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.22] dark:opacity-[0.12]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="hero-grid"
            width="72"
            height="72"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 72 0 L 0 0 0 72"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-foreground"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hero-grid)" />
      </svg>

      {/* Geometric frames — editorial composition */}
      <svg
        className="absolute top-[18%] right-[8%] hidden h-[min(52vh,520px)] w-[min(38vw,420px)] text-foreground/15 lg:block dark:text-foreground/10"
        viewBox="0 0 420 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="1"
          y="1"
          width="418"
          height="518"
          stroke="currentColor"
          strokeWidth="1"
        />
        <rect
          x="48"
          y="72"
          width="280"
          height="360"
          stroke="currentColor"
          strokeWidth="0.75"
          strokeDasharray="4 8"
        />
        <line x1="48" y1="432" x2="380" y2="88" stroke="currentColor" strokeWidth="0.5" />
        <circle cx="328" cy="148" r="56" stroke="currentColor" strokeWidth="0.75" />
      </svg>

      {/* Mobile geometric accent */}
      <svg
        className="absolute right-4 bottom-24 h-32 w-32 text-foreground/12 sm:h-40 sm:w-40 lg:hidden"
        viewBox="0 0 160 160"
        fill="none"
        aria-hidden
      >
        <rect x="0.5" y="0.5" width="159" height="159" stroke="currentColor" />
        <line x1="0" y1="120" x2="120" y2="0" stroke="currentColor" strokeWidth="0.5" />
      </svg>

      {/* Grain texture */}
      <div
        className="absolute inset-0 opacity-[0.35] mix-blend-multiply dark:opacity-[0.2] dark:mix-blend-soft-light"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "128px 128px",
        }}
      />

      {/* Bottom fade for depth */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-background/80 to-transparent" />
    </div>
  )
}
