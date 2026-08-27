import { useRef } from 'react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import MetricsRow from '../ui/MetricsRow'
import { useContent, useLanguage } from '../../i18n/LanguageContext'

function Star({ filled }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill={filled ? 'currentColor' : 'none'}
      className="h-3.5 w-3.5 text-primary"
      aria-hidden="true"
    >
      <path
        d="M10 2.5l2.3 4.66 5.14.75-3.72 3.63.88 5.12L10 14.2l-4.6 2.42.88-5.12-3.72-3.63 5.14-.75L10 2.5z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function TestimonialCard({ testimonial, unknownInitial }) {
  const initial = testimonial.name?.trim().charAt(0) ?? unknownInitial

  return (
    <figure className="flex w-[85%] shrink-0 snap-start flex-col gap-6 rounded-[1.75rem] bg-card p-8 ring-1 ring-black/5 sm:w-[47%] sm:p-10 lg:w-[31%]">
      {testimonial.rating ? (
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} filled={i < testimonial.rating} />
          ))}
        </div>
      ) : null}

      <blockquote className="text-lg leading-relaxed text-foreground/90">
        {testimonial.text}
      </blockquote>

      <figcaption className="mt-auto flex items-center gap-3">
        {testimonial.avatar ? (
          <img
            src={testimonial.avatar}
            alt=""
            className="h-11 w-11 rounded-full object-cover"
          />
        ) : (
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-100 text-sm font-semibold text-brand-700">
            {initial}
          </span>
        )}
        <div className="flex flex-col">
          <span className="text-sm font-semibold text-foreground">{testimonial.name}</span>
          {testimonial.role ? (
            <span className="text-sm text-muted-foreground">{testimonial.role}</span>
          ) : null}
        </div>
      </figcaption>
    </figure>
  )
}

function TestimonialsSection() {
  const trackRef = useRef(null)
  const { socialProof, testimonials, metrics, ui } = useContent()
  const { dir } = useLanguage()

  const scrollByDirection = (direction) => {
    const track = trackRef.current
    if (!track) return
    const step = track.clientWidth * 0.85
    // RTL scrollLeft is negative going forward in Chromium/Firefox, so the
    // "next" direction (1) must scroll left by a negative delta in RTL,
    // and by a positive delta in LTR.
    const rtlSign = dir === 'rtl' ? -1 : 1
    track.scrollBy({ left: rtlSign * direction * step, behavior: 'smooth' })
  }

  return (
    <section id="testimonials" className="scroll-mt-24 bg-brand-50 py-16 sm:py-20 lg:py-32">
      <Container className="flex flex-col gap-12 lg:gap-16">
        <SectionHeading
          eyebrow={socialProof.eyebrow}
          title={socialProof.title}
          subtitle={socialProof.subtitle}
        />

        <MetricsRow metrics={metrics} />

        <div className="flex flex-col gap-8">
          <div
            ref={trackRef}
            className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth"
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
                unknownInitial={ui.unknownInitial}
              />
            ))}
          </div>

          {testimonials.length > 1 ? (
            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => scrollByDirection(1)}
                aria-label={ui.next}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
                  <path
                    d="M12.5 5l-5 5 5 5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => scrollByDirection(-1)}
                aria-label={ui.previous}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
                  <path
                    d="M7.5 5l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  )
}

export default TestimonialsSection
