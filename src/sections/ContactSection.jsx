import React from 'react'
import ArrowIcon from '../components/common/ArrowIcon.jsx'
import { createWhatsAppUrl } from '../utils/whatsapp.js'

export default function ContactSection({ copy }) {
  return (
    <section className="relative overflow-hidden bg-[var(--red)] text-[#fffaf2]" id="kontak">
      <div className="relative z-[1] mx-auto grid w-full max-w-[1280px] grid-cols-1 gap-9 px-5 py-[68px] sm:px-7 sm:py-20 lg:grid-cols-[1.1fr_.8fr] lg:gap-[100px] lg:px-12 lg:py-[91px]">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[.18em] text-[#e7c5a5]">{copy.contactSection}</span>
          <h2 className="mt-5 font-[family-name:var(--serif)] text-[clamp(3.25rem,8vw,4.6rem)] font-medium leading-[1.08] tracking-[-.05em] text-[#fffaf2] [&_em]:font-medium [&_em]:text-[#e7c5a5]">{copy.contactTitle}</h2>
          <p className="mt-5 mb-7 max-w-[375px] text-base leading-7 text-[#ead8cc]">{copy.contactDescription}</p>
          <a
            className="inline-flex min-h-12 items-center justify-center gap-4 bg-[var(--paper)] px-5 text-sm font-medium text-[var(--red-dark)] transition-colors hover:bg-[#e9dbca] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            href={createWhatsAppUrl(copy.categoryMessage('Batik Selotigo'))}
            rel="noreferrer"
            target="_blank"
          >
            {copy.whatsappCta} <ArrowIcon />
          </a>
        </div>
        <div className="self-center bg-[rgb(68_20_25_/_23%)] p-6 sm:p-[30px]">
          <span className="text-xs tracking-[.18em] text-[#e7c5a5]">{copy.visitUs}</span>
          <p className="mt-3.5 mb-3 max-w-[300px] text-base leading-7 text-[#fffaf2]">{copy.address}</p>
          <a
            className="inline-flex items-center gap-1.5 text-sm text-[#f3d8c4] hover:underline"
            href="https://maps.google.com/?q=Jalan+Pattimura+Waturumpuk+Kauman+Kidul+Salatiga"
            rel="noreferrer"
            target="_blank"
          >
            {copy.location} <ArrowIcon diagonal />
          </a>
          <span className="my-6 block h-px bg-white/25" />
          <span className="text-xs tracking-[.18em] text-[#e7c5a5]">{copy.contactDirect}</span>
          <a className="my-3 block font-[family-name:var(--serif)] text-[27px] text-[#fffaf2]" href="tel:+6285640078743">0856 4007 8743</a>
          <a
            className="inline-flex items-center gap-1.5 text-sm text-[#f3d8c4] hover:underline"
            href="https://instagram.com/batikselotigo"
            rel="noreferrer"
            target="_blank"
          >
            {copy.instagram} <ArrowIcon diagonal />
          </a>
        </div>
      </div>
      <div className="pointer-events-none absolute -bottom-48 -right-12 text-[300px] leading-none text-white/5 sm:text-[510px]" aria-hidden="true">✳</div>
    </section>
  )
}
