// Central content source for the landing page sections.

export const nav = {
  links: [
    { label: 'الرئيسية', href: '#' },
    { label: 'عن آزر', href: '#about' },
    { label: 'المميزات', href: '#features' },
    { label: 'كيف يعمل', href: '#how-it-works' },
    { label: 'الأسئلة الشائعة', href: '#faq' },
  ],
  cta: 'حمّل آزر',
}

export const hero = {
  eyebrow: 'طبيبك ودواؤك في مكان واحد',
  title: 'آزر... احجز طبيبك واطلب دواءك بسهولة',
  subtitle:
    'مع آزر تحجز موعدك عند الطبيب أونلاين وتتحدث معه مباشرة بمكالمة صوت أو فيديو، وتطلب دواءك من صيدليتك المفضلة، وتتابع برنامج أدويتك اليومي دون أن تفوّت جرعة.',
  primaryCta: 'حمّل آزر',
  secondaryCta: 'اكتشف المميزات',
  image: '/images/app/home.jpg',
}

export const intro = {
  eyebrow: 'آزر يجمعها لك',
  title: 'كل ما يخص رعايتك الصحية، في تطبيق واحد',
  body: 'من حجز موعد طبيبك، إلى طلب دواءك من صيدليتك، ومتابعة جرعاتك اليومية، صمّمنا آزر ليكون الجسر الذي يربطك بطبيبك وصيدليتك ويذكّرك بأدويتك، بخطوات بسيطة وواضحة.',
}

// Large storytelling feature sections — the shape (id, eyebrow, title,
// description, bullets, image, imageAlt) is what FeatureShowcase.jsx expects.
// These three cards are the app's actual core features — keep any future
// edits within these three ideas (doctor booking, pharmacy orders,
// medication schedule) rather than introducing new ones.
export const productFeatures = [
  {
    id: 'doctor-appointments',
    eyebrow: 'حجز موعد طبيب',
    title: 'احجز موعدك عند الطبيب أونلاين',
    description:
      'اختر الطبيب المناسب واحجز موعدك في الوقت الذي يناسبك، وتحدّث معه مباشرة عبر مكالمة صوتية أو مكالمة فيديو دون الحاجة للتنقل أو الانتظار في العيادة.',
    bullets: ['حجز الموعد أونلاين بخطوات بسيطة', 'مكالمة صوت مباشرة مع الطبيب', 'مكالمة فيديو عند الحاجة'],
    image: '/images/app/feature-1.jpg',
    imageAlt: 'شاشة حجز موعد الطبيب في تطبيق آزر',
  },
  {
    id: 'pharmacy-orders',
    eyebrow: 'طلب الأدوية',
    title: 'اطلب دواءك من صيدليتك المفضلة',
    description:
      'اختر الصيدلية التي تثق بها واطلب دواءك منها مباشرة عبر التطبيق، دون الحاجة للاتصال أو الذهاب شخصيًا للسؤال عن توفره.',
    bullets: ['اختيار الصيدلية التي تناسبك', 'إرسال طلب الدواء مباشرة من التطبيق', 'متابعة حالة طلبك'],
    image: '/images/app/feature-2.jpg',
    imageAlt: 'شاشة طلب الدواء من الصيدلية في تطبيق آزر',
  },
  {
    id: 'medication-schedule',
    eyebrow: 'برنامج الأدوية',
    title: 'لا تفوّت جرعة من دوائك',
    description:
      'سجّل برنامجك الدوائي اليومي داخل آزر، ليذكّرك بموعد كل جرعة، ويساعدك على الالتزام بنظامك العلاجي كما وصفه طبيبك.',
    bullets: ['جدول يومي لأدويتك', 'تذكير بموعد كل جرعة', 'متابعة التزامك بالنظام الدوائي'],
    image: '/images/app/feature-3.jpg',
    imageAlt: 'شاشة برنامج الأدوية اليومي في تطبيق آزر',
  },
]

export const whyAzer = {
  eyebrow: 'لماذا آزر؟',
  title: 'رعايتك الصحية أقرب وأبسط',
  body: 'صمّمنا آزر ليختصر عليك الطريق بين احتياجك الصحي والحل: طبيب تستشيره، دواء تطلبه، وجدول جرعات لا يفوتك منه شيء.',
  pillars: [
    {
      id: 'doctor-consultation',
      title: 'استشارة طبية دون تنقل',
      description:
        'احجز موعدك وتحدّث مع طبيبك بمكالمة صوت أو فيديو من مكانك، دون الحاجة للانتظار في عيادة.',
    },
    {
      id: 'pharmacy-access',
      title: 'صيدليتك المفضلة دائمًا بمتناولك',
      description:
        'اطلب دواءك من الصيدلية التي تثق بها بخطوات قليلة، دون الحاجة للاتصال أو الذهاب شخصيًا.',
    },
    {
      id: 'medication-adherence',
      title: 'التزام دوائي دون نسيان',
      description:
        'يتابع آزر برنامج أدويتك اليومي ويذكّرك بموعد كل جرعة، لتلتزم بخطتك العلاجية كما ينبغي.',
    },
  ],
}

export const socialProof = {
  eyebrow: 'تجربة آزر',
  title: 'آزر كما يراه مستخدموه',
  subtitle: 'نماذج توضيحية تعكس كيف يستخدم الناس آزر لحجز مواعيدهم الطبية، وطلب أدويتهم، ومتابعة جرعاتهم اليومية.',
}

// PLACEHOLDER / DEMO CONTENT — these are illustrative sample reviews, not
// real user submissions. Names, roles, and quotes are fictional and must
// be replaced with verified testimonials before this ships to production.
export const testimonials = [
  {
    isPlaceholder: true,
    text: 'حجزت موعدي مع الطبيب وأجريت المكالمة من البيت دون أي تنقل، التجربة كانت سريعة وسهلة جدًا.',
    name: 'سارة',
    role: 'مستخدمة آزر',
    avatar: null,
    rating: 5,
  },
  {
    isPlaceholder: true,
    text: 'أطلب دوائي من صيدليتي المفضلة مباشرة من التطبيق، وفّر عليّ وقت الاتصال والانتظار.',
    name: 'منى',
    role: 'مستخدمة آزر',
    avatar: null,
    rating: 4,
  },
  {
    isPlaceholder: true,
    text: 'تذكيرات الأدوية ساعدتني ألتزم بجرعاتي اليومية دون ما أنسى موعدها ولا مرة.',
    name: 'خالد',
    role: 'مستخدم آزر',
    avatar: null,
    rating: 5,
  },
  {
    isPlaceholder: true,
    text: 'مكالمة الفيديو مع الطبيب كانت واضحة ومريحة، وكأنني في العيادة لكن من غرفتي.',
    name: 'ليان',
    role: 'مستخدمة آزر',
    avatar: null,
    rating: 4,
  },
  {
    isPlaceholder: true,
    text: 'كل شيء بمكان واحد: حجز الطبيب، وطلب الدواء، وجدول الجرعات، ما عاد أحتاج أكثر من تطبيق.',
    name: 'عمر',
    role: 'مستخدم آزر',
    avatar: null,
    rating: 5,
  },
]

// No verified metrics yet (user counts, ratings, download numbers, etc.).
// Add real, confirmed entries here — e.g. { value: '10K+', label: 'مستخدم نشط' } —
// once available. MetricsRow renders nothing while this stays empty.
export const metrics = []

export const download = {
  title: 'خلي طبيبك ودواؤك بمتناول يدك',
  subtitle: 'حمّل آزر الآن، واحجز موعدك عند الطبيب، واطلب دواءك من صيدليتك، وتابع جرعاتك اليومية، كل ذلك من تطبيق واحد.',
  // Real store URLs not provided yet — update both here once available.
  // Every StoreButton on the site should read from this object, not a
  // hardcoded href, so the links only need to change in one place.
  storeLinks: {
    apple: '#',
    google: '#',
  },
  qrImage: '/images/azer-qr.png',
  qrCaption: 'امسح الرمز لتحميل آزر',
  phoneImage: '/images/app/download-screen.jpg',
}

export const footer = {
  brandStatement: 'آزر... طبيبك ودواؤك في مكان واحد',
  description:
    'آزر تطبيق يساعدك على حجز موعد طبيب أونلاين بمكالمة صوت أو فيديو، وطلب دواءك من صيدليتك المفضلة، ومتابعة برنامج أدويتك اليومي.',
  groups: [
    {
      title: 'آزر',
      links: [
        { label: 'عن آزر', href: '#about' },
        { label: 'المميزات', href: '#features' },
        { label: 'كيف يعمل', href: '#how-it-works' },
      ],
    },
    {
      title: 'الدعم',
      links: [
        { label: 'الأسئلة الشائعة', href: '#faq' },
        // Placeholder route — no contact page exists yet.
        { label: 'تواصل معنا', href: '#contact' },
      ],
    },
    {
      title: 'قانوني',
      links: [
        // Placeholder routes — no legal pages exist yet, do not fabricate content for them.
        { label: 'سياسة الخصوصية', href: '#privacy' },
        { label: 'الشروط والأحكام', href: '#terms' },
      ],
    },
    {
      title: 'التطبيق',
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
  title: 'الأسئلة الشائعة',
  subtitle: 'كل ما تحتاج معرفته عن حجز الأطباء، وطلب الأدوية، ومتابعة جرعاتك في آزر',
}

// Generic, easily replaceable answers — update once exact product/support
// details (support channel, pricing plan, etc.) are confirmed. Keep every
// answer scoped to the app's three actual features: doctor booking,
// pharmacy orders, and the medication schedule/reminders.
export const faq = [
  {
    question: 'ما هو تطبيق آزر؟',
    answer:
      'آزر تطبيق يتيح لك حجز موعد عند طبيب أونلاين والتحدث معه بمكالمة صوت أو فيديو، وطلب دواءك من صيدلية تختارها، ومتابعة برنامج أدويتك اليومي بتذكيرات منتظمة.',
  },
  {
    question: 'كيف تتم استشارة الطبيب عبر آزر؟',
    answer: 'تختار الطبيب وتحجز الموعد المناسب لك من داخل التطبيق، ثم تتواصل معه في الموعد المحدد عبر مكالمة صوتية أو مكالمة فيديو.',
  },
  {
    question: 'هل يمكنني اختيار الصيدلية التي أطلب دوائي منها؟',
    answer: 'نعم، يمكنك اختيار الصيدلية التي تفضلها وإرسال طلب دوائك إليها مباشرة من خلال آزر.',
  },
  {
    question: 'كيف يساعدني آزر على عدم نسيان مواعيد أدويتي؟',
    answer: 'تسجّل برنامجك الدوائي اليومي داخل التطبيق، وسيذكّرك آزر بموعد كل جرعة حتى تلتزم بنظامك العلاجي.',
  },
  {
    question: 'هل يعمل آزر على أجهزة آيفون وأندرويد؟',
    answer: 'نعم، تم تصميم آزر ليعمل على أجهزة آيفون وأندرويد.',
  },
  {
    question: 'كيف يتم التعامل مع بياناتي الصحية؟',
    answer: 'نتعامل مع بياناتك ومعلوماتك الطبية بحرص تام، ونمنحك تحكمًا واضحًا فيما تشاركه داخل التطبيق.',
  },
  {
    question: 'هل التطبيق مجاني؟',
    answer: 'تفاصيل الأسعار والباقات ستكون متاحة داخل التطبيق، تابعنا لمزيد من التحديثات.',
  },
]

export const meta = {
  title: 'آزر | Aazer',
  description: 'آزر — تطبيق يتيح لك حجز موعد طبيب أونلاين، وطلب دواءك من صيدليتك، ومتابعة برنامج أدويتك اليومي.',
}

// Small UI strings that aren't part of a specific content section
// (nav/footer language toggle, aria-labels, image alt text, etc.).
export const ui = {
  logo: 'آزر',
  mainMenuLabel: 'القائمة الرئيسية',
  mainMenuMobileLabel: 'القائمة الرئيسية للجوال',
  openMenu: 'فتح القائمة',
  closeMenu: 'إغلاق القائمة',
  switchLanguageTo: 'English',
  switchLanguageLabel: 'التبديل إلى الإنجليزية',
  next: 'التالي',
  previous: 'السابق',
  heroImageAlt: 'الشاشة الرئيسية لتطبيق آزر',
  qrImageAlt: 'رمز الاستجابة السريعة لتحميل تطبيق آزر',
  downloadScreenAlt: 'شاشة تحميل تطبيق آزر',
  appStoreLabel: 'حمّل من App Store',
  googlePlayLabel: 'حمّل من Google Play',
  unknownInitial: '؟',
  copyright: (year) => `© ${year} آزر. جميع الحقوق محفوظة.`,
}
