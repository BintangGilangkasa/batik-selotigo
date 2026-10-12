import React, { useCallback, useRef, useState } from 'react'
import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'
import ProductCatalogDialog from '../components/catalog/ProductCatalogDialog.jsx'
import { siteContent } from '../data/siteContent.jsx'
import useSitePreferences from '../hooks/useSitePreferences.js'
import ContactSection from '../sections/ContactSection.jsx'
import CollectionSection from '../sections/CollectionSection.jsx'
import HeroSection from '../sections/HeroSection.jsx'
import IntroStrip from '../sections/IntroStrip.jsx'
import QuoteSection from '../sections/QuoteSection.jsx'
import StorySection from '../sections/StorySection.jsx'

export default function HomePage() {
  const { language, theme, toggleLanguage, toggleTheme } = useSitePreferences()
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null)
  const catalogTriggerRef = useRef(null)
  const copy = siteContent[language]
  const selectedCategory =
    selectedCategoryIndex === null ? null : copy.categories[selectedCategoryIndex]

  const openCatalog = (index, trigger) => {
    catalogTriggerRef.current = trigger
    setSelectedCategoryIndex(index)
  }

  const closeCatalog = useCallback(() => {
    setSelectedCategoryIndex(null)
  }, [])

  return (
    <>
      <Navbar
        language={language}
        nav={copy.nav}
        theme={theme}
        onLanguageChange={toggleLanguage}
        onThemeChange={toggleTheme}
        languageLabel={copy.switchLanguage}
        themeLabel={theme === 'light' ? copy.switchTheme : copy.switchThemeLight}
      />
      <main>
        <HeroSection copy={copy} />
        <IntroStrip copy={copy} />
        <StorySection copy={copy} />
        <CollectionSection copy={copy} onOpenCategory={openCatalog} />
        <QuoteSection copy={copy} />
        <ContactSection copy={copy} />
      </main>
      <Footer copy={copy} />
      {selectedCategory && (
        <ProductCatalogDialog
          category={selectedCategory}
          categoryIndex={selectedCategoryIndex}
          copy={copy}
          onClose={closeCatalog}
          triggerRef={catalogTriggerRef}
        />
      )}
    </>
  )
}
