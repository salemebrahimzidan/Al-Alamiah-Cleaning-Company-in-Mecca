export type SeoSlug =
  | 'home-cleaning-makkah'
  | 'villa-cleaning-makkah'
  | 'office-cleaning-makkah'
  | 'deep-cleaning-makkah'
  | 'al-aziziyah-makkah'
  | 'al-shawqiyah-makkah'
  | 'near-al-haram-makkah'

export type SeoBlock = { type: 'h2' | 'h3' | 'p'; text: string }

export type SeoPageContent = {
  path: string
  title: string
  description: string
  h1: string
  blocks: SeoBlock[]
  relatedSlugs: SeoSlug[]
}

const pages: Record<SeoSlug, { ar: SeoPageContent; en: SeoPageContent }> = {
  'home-cleaning-makkah': {
    ar: {
      path: '/services/home-cleaning-makkah',
      title: 'تنظيف منازل مكة | شركة تنظيف شقق وسكني | شركة العالمية للتنظيف',
      description:
        'تنظيف منازل في مكة المكرمة بسرعة وجودة عالية. غرف ومطابخ وحمامات ومواد آمنة. احجز عبر واتساب وحدد موعدك اليوم.',
      h1: 'تنظيف منازل في مكة المكرمة',
      blocks: [
        {
          type: 'p',
          text: 'نوفر تنظيفاً منزلياً احترافياً داخل مكة المكرمة يناسب الشقق والبيوت السكنية. نركّز على النظافة الظاهرة والتفاصيل التي تعني راحتك يومياً.',
        },
        {
          type: 'h2',
          text: 'تنظيف سكني يناسب شقتك وبيتك في مكة',
        },
        {
          type: 'h3',
          text: 'ماذا يشمل التنظيف المنزلي؟',
        },
        {
          type: 'p',
          text: 'تنظيف الأرضيات والأسطح، المطابخ والحمامات، إزالة الغبار، وترتيب عام. يمكن إضافة تفاصيل مثل النوافذ الداخلية أو الكنب حسب الاتفاق.',
        },
        {
          type: 'h3',
          text: 'لماذا يختارنا العملاء في مكة؟',
        },
        {
          type: 'p',
          text: 'لأننا نلتزم بالمواعيد قدر الإمكان ونوضح التفاصيل قبل الزيارة. مناسب لمن يبحث عن تنظيف في أحياء مثل العزيزية أو الشوقية أو المناطق القريبة من الحركة حول الحرم حسب التنسيق.',
        },
        {
          type: 'h2',
          text: 'احجز تنظيف منزلك عبر واتساب',
        },
        {
          type: 'p',
          text: 'أرسل الحي ونوع التنظيف وعدد الغرف والتاريخ المناسب، وسنرد عليك بسرعة بعرض واضح.',
        },
      ],
      relatedSlugs: ['deep-cleaning-makkah', 'villa-cleaning-makkah', 'al-aziziyah-makkah'],
    },
    en: {
      path: '/services/home-cleaning-makkah',
      title: 'House Cleaning in Mecca | Apartments & Homes | Al-Alamiya Cleaning',
      description:
        'Professional house cleaning in Mecca: rooms, kitchens, bathrooms, safe products. Book on WhatsApp and pick a time that works for you.',
      h1: 'House Cleaning in Mecca (Makkah)',
      blocks: [
        {
          type: 'p',
          text: 'Residential cleaning across Mecca for apartments and family homes. We focus on visible results and the details that make daily life more comfortable.',
        },
        {
          type: 'h2',
          text: 'Home cleaning tailored to your space',
        },
        {
          type: 'h3',
          text: 'What’s included?',
        },
        {
          type: 'p',
          text: 'Floors and surfaces, kitchen and bathrooms, dusting, and general tidying. Add-ons like interior windows or upholstery can be arranged.',
        },
        {
          type: 'h3',
          text: 'Why customers choose us in Makkah',
        },
        {
          type: 'p',
          text: 'Clear communication before the visit and punctual scheduling where possible—including areas such as Al Aziziyah, Al Shawqiyah, and near Al Haram by arrangement.',
        },
        {
          type: 'h2',
          text: 'Book home cleaning on WhatsApp',
        },
        {
          type: 'p',
          text: 'Send your district, service type, number of rooms, and preferred date for a fast reply.',
        },
      ],
      relatedSlugs: ['deep-cleaning-makkah', 'villa-cleaning-makkah', 'al-aziziyah-makkah'],
    },
  },
  'villa-cleaning-makkah': {
    ar: {
      path: '/services/villa-cleaning-makkah',
      title: 'تنظيف فلل مكة | تنظيف فلل ودور متعددة | شركة العالمية للتنظيف',
      description:
        'تنظيف فلل في مكة المكرمة مع فريق مدرب وتنظيم للمساحات الكبيرة. قبل المناسبات أو بعد التجديد. تواصل واتساب لعرض سريع.',
      h1: 'تنظيف فلل في مكة المكرمة',
      blocks: [
        {
          type: 'p',
          text: 'الفلل تحتاج تنسيقاً بين الطوابق والمجالس والمداخل. فريقنا يقسم العمل إلى مراحل واضحة لإنجاز التنظيف بكفاءة دون إرهاقك بإدارة كل زاوية.',
        },
        {
          type: 'h2',
          text: 'خدمة تنظيف فلل مصممة للمساحات الكبيرة',
        },
        {
          type: 'h3',
          text: 'كيف ننظم تنظيف الفيلا؟',
        },
        {
          type: 'p',
          text: 'نحدد الأولويات معك: مداخل وضيوف، مطابخ وحمامات، غرف نوم وأطفال، ثم تفاصيل إضافية حسب الوقت المتفق عليه.',
        },
        {
          type: 'h3',
          text: 'قبل الضيافة أو بعد أعمال الصيانة',
        },
        {
          type: 'p',
          text: 'مناسب للمناسبات أو بعد الدهان والتركيبات. يمكن دمج التنظيف العميق للمطابخ والحمامات عند الحاجة.',
        },
        {
          type: 'h2',
          text: 'جاهزون في أحياء مكة',
        },
        {
          type: 'p',
          text: 'نخدم العملاء في مكة المكرمة بما في ذلك العزيزية والشوقية والمناطق القريبة من الحرم حسب الاتفاق والوصول.',
        },
        {
          type: 'h2',
          text: 'اطلب عرضاً عبر واتساب',
        },
        {
          type: 'p',
          text: 'أرسل مساحة تقريبية للفيلا والحي والتاريخ المناسب، وسنرجع لك بعرض مناسب.',
        },
      ],
      relatedSlugs: ['deep-cleaning-makkah', 'home-cleaning-makkah', 'al-shawqiyah-makkah'],
    },
    en: {
      path: '/services/villa-cleaning-makkah',
      title: 'Villa Cleaning in Mecca | Large Homes | Al-Alamiya Cleaning',
      description:
        'Villa cleaning in Mecca with trained teams and structured workflows—events, move-ins, or post-renovation. WhatsApp us for a quick quote.',
      h1: 'Villa Cleaning in Mecca (Makkah)',
      blocks: [
        {
          type: 'p',
          text: 'Villas need coordination across floors, living areas, and entrances. We stage the work so nothing important is missed.',
        },
        {
          type: 'h2',
          text: 'Built for larger homes',
        },
        {
          type: 'h3',
          text: 'How we organize the visit',
        },
        {
          type: 'p',
          text: 'We align priorities with you: guest areas, kitchens and bathrooms, bedrooms, then add-ons based on the agreed duration.',
        },
        {
          type: 'h3',
          text: 'Hosting or post-maintenance',
        },
        {
          type: 'p',
          text: 'Ideal before guests arrive or after painting and installations. Deep kitchen and bathroom cleaning can be included.',
        },
        {
          type: 'h2',
          text: 'Serving districts across Makkah',
        },
        {
          type: 'p',
          text: 'Including Al Aziziyah, Al Shawqiyah, and near Al Haram by arrangement and access.',
        },
        {
          type: 'h2',
          text: 'WhatsApp for a quote',
        },
        {
          type: 'p',
          text: 'Share approximate villa size, district, and preferred date.',
        },
      ],
      relatedSlugs: ['deep-cleaning-makkah', 'home-cleaning-makkah', 'al-shawqiyah-makkah'],
    },
  },
  'office-cleaning-makkah': {
    ar: {
      path: '/services/office-cleaning-makkah',
      title: 'تنظيف مكاتب مكة | شركات ومحلات | شركة العالمية للتنظيف',
      description:
        'تنظيف مكاتب في مكة المكرمة بزيارات مرنة. مظهر احترافي لعملائك وفريقك. اطلب عبر واتساب.',
      h1: 'تنظيف مكاتب في مكة المكرمة',
      blocks: [
        {
          type: 'p',
          text: 'مكتب نظيف يعزز انطباع العملاء ويحسن بيئة العمل. نقدم زيارات مرنة تناسب جدول شركتك داخل مكة.',
        },
        {
          type: 'h2',
          text: 'جداول زيارات تناسب شركتك',
        },
        {
          type: 'h3',
          text: 'صباحي، مسائي، أو بعد الدوام',
        },
        {
          type: 'p',
          text: 'ننسق الوقت ليتناسب مع ساعات العمل وحركة الزوار، مع التركيز على الاستقبال ودورات المياه والمساحات المشتركة.',
        },
        {
          type: 'h3',
          text: 'تغطية مناطق العمل',
        },
        {
          type: 'p',
          text: 'استقبال، غرف اجتماعات، مطابخ صغيرة، أرضيات حسب نوع المادة، وإزالة الغبار من الأسطح.',
        },
        {
          type: 'h2',
          text: 'اطلب زيارة أو عرضاً سريعاً',
        },
        {
          type: 'p',
          text: 'راسلنا على واتساب مع موقع المكتب داخل مكة وعدد الموظفين تقريباً لنقترح خطة مناسبة.',
        },
      ],
      relatedSlugs: ['deep-cleaning-makkah', 'home-cleaning-makkah', 'near-al-haram-makkah'],
    },
    en: {
      path: '/services/office-cleaning-makkah',
      title: 'Office Cleaning in Mecca | Businesses | Al-Alamiya Cleaning',
      description:
        'Flexible office cleaning in Mecca for a professional look—daily, weekly, or after hours. Message us on WhatsApp.',
      h1: 'Office Cleaning in Mecca (Makkah)',
      blocks: [
        {
          type: 'p',
          text: 'A clean office supports your brand and your team. We offer flexible schedules across Makkah.',
        },
        {
          type: 'h2',
          text: 'Scheduling that fits your operations',
        },
        {
          type: 'h3',
          text: 'Morning, evening, or after hours',
        },
        {
          type: 'p',
          text: 'We coordinate around working hours and visitor traffic, focusing on reception, restrooms, and shared areas.',
        },
        {
          type: 'h3',
          text: 'Coverage areas',
        },
        {
          type: 'p',
          text: 'Meeting rooms, small kitchens, floor care by surface type, and surface dusting.',
        },
        {
          type: 'h2',
          text: 'Request a walkthrough or quote',
        },
        {
          type: 'p',
          text: 'WhatsApp your office location in Makkah and approximate headcount.',
        },
      ],
      relatedSlugs: ['deep-cleaning-makkah', 'home-cleaning-makkah', 'near-al-haram-makkah'],
    },
  },
  'deep-cleaning-makkah': {
    ar: {
      path: '/services/deep-cleaning-makkah',
      title: 'تنظيف عميق مكة | Deep Cleaning قبل السكن | شركة العالمية للتنظيف',
      description:
        'تنظيف عميق في مكة للمطابخ والحمامات والأرضيات والزجاج. مثالي بعد الدهان أو قبل السكن. احجز عبر واتساب.',
      h1: 'تنظيف عميق في مكة المكرمة',
      blocks: [
        {
          type: 'p',
          text: 'التنظيف العميق مثالي قبل السكن أو بعد التجديد أو عند تراكم الدهون والأوساخ في المطبخ والحمامات. نخصص وقتاً أطول للتفاصيل.',
        },
        {
          type: 'h2',
          text: 'متى تحتاج Deep Cleaning؟',
        },
        {
          type: 'p',
          text: 'قبل السكن، بعد الدهان، بعد إغلاق المسكن فترة، أو عند الحاجة لتجديد كامل للمطبخ والحمامات.',
        },
        {
          type: 'h2',
          text: 'ماذا يختلف عن التنظيف العادي؟',
        },
        {
          type: 'p',
          text: 'تركيز أعلى على الزوايا والمناطق الثقيلة الاستخدام، مع تنظيم مراحل أوضح ووقت أطول لضمان نتيجة تُحسّ باللمس والرائحة.',
        },
        {
          type: 'h3',
          text: 'يمكن دمج التنظيف بالبخار حيث يناسب نوع الأسطح',
        },
        {
          type: 'p',
          text: 'نناقش معك الأسطح والأثاث لاختيار الطريقة الأنسب داخل مكة المكرمة.',
        },
        {
          type: 'h2',
          text: 'احجز تنظيفاً عميقاً عبر واتساب',
        },
        {
          type: 'p',
          text: 'أرسل الحي وصوراً بسيطة إن أمكن، ونوع المكان (شقة، فلة، مكتب)، لنحدد المدة والتكلفة بشفافية.',
        },
      ],
      relatedSlugs: ['home-cleaning-makkah', 'villa-cleaning-makkah', 'office-cleaning-makkah'],
    },
    en: {
      path: '/services/deep-cleaning-makkah',
      title: 'Deep Cleaning in Mecca | Move-in Ready | Al-Alamiya Cleaning',
      description:
        'Deep cleaning in Makkah for kitchens, bathrooms, floors, and glass—ideal after painting or before moving in. Book on WhatsApp.',
      h1: 'Deep Cleaning in Mecca (Makkah)',
      blocks: [
        {
          type: 'p',
          text: 'Deep cleaning is best before move-in, after renovations, or when kitchens and bathrooms need a full reset. We allocate more time for detail work.',
        },
        {
          type: 'h2',
          text: 'When to choose deep cleaning',
        },
        {
          type: 'p',
          text: 'Move-in prep, post-painting, long vacancy, or heavy buildup in kitchens and bathrooms.',
        },
        {
          type: 'h2',
          text: 'How it differs from standard cleaning',
        },
        {
          type: 'p',
          text: 'More attention to corners, high-use areas, and staged steps so results are visible in look and freshness.',
        },
        {
          type: 'h3',
          text: 'Steam cleaning where appropriate',
        },
        {
          type: 'p',
          text: 'We align methods with your surfaces and furniture.',
        },
        {
          type: 'h2',
          text: 'Book deep cleaning on WhatsApp',
        },
        {
          type: 'p',
          text: 'Share your district, property type, and photos if possible for a transparent estimate.',
        },
      ],
      relatedSlugs: ['home-cleaning-makkah', 'villa-cleaning-makkah', 'office-cleaning-makkah'],
    },
  },
  'al-aziziyah-makkah': {
    ar: {
      path: '/locations/al-aziziyah-makkah',
      title: 'تنظيف العزيزية مكة | شركة تنظيف بالعزيزية | شركة العالمية للتنظيف',
      description:
        'خدمات تنظيف في حي العزيزية بمكة المكرمة. منازل وفلل ومكاتب. تنسيق سريع عبر واتساب.',
      h1: 'شركة تنظيف في العزيزية — مكة المكرمة',
      blocks: [
        {
          type: 'p',
          text: 'نخدم سكان حي العزيزية في مكة بتنظيف منازل وفلل ومكاتب حسب طلبك. نركّز على الوصول السريع والتواصل الواضح قبل الزيارة.',
        },
        {
          type: 'h2',
          text: 'تنظيف منازل ومكاتب في العزيزية',
        },
        {
          type: 'h3',
          text: 'احجز بسهولة عبر واتساب',
        },
        {
          type: 'p',
          text: 'أرسل عنواناً تقريبياً داخل الحي ونوع الخدمة، وسنؤكد الموعد والتفاصيل معك.',
        },
        {
          type: 'h2',
          text: 'روابط سريعة',
        },
        {
          type: 'p',
          text: 'إن كنت تبحث عن تنظيف عميق أو تنظيف فلل أو مكاتب، يمكنك الانتقال لصفحات الخدمات أدناه.',
        },
      ],
      relatedSlugs: ['home-cleaning-makkah', 'villa-cleaning-makkah', 'office-cleaning-makkah'],
    },
    en: {
      path: '/locations/al-aziziyah-makkah',
      title: 'Cleaning in Al Aziziyah, Mecca | Al-Alamiya Cleaning',
      description:
        'Cleaning services in Al Aziziyah district, Makkah—homes, villas, offices. Fast scheduling on WhatsApp.',
      h1: 'Cleaning Services in Al Aziziyah — Mecca',
      blocks: [
        {
          type: 'p',
          text: 'Residential and commercial cleaning for Al Aziziyah with clear communication and punctual scheduling.',
        },
        {
          type: 'h2',
          text: 'Homes and offices in Al Aziziyah',
        },
        {
          type: 'h3',
          text: 'Book on WhatsApp',
        },
        {
          type: 'p',
          text: 'Share a nearby landmark, service type, and preferred time.',
        },
        {
          type: 'h2',
          text: 'Explore services',
        },
        {
          type: 'p',
          text: 'Deep cleaning, villas, and office cleaning pages are linked below.',
        },
      ],
      relatedSlugs: ['home-cleaning-makkah', 'villa-cleaning-makkah', 'office-cleaning-makkah'],
    },
  },
  'al-shawqiyah-makkah': {
    ar: {
      path: '/locations/al-shawqiyah-makkah',
      title: 'تنظيف الشوقية مكة | شركة تنظيف بالشوقية | شركة العالمية للتنظيف',
      description:
        'تنظيف منازل وفلل في حي الشوقية بمكة. فريق محترف ومواد آمنة. راسلنا على واتساب.',
      h1: 'شركة تنظيف في الشوقية — مكة المكرمة',
      blocks: [
        {
          type: 'p',
          text: 'نغطي طلبات التنظيف داخل حي الشوقية للعائلات والشقق الكبيرة مع خيارات تنظيف عادي أو عميق.',
        },
        {
          type: 'h2',
          text: 'تنظيف منازل في الشوقية',
        },
        {
          type: 'h3',
          text: 'مناسب للعائلات',
        },
        {
          type: 'p',
          text: 'ننسق معك عدد الغرف والمطبخ والحمامات لتحديد الوقت والسعر بشكل عادل.',
        },
        {
          type: 'h2',
          text: 'تواصل عبر واتساب',
        },
        {
          type: 'p',
          text: 'اكتب «الشوقية» مع تفاصيل بسيطة عن المساحة لنرد عليك بسرعة.',
        },
      ],
      relatedSlugs: ['home-cleaning-makkah', 'villa-cleaning-makkah', 'deep-cleaning-makkah'],
    },
    en: {
      path: '/locations/al-shawqiyah-makkah',
      title: 'Cleaning in Al Shawqiyah, Mecca | Al-Alamiya Cleaning',
      description:
        'Home and villa cleaning in Al Shawqiyah, Makkah. Professional team, safe products. WhatsApp us.',
      h1: 'Cleaning Services in Al Shawqiyah — Mecca',
      blocks: [
        {
          type: 'p',
          text: 'Residential cleaning in Al Shawqiyah for apartments and larger homes—standard or deep options.',
        },
        {
          type: 'h2',
          text: 'Homes in Al Shawqiyah',
        },
        {
          type: 'h3',
          text: 'Family-friendly scheduling',
        },
        {
          type: 'p',
          text: 'We align room count and kitchen/bathroom workload with time and pricing.',
        },
        {
          type: 'h2',
          text: 'WhatsApp us',
        },
        {
          type: 'p',
          text: 'Mention Al Shawqiyah and a quick description of your space.',
        },
      ],
      relatedSlugs: ['home-cleaning-makkah', 'villa-cleaning-makkah', 'deep-cleaning-makkah'],
    },
  },
  'near-al-haram-makkah': {
    ar: {
      path: '/locations/near-al-haram-makkah',
      title: 'تنظيف قرب الحرم مكة | تنظيف شقق قرب الحرم | شركة العالمية للتنظيف',
      description:
        'خدمات تنظيف في مكة قرب الحرم المكي الشريف. تنسيق مواعيد حسب الوصول. احجز عبر واتساب.',
      h1: 'تنظيف قرب الحرم المكي في مكة المكرمة',
      blocks: [
        {
          type: 'p',
          text: 'المناطق القريبة من الحرم قد تحتاج تنسيقاً دقيقاً للوقت والوصول. نساعدك على حجز زيارة بأسرع ما يمكن مع توقعات واقعية حسب الازدحام والأيام.',
        },
        {
          type: 'h2',
          text: 'نتفهم طبيعة المنطقة',
        },
        {
          type: 'h3',
          text: 'التنسيق قبل الزيارة',
        },
        {
          type: 'p',
          text: 'يرجى إرسال تفاصيل الوصول المتاحة لديك عبر واتساب لنحدد موعداً مناسباً.',
        },
        {
          type: 'h2',
          text: 'خدمات مرتبطة',
        },
        {
          type: 'p',
          text: 'تنظيف منازل عميق، شقق، أو مكاتب قريبة—اختر الصفحة الأنسب أدناه.',
        },
      ],
      relatedSlugs: ['home-cleaning-makkah', 'deep-cleaning-makkah', 'office-cleaning-makkah'],
    },
    en: {
      path: '/locations/near-al-haram-makkah',
      title: 'Cleaning Near Al Haram, Mecca | Al-Alamiya Cleaning',
      description:
        'Cleaning services near Al Haram in Makkah. We coordinate access and timing carefully. WhatsApp to book.',
      h1: 'Cleaning Near Al Haram — Mecca (Makkah)',
      blocks: [
        {
          type: 'p',
          text: 'Areas near Al Haram often need careful timing and access coordination. We set realistic expectations based on traffic and seasonality.',
        },
        {
          type: 'h2',
          text: 'Built around your access plan',
        },
        {
          type: 'h3',
          text: 'Pre-visit coordination',
        },
        {
          type: 'p',
          text: 'Share access details on WhatsApp so we can propose the best slot.',
        },
        {
          type: 'h2',
          text: 'Related services',
        },
        {
          type: 'p',
          text: 'Deep home cleaning, apartments, or nearby offices—see links below.',
        },
      ],
      relatedSlugs: ['home-cleaning-makkah', 'deep-cleaning-makkah', 'office-cleaning-makkah'],
    },
  },
}

export const SEO_SERVICE_SLUGS: SeoSlug[] = [
  'home-cleaning-makkah',
  'villa-cleaning-makkah',
  'office-cleaning-makkah',
  'deep-cleaning-makkah',
]

export const SEO_LOCATION_SLUGS: SeoSlug[] = [
  'al-aziziyah-makkah',
  'al-shawqiyah-makkah',
  'near-al-haram-makkah',
]

export const ALL_SEO_SLUGS: SeoSlug[] = [...SEO_SERVICE_SLUGS, ...SEO_LOCATION_SLUGS]

export function getSeoPage(
  slug: string | undefined,
  locale: 'ar' | 'en',
): SeoPageContent | null {
  if (!slug || !(slug in pages)) return null
  return pages[slug as SeoSlug][locale]
}

export function getSeoSlugFromPath(pathname: string): SeoSlug | null {
  const normalized = pathname.replace(/\/$/, '') || '/'
  for (const slug of ALL_SEO_SLUGS) {
    if (pages[slug].ar.path === normalized) return slug
  }
  return null
}
