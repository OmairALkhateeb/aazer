import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import * as ar from '../data/landingContent'
import * as en from '../data/landingContent.en'

const translations = { ar, en }
const STORAGE_KEY = 'azer-language'

function getInitialLanguage() {
  if (typeof window === 'undefined') return 'ar'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'en' ? 'en' : 'ar'
}

const LanguageContext = createContext(null)

const getDefaultMeta = (content) => content.meta

// getMeta lets a page other than the landing page supply its own title/description.
export function LanguageProvider({ children, getMeta = getDefaultMeta }) {
  const [language, setLanguage] = useState(getInitialLanguage)

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
    const meta = getMeta(translations[language])
    document.title = meta.title

    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', meta.description)
    }

    window.localStorage.setItem(STORAGE_KEY, language)
  }, [language, getMeta])

  const value = useMemo(() => {
    const content = translations[language]
    return {
      language,
      dir: language === 'ar' ? 'rtl' : 'ltr',
      setLanguage,
      toggleLanguage: () => setLanguage((prev) => (prev === 'ar' ? 'en' : 'ar')),
      content,
    }
  }, [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export function useContent() {
  return useLanguage().content
}
