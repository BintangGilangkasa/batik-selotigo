import React from 'react'

export default function Footer({ copy }) {
  return (
    <footer className="bg-[#28241f] text-[#f7f4ed]">
      <div className="mx-auto flex min-h-[133px] w-full max-w-[1280px] items-center justify-between gap-8 px-5 py-7 sm:px-7 lg:px-12">
        <a className="inline-flex items-center gap-3" href="#beranda" aria-label="Batik Selotigo, ke atas">
          <span className="grid size-[38px] place-items-center rounded-full border border-[#d6ad8e] font-[family-name:var(--serif)] text-[22px] italic text-[#d6ad8e]">S</span>
          <span className="grid gap-1">
            <strong className="text-xs font-bold tracking-[.16em]">SELOTIGO</strong>
            <small className="text-[9px] tracking-[.18em] text-[#bdb4a9]">BATIK · SALATIGA</small>
          </span>
        </a>
        <p className="hidden font-[family-name:var(--serif)] text-[15px] italic leading-relaxed text-[#c7bfb4] sm:block">{copy.footerNote}</p>
        <a className="inline-flex items-center gap-2 text-sm transition-colors hover:text-[#d6ad8e]" href="https://instagram.com/batikselotigo" rel="noreferrer" target="_blank">
          Instagram <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="mx-auto flex min-h-[54px] w-full max-w-[1280px] flex-wrap items-center justify-between gap-2 border-t border-white/15 px-5 py-4 text-xs text-[#bdb4a9] sm:px-7 lg:px-12">
        <span>© {new Date().getFullYear()} Batik Selotigo</span>
        <span className="sm:order-none order-last w-full sm:w-auto">{copy.footerCredit}</span>
        <a className="text-[#f7f4ed]" href="#beranda">{copy.backToTop}</a>
      </div>
    </footer>
  )
}
