/**
 * Faded interior room elevation — thin line art, drafting-board aesthetic.
 */
export function HeroElevationSketch({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 640 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {/* Room shell */}
      <path
        d="M48 420 H592 V88 H48 Z"
        stroke="currentColor"
        strokeWidth="0.75"
        strokeOpacity="0.35"
      />
      {/* Ceiling line */}
      <path d="M48 88 H592" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.25" />
      {/* Floor horizon */}
      <path d="M0 420 H640" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" />

      {/* Window elevation */}
      <rect
        x="368"
        y="148"
        width="168"
        height="196"
        stroke="currentColor"
        strokeWidth="0.65"
        strokeOpacity="0.3"
      />
      <line x1="452" y1="148" x2="452" y2="344" stroke="currentColor" strokeWidth="0.4" strokeOpacity="0.22" />
      <line x1="368" y1="246" x2="536" y2="246" stroke="currentColor" strokeWidth="0.4" strokeOpacity="0.22" />

      {/* Built-in niche */}
      <rect
        x="88"
        y="168"
        width="120"
        height="200"
        stroke="currentColor"
        strokeWidth="0.55"
        strokeOpacity="0.28"
        strokeDasharray="3 5"
      />

      {/* Sofa profile */}
      <path
        d="M120 340 Q120 300 160 292 H248 Q288 292 288 332 V360 H120 Z"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeOpacity="0.32"
      />
      <path
        d="M120 360 H288"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeOpacity="0.25"
      />

      {/* Pendant / ceiling detail */}
      <line x1="220" y1="88" x2="220" y2="132" stroke="currentColor" strokeWidth="0.45" strokeOpacity="0.28" />
      <circle cx="220" cy="140" r="10" stroke="currentColor" strokeWidth="0.45" strokeOpacity="0.28" />

      {/* Side table */}
      <rect
        x="300"
        y="318"
        width="48"
        height="64"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeOpacity="0.26"
      />

      {/* Dimension ticks */}
      <path
        d="M32 88 V420 M28 88 H36 M28 420 H36"
        stroke="currentColor"
        strokeWidth="0.45"
        strokeOpacity="0.2"
      />
      <path
        d="M48 448 H592 M48 444 V452 M592 444 V452"
        stroke="currentColor"
        strokeWidth="0.45"
        strokeOpacity="0.18"
      />

      {/* Perspective guides */}
      <line x1="48" y1="420" x2="200" y2="88" stroke="currentColor" strokeWidth="0.35" strokeOpacity="0.12" />
      <line x1="592" y1="420" x2="440" y2="88" stroke="currentColor" strokeWidth="0.35" strokeOpacity="0.12" />
    </svg>
  )
}
