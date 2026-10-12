import React from 'react'
import ArrowIcon from '../components/common/ArrowIcon.jsx'

export default function HeroSection({ copy }) {
  return (
    <section className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-9 px-5 py-12 sm:px-7 sm:py-16 lg:grid-cols-[1fr_.93fr] lg:gap-[70px] lg:px-12 lg:py-[76px]" id="beranda">
      <div className="motion-safe:animate-[fade-up_.75s_ease_both] lg:pl-7">
        <p className="inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[.18em] text-[var(--red)]"><span className="h-px w-[22px] bg-[var(--red)]" /> {copy.heroEyebrow}</p>
        <h1 className="mt-6 font-[family-name:var(--serif)] text-[clamp(3.25rem,10vw,4.8rem)] font-medium leading-[1.08] tracking-[-.055em] text-[var(--ink)] sm:text-[clamp(3.5rem,7vw,5rem)] [&_em]:font-medium [&_em]:text-[var(--red)]">{copy.heroTitle}</h1>
        <p className="mt-6 max-w-[390px] text-base leading-7 text-[var(--muted)]">{copy.heroDescription}</p>
        <div className="mt-7 flex flex-wrap items-center gap-5">
          <a className="inline-flex min-h-12 items-center justify-center gap-4 bg-[var(--red)] px-5 text-sm font-medium text-[#fffaf2] transition-all hover:-translate-y-0.5 hover:bg-[var(--red-dark)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--red)]" href="#koleksi">
            {copy.explore} <ArrowIcon />
          </a>
          <a className="inline-flex items-center gap-2 text-sm font-medium hover:text-[var(--red)]" href="#tentang">
            {copy.nav.about} <ArrowIcon diagonal />
          </a>
        </div>
        <div className="mt-9 flex items-center gap-3 text-xs tracking-wide text-[var(--muted)] sm:mt-[54px]">
          <span className="h-px w-[34px] bg-[#b5aa9a]" />
          <span>{copy.heroNote}</span>
        </div>
      </div>
      <div className="relative h-[clamp(300px,95vw,440px)] pr-[17px] pb-[14px] motion-safe:animate-[fade-up_.9s_.12s_ease_both] sm:h-[440px] sm:pr-7 sm:pb-[22px] lg:h-[480px]">
        <div className="relative z-[1] h-full w-full overflow-hidden bg-[#d6c4a5] after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:from-[62%] after:to-black/25 after:content-['']">
          <img className="h-full w-full object-cover" src="/images/hero-batik.jpg" alt={copy.categories[3].alt} fetchPriority="high" />
        </div>
        <div className="absolute right-0 top-5 z-[2] flex size-[88px] rotate-[9deg] flex-col items-center justify-center rounded-full border border-white/80 bg-[var(--red)] text-[#fffaf2] sm:top-7 sm:size-[104px]" aria-label="Batik Selotigo, Salatiga">
          <span className="text-[8px] tracking-[.17em]">BATIK</span>
          <span className="my-px font-[family-name:var(--serif)] text-[39px] italic leading-none sm:text-[47px]">S</span>
          <span className="text-[7px] tracking-[.17em]">SELOTIGO · SALATIGA</span>
        </div>
        <div className="absolute bottom-[30px] left-[17px] right-8 z-[2] flex justify-between text-xs tracking-wider text-white sm:bottom-[42px] sm:left-6 sm:right-12">
          <span>01 / 04</span><span>{copy.heroCaption}</span>
        </div>
        <span className="absolute -left-3 -top-3 h-[37px] w-[37px] border-l border-t border-[#bda989] opacity-75" />
        <span className="absolute bottom-2 right-[14px] h-[37px] w-[37px] border-b border-r border-[#bda989] opacity-75" />
      </div>
    </section>
  )
}
