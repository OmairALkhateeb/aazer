import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { useContent } from '../../i18n/LanguageContext'

function WhyAzerSection() {
  const { whyAzer } = useContent()
  const [simple, privacy, allInOne] = whyAzer.pillars

  return (
    <section id="why-azer" className="scroll-mt-24 bg-background py-16 sm:py-20 lg:py-32">
      <Container className="flex flex-col gap-14 lg:gap-20">
        <SectionHeading
          eyebrow={whyAzer.eyebrow}
          title={whyAzer.title}
          subtitle={whyAzer.body}
          align="items-center text-center lg:items-start lg:text-start"
        />

        <div className="grid gap-6 lg:grid-cols-2 lg:grid-rows-2">
          <div className="relative flex flex-col justify-between gap-10 overflow-hidden rounded-[2rem] bg-primary p-10 text-primary-foreground sm:p-12 lg:row-span-2">
            <div
              aria-hidden="true"
              className="absolute -bottom-16 -start-16 h-64 w-64 rounded-full bg-white/10 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="absolute -top-10 -end-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"
            />

            <div className="relative flex flex-col gap-4">
              <h3 className="text-2xl font-bold sm:text-3xl">{simple.title}</h3>
              <p className="max-w-sm text-primary-foreground/85 sm:text-lg">
                {simple.description}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-[2rem] bg-brand-50 p-8 sm:p-10">
            <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9 text-primary" aria-hidden="true">
              <path
                d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            <h3 className="text-xl font-bold text-foreground sm:text-2xl">{privacy.title}</h3>
            <p className="text-muted-foreground">{privacy.description}</p>
          </div>

          <div className="flex flex-col gap-4 rounded-[2rem] bg-brand-100 p-8 sm:p-10">
            <svg viewBox="0 0 24 24" fill="none" className="h-9 w-9 text-brand-700" aria-hidden="true">
              <path
                d="M12 3l8 4-8 4-8-4 8-4z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
              <path d="M4 12l8 4 8-4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M4 16l8 4 8-4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
            <h3 className="text-xl font-bold text-foreground sm:text-2xl">{allInOne.title}</h3>
            <p className="text-muted-foreground">{allInOne.description}</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default WhyAzerSection
