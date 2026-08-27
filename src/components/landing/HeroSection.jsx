import Container from '../ui/Container'
import PhoneMockup from '../ui/PhoneMockup'
import AppScreenshot from '../ui/AppScreenshot'
import Reveal from '../ui/Reveal'
import { useContent } from '../../i18n/LanguageContext'

function HeroSection() {
  const { hero, ui } = useContent()
  return (
    <section className="relative overflow-hidden bg-brand-50/60 py-16 sm:py-20 lg:flex lg:min-h-[88vh] lg:items-center lg:py-0">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-brand-100/70 blur-3xl sm:h-[34rem] sm:w-[34rem]" />
        <div className="absolute bottom-0 -end-24 h-72 w-72 rounded-full bg-brand-200/50 blur-3xl sm:h-96 sm:w-96" />
      </div>

      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-start">
          <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
            {hero.eyebrow}
          </span>

          <h1 className="max-w-xl text-[2.5rem] font-extrabold leading-[1.15] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:max-w-none lg:text-7xl">
            {hero.title}
          </h1>

          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {hero.subtitle}
          </p>

          <div className="flex flex-col gap-4 pt-2 sm:flex-row">
            <a
              href="#download"
              className="rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {hero.primaryCta}
            </a>
            <a
              href="#features"
              className="rounded-full border border-border bg-background px-8 py-4 text-base font-semibold text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-start">
          <Reveal direction="scale" className="w-full">
            <div className="phone-float">
              <PhoneMockup className="max-w-[240px] sm:max-w-[270px] lg:max-w-[300px]">
                <AppScreenshot src={hero.image} alt={ui.heroImageAlt} priority />
              </PhoneMockup>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}

export default HeroSection
