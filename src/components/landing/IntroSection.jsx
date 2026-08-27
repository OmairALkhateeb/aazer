import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'
import { useContent } from '../../i18n/LanguageContext'

function IntroSection() {
  const { intro } = useContent()
  return (
    <section id="about" className="scroll-mt-24 bg-background py-16 sm:py-20 lg:py-32">
      <Container>
        <SectionHeading eyebrow={intro.eyebrow} title={intro.title} subtitle={intro.body} />
      </Container>
    </section>
  )
}

export default IntroSection
