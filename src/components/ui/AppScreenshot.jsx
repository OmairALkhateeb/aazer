import { useState } from 'react'
import { useContent } from '../../i18n/LanguageContext'

function AppScreenshot({ src, alt = '', className = '', priority = false }) {
  const [failed, setFailed] = useState(false)
  const { ui } = useContent()

  if (!src || failed) {
    return (
      <div
        className={`flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-b from-brand-100 to-brand-50 ${className}`}
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
          <span className="h-6 w-6 rounded-full bg-primary" />
        </span>
        <span className="text-sm font-medium text-brand-700">{ui.logo}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      onError={() => setFailed(true)}
      className={`h-full w-full object-cover ${className}`}
    />
  )
}

export default AppScreenshot
