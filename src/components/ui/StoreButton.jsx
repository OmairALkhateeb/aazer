import { useContent } from '../../i18n/LanguageContext'

function StoreButton({ store = 'apple', href = '#', label, className = '' }) {
  const { ui } = useContent()
  const defaultLabel = store === 'apple' ? ui.appStoreLabel : ui.googlePlayLabel

  return (
    <a
      href={href}
      className={`inline-flex items-center gap-3 rounded-xl bg-foreground px-5 py-3 text-primary-foreground transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary ${className}`}
    >
      <span className="text-sm font-semibold">{label ?? defaultLabel}</span>
    </a>
  )
}

export default StoreButton
