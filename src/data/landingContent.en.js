// English content source for the landing page sections.
// Mirrors the shape of landingContent.js (the Arabic source of truth) —
// keep both files structurally in sync section by section.

export const nav = {
  links: [
    { label: 'Home', href: '/#' },
    { label: 'About Aazer', href: '/#about' },
    { label: 'Features', href: '/#features' },
    { label: 'How it works', href: '/#how-it-works' },
    { label: 'FAQ', href: '/#faq' },
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
  image: '/images/app/home.jpg',
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
    image: '/images/app/feature-1.jpg',
    imageAlt: 'Doctor appointment booking screen in the Aazer app',
  },
  {
    id: 'pharmacy-orders',
    eyebrow: 'Medicine orders',
    title: 'Order your medicine from your preferred pharmacy',
    description:
      'Choose the pharmacy you trust and order your medicine from it directly through the app, with no need to call or go in person to check what is available.',
    bullets: ['Choose the pharmacy that suits you', 'Send your medicine order directly from the app', 'Track the status of your order'],
    image: '/images/app/feature-2.jpg',
    imageAlt: 'Pharmacy medicine order screen in the Aazer app',
  },
  {
    id: 'medication-schedule',
    eyebrow: 'Medication schedule',
    title: "Never miss a dose of your medicine",
    description:
      'Log your daily medication schedule inside Aazer, and it will remind you when each dose is due, helping you stick to the treatment plan your doctor prescribed.',
    bullets: ['A daily schedule for your medicine', 'A reminder for every dose', 'Track how well you keep up with your plan'],
    image: '/images/app/feature-3.jpg',
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
  phoneImage: '/images/app/download-screen.jpg',
}

export const footer = {
  brandStatement: 'Aazer — your doctor and your medicine, in one place',
  description:
    'Aazer is an app that helps you book an online doctor appointment by voice or video call, order your medicine from your preferred pharmacy, and keep up with your daily medication schedule.',
  groups: [
    {
      title: 'Aazer',
      links: [
        { label: 'About Aazer', href: '/#about' },
        { label: 'Features', href: '/#features' },
        { label: 'How it works', href: '/#how-it-works' },
      ],
    },
    {
      title: 'Support',
      links: [
        { label: 'FAQ', href: '/#faq' },
        // Scrolls to the phone numbers block in the footer.
        { label: 'Contact us', href: '#contact' },
      ],
    },
    {
      title: 'Legal',
      links: [
        // Privacy policy and terms of use are a single combined document.
        { label: 'Privacy Policy', href: '/privacy/' },
        { label: 'Terms & Conditions', href: '/privacy/#acceptable-use' },
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
  // Reserved numbers 0989582986–0989582989 are spares and intentionally not listed.
  contact: {
    title: 'Contact numbers',
    phones: [
      { label: 'Main line & customer service 1', number: '0989582982' },
      { label: 'Main line & customer service 2', number: '0989582983' },
      { label: 'General management', number: '0989582980' },
      { label: 'Sales & marketing', number: '0989582981' },
      { label: 'Finance (accounting)', number: '0989582984' },
      { label: 'Technical support & development', number: '0989582985' },
    ],
  },
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

// Privacy policy & terms of use — rendered on /privacy/ (src/pages/PrivacyPage.jsx).
// Translation of the Arabic text in landingContent.js, which is the company-supplied original.
export const privacyPolicy = {
  meta: {
    title: 'Privacy Policy & Terms of Use | Aazer',
    description: 'Privacy policy and terms of use for Aazer, the medical appointment booking app.',
  },
  eyebrow: 'Legal',
  title: 'Privacy Policy & Terms of Use',
  subtitle: 'This page explains how we collect, use and protect your data, and the terms that govern your use of the Aazer app.',
  lastUpdatedLabel: 'Last updated',
  lastUpdated: 'October 1, 2026',
  tocTitle: 'Contents',
  sections: [
    {
      id: 'about',
      title: 'About the app and the responsible party',
      body: 'Aazer is a digital platform that provides medical appointment booking services to its users.',
      items: [
        { label: 'Owner and responsible party', text: 'Hyper Loop / General Manager: Mohammad Karim Al-Sharbaji' },
        { label: 'Headquarters', text: 'Cham Hotel Complex Building, Al-Salihiyah, Damascus, Syria' },
        { text: 'The responsible party is committed to protecting user data and providing a safe environment of use in accordance with the provisions set out in this policy.' },
      ],
    },
    {
      id: 'accounts',
      title: 'Target audience and user accounts',
      items: [
        { text: 'The app is intended for the general public.' },
        { text: "Access to some or all of the app's services requires creating a personal account and providing accurate information." },
        { text: 'Users are fully responsible for keeping their account details confidential and for any activity carried out through their account.' },
      ],
    },
    {
      id: 'services',
      title: 'How the services are used',
      items: [
        { text: 'Services are provided through the app according to the features and options available in its interface.' },
        { text: 'Some services may be available free of charge, while others may require paying fees or activating specific subscriptions.' },
        { text: 'Users agree to follow the technical and regulatory instructions and controls while using the services.' },
      ],
    },
    {
      id: 'data',
      title: 'Collection of data and personal information',
      items: [
        {
          label: 'Data collected',
          text: 'The app may collect certain data necessary to provide the service, such as: name, email address, phone number, geographic location, and medical data.',
        },
        {
          label: 'Purposes of use',
          text: 'Data is used to operate the app, provide technical support, improve service quality, and meet regulatory obligations.',
        },
        {
          label: 'Data confidentiality',
          text: "We do not share or sell any personal data to third parties except with the user's explicit consent or in response to applicable legal requirements.",
        },
      ],
    },
    {
      id: 'acceptable-use',
      title: 'Acceptable use and prohibitions',
      body: 'While using the Aazer app, users must not:',
      items: [
        { text: 'Misuse the app or disrupt its operation by any technical means.' },
        { text: 'Use the service for unlawful purposes or in violation of local or international regulations.' },
        { text: "Attempt unauthorized access to other users' data or to the app's systems." },
      ],
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual property and administrative rights',
      items: [
        { text: 'All intellectual property rights in the app (including designs, trademarks, source code and content) are the exclusive property of Hyper Loop.' },
        { text: 'Hyper Loop reserves the right to modify, suspend or terminate the account of any user who violates the terms of use, without prior notice.' },
      ],
    },
    {
      id: 'security',
      title: 'Information security and disclaimer',
      items: [
        { text: 'We apply standard measures to protect data against unauthorized access, alteration or destruction.' },
        { text: "The app's services are provided based on available capabilities, and Hyper Loop is not liable for any indirect damages or interruptions resulting from circumstances beyond the app's technical control." },
      ],
    },
    {
      id: 'changes',
      title: 'Changes to the policy and terms',
      body: 'Hyper Loop reserves the right to amend this policy at any time. Users will be notified of any updates by email or by an in-app notification, and continued use of the app constitutes acceptance of the updated policy.',
    },
    {
      id: 'support',
      title: 'Contact and technical support',
      body: 'For any questions or feedback regarding the terms and policy of use, you can reach us via:',
      contacts: [
        { label: 'Email', value: 'hello@aazer.app', href: 'mailto:hello@aazer.app', ltr: true },
        { label: 'Phone', value: '0989582982', href: 'tel:+963989582982', ltr: true },
        { label: 'Address', value: 'Cham Hotel Complex Building, Al-Salihiyah, Damascus, Syria' },
      ],
    },
  ],
}
