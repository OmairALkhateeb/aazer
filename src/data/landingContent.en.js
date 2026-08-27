// English content source for the landing page sections.
// Mirrors the shape of landingContent.js (the Arabic source of truth) —
// keep both files structurally in sync section by section.

export const nav = {
  links: [
    { label: 'Home', href: '#' },
    { label: 'About Aazer', href: '#about' },
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' },
  ],
  cta: 'Get Aazer',
}

export const hero = {
  eyebrow: 'Your doctor and your medicine, in one place',
  title: 'Aazer — book your doctor, order your medicine',
  subtitle:
    'With Aazer you book an online appointment with a doctor and talk to them directly by voice or video call, order your medicine from your preferred pharmacy, and keep track of your daily medication schedule so you never miss a dose.',
  primaryCta: 'Get Aazer',
  secondaryCta: 'Explore features',
  image: '/images/app/home.png',
}

export const intro = {
  eyebrow: 'Aazer brings it all together',
  title: 'Everything about your healthcare, in one app',
  body: 'From booking your doctor, to ordering your medicine from the pharmacy, to keeping up with your daily doses, Aazer is built to be the bridge that connects you to your doctor and pharmacy, and reminds you about your medication, in simple, clear steps.',
}

// Large storytelling feature sections — the shape (id, eyebrow, title,
// description, bullets, image, imageAlt) is what FeatureShowcase.jsx expects.
// These three cards are the app's actual core features — keep any future
// edits within these three ideas (doctor booking, pharmacy orders,
// medication schedule) rather than introducing new ones.
export const productFeatures = [
  {
    id: 'doctor-appointments',
    eyebrow: 'Doctor appointments',
    title: 'Book your doctor appointment online',
    description:
      'Choose the right doctor and book an appointment at a time that suits you, then talk to them directly over a voice or video call, with no need to travel or wait at a clinic.',
    bullets: ['Book your appointment online in simple steps', 'A direct voice call with your doctor', 'A video call when you need one'],
    image: '/images/app/feature-1.png',
    imageAlt: 'Doctor appointment booking screen in the Aazer app',
  },
  {
    id: 'pharmacy-orders',
    eyebrow: 'Medicine orders',
    title: 'Order your medicine from your preferred pharmacy',
    description:
      'Choose the pharmacy you trust and order your medicine from it directly through the app, with no need to call or go in person to check what is available.',
    bullets: ['Choose the pharmacy that suits you', 'Send your medicine order directly from the app', 'Track the status of your order'],
    image: '/images/app/feature-2.png',
    imageAlt: 'Pharmacy medicine order screen in the Aazer app',
  },
  {
    id: 'medication-schedule',
    eyebrow: 'Medication schedule',
    title: "Never miss a dose of your medicine",
    description:
      'Log your daily medication schedule inside Aazer, and it will remind you when each dose is due, helping you stick to the treatment plan your doctor prescribed.',
    bullets: ['A daily schedule for your medicine', 'A reminder for every dose', 'Track how well you keep up with your plan'],
    image: '/images/app/feature-3.png',
    imageAlt: 'Daily medication schedule screen in the Aazer app',
  },
]

export const whyAzer = {
  eyebrow: 'Why Aazer?',
  title: 'Your healthcare, closer and simpler',
  body: "We built Aazer to shorten the distance between your health need and the solution: a doctor to consult, medicine to order, and a dose schedule that never lets anything slip.",
  pillars: [
    {
      id: 'doctor-consultation',
      title: 'A medical consultation without travel',
      description:
        'Book your appointment and talk to your doctor by voice or video call from wherever you are, with no need to wait at a clinic.',
    },
    {
      id: 'pharmacy-access',
      title: 'Your preferred pharmacy, always within reach',
      description:
        'Order your medicine from the pharmacy you trust in just a few steps, with no need to call or go in person.',
    },
    {
      id: 'medication-adherence',
      title: 'Medication adherence, without forgetting',
      description:
        'Aazer keeps track of your daily medication schedule and reminds you when each dose is due, so you stick to your treatment plan as intended.',
    },
  ],
}

export const socialProof = {
  eyebrow: 'The Aazer experience',
  title: 'Aazer, as seen by its users',
  subtitle: 'Illustrative samples showing how people use Aazer to book their medical appointments, order their medicine, and keep up with their daily doses.',
}

// PLACEHOLDER / DEMO CONTENT — these are illustrative sample reviews, not
// real user submissions. Names, roles, and quotes are fictional and must
// be replaced with verified testimonials before this ships to production.
export const testimonials = [
  {
    isPlaceholder: true,
    text: 'I booked my doctor appointment and had the call from home with no travel at all — the experience was fast and really easy.',
    name: 'Sarah',
    role: 'Aazer user',
    avatar: null,
    rating: 5,
  },
  {
    isPlaceholder: true,
    text: 'I order my medicine straight from my preferred pharmacy through the app — it saved me the calling and the waiting.',
    name: 'Mona',
    role: 'Aazer user',
    avatar: null,
    rating: 4,
  },
  {
    isPlaceholder: true,
    text: 'The medication reminders helped me stick to my daily doses — I never missed a single one.',
    name: 'Khaled',
    role: 'Aazer user',
    avatar: null,
    rating: 5,
  },
  {
    isPlaceholder: true,
    text: 'The video call with the doctor was clear and comfortable, like being at the clinic but from my own room.',
    name: 'Layan',
    role: 'Aazer user',
    avatar: null,
    rating: 4,
  },
  {
    isPlaceholder: true,
    text: "Everything in one place: booking the doctor, ordering the medicine, and the dose schedule — I don't need more than one app.",
    name: 'Omar',
    role: 'Aazer user',
    avatar: null,
    rating: 5,
  },
]

// No verified metrics yet (user counts, ratings, download numbers, etc.).
// Add real, confirmed entries here — e.g. { value: '10K+', label: 'Active users' } —
// once available. MetricsRow renders nothing while this stays empty.
export const metrics = []

export const download = {
  title: 'Keep your doctor and your medicine within reach',
  subtitle: 'Get Aazer now, book your doctor appointment, order your medicine from your pharmacy, and keep up with your daily doses — all from one app.',
  // Real store URLs not provided yet — update both here once available.
  // Every StoreButton on the site should read from this object, not a
  // hardcoded href, so the links only need to change in one place.
  storeLinks: {
    apple: '#',
    google: '#',
  },
  qrImage: '/images/azer-qr.png',
  qrCaption: 'Scan the code to download Aazer',
  phoneImage: '/images/app/download-screen.png',
}

export const footer = {
  brandStatement: 'Aazer — your doctor and your medicine, in one place',
  description:
    'Aazer is an app that helps you book an online doctor appointment by voice or video call, order your medicine from your preferred pharmacy, and keep up with your daily medication schedule.',
  groups: [
    {
      title: 'Aazer',
      links: [
        { label: 'About Aazer', href: '#about' },
        { label: 'Features', href: '#features' },
        { label: 'How it works', href: '#how-it-works' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'FAQ', href: '#faq' },
        // Placeholder route — no contact page exists yet.
        { label: 'Contact us', href: '#contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        // Placeholder routes — no legal pages exist yet, do not fabricate content for them.
        { label: 'Privacy Policy', href: '#privacy' },
        { label: 'Terms & Conditions', href: '#terms' },
      ],
    },
    {
      title: 'App',
      links: [
        // Reuse the same centralized store links used in DownloadSection.
        { label: 'App Store', href: download.storeLinks.apple },
        { label: 'Google Play', href: download.storeLinks.google },
      ],
    },
  ],
  // No confirmed social accounts yet — hrefs stay '#' rather than fabricated URLs.
  social: [
    { label: 'Instagram', href: '#' },
    { label: 'X', href: '#' },
    { label: 'YouTube', href: '#' },
  ],
}

export const faqSection = {
  title: 'Frequently asked questions',
  subtitle: 'Everything you need to know about booking doctors, ordering medicine, and tracking your doses in Aazer',
}

// Generic, easily replaceable answers — update once exact product/support
// details (support channel, pricing plan, etc.) are confirmed. Keep every
// answer scoped to the app's three actual features: doctor booking,
// pharmacy orders, and the medication schedule/reminders.
export const faq = [
  {
    question: 'What is Aazer?',
    answer:
      'Aazer is an app that lets you book an online doctor appointment and talk to them by voice or video call, order your medicine from a pharmacy you choose, and keep up with your daily medication schedule through regular reminders.',
  },
  {
    question: 'How does a doctor consultation work on Aazer?',
    answer: 'You choose a doctor and book the appointment time that suits you from inside the app, then connect with them at the scheduled time over a voice call or a video call.',
  },
  {
    question: 'Can I choose which pharmacy I order my medicine from?',
    answer: 'Yes — you can choose the pharmacy you prefer and send your medicine order to it directly through Aazer.',
  },
  {
    question: 'How does Aazer help me not miss my medication?',
    answer: 'You log your daily medication schedule inside the app, and Aazer reminds you when each dose is due so you can stick to your treatment plan.',
  },
  {
    question: 'Does Aazer work on iPhone and Android?',
    answer: 'Yes, Aazer is designed to work on both iPhone and Android devices.',
  },
  {
    question: 'How is my health data handled?',
    answer: 'We handle your health data and information with great care, and give you clear control over what you share within the app.',
  },
  {
    question: 'Is the app free?',
    answer: 'Pricing and plan details will be available inside the app — stay tuned for updates.',
  },
]

export const meta = {
  title: 'Aazer | آزر',
  description: 'Aazer — an app that lets you book an online doctor appointment, order your medicine from your pharmacy, and keep up with your daily medication schedule.',
}

// Small UI strings that aren't part of a specific content section
// (nav/footer language toggle, aria-labels, image alt text, etc.).
export const ui = {
  logo: 'Aazer',
  mainMenuLabel: 'Main menu',
  mainMenuMobileLabel: 'Mobile main menu',
  openMenu: 'Open menu',
  closeMenu: 'Close menu',
  switchLanguageTo: 'العربية',
  switchLanguageLabel: 'Switch to Arabic',
  next: 'Next',
  previous: 'Previous',
  heroImageAlt: 'Aazer app home screen',
  qrImageAlt: 'QR code to download the Aazer app',
  downloadScreenAlt: 'Aazer app download screen',
  appStoreLabel: 'Download on the App Store',
  googlePlayLabel: 'Get it on Google Play',
  unknownInitial: '?',
  copyright: (year) => `© ${year} Aazer. All rights reserved.`,
}
