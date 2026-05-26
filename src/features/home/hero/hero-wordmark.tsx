function BrandE() {
  return (
    <span
      aria-hidden="true"
      className="relative mx-[0.055em] inline-block h-[0.62em] w-[0.5em] translate-y-[0.005em] align-middle text-current"
    >
      <span className="absolute left-0 top-0 h-[0.085em] w-full bg-current" />
      <span className="absolute left-0 top-1/2 h-[0.085em] w-[78%] -translate-y-1/2 bg-current" />
      <span className="absolute bottom-0 left-0 h-[0.085em] w-full bg-current" />
    </span>
  )
}

export function HeroWordmark() {
  return (
    <div className="max-w-full select-none" aria-label="Sparkle Interio">
      <div className="inline-flex flex-col leading-none">
        <div
          className={[
            "inline-flex items-center whitespace-nowrap",
            "font-sans text-[clamp(2rem,3vw,2.9rem)] font-semibold uppercase leading-none",
            "tracking-[0.12em] sm:text-[clamp(2.2rem,2.8vw,3rem)]",
          ].join(" ")}
        >
          <span className="inline-flex items-center text-burgundy">
            SPARKL
            <BrandE />
          </span>

          <span className="ml-[0.28em] inline-flex items-center text-charcoal">
            INT
            <BrandE />
            RIO
          </span>
        </div>

        <div className="mt-3 flex items-center gap-4 text-burgundy/70">
          <span className="h-px w-24 bg-current" />
          <span className="font-sans text-[0.66rem] font-semibold uppercase tracking-[0.38em] text-burgundy">
            Elevation Quest
          </span>
          <span className="h-px w-24 bg-current" />
        </div>
      </div>
    </div>
  )
}