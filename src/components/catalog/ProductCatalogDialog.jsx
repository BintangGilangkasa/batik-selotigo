import React, { useEffect, useRef } from 'react'
import ArrowIcon from '../common/ArrowIcon.jsx'
import { createWhatsAppUrl } from '../../utils/whatsapp.js'

export default function ProductCatalogDialog({ category, categoryIndex, copy, onClose, triggerRef }) {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    const triggerElement = triggerRef.current
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)
    closeButtonRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      triggerElement?.focus()
    }
  }, [onClose, triggerRef])

  return (
    <div
      className="fixed inset-0 z-30 grid place-items-center overflow-y-auto bg-black/70 p-3 backdrop-blur-sm motion-safe:animate-[fade-in_.22s_ease_both] sm:p-7"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section
        aria-labelledby="catalog-title"
        aria-modal="true"
        className="grid max-h-[calc(100dvh-24px)] w-full max-w-[920px] grid-cols-1 grid-rows-[150px_minmax(0,1fr)] overflow-hidden bg-[var(--paper)] text-[var(--ink)] shadow-2xl motion-safe:animate-[fade-up_.38s_cubic-bezier(.2,.7,.2,1)_both] sm:max-h-[min(690px,calc(100vh-56px))] sm:grid-rows-1 sm:grid-cols-[.72fr_1.28fr]"
        role="dialog"
      >
        <div className="relative h-[150px] overflow-hidden bg-[var(--paper-deep)] sm:h-auto sm:min-h-[520px]">
          <img className="absolute h-full w-full object-cover after:absolute" src={category.image} alt={category.alt} />
          <span className="absolute bottom-5 left-5 text-xs tracking-widest text-white">0{categoryIndex + 1} / 04</span>
        </div>
        <div className="flex min-h-0 flex-col overflow-y-auto p-5 sm:p-8 lg:px-9 lg:py-9">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[.18em] text-[var(--red)]">{copy.modalEyebrow}</span>
              <h2 className="mt-2.5 font-[family-name:var(--serif)] text-4xl font-medium leading-tight tracking-[-.04em]" id="catalog-title">{category.title}</h2>
            </div>
            <button
              aria-label={copy.modalClose}
              className="grid size-10 shrink-0 place-items-center border border-[var(--line)] text-xl leading-none hover:border-[var(--red)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--red)]"
              onClick={onClose}
              ref={closeButtonRef}
              type="button"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <p className="my-4 text-sm leading-6 text-[var(--muted)]">{category.description}</p>
          <div className="border-t border-[var(--line)]">
            {category.products.map((product, index) => (
              <article className="grid grid-cols-[28px_1fr_36px] items-center gap-2.5 border-b border-[var(--line)] py-3.5" key={product.title}>
                <span className="self-start pt-1 text-[10px] tracking-widest text-[var(--red)]">0{index + 1}</span>
                <div>
                  <h3 className="font-[family-name:var(--serif)] text-lg font-medium">{product.title}</h3>
                  <p className="mt-1 text-[13px] leading-5 text-[var(--muted)]">{product.description}</p>
                </div>
                <a
                  aria-label={`${copy.askCategory}: ${product.title}`}
                  className="grid size-[34px] place-items-center border border-[var(--line)] text-[var(--red)] transition-colors hover:bg-[var(--red)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--red)]"
                  href={createWhatsAppUrl(copy.productMessage(category.title, product.title))}
                  rel="noreferrer"
                  target="_blank"
                >
                  <ArrowIcon diagonal />
                </a>
              </article>
            ))}
          </div>
          <p className="mt-auto pt-4 text-xs leading-5 text-[var(--muted)]">{copy.modalNote}</p>
        </div>
      </section>
    </div>
  )
}
