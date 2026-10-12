import React from 'react'

export default function IntroStrip({ copy }) {
  return (
    <section className="flex min-h-[60px] items-center justify-center gap-[clamp(18px,4vw,54px)] overflow-hidden whitespace-nowrap bg-[var(--red)] px-5 text-[9px] font-medium tracking-[.2em] text-[#f9eee0] max-sm:min-h-[50px] max-sm:justify-start max-sm:gap-5" aria-label={copy.nav.about}>
      {[...copy.strip, copy.strip[0]].map((item, index) => (
        <React.Fragment key={`${item}-${index}`}>
          {index > 0 && <span className="text-sm text-[#d5ad7c]">✳</span>}
          <span className={index > 1 ? 'hidden sm:inline' : ''}>{item}</span>
        </React.Fragment>
      ))}
    </section>
  )
}
