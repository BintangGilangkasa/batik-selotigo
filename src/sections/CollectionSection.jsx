import React, { useState } from 'react'
import ProductCard from '../components/catalog/ProductCard.jsx'

export default function CollectionSection({ copy, onOpenCategory }) {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(null)
  const activeCategory =
    activeCategoryIndex === null ? null : copy.categories[activeCategoryIndex]

  return (
    <section className="bg-[var(--paper-deep)] py-16 transition-colors duration-300 sm:py-20 lg:py-24" id="koleksi">
      <div className="mx-auto w-full max-w-[1280px] px-5 sm:px-7 lg:px-12">
        <div className="mb-10 flex flex-col gap-5 sm:mb-12 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[.18em] text-[var(--red)]">{copy.collectionSection}</span>
            <h2 className="mt-3 font-[family-name:var(--serif)] text-4xl font-medium leading-tight tracking-[-.045em] text-[var(--ink)] sm:text-5xl lg:text-[54px]">{copy.collectionTitle}</h2>
          </div>
          <p className="max-w-[390px] text-base leading-7 text-[var(--muted)]">{copy.collectionDescription}</p>
        </div>
        <div>
          <h3 className="mb-4 text-sm font-semibold text-[var(--ink)]">{copy.chooseCategory}</h3>
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
            {copy.categories.map((category, index) => {
              const isActive = activeCategoryIndex === index

              return (
                <button
                  aria-controls="filtered-products"
                  aria-pressed={isActive}
                  className={`group overflow-hidden border text-left transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--red)] ${
                    isActive
                      ? 'border-[var(--red)] bg-[var(--paper)] shadow-md'
                      : 'border-[var(--line)] bg-[var(--paper)] hover:-translate-y-0.5 hover:border-[var(--red)]'
                  }`}
                  key={category.title}
                  onClick={() => setActiveCategoryIndex(index)}
                  type="button"
                >
                  <span className="relative block h-24 overflow-hidden bg-[var(--line)] sm:h-36 lg:h-40">
                    <img
                      alt=""
                      className={`h-full w-full object-cover transition-transform duration-300 ${
                        isActive ? 'scale-105' : 'group-hover:scale-105'
                      }`}
                      loading="lazy"
                      src={category.image}
                    />
                    <span className="absolute inset-0 bg-black/20" />
                    <span className="absolute bottom-2 left-3 text-[10px] font-semibold tracking-widest text-white">
                      0{index + 1}
                    </span>
                  </span>
                  <span className="flex min-h-[60px] items-center justify-between gap-2 px-3 py-2 sm:min-h-[68px] sm:px-4">
                    <span>
                      <span className="block font-[family-name:var(--serif)] text-base font-medium text-[var(--ink)] sm:text-lg">
                        {category.title}
                      </span>
                      <span className="mt-1 block text-xs text-[var(--muted)]">
                        {copy.productCount(category.products.length)}
                      </span>
                    </span>
                    <span
                      aria-hidden="true"
                      className={`grid size-6 shrink-0 place-items-center rounded-full border text-xs transition-colors ${
                        isActive
                          ? 'border-[var(--red)] bg-[var(--red)] text-white'
                          : 'border-[var(--line)] text-[var(--muted)] group-hover:border-[var(--red)] group-hover:text-[var(--red)]'
                      }`}
                    >
                      {isActive ? '✓' : '→'}
                    </span>
                  </span>
                </button>
              )
            })}
          </div>
        </div>
        <div className="mt-8 sm:mt-10" id="filtered-products" aria-live="polite">
          {activeCategory ? (
            <>
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-[var(--line)] pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[.16em] text-[var(--red)]">
                  {copy.selectedCategoryLabel}
                </p>
                <h3 className="mt-1 font-[family-name:var(--serif)] text-2xl font-medium text-[var(--ink)] sm:text-3xl">
                  {activeCategory.title}
                </h3>
              </div>
              <span className="text-sm text-[var(--muted)]">
                {copy.productCount(activeCategory.products.length)}
              </span>
            </div>
            <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {activeCategory.products.map((product, index) => (
                <ProductCard
                  category={activeCategory}
                  categoryIndex={activeCategoryIndex}
                  copy={copy}
                  index={index}
                  key={`${activeCategory.title}-${product.title}`}
                  onOpen={onOpenCategory}
                  product={product}
                />
              ))}
            </div>
            </>
          ) : (
            <p className="border-t border-[var(--line)] pt-5 text-sm leading-6 text-[var(--muted)]">
              {copy.chooseCategoryPrompt}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
