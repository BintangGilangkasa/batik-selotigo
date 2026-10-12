import React from 'react'

export default function QuoteSection({ copy }) {
  return (
    <section className="mx-auto flex min-h-[300px] w-full max-w-[1280px] flex-col items-center justify-center px-5 py-16 text-center sm:min-h-[360px] sm:px-7 sm:py-20 lg:px-12" aria-label={copy.quoteLabel}>
      <span className="text-xs font-semibold uppercase tracking-[.18em] text-[var(--red)]">{copy.quoteLabel}</span>
      <blockquote className="my-6 max-w-[740px] font-[family-name:var(--serif)] text-[clamp(1.8rem,4vw,3rem)] leading-snug tracking-[-.035em] text-[var(--ink)] [&_em]:font-medium [&_em]:text-[var(--red)]">{copy.quote}</blockquote>
      <span className="text-[10px] tracking-[.2em] text-[var(--muted)]">BATIK SELOTIGO · SALATIGA</span>
    </section>
  )
}
