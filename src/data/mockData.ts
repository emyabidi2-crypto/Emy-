import { Product, CurrencyRate, BlogPost, RoadmapPhase } from '../types';

export const CURRENCY_RATES: Record<string, CurrencyRate> = {
  USD: { code: 'USD', symbol: '$', rateToUSD: 1, nameAr: 'دولار أمريكي' },
  SAR: { code: 'SAR', symbol: 'ر.س', rateToUSD: 3.75, nameAr: 'ريال سعودي' },
  AED: { code: 'AED', symbol: 'د.إ', rateToUSD: 3.67, nameAr: 'درهم إماراتي' },
  EUR: { code: 'EUR', symbol: '€', rateToUSD: 0.92, nameAr: 'يورو' },
};

export const PRODUCTS: Product[] = [
  {
    id: 'honey-royal-sidr-hadramout',
    name: 'عسل السدر الملكي الحضرمي الفاخر (درجة أولى)',
    category: 'honey',
    price: 280,
    originalPrice: 350,
    rating: 5.0,
    reviewsCount: 142,
    image: 'https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1471943311424-646960669fbc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'أجود أنواع العسل اليمني المستخلص من أزهار شجر السدر البري في وديان حضرموت العريقة (دوان وعمد). يتميز بكثافته العالية، لونه الكهفراني الداكن، ونكهته الملكية الغنية بالخصائص العلاجية الفريدة.',
    origin: 'وادي دوان، حضرموت، اليمن',
    benefits: [
      'مضاد حيوي طبيعي يقوي المناعة ويعزز الحيوية',
      'غني بالאנزيمات ومضادات الأكسدة الحرة',
      'مفصوح معملياً بنسبة نقاء 100% خالي من السكريات المضافة'
    ],
    labCertificate: {
      certId: 'YQ-LAB-2026-8891',
      date: '15 أغسطس 2026',
      labName: 'مختبرات الجودة الملكية الدولية - صنعاء/حضرموت',
      purityScore: '100% عسل سدر طبيعي خام',
      pdfUrl: '#'
    },
    isBestseller: true,
    isRoyal: true
  },
  {
    id: 'honey-wassab-mountain',
    name: 'عسل الجال والوصاب الجبلي النادر',
    category: 'honey',
    price: 320,
    originalPrice: 390,
    rating: 4.9,
    reviewsCount: 98,
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'يُحصد من أعالي جبال وصاب العالية والمنحدرات الخضراء. يتميز بطعم عمق الأرض اليمنية البرية ورائحة الأعشاب الطبية النادرة التي ترعى فيها النحل البري الحر.',
    origin: 'مرتفعات وصاب العالي، ذمار، اليمن',
    benefits: [
      'مقوي عام للجهاز الهضمي والعصبي',
      'يحتوي على رحيق زهور جبلية نادرة لا تتوفر في أي مكان آخر بالعالم',
      'معبأ يدوياً في أواني زجاجية ملكية فاخرة'
    ],
    labCertificate: {
      certId: 'YQ-LAB-2026-9042',
      date: '28 يوليو 2026',
      labName: 'مختبر الأبحاث الحيوية الآسيوية',
      purityScore: '100% طبيعي خام غير مصصفى',
      pdfUrl: '#'
    },
    isBestseller: false,
    isRoyal: true
  },
  {
    id: 'aqeeq-royal-ring-blood',
    name: 'خاتم العقيق اليماني الكبدي الملكي (فضة عيار 925)',
    category: 'aqeeq',
    price: 450,
    originalPrice: 550,
    rating: 5.0,
    reviewsCount: 64,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'فص عقيق يماني كبدي أصيل ومستخرج من جبال الآنس التاريخية، مصوغ يدوياً بأيدي أشهر حرفيي المجوهرات بفضة خالصة عيار 925 مع نقشات يدوية استوحيت من خط المسند القديم.',
    origin: 'جبال الآنس، صنعاء، اليمن',
    benefits: [
      'حجر عقيق طبيعي 100% غير معالج حرارياً',
      'صياغة يدوية ملكية فريدة من نوعها (قطعة واحدة)',
      'شهادة ضمان وتوثيق رسمية لمنجم الأصل'
    ],
    has360View: true,
    isBestseller: true,
    isRoyal: true
  },
  {
    id: 'aqeeq-raw-stone-collection',
    name: 'مجموعة الأحجار الكريمة الخام (عقيق أحمر وسليماني)',
    category: 'aqeeq',
    price: 600,
    originalPrice: 750,
    rating: 4.8,
    reviewsCount: 31,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'صندوق خشبي ملكي فاخر يضم 3 قطع من العقيق اليماني الخام غير المصقول (أحمر تفاحي، سليماني مخطط، وعقيق أصفري)، لهواة اقتناء النوادر والتحف الجيولوجية العريقة.',
    origin: 'مناجم ثلاء التاريخية، اليمن',
    benefits: [
      'قطع خام نادرة صلبة ببريق طبيعي خلاب',
      'صندوق إرسال مغلف بالقطيفة الفاخرة',
      'مناسبة لهواة التجميع والمقتنيات الملكية'
    ],
    has360View: true,
    isRoyal: true
  },
  {
    id: 'bukhoor-royal-adeni',
    name: 'البخور العدني الملكي المعزز بالزعفران والورد',
    category: 'aromas',
    price: 150,
    originalPrice: 190,
    rating: 4.9,
    reviewsCount: 210,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'خلطة سرية متوارثة منذ أجيال في مدينة عدن الساحلية، تمزج أصول العود الطبيعي مع مسك العمبر والزعفران الإيراني الفاخر والورد الطائفي لنشر عبق ملكي يدوم طويلاً.',
    origin: 'عدن التاريخية، اليمن',
    benefits: [
      'ثبات عالي يفوق 24 ساعة في المجالس والمكاتب',
      'دخان كثيف بارد لا يسبب حساسية للعينين',
      'معبأ في عبوة زجاجية وغطاء نحاسي منقوش'
    ],
    isBestseller: true
  },
  {
    id: 'frankincense-hojari-royal',
    name: 'اللبان الحوجري الملكي الفاخر (درجة صلالة وحضرموت)',
    category: 'aromas',
    price: 120,
    originalPrice: 150,
    rating: 5.0,
    reviewsCount: 175,
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'دموع اللبان الحوجري النقي الشفاف، المعروف بخصائصه العلاجية والتطهيرية العريقة. يستعمل للتبخير والتعطير الشخصي والمنزلي وحتى للمضغ الصحي.',
    origin: 'سقطرى وحضرموت التاريخية',
    benefits: [
      'نقاء فائق وشفافية لؤلؤية',
      'يطهر الأجواء وينقي الهواء من الطاقات السلبية والبكتيريا',
      'معتمد للاستخدام العطري والصحي'
    ],
    isBestseller: true
  },
  {
    id: 'royal-gift-set-sheba',
    name: 'مجموعة عرش سبأ الملكية المتكاملة (عسل + عقيق + بخور)',
    category: 'bundles',
    price: 799,
    originalPrice: 1050,
    rating: 5.0,
    reviewsCount: 88,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80'
    ],
    description: 'التحفة الملكية الكبرى من قتبان وذي ريدان. صندوق فاخر من خشب الأبنوس المنقوش بخط المسند، يضم: جرة عسل سدر حضرمي ملكي (1كجم)، خاتم عقيق يماني كبدي أصيل، وعلبة بخور عدني ملكي مع مَبخرة نحاسية تراثية.',
    origin: 'ممالك اليمن العريقة',
    benefits: [
      'الهدية المثالية لكبار الشخصيات والمناسبات الكبرى',
      'توفير استثنائي بقيمة 25% مع تغليف ملكي فاخر',
      'بطاقة إهداء فاخرة مكتوبة بخط اليد وبصمة شمعية ملكية'
    ],
    isBestseller: true,
    isRoyal: true
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'أسرار عسل السدر الحضرمي: لماذا يُعتبر الأغلى والأجود في العالم؟',
    category: 'العسل الملكي',
    readTime: '5 دقائق للقراءة',
    date: '28 أغسطس 2026',
    excerpt: 'رحلة في أعماق وادي دوان وحضرموت حيث تزهر أشجار السدر البرية لتنتج ذهباً سائلاً يعشقه الملوك منذ آلاف السنين.',
    content: `يحتل العسل اليمني، وتحديداً عسل السدر المستخلص من وادي دوان في حضرموت، مكانة أسطورية تجعله في قمة هرم العسول الفاخرة عالمياً. يعود ذلك لعدة أسباب تاريخية وجيولوجية:
    1. طبيعة البيئة النحليّة: تتغذى النحل حصرياً على رحيق أزهار شجر السدر البري دون أي تدخل بشري أو أعلاف صناعية.
    2. المناخ الجاف والحار: يساهم في تكثيف الرحيق ورفع نسبة الإنزيمات الحيوية بشكل لا يتوفر في العسل المستزرع في بيئات رطبة.
    3. الفحوصات المخبرية الصارمة: في "قتبان وذي ريدان"، نخضع كل قطرة لفحص دقيق لضمان خلوه التام من الرطوبة الزائدة واحتفاظه بنكهته الملكية الفريدة.`,
    image: 'https://images.unsplash.com/photo-1587049352847-4a222e784d38?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'blog-2',
    title: 'دليل اقتناء العقيق اليماني: كيف تميز بين الحجر الأصعي والمقلد؟',
    category: 'العقيق والمجوهرات',
    readTime: '7 دقائق للقراءة',
    date: '20 أغسطس 2026',
    excerpt: 'تعرف على الخصائص الفيزيائية والحرارية التي جعلت من العقيق اليماني درة الأحجار الكريمة عبر التاريخ.',
    content: `العقيق اليماني ليس مجرد حجر كريم، بل هو إرث تاريخي يعود لممالك سبأ وحمير. لتتأكد من أصالة حجرك:
    - اختبار الحرارة: العقيق الأصلي بارد بطبيعته ولا يتأثر بالحرارة السريعة بخلاف الزجاج أو البلاستيك.
    - الصلاابة والصلادة المدرسية: يتميز العقيق بصلادة عالية تخدش الزجاج ولا يُخدش بسهولة.
    - العروق والأنسجة الداخلية: العقيق اليماني الطبيعي يحتوي على تشكيلات عرقية دقيقة وفريدة لا تتكرر في حجرين أبدًا.`,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'blog-3',
    title: 'تاريخ تجارة البخور واللبان في طريق القوافل القديم',
    category: 'التراث والعبق',
    readTime: '6 دقائق للقراءة',
    date: '12 أغسطس 2026',
    excerpt: 'كيف كانت ممالك قتبان ومملكة حمير تدير أقوى خط تجاري في العالم القديم لنقل اللبان والبخور إلى معابد الفراعنة والرومان.',
    content: `عبر طريق البخور التاريخي الذي انطلق من ظفار وحضرموت مروراً بمملكة قتبان ووصولاً إلى الشام ومصر، كانت قوافل الإبل تحمل أغلى أسرار الأرض. كان اللبان الحوجري والبخور العدني يُقايضان بالذهب والحرير، وما زلنا حتى اليوم نحافظ على نفس الوصفات الملكية العريقة في متجر "قتبان وذي ريدان".`,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80'
  }
];

export const ROADMAP_PHASES: RoadmapPhase[] = [
  {
    week: 'الأسبوع 1 - 2',
    phase: 'مرحلة التصور والهوية البصرية',
    title: 'هندسة العلامة التجارية والهوية الملكية',
    tasks: [
      'تصميم الشعار المدمج بخط المسند اليمني ورمز جرة العسل وفص العقيق',
      'تثبيت لوحة الألوان (الذهبي المعتق، البني الأرضي، الكريمي، الأسود الفحمي)',
      'إعداد الدليل الإرشادي للبصريات وتجربة المستخدم (Design System)'
    ],
    deliverables: 'دليل الهوية البصرية + ملفات الشعار المتكتلة (SVG/PNG)'
  },
  {
    week: 'الأسبوع 3 - 4',
    phase: 'التصوير الفاخر وتجهيز المحتوى',
    title: 'إنتاج المحتوى البصري والقصصي',
    tasks: [
      'جلسة تصوير احترافية (Macro Photography) للعسل والعقيق والبخور بإضاءة استوديو ملكية',
      'صياغة القصص التاريخية لكل منتج وربطه بممالك قتبان وذي ريدان',
      'إعداد شهادات فحص المختبر بصيغ PDF موثقة ومؤمنة'
    ],
    deliverables: 'مكتبة صور عالية الدقة + النصوص التسويقية والقصصية باللغة العربية والإنجليزية'
  },
  {
    week: 'الأسبوع 5 - 6',
    phase: 'التطوير البرمجي وتجربة المستخدم',
    title: 'برمجة المتجر الإلكتروني وأدوات التحويل',
    tasks: [
      'تطوير الواجهة الأمامية باستخدام React & Tailwind CSS وفق معايير Minimalist Luxury',
      'برمجة خاصية المعاينة ثلاثية الأبعاد (360° View) للعقيق اليماني',
      'دمج حاسبة الشحن الدولي الفوري ودعم العملات المتعددة (USD, SAR, AED, EUR)',
      'إعداد نظام سلة المشتريات ومجموعات الهدايا الملكية (Upselling)'
    ],
    deliverables: 'نسخة تجريبية تعمل بكامل الميزات وتجربة مستخدم سلسة'
  },
  {
    week: 'الأسبوع 7',
    phase: 'الفحص والجودة والأمان',
    title: 'اختبارات الأداء والأمان ومراجعة الشهادات',
    tasks: [
      'اختبار توافق المتجر مع الهواتف الذكية والأجهزة اللوحية',
      'فحص سرعة التحميل وتحسين محركات البحث (SEO On-Page)',
      'مراجعة روابط الدفع المباشر وعبر الواتساب وخدمة العملاء'
    ],
    deliverables: 'تقرير خلو الأخطاء وجاهزية البنية التحتية للإطلاق'
  },
  {
    week: 'الأسبوع 8',
    phase: 'الإطلاق الرسمي والحملات',
    title: 'الافتتاح الرسمي للمتجر الرقمي الفاخر',
    tasks: [
      'إطلاق الحملة الإعلانية الرقمية المستهدفة لكبار الشخصيات وهواة النوادر',
      'إرسال العينات الحصرية لمؤثري التراث والفخامة',
      'افتتاح قسم المدونة (Resource Hub) وتفعيل السيو'
    ],
    deliverables: 'متجر "قتبان وذي ريدان" مباشر على النطاق الرسمي'
  }
];
