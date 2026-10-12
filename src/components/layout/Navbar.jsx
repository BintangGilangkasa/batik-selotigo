import React, { useState } from 'react'

function ThemeIcon({ theme }) {
  return theme === 'light' ? (
    <svg aria-hidden="true" className="h-full w-full" viewBox="0 0 20 20" fill="none">
      <path d="M16.8 12.7A7.4 7.4 0 0 1 7.3 3.2 7.4 7.4 0 1 0 16.8 12.7Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  ) : (
    <svg aria-hidden="true" className="h-full w-full" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="3.2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10 1.8v2m0 12.4v2m8.2-8.2h-2M3.8 10h-2m14-5.8-1.4 1.4M5.6 14.4l-1.4 1.4m11.6 0-1.4-1.4M5.6 5.6 4.2 4.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export default function Navbar({
  language,
  nav,
  theme,
  onLanguageChange,
  onThemeChange,
  languageLabel,
  themeLabel,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="relative z-10 bg-[var(--paper)] text-[var(--ink)] transition-colors duration-300">
      <nav className="mx-auto flex h-[72px] w-full max-w-[1280px] items-center justify-between border-b border-[var(--line)] px-5 sm:h-[88px] sm:px-7 lg:px-12" aria-label={language === 'id' ? 'Navigasi utama' : 'Main navigation'}>
        <a className="inline-flex items-center gap-3" href="#beranda" onClick={closeMenu} aria-label="Batik Selotigo, ke beranda">
          <span className="grid size-[38px] place-items-center rounded-full border border-[var(--red)] font-[family-name:var(--serif)] text-[22px] italic text-[var(--red)]">S</span>
          <span className="grid gap-1">
            <strong className="text-xs font-bold tracking-[.16em]">SELOTIGO</strong>
            <small className="text-[9px] tracking-[.18em] text-[var(--muted)]">BATIK · SALATIGA</small>
          </span>
        </a>
        <div className="flex items-center gap-2.5 sm:gap-6">
          <div className="hidden items-center gap-7 text-sm lg:flex">
            <a className="text-[var(--muted)] transition-colors hover:text-[var(--red)]" href="#beranda" onClick={closeMenu}>{nav.home}</a>
            <a className="text-[var(--muted)] transition-colors hover:text-[var(--red)]" href="#tentang" onClick={closeMenu}>{nav.about}</a>
            <a className="text-[var(--muted)] transition-colors hover:text-[var(--red)]" href="#koleksi" onClick={closeMenu}>{nav.collection}</a>
            <a className="inline-flex min-h-11 items-center gap-4 bg-[var(--red)] px-4 text-[#fffaf2] transition-colors hover:bg-[var(--red-dark)]" href="#kontak" onClick={closeMenu}>
              {nav.contact} <span aria-hidden="true" className="text-lg">↗</span>
            </a>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              aria-label={languageLabel}
              className="grid size-[34px] place-items-center border border-[var(--line)] text-xs font-semibold tracking-wider transition-colors hover:border-[var(--red)] hover:text-[var(--red)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--red)]"
              onClick={onLanguageChange}
              type="button"
            >
              {language === 'id' ? 'EN' : 'ID'}
            </button>
            <button
              aria-label={themeLabel}
              className="grid size-[34px] place-items-center border border-[var(--line)] transition-colors hover:border-[var(--red)] hover:text-[var(--red)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--red)]"
              onClick={onThemeChange}
              type="button"
            >
              <span className="size-4"><ThemeIcon theme={theme} /></span>
            </button>
          </div>
          <button
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? (language === 'id' ? 'Tutup menu navigasi' : 'Close navigation menu') : (language === 'id' ? 'Buka menu navigasi' : 'Open navigation menu')}
            className="flex size-10 flex-col items-center justify-center gap-1.5 border border-[var(--line)] lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
          >
            <span className={`h-px w-4 bg-[var(--ink)] transition-transform ${isMenuOpen ? 'translate-y-[4px] rotate-45' : ''}`} />
            <span className={`h-px w-4 bg-[var(--ink)] transition-transform ${isMenuOpen ? '-translate-y-[4px] -rotate-45' : ''}`} />
          </button>
        </div>
        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-[72px] flex animate-[fade-up_.2s_ease_both] flex-col border-b border-[var(--line)] bg-[var(--paper)] px-5 pb-5 shadow-xl sm:px-7 lg:hidden">
            <a className="border-b border-[var(--line)] py-4 text-sm" href="#beranda" onClick={closeMenu}>{nav.home}</a>
            <a className="border-b border-[var(--line)] py-4 text-sm" href="#tentang" onClick={closeMenu}>{nav.about}</a>
            <a className="border-b border-[var(--line)] py-4 text-sm" href="#koleksi" onClick={closeMenu}>{nav.collection}</a>
            <a className="mt-3 flex justify-between bg-[var(--red)] px-4 py-3 text-sm text-[#fffaf2]" href="#kontak" onClick={closeMenu}>{nav.contact} <span aria-hidden="true">↗</span></a>
          </div>
        )}
      </nav>
    </header>
  )
}
