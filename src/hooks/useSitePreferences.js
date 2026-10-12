import { useEffect, useState } from 'react'

function readPreference(key, fallback) {
  return window.localStorage.getItem(key) || fallback
}

export default function useSitePreferences() {
  const [language, setLanguage] = useState(() => readPreference('selotigo-language', 'id'))
  const [theme, setTheme] = useState(() => readPreference('selotigo-theme', 'light'))

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dataset.theme = theme
    window.localStorage.setItem('selotigo-language', language)
    window.localStorage.setItem('selotigo-theme', theme)
  }, [language, theme])

  return {
    language,
    theme,
    toggleLanguage: () => setLanguage((current) => (current === 'id' ? 'en' : 'id')),
    toggleTheme: () => setTheme((current) => (current === 'light' ? 'dark' : 'light')),
  }
}
