import React from 'react'
import ArrowIcon from '../components/common/ArrowIcon.jsx'

export default function StorySection({ copy }) {
  return (
    <section className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-7 px-5 py-[72px] motion-safe:animate-[fade-up_.65s_ease_both] sm:px-7 sm:py-24 lg:grid-cols-[1fr_1.03fr] lg:gap-[clamp(42px,7vw,90px)] lg:px-12 lg:py-[108px]" id="tentang">
      <div className="relative min-h-[clamp(260px,78vw,425px)] bg-[#c9b998] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:top-[45%] after:bg-gradient-to-b after:from-transparent after:to-black/45 after:content-['']">
        <img className="absolute h-full w-full object-cover" src="/images/watu-rumpuk.jpg" alt={copy.originImageAlt} loading="lazy" />
        <div className="absolute left-5 top-5 z-[1] grid gap-1.5 bg-[var(--paper)] px-4 py-3">
          <span className="text-[9px] tracking-[.16em] text-[var(--red)]">{copy.born}</span>
          <strong className="font-[family-name:var(--serif)] text-[28px] font-medium leading-none text-[var(--ink)]">2008</strong>
        </div>
        <span className="absolute bottom-[18px] left-5 z-[1] text-xs tracking-wide text-[#fffaf2]">{copy.originCaption}</span>
      </div>
      <div>
        <span className="text-xs font-semibold uppercase tracking-[.18em] text-[var(--red)]">{copy.storySection}</span>
        <p className="mt-7 text-xs font-semibold uppercase tracking-[.17em] text-[var(--muted)]">{copy.storyEyebrow}</p>
        <h2 className="mt-3 font-[family-name:var(--serif)] text-[clamp(2.25rem,4.3vw,3.45rem)] font-medium leading-tight tracking-[-.04em] text-[var(--ink)] [&_em]:font-medium [&_em]:text-[var(--red)]">{copy.storyTitle}</h2>
        <div className="mt-5 grid max-w-[470px] gap-3">
          {copy.storyParagraphs.map((paragraph) => <p className="text-sm leading-7 text-[var(--muted)]" key={paragraph}>{paragraph}</p>)}
        </div>
        <div className="mt-6 flex flex-col justify-between gap-4 border-t border-[var(--line)] pt-4 sm:flex-row sm:items-center sm:gap-5">
          <span className="text-sm text-[var(--muted)]">{copy.storyMotto}</span>
          <a className="inline-flex shrink-0 items-center gap-2 border-b border-[var(--red)] pb-1 text-sm font-medium text-[var(--ink)]" href="#kontak">
            {copy.storyLink} <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  )
}
