import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { LanguageProvider } from './i18n/LanguageContext'
import PrivacyPage from './pages/PrivacyPage'

const getPrivacyMeta = (content) => content.privacyPolicy.meta

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider getMeta={getPrivacyMeta}>
      <PrivacyPage />
    </LanguageProvider>
  </StrictMode>,
)
