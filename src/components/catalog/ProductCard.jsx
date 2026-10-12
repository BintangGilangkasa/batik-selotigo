import React from 'react'
import ArrowIcon from '../common/ArrowIcon.jsx'

export default function ProductCard({
  category,
  categoryIndex,
  copy,
  index,
  onOpen,
  product,
}) {
  const openCatalog = (event) => onOpen(categoryIndex, event.currentTarget)

  return (
    <article
      className="motion-safe:animate-[fade-up_.65s_cubic-bezier(.2,.7,.2,1)_both]"
      style={{ animationDelay: `${(index % 4) * 70}ms` }}
    >
      <button
        className="group relative block aspect-[4/3] w-full overflow-hidden bg-[var(--line)] text-left text-[var(--ink)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--red)]"
        type="button"
        onClick={openCatalog}
        aria-label={`${copy.viewProducts}: ${product.title}`}
        aria-haspopup="dialog"
      >
        <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={category.image} alt={category.alt} loading="lazy" />
        <span className="absolute left-4 top-4 text-xs tracking-widest text-white">0{index + 1}</span>
        <span className="absolute bottom-3 right-3 grid size-10 place-items-center bg-[var(--paper)] text-[var(--red)]"><ArrowIcon diagonal /></span>
      </button>
      <div className="grid min-h-[150px] content-start gap-3 border-b border-[var(--line)] py-4">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[.15em] text-[var(--red)]">{category.title}</span>
          <h3 className="mt-2 font-[family-name:var(--serif)] text-xl font-medium leading-snug text-[var(--ink)] sm:text-2xl">{product.title}</h3>
        </div>
        <p className="max-w-[290px] text-sm leading-6 text-[var(--muted)]">{product.description}</p>
      </div>
      <div className="flex min-h-12 items-center pt-2">
        <button className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--red)] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--red)]" type="button" onClick={openCatalog}>
          {copy.viewProducts} <ArrowIcon />
        </button>
      </div>
    </article>
  )
}
