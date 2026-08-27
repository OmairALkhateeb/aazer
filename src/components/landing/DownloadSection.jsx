import { useState } from 'react'
import Container from '../ui/Container'
import StoreButton from '../ui/StoreButton'
import PhoneMockup from '../ui/PhoneMockup'
import AppScreenshot from '../ui/AppScreenshot'
import Reveal from '../ui/Reveal'
import { useContent } from '../../i18n/LanguageContext'

function QrCode({ download, qrAlt }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-white p-2 sm:h-24 sm:w-24">
      {download.qrImage && !failed ? (
        <img
          src={download.qrImage}
          alt={qrAlt}
          onError={() => setFailed(true)}
          className="h-full w-full object-contain"
        />
      ) : (
        <svg viewBox="0 0 24 24" fill="none" className="h-full w-full text-brand-300" aria-hidden="true">
          <rect x="3" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <rect x="15" y="3" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <rect x="3" y="15" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M15 15h2.5M15 18.5h6M20.5 15v3.5M15 21.5h6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )}
    </div>
  )
}

function DownloadSection() {
  const { download, ui } = useContent()
  return (
    <section id="download" className="scroll-mt-24 py-16 sm:py-20 lg:py-32">
      <Container>
        <div className="relative rounded-[2.5rem] bg-primary">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2.5rem]"
          >
            <div className="absolute -top-24 -start-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-16 -end-10 h-64 w-64 rounded-full bg-brand-800/20 blur-3xl" />
          </div>

          <div className="relative grid gap-12 px-8 py-14 sm:px-12 sm:py-16 lg:grid-cols-2 lg:items-end lg:gap-10 lg:px-16 lg:py-20">
            <div className="flex flex-col items-center gap-8 text-center lg:items-start lg:text-start">
              <div className="flex flex-col gap-4">
                <h2 className="max-w-md text-3xl font-extrabold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">
                  {download.title}
                </h2>
                <p className="max-w-sm text-lg leading-relaxed text-primary-foreground/85">
                  {download.subtitle}
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <StoreButton store="apple" href={download.storeLinks.apple} />
                <StoreButton store="google" href={download.storeLinks.google} />
              </div>

              <div className="flex items-center gap-4">
                <QrCode download={download} qrAlt={ui.qrImageAlt} />
                <p className="max-w-[10rem] text-sm text-primary-foreground/80">
                  {download.qrCaption}
                </p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Reveal direction="up" className="w-full">
                <div className="phone-float">
                  <PhoneMockup className="max-w-[220px] sm:max-w-[255px] lg:max-w-[290px] lg:-mb-24">
                    <AppScreenshot src={download.phoneImage} alt={ui.downloadScreenAlt} />
                  </PhoneMockup>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default DownloadSection
