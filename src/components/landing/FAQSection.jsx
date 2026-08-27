import { useState } from 'react'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { useContent } from '../../i18n/LanguageContext'

function FAQItem({ item, index, isOpen, onToggle }) {
  const buttonId = `faq-button-${index}`
  const panelId = `faq-panel-${index}`

  return (
    <div className="py-2">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 rounded-md py-4 text-start focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span className="text-lg font-semibold text-foreground">{item.question}</span>
          <svg
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
            className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${
              isOpen ? '-rotate-180' : ''
            }`}
          >
            <path
              d="M5 7.5l5 5 5-5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-4 leading-relaxed text-muted-foreground">{item.answer}</p>
        </div>
      </div>
    </div>
  )
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)
  const { faqSection, faq } = useContent()

  return (
    <section id="faq" className="scroll-mt-24 py-16 sm:py-20 lg:py-32">
      <Container className="flex flex-col gap-12 lg:gap-16">
        <SectionHeading title={faqSection.title} subtitle={faqSection.subtitle} />

        <div className="mx-auto flex w-full max-w-2xl flex-col divide-y divide-border">
          {faq.map((item, index) => (
            <FAQItem
              key={item.question}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FAQSection
