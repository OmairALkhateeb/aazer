import { useEffect, useState } from 'react'
import Container from '../ui/Container'
import { useContent, useLanguage } from '../../i18n/LanguageContext'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { nav, ui } = useContent()
  const { toggleLanguage } = useLanguage()

  useEffect(() => {
    let ticking = false

    const update = () => {
      setScrolled(window.scrollY > 8)
      setMenuOpen((open) => (open ? false : open))
      ticking = false
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? 'border-b border-border bg-background/80 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <Container className="flex h-18 items-center justify-between py-3">
        <div className="flex items-center gap-10">
          <a
            href="/#"
            className="shrink-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            <img src="/images/brand/azer-logo.png" alt={ui.logo} width="737" height="523" className="h-12 w-auto" />
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label={ui.mainMenuLabel}>
            {nav.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-md text-sm font-medium text-foreground/80 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={ui.switchLanguageLabel}
            className="rounded-md px-2 py-1 text-sm font-medium text-foreground/70 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {ui.switchLanguageTo}
          </button>
          <a
            href="/#download"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {nav.cta}
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:hidden"
          aria-label={menuOpen ? ui.closeMenu : ui.openMenu}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden="true">
            {menuOpen ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </Container>

      {menuOpen ? (
        <nav
          id="mobile-menu"
          aria-label={ui.mainMenuMobileLabel}
          className="border-t border-border bg-background lg:hidden"
        >
          <Container className="flex flex-col gap-1 py-4">
            {nav.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-2 py-3 text-base font-medium text-foreground/80 transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {link.label}
              </a>
            ))}

            <div className="mt-3 flex items-center gap-3 border-t border-border pt-4">
              <button
                type="button"
                onClick={toggleLanguage}
                aria-label={ui.switchLanguageLabel}
                className="rounded-md px-2 py-2 text-sm font-medium text-foreground/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {ui.switchLanguageTo}
              </button>
              <a
                href="/#download"
                onClick={() => setMenuOpen(false)}
                className="flex-1 rounded-full bg-primary px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                {nav.cta}
              </a>
            </div>
          </Container>
        </nav>
      ) : null}
    </header>
  )
}

export default Navbar
