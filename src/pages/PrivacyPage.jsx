import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Container from '../components/ui/Container'
import { useContent } from '../i18n/LanguageContext'

function SectionItems({ items }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item.text} className="flex gap-3 leading-relaxed text-muted-foreground">
          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
          <span>
            {item.label ? (
              <strong className="font-semibold text-foreground">{item.label}: </strong>
            ) : null}
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  )
}

function SectionContacts({ contacts }) {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {contacts.map((contact) => {
        const value = (
          <span
            dir={contact.ltr ? 'ltr' : undefined}
            className="text-base font-semibold text-foreground"
          >
            {contact.value}
          </span>
        )

        return (
          <li key={contact.label} className={contact.href ? '' : 'sm:col-span-2'}>
            {contact.href ? (
              <a
                href={contact.href}
                className="flex flex-col items-start gap-1 rounded-xl border border-border px-4 py-3 transition-colors hover:border-primary/40 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <span className="text-sm text-muted-foreground">{contact.label}</span>
                {value}
              </a>
            ) : (
              <div className="flex flex-col items-start gap-1 rounded-xl border border-border px-4 py-3">
                <span className="text-sm text-muted-foreground">{contact.label}</span>
                {value}
              </div>
            )}
          </li>
        )
      })}
    </ul>
  )
}

function PolicySection({ section, number }) {
  const headingId = `${section.id}-heading`

  return (
    <section id={section.id} aria-labelledby={headingId} className="flex scroll-mt-24 flex-col gap-5">
      <h2 id={headingId} className="flex items-center gap-3 text-xl font-bold text-foreground sm:text-2xl">
        <span
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-secondary text-base font-bold text-secondary-foreground"
          aria-hidden="true"
        >
          {number}
        </span>
        {section.title}
      </h2>
      {section.body ? <p className="leading-relaxed text-muted-foreground">{section.body}</p> : null}
      {section.items ? <SectionItems items={section.items} /> : null}
      {section.contacts ? <SectionContacts contacts={section.contacts} /> : null}
    </section>
  )
}

function PrivacyPage() {
  const { privacyPolicy } = useContent()

  return (
    <>
      <Navbar />
      <main>
        <section className="border-b border-border bg-secondary">
          <Container className="flex flex-col items-center gap-4 py-16 text-center sm:py-20">
            <span className="text-sm font-semibold uppercase tracking-wide text-primary">
              {privacyPolicy.eyebrow}
            </span>
            <h1 className="max-w-3xl text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              {privacyPolicy.title}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {privacyPolicy.subtitle}
            </p>
            <p className="mt-2 rounded-full bg-background px-4 py-1.5 text-sm text-muted-foreground">
              {privacyPolicy.lastUpdatedLabel}:{' '}
              <time className="font-semibold text-foreground">{privacyPolicy.lastUpdated}</time>
            </p>
          </Container>
        </section>

        <Container className="grid grid-cols-1 gap-12 py-16 sm:py-20 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-16">
          <aside>
            <nav
              aria-labelledby="toc-heading"
              className="rounded-2xl border border-border p-6 lg:sticky lg:top-24"
            >
              <h2 id="toc-heading" className="mb-4 text-sm font-semibold text-foreground">
                {privacyPolicy.tocTitle}
              </h2>
              <ol className="flex flex-col gap-1">
                {privacyPolicy.sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="flex gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <span className="font-semibold text-primary">{index + 1}.</span>
                      {section.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <article className="flex max-w-3xl flex-col gap-12">
            {privacyPolicy.sections.map((section, index) => (
              <PolicySection key={section.id} section={section} number={index + 1} />
            ))}
          </article>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default PrivacyPage
