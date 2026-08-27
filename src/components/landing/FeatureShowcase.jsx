import Container from '../ui/Container'
import PhoneMockup from '../ui/PhoneMockup'
import AppScreenshot from '../ui/AppScreenshot'
import Reveal from '../ui/Reveal'
import { useContent } from '../../i18n/LanguageContext'

const sectionBackgrounds = ['bg-brand-50', 'bg-background', 'bg-card', 'bg-brand-100']
const glowColors = ['bg-brand-200/50', 'bg-brand-100/60', 'bg-brand-200/50', 'bg-brand-300/40']

function FeatureShowcase() {
  const { productFeatures, nav } = useContent()
  const featuresLabel = nav.links.find((link) => link.href === '#features')?.label ?? ''

  return (
    <section id="features" className="scroll-mt-24">
      <h2 className="sr-only">{featuresLabel}</h2>
      {productFeatures.map((item, index) => {
        const reverse = index % 2 === 1

        return (
          <div key={item.id} className={sectionBackgrounds[index % sectionBackgrounds.length]}>
            <Container className="grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-32">
              <div
                className={`flex flex-col items-center gap-5 text-center lg:items-start lg:text-start ${
                  reverse ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <span className="text-sm font-semibold uppercase tracking-wide text-primary">
                  {item.eyebrow}
                </span>

                <h3 className="max-w-md text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
                  {item.title}
                </h3>

                <p className="max-w-md text-lg leading-relaxed text-muted-foreground">
                  {item.description}
                </p>

                {item.bullets?.length ? (
                  <ul className="flex flex-col gap-3 pt-2">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-3 text-foreground/90">
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          className="h-4 w-4 shrink-0 text-primary"
                          aria-hidden="true"
                        >
                          <path
                            d="M4 10.5l3.5 3.5L16 5.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>

              <div
                className={`relative flex justify-center py-6 lg:py-0 ${
                  reverse ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div
                  aria-hidden="true"
                  className={`absolute h-72 w-72 rounded-full blur-3xl sm:h-80 sm:w-80 ${glowColors[index % glowColors.length]}`}
                />
                <Reveal direction={reverse ? 'right' : 'left'} className="w-full">
                  <div className="phone-float">
                    <PhoneMockup className="max-w-[255px] sm:max-w-[290px] lg:max-w-[320px]">
                      <AppScreenshot src={item.image} alt={item.imageAlt} />
                    </PhoneMockup>
                  </div>
                </Reveal>
              </div>
            </Container>
          </div>
        )
      })}
    </section>
  )
}

export default FeatureShowcase
