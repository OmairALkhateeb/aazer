import Container from '../ui/Container'
import { useContent, useLanguage } from '../../i18n/LanguageContext'

const socialIcons = {
  Instagram: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="7" r="1" fill="currentColor" />
    </svg>
  ),
  X: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <path
        d="M5 5l14 14M19 5L5 19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  ),
  YouTube: (
    <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
      <rect x="3" y="6" width="18" height="12" rx="4" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10.5 9.5l5 2.5-5 2.5v-5z" fill="currentColor" />
    </svg>
  ),
}

function FooterLinkGroup({ title, links }) {
  return (
    <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-start">
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="flex flex-col items-center gap-3 sm:items-start">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="rounded-md text-sm text-brand-200 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Footer() {
  const { footer, ui } = useContent()
  const { language, setLanguage } = useLanguage()

  return (
    <footer className="bg-brand-900 text-brand-100">
      <Container className="flex flex-col gap-12 py-16 sm:py-20 lg:gap-16 lg:py-24">
        <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-start">
          <span className="text-2xl font-bold text-white">{ui.logo}</span>
          <p className="max-w-xs text-base font-medium text-brand-100">{footer.brandStatement}</p>
          <p className="max-w-sm text-sm text-brand-300">{footer.description}</p>
        </div>

        <div className="grid grid-cols-1 gap-10 border-t border-white/10 pt-12 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
          {footer.groups.map((group) => (
            <FooterLinkGroup key={group.title} title={group.title} links={group.links} />
          ))}
        </div>

        <div className="flex flex-col items-center gap-6 border-t border-white/10 pt-8 sm:flex-row sm:justify-between">
          <p className="text-sm text-brand-300">{ui.copyright(new Date().getFullYear())}</p>

          <div className="flex items-center gap-2 text-sm">
            <button
              type="button"
              onClick={() => setLanguage('ar')}
              aria-pressed={language === 'ar'}
              className={`rounded-md px-2 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
                language === 'ar' ? 'font-semibold text-white' : 'text-brand-300 hover:text-white'
              }`}
            >
              العربية
            </button>
            <span className="text-brand-500" aria-hidden="true">
              /
            </span>
            <button
              type="button"
              onClick={() => setLanguage('en')}
              aria-pressed={language === 'en'}
              className={`rounded-md px-2 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 ${
                language === 'en' ? 'font-semibold text-white' : 'text-brand-300 hover:text-white'
              }`}
            >
              English
            </button>
          </div>

          <div className="flex items-center gap-3">
            {footer.social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="flex h-9 w-9 items-center justify-center rounded-full text-brand-200 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
              >
                {socialIcons[item.label]}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
