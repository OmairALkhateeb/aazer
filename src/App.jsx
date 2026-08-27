import { LanguageProvider } from './i18n/LanguageContext'
import HomePage from './pages/HomePage'

function App() {
  return (
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  )
}

export default App
