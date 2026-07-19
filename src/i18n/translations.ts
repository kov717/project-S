export type Language = 'en' | 'kk' | 'ru' | 'zh' | 'hi';

export const languageNames: Record<Language, string> = {
  en: 'English',
  kk: 'Қазақша',
  ru: 'Русский',
  zh: '中文',
  hi: 'हिन्दी',
};

export const languageFlags: Record<Language, string> = {
  en: '🇬🇧',
  kk: '🇰🇿',
  ru: '🇷🇺',
  zh: '🇨🇳',
  hi: '🇮🇳',
};

type TranslationKeys = {
  brand: string;
  navTours: string;
  navFleet: string;
  navCalculator: string;
  navAbout: string;
  navContact: string;

  heroTitle: string;
  heroSubtitle: string;
  heroBtn: string;

  toursTitle: string;
  toursSubtitle: string;
  tourDays: string;
  tourDetails: string;
  tourHighlights: string;
  tourBookNow: string;

  calcTitle: string;
  calcSubtitle: string;
  calcSelectTour: string;
  calcGuests: string;
  calcAccommodation: string;
  calcBudget: string;
  calcStandard: string;
  calcPremium: string;
  calcLuxury: string;
  calcVehicle: string;
  calcVehicleSedan: string;
  calcVehicleMinivan: string;
  calcVehicleSUV: string;
  calcVehicleBus: string;
  calcVehicleMercedesV: string;
  calcVehicleLandCruiser: string;
  calcVehicleSeats: string;
  calcGuide: string;
  calcNoGuide: string;
  calcGroupGuide: string;
  calcPrivateGuide: string;
  calcMeals: string;
  calcNoMeals: string;
  calcBreakfast: string;
  calcHalfBoard: string;
  calcFullBoard: string;
  calcBookNow: string;
  calcSummary: string;
  calcSelectedOptions: string;

  fleetTitle: string;
  fleetSubtitle: string;
  fleetSeats: string;
  fleetViewAll: string;

  fleetComfort: string;
  fleetSuv: string;
  fleetBudget: string;
  fleetLuxury: string;
  fleetGroup: string;

  bookingMessenger: string;
  bookingTelegram: string;
  bookingWechat: string;
  bookingWhatsapp: string;
  bookingMax: string;

  aboutTitle: string;
  aboutText1: string;
  aboutText2: string;
  aboutStat1: string;
  aboutStat2: string;
  aboutStat3: string;
  aboutStat4: string;
  aboutStat1Label: string;
  aboutStat2Label: string;
  aboutStat3Label: string;
  aboutStat4Label: string;

  footerDesc: string;
  footerQuickLinks: string;
  footerContact: string;
  footerPhone: string;
  footerEmail: string;
  footerAddress: string;
  footerRights: string;
  footerFollowUs: string;

  bookingTitle: string;
  bookingSubtitle: string;
  bookingName: string;
  bookingNamePlaceholder: string;
  bookingEmail: string;
  bookingEmailPlaceholder: string;
  bookingPhone: string;
  bookingPhonePlaceholder: string;
  bookingDates: string;
  bookingDatesPlaceholder: string;
  bookingNotes: string;
  bookingNotesPlaceholder: string;
  bookingSubmit: string;
  bookingCancel: string;
  bookingSuccess: string;
  bookingSuccessMsg: string;
  bookingSendTelegram: string;
  bookingClose: string;
  bookingSendVia: string;
};

export const translations: Record<Language, TranslationKeys> = {
  en: {
    brand: 'Nomad Trails',
    navTours: 'Tours',
    navFleet: 'Fleet',
    navCalculator: 'Calculator',
    navAbout: 'About Us',
    navContact: 'Contact',

    heroTitle: 'Discover the Heart of Central Asia',
    heroSubtitle: 'Explore Kazakhstan\'s breathtaking landscapes — from snow-capped mountains and ancient canyons to futuristic cities and endless steppes.',
    heroBtn: 'Explore Tours',

    toursTitle: 'Our Tours',
    toursSubtitle: 'Handcrafted adventures through Kazakhstan\'s most stunning destinations',
    tourDays: 'days',
    tourDetails: 'View Details',
    tourHighlights: 'Highlights',
    tourBookNow: 'Book Tour',

    calcTitle: 'Tour Configurator',
    calcSubtitle: 'Customize your perfect Kazakhstan adventure and submit a request',
    calcSelectTour: 'Select Tour',
    calcGuests: 'Number of Guests',
    calcAccommodation: 'Accommodation',
    calcBudget: 'Budget',
    calcStandard: 'Standard',
    calcPremium: 'Premium',
    calcLuxury: 'Luxury',
    calcVehicle: 'Vehicle',
    calcVehicleSedan: 'Sedan (Toyota Camry)',
    calcVehicleMinivan: 'Minivan (Toyota Alphard)',
    calcVehicleSUV: '4×4 SUV (Toyota Land Cruiser 300)',
    calcVehicleBus: 'Tour Bus (Mercedes Sprinter)',
    calcVehicleMercedesV: 'Mercedes V-Class',
    calcVehicleLandCruiser: 'Toyota Land Cruiser Prado',
    calcVehicleSeats: 'seats',
    calcGuide: 'Guide Service',
    calcNoGuide: 'No Guide',
    calcGroupGuide: 'Group Guide',
    calcPrivateGuide: 'Private Guide',
    calcMeals: 'Meal Plan',
    calcNoMeals: 'No Meals',
    calcBreakfast: 'Breakfast Only',
    calcHalfBoard: 'Half Board',
    calcFullBoard: 'Full Board',
    calcBookNow: 'Submit Request',
    calcSummary: 'Your Tour Summary',
    calcSelectedOptions: 'Selected Options',

    fleetTitle: 'Our Vehicle Fleet',
    fleetSubtitle: 'Comfortable and reliable vehicles for every type of journey across Kazakhstan',
    fleetSeats: 'seats',
    fleetViewAll: 'View Fleet',
    fleetComfort: 'Comfort',
    fleetSuv: '4×4 SUV',
    fleetBudget: 'Budget',
    fleetLuxury: 'Luxury',
    fleetGroup: 'Group',

    bookingMessenger: 'Preferred Messenger',
    bookingTelegram: 'Telegram',
    bookingWechat: 'WeChat',
    bookingWhatsapp: 'WhatsApp',
    bookingMax: 'Max',

    aboutTitle: 'About Nomad Trails',
    aboutText1: 'We are a premier tour operator based in Almaty, Kazakhstan, dedicated to showcasing the incredible beauty and rich culture of Central Asia. With over 10 years of experience, our team of passionate local guides ensures every journey is unforgettable.',
    aboutText2: 'From the mystical Charyn Canyon to the futuristic skyline of Astana, we craft personalized experiences that connect travelers with the soul of Kazakhstan.',
    aboutStat1: '10+',
    aboutStat2: '5,000+',
    aboutStat3: '50+',
    aboutStat4: '4.9',
    aboutStat1Label: 'Years Experience',
    aboutStat2Label: 'Happy Travelers',
    aboutStat3Label: 'Unique Routes',
    aboutStat4Label: 'Average Rating',

    footerDesc: 'Your gateway to the wonders of Kazakhstan. Experience nomadic heritage, pristine nature, and modern marvels.',
    footerQuickLinks: 'Quick Links',
    footerContact: 'Contact Info',
    footerPhone: '+7 (727) 123-45-67',
    footerEmail: 'info@nomadtrails.kz',
    footerAddress: '45 Abai Ave, Almaty, Kazakhstan',
    footerRights: '© 2026 Nomad Trails. All rights reserved.',
    footerFollowUs: 'Follow Us',

    bookingTitle: 'Book This Tour',
    bookingSubtitle: 'Fill out the form and we\'ll contact you within 24 hours',
    bookingName: 'Full Name',
    bookingNamePlaceholder: 'Enter your full name',
    bookingEmail: 'Email',
    bookingEmailPlaceholder: 'your@email.com',
    bookingPhone: 'Phone Number',
    bookingPhonePlaceholder: '+7 (___) ___-__-__',
    bookingDates: 'Preferred Dates',
    bookingDatesPlaceholder: 'e.g., 15-18 March 2026',
    bookingNotes: 'Special Requests',
    bookingNotesPlaceholder: 'Any dietary requirements, accessibility needs, etc.',
    bookingSubmit: 'Submit Booking',
    bookingCancel: 'Cancel',
    bookingSuccess: 'Request Sent!',
    bookingSuccessMsg: 'Your booking request has been sent to our Telegram. We\'ll contact you soon!',
    bookingSendTelegram: 'Send to Telegram',
    bookingClose: 'Close',
    bookingSendVia: 'Send via',
  },

  kk: {
    brand: 'Nomad Trails',
    navTours: 'Турлар',
    navFleet: 'Автопарк',
    navCalculator: 'Калькулятор',
    navAbout: 'Біз туралы',
    navContact: 'Байланыс',

    heroTitle: 'Орталық Азияның жүрегін ашыңыз',
    heroSubtitle: 'Қазақстанның таңғажайып табиғатын зерттеңіз — қарлы тауларынан ежелгі каньондарға, болашақ қалаларынан шексіз далаларға дейін.',
    heroBtn: 'Турларды қарау',

    toursTitle: 'Біздің турлар',
    toursSubtitle: 'Қазақстанның ең тамаша бағыттары бойынша қолмен жасалған шытырман оқиғалар',
    tourDays: 'күн',
    tourDetails: 'Толығырақ',
    tourHighlights: 'Ерекшеліктер',
    tourBookNow: 'Турды брондау',

    calcTitle: 'Тур конфигураторы',
    calcSubtitle: 'Қазақстандағы тамаша сапарыңызды баптаңыз және өтініш жіберіңіз',
    calcSelectTour: 'Турды таңдаңыз',
    calcGuests: 'Қонақтар саны',
    calcAccommodation: 'Тұрғын үй',
    calcBudget: 'Бюджет',
    calcStandard: 'Стандарт',
    calcPremium: 'Премиум',
    calcLuxury: 'Люкс',
    calcVehicle: 'Көлік',
    calcVehicleSedan: 'Седан (Toyota Camry)',
    calcVehicleMinivan: 'Минивэн (Toyota Alphard)',
    calcVehicleSUV: '4×4 Жол талғамас (Toyota Land Cruiser 300)',
    calcVehicleBus: 'Тур автобус (Mercedes Sprinter)',
    calcVehicleMercedesV: 'Mercedes V-Class',
    calcVehicleLandCruiser: 'Toyota Land Cruiser Prado',
    calcVehicleSeats: 'орын',
    calcGuide: 'Гид қызметі',
    calcNoGuide: 'Гидсіз',
    calcGroupGuide: 'Топтық гид',
    calcPrivateGuide: 'Жеке гид',
    calcMeals: 'Тамақтану',
    calcNoMeals: 'Тамақсыз',
    calcBreakfast: 'Тек таңғы ас',
    calcHalfBoard: 'Жарты пансион',
    calcFullBoard: 'Толық пансион',
    calcBookNow: 'Өтініш жіберу',
    calcSummary: 'Тур қорытындысы',
    calcSelectedOptions: 'Таңдалған параметрлер',

    fleetTitle: 'Біздің автопарк',
    fleetSubtitle: 'Қазақстан бойынша кез келген саяхатқа арналған ыңғайлы және сенімді көліктер',
    fleetSeats: 'орын',
    fleetViewAll: 'Автопарк',
    fleetComfort: 'Жайлы',
    fleetSuv: '4×4 Жол талғамас',
    fleetBudget: 'Бюджет',
    fleetLuxury: 'Люкс',
    fleetGroup: 'Топтық',

    bookingMessenger: 'Мессенджерді таңдаңыз',
    bookingTelegram: 'Telegram',
    bookingWechat: 'WeChat',
    bookingWhatsapp: 'WhatsApp',
    bookingMax: 'Max',

    aboutTitle: 'Nomad Trails туралы',
    aboutText1: 'Біз Алматыда орналасқан, Орталық Азияның керемет сұлулығы мен бай мәдениетін көрсетуге арналған жетекші тур операторымыз. 10 жылдан астам тәжірибемізбен біздің жергілікті гидтер тобы әрбір саяхатты ұмытылмас етеді.',
    aboutText2: 'Сиқырлы Шарын каньонынан Астананың болашақ көкжиегіне дейін, біз саяхатшыларды Қазақстанның жанымен байланыстыратын жеке тәжірибелер жасаймыз.',
    aboutStat1: '10+',
    aboutStat2: '5,000+',
    aboutStat3: '50+',
    aboutStat4: '4.9',
    aboutStat1Label: 'Жыл тәжірибе',
    aboutStat2Label: 'Бақытты саяхатшылар',
    aboutStat3Label: 'Бірегей маршруттар',
    aboutStat4Label: 'Орташа рейтинг',

    footerDesc: 'Қазақстан кереметтеріне жол. Көшпенді мұра, таза табиғат және заманауи ғажайыптарды сезініңіз.',
    footerQuickLinks: 'Жылдам сілтемелер',
    footerContact: 'Байланыс ақпараты',
    footerPhone: '+7 (727) 123-45-67',
    footerEmail: 'info@nomadtrails.kz',
    footerAddress: 'Абай даңғ. 45, Алматы, Қазақстан',
    footerRights: '© 2026 Nomad Trails. Барлық құқықтар қорғалған.',
    footerFollowUs: 'Бізді қадағалаңыз',

    bookingTitle: 'Турды брондау',
    bookingSubtitle: 'Форманы толтырыңыз, біз 24 сағат ішінде хабарласамыз',
    bookingName: 'Толық аты',
    bookingNamePlaceholder: 'Толық атыңызды енгізіңіз',
    bookingEmail: 'Электрондық пошта',
    bookingEmailPlaceholder: 'email@example.com',
    bookingPhone: 'Телефон нөмірі',
    bookingPhonePlaceholder: '+7 (___) ___-__-__',
    bookingDates: 'Таңдалған күндер',
    bookingDatesPlaceholder: 'мыс., 15-18 наурыз 2026',
    bookingNotes: 'Арнайы өтініштер',
    bookingNotesPlaceholder: 'Тамақтану талаптары, қолжетімділік қажеттіліктері және т.б.',
    bookingSubmit: 'Брондауды жіберу',
    bookingCancel: 'Бас тарту',
    bookingSuccess: 'Өтініш жіберілді!',
    bookingSuccessMsg: 'Брондау өтініші Telegram-ға жіберілді. Біз сізбен жақында хабарласамыз!',
    bookingSendTelegram: 'Telegram-ға жіберу',
    bookingClose: 'Жабу',
    bookingSendVia: 'Жіберу',
  },

  ru: {
    brand: 'Nomad Trails',
    navTours: 'Туры',
    navFleet: 'Автопарк',
    navCalculator: 'Калькулятор',
    navAbout: 'О нас',
    navContact: 'Контакты',

    heroTitle: 'Откройте сердце Центральной Азии',
    heroSubtitle: 'Исследуйте захватывающие пейзажи Казахстана — от заснеженных гор и древних каньонов до футуристических городов и бескрайних степей.',
    heroBtn: 'Смотреть туры',

    toursTitle: 'Наши туры',
    toursSubtitle: 'Уникальные приключения по самым потрясающим направлениям Казахстана',
    tourDays: 'дней',
    tourDetails: 'Подробнее',
    tourHighlights: 'Особенности',
    tourBookNow: 'Забронировать',

    calcTitle: 'Конфигуратор тура',
    calcSubtitle: 'Настройте своё идеальное путешествие по Казахстану и отправьте заявку',
    calcSelectTour: 'Выберите тур',
    calcGuests: 'Количество гостей',
    calcAccommodation: 'Проживание',
    calcBudget: 'Бюджет',
    calcStandard: 'Стандарт',
    calcPremium: 'Премиум',
    calcLuxury: 'Люкс',
    calcVehicle: 'Автомобиль',
    calcVehicleSedan: 'Седан (Toyota Camry)',
    calcVehicleMinivan: 'Минивэн (Toyota Alphard)',
    calcVehicleSUV: '4×4 Внедорожник (Toyota Land Cruiser 300)',
    calcVehicleBus: 'Тур-автобус (Mercedes Sprinter)',
    calcVehicleMercedesV: 'Mercedes V-Class',
    calcVehicleLandCruiser: 'Toyota Land Cruiser Prado',
    calcVehicleSeats: 'мест',
    calcGuide: 'Услуги гида',
    calcNoGuide: 'Без гида',
    calcGroupGuide: 'Групповой гид',
    calcPrivateGuide: 'Личный гид',
    calcMeals: 'Питание',
    calcNoMeals: 'Без питания',
    calcBreakfast: 'Только завтрак',
    calcHalfBoard: 'Полупансион',
    calcFullBoard: 'Полный пансион',
    calcBookNow: 'Отправить заявку',
    calcSummary: 'Итоги вашего тура',
    calcSelectedOptions: 'Выбранные параметры',

    fleetTitle: 'Наш автопарк',
    fleetSubtitle: 'Комфортные и надёжные автомобили для любого путешествия по Казахстану',
    fleetSeats: 'мест',
    fleetViewAll: 'Наш автопарк',
    fleetComfort: 'Комфорт',
    fleetSuv: '4×4 Внедорожник',
    fleetBudget: 'Бюджет',
    fleetLuxury: 'Люкс',
    fleetGroup: 'Групповой',

    bookingMessenger: 'Предпочтительный мессенджер',
    bookingTelegram: 'Telegram',
    bookingWechat: 'WeChat',
    bookingWhatsapp: 'WhatsApp',
    bookingMax: 'Max',

    aboutTitle: 'О Nomad Trails',
    aboutText1: 'Мы — ведущий туроператор в Алматы, Казахстан, посвящённый демонстрации невероятной красоты и богатой культуры Центральной Азии. С более чем 10-летним опытом наша команда увлечённых местных гидов делает каждое путешествие незабываемым.',
    aboutText2: 'От мистического Чарынского каньона до футуристического горизонта Астаны — мы создаём персонализированные впечатления, которые соединяют путешественников с душой Казахстана.',
    aboutStat1: '10+',
    aboutStat2: '5 000+',
    aboutStat3: '50+',
    aboutStat4: '4.9',
    aboutStat1Label: 'Лет опыта',
    aboutStat2Label: 'Довольных туристов',
    aboutStat3Label: 'Уникальных маршрутов',
    aboutStat4Label: 'Средний рейтинг',

    footerDesc: 'Ваш путь к чудесам Казахстана. Испытайте кочевое наследие, первозданную природу и современные чудеса.',
    footerQuickLinks: 'Быстрые ссылки',
    footerContact: 'Контактная информация',
    footerPhone: '+7 (727) 123-45-67',
    footerEmail: 'info@nomadtrails.kz',
    footerAddress: 'пр. Абая, 45, Алматы, Казахстан',
    footerRights: '© 2026 Nomad Trails. Все права защищены.',
    footerFollowUs: 'Мы в соцсетях',

    bookingTitle: 'Забронировать тур',
    bookingSubtitle: 'Заполните форму, и мы свяжемся с вами в течение 24 часов',
    bookingName: 'Полное имя',
    bookingNamePlaceholder: 'Введите ваше полное имя',
    bookingEmail: 'Электронная почта',
    bookingEmailPlaceholder: 'your@email.com',
    bookingPhone: 'Номер телефона',
    bookingPhonePlaceholder: '+7 (___) ___-__-__',
    bookingDates: 'Желаемые даты',
    bookingDatesPlaceholder: 'напр., 15-18 марта 2026',
    bookingNotes: 'Особые пожелания',
    bookingNotesPlaceholder: 'Диетические предпочтения, особые нужды и т.д.',
    bookingSubmit: 'Отправить заявку',
    bookingCancel: 'Отмена',
    bookingSuccess: 'Заявка отправлена!',
    bookingSuccessMsg: 'Ваша заявка отправлена в наш Telegram. Мы свяжемся с вами в ближайшее время!',
    bookingSendTelegram: 'Отправить в Telegram',
    bookingClose: 'Закрыть',
    bookingSendVia: 'Отправить через',
  },

  zh: {
    brand: 'Nomad Trails',
    navTours: '旅游线路',
    navFleet: '车队',
    navCalculator: '费用计算',
    navAbout: '关于我们',
    navContact: '联系方式',

    heroTitle: '探索中亚的心脏',
    heroSubtitle: '探索哈萨克斯坦壮丽的景色——从雪山和古老峡谷到未来主义城市和无垠草原。',
    heroBtn: '浏览线路',

    toursTitle: '我们的线路',
    toursSubtitle: '精心打造的哈萨克斯坦最美目的地冒险之旅',
    tourDays: '天',
    tourDetails: '查看详情',
    tourHighlights: '亮点',
    tourBookNow: '预订',

    calcTitle: '旅游配置器',
    calcSubtitle: '定制您完美的哈萨克斯坦之旅，并提交申请',
    calcSelectTour: '选择线路',
    calcGuests: '游客人数',
    calcAccommodation: '住宿',
    calcBudget: '经济型',
    calcStandard: '标准型',
    calcPremium: '高级',
    calcLuxury: '豪华',
    calcVehicle: '车辆',
    calcVehicleSedan: '轿车 (Toyota Camry)',
    calcVehicleMinivan: '商务车 (Toyota Alphard)',
    calcVehicleSUV: '4×4越野车 (Toyota Land Cruiser 300)',
    calcVehicleBus: '旅游巴士 (Mercedes Sprinter)',
    calcVehicleMercedesV: 'Mercedes V-Class',
    calcVehicleLandCruiser: 'Toyota Land Cruiser Prado',
    calcVehicleSeats: '座',
    calcGuide: '导游服务',
    calcNoGuide: '无导游',
    calcGroupGuide: '团队导游',
    calcPrivateGuide: '私人导游',
    calcMeals: '餐饮计划',
    calcNoMeals: '不含餐',
    calcBreakfast: '仅早餐',
    calcHalfBoard: '半膳',
    calcFullBoard: '全膳',
    calcBookNow: '提交申请',
    calcSummary: '旅游概览',
    calcSelectedOptions: '已选项目',

    fleetTitle: '我们的车队',
    fleetSubtitle: '适合哈萨克斯坦各类旅行的舒适可靠车辆',
    fleetSeats: '座',
    fleetViewAll: '查看车队',
    fleetComfort: '舒适',
    fleetSuv: '4×4越野',
    fleetBudget: '经济',
    fleetLuxury: '豪华',
    fleetGroup: '团体',

    bookingMessenger: '首选通讯工具',
    bookingTelegram: 'Telegram',
    bookingWechat: '微信',
    bookingWhatsapp: 'WhatsApp',
    bookingMax: 'Max',

    aboutTitle: '关于 Nomad Trails',
    aboutText1: '我们是位于哈萨克斯坦阿拉木图的顶级旅行运营商，致力于展示中亚令人惊叹的美景和丰富的文化。凭借超过10年的经验，我们的专业本地导游团队确保每次旅程都难以忘怀。',
    aboutText2: '从神秘的恰伦峡谷到阿斯塔纳的未来天际线，我们打造个性化体验，让旅行者与哈萨克斯坦的灵魂相连。',
    aboutStat1: '10+',
    aboutStat2: '5,000+',
    aboutStat3: '50+',
    aboutStat4: '4.9',
    aboutStat1Label: '年经验',
    aboutStat2Label: '满意游客',
    aboutStat3Label: '独特路线',
    aboutStat4Label: '平均评分',

    footerDesc: '通往哈萨克斯坦奇观的大门。体验游牧遗产、原始自然和现代奇迹。',
    footerQuickLinks: '快速链接',
    footerContact: '联系信息',
    footerPhone: '+7 (727) 123-45-67',
    footerEmail: 'info@nomadtrails.kz',
    footerAddress: '哈萨克斯坦阿拉木图阿拜大道45号',
    footerRights: '© 2026 Nomad Trails. 版权所有。',
    footerFollowUs: '关注我们',

    bookingTitle: '预订此线路',
    bookingSubtitle: '填写表格，我们将在24小时内联系您',
    bookingName: '姓名',
    bookingNamePlaceholder: '请输入您的姓名',
    bookingEmail: '电子邮件',
    bookingEmailPlaceholder: 'your@email.com',
    bookingPhone: '电话号码',
    bookingPhonePlaceholder: '+7 (___) ___-__-__',
    bookingDates: '期望日期',
    bookingDatesPlaceholder: '例如：2026年3月15-18日',
    bookingNotes: '特殊要求',
    bookingNotesPlaceholder: '饮食要求、无障碍需求等',
    bookingSubmit: '提交预订',
    bookingCancel: '取消',
    bookingSuccess: '申请已发送！',
    bookingSuccessMsg: '您的预订请求已发送至我们的Telegram，我们将尽快联系您！',
    bookingSendTelegram: '发送到Telegram',
    bookingClose: '关闭',
    bookingSendVia: '通过发送',
  },

  hi: {
    brand: 'Nomad Trails',
    navTours: 'टूर',
    navFleet: 'फ़्लीट',
    navCalculator: 'कैलकुलेटर',
    navAbout: 'हमारे बारे में',
    navContact: 'संपर्क',

    heroTitle: 'मध्य एशिया के हृदय की खोज करें',
    heroSubtitle: 'कज़ाखस्तान के लुभावने परिदृश्यों का अन्वेषण करें — बर्फ से ढके पहाड़ों और प्राचीन घाटियों से लेकर भविष्यवादी शहरों और अंतहीन मैदानों तक।',
    heroBtn: 'टूर देखें',

    toursTitle: 'हमारे टूर',
    toursSubtitle: 'कज़ाखस्तान के सबसे शानदार गंतव्यों के माध्यम से हस्तनिर्मित साहसिक यात्राएँ',
    tourDays: 'दिन',
    tourDetails: 'विवरण देखें',
    tourHighlights: 'मुख्य आकर्षण',
    tourBookNow: 'बुक करें',

    calcTitle: 'टूर कॉन्फ़िगरेटर',
    calcSubtitle: 'अपने सही कज़ाखस्तान साहसिक यात्रा को अनुकूलित करें और अनुरोध भेजें',
    calcSelectTour: 'टूर चुनें',
    calcGuests: 'मेहमानों की संख्या',
    calcAccommodation: 'आवास',
    calcBudget: 'बजट',
    calcStandard: 'मानक',
    calcPremium: 'प्रीमियम',
    calcLuxury: 'लक्ज़री',
    calcVehicle: 'वाहन',
    calcVehicleSedan: 'सेडान (Toyota Camry)',
    calcVehicleMinivan: 'मिनीवैन (Toyota Alphard)',
    calcVehicleSUV: '4×4 एसयूवी (Toyota Land Cruiser 300)',
    calcVehicleBus: 'टूर बस (Mercedes Sprinter)',
    calcVehicleMercedesV: 'Mercedes V-Class',
    calcVehicleLandCruiser: 'Toyota Land Cruiser Prado',
    calcVehicleSeats: 'सीट',
    calcGuide: 'गाइड सेवा',
    calcNoGuide: 'गाइड नहीं',
    calcGroupGuide: 'समूह गाइड',
    calcPrivateGuide: 'निजी गाइड',
    calcMeals: 'भोजन योजना',
    calcNoMeals: 'भोजन नहीं',
    calcBreakfast: 'केवल नाश्ता',
    calcHalfBoard: 'हाफ बोर्ड',
    calcFullBoard: 'फुल बोर्ड',
    calcBookNow: 'अनुरोध भेजें',
    calcSummary: 'आपका टूर सारांश',
    calcSelectedOptions: 'चयनित विकल्प',

    fleetTitle: 'हमारा वाहन बेड़ा',
    fleetSubtitle: 'कज़ाखस्तान में किसी भी यात्रा के लिए आरामदायक और विश्वसनीय वाहन',
    fleetSeats: 'सीट',
    fleetViewAll: 'फ़्लीट देखें',
    fleetComfort: 'आरामदायक',
    fleetSuv: '4×4 एसयूवी',
    fleetBudget: 'बजट',
    fleetLuxury: 'लक्ज़री',
    fleetGroup: 'समूह',

    bookingMessenger: 'पसंदीदा मैसेंजर',
    bookingTelegram: 'Telegram',
    bookingWechat: 'WeChat',
    bookingWhatsapp: 'WhatsApp',
    bookingMax: 'Max',

    aboutTitle: 'Nomad Trails के बारे में',
    aboutText1: 'हम अल्माटी, कज़ाखस्तान में स्थित एक प्रमुख टूर ऑपरेटर हैं, जो मध्य एशिया की अविश्वसनीय सुंदरता और समृद्ध संस्कृति को प्रदर्शित करने के लिए समर्पित हैं। 10 से अधिक वर्षों के अनुभव के साथ, हमारे जुनूनी स्थानीय गाइड हर यात्रा को अविस्मरणीय बनाते हैं।',
    aboutText2: 'रहस्यमय चारिन कैन्यन से अस्ताना के भविष्यवादी क्षितिज तक, हम व्यक्तिगत अनुभव तैयार करते हैं जो यात्रियों को कज़ाखस्तान की आत्मा से जोड़ते हैं।',
    aboutStat1: '10+',
    aboutStat2: '5,000+',
    aboutStat3: '50+',
    aboutStat4: '4.9',
    aboutStat1Label: 'वर्ष अनुभव',
    aboutStat2Label: 'खुश यात्री',
    aboutStat3Label: 'अद्वितीय मार्ग',
    aboutStat4Label: 'औसत रेटिंग',

    footerDesc: 'कज़ाखस्तान के चमत्कारों का आपका प्रवेश द्वार। खानाबदोश विरासत, प्राचीन प्रकृति और आधुनिक चमत्कारों का अनुभव करें।',
    footerQuickLinks: 'त्वरित लिंक',
    footerContact: 'संपर्क जानकारी',
    footerPhone: '+7 (727) 123-45-67',
    footerEmail: 'info@nomadtrails.kz',
    footerAddress: '45 अबाई एवेन्यू, अल्माटी, कज़ाखस्तान',
    footerRights: '© 2026 Nomad Trails. सर्वाधिकार सुरक्षित।',
    footerFollowUs: 'हमें फॉलो करें',

    bookingTitle: 'यह टूर बुक करें',
    bookingSubtitle: 'फॉर्म भरें और हम 24 घंटे के भीतर आपसे संपर्क करेंगे',
    bookingName: 'पूरा नाम',
    bookingNamePlaceholder: 'अपना पूरा नाम दर्ज करें',
    bookingEmail: 'ईमेल',
    bookingEmailPlaceholder: 'your@email.com',
    bookingPhone: 'फ़ोन नंबर',
    bookingPhonePlaceholder: '+7 (___) ___-__-__',
    bookingDates: 'वांछित तिथियाँ',
    bookingDatesPlaceholder: 'जैसे, 15-18 मार्च 2026',
    bookingNotes: 'विशेष अनुरोध',
    bookingNotesPlaceholder: 'आहार आवश्यकताएँ, सुलभता की ज़रूरतें, आदि।',
    bookingSubmit: 'बुकिंग भेजें',
    bookingCancel: 'रद्द करें',
    bookingSuccess: 'अनुरोध भेजा गया!',
    bookingSuccessMsg: 'आपकी बुकिंग अनुरोध हमारे Telegram पर भेज दिया गया है। हम जल्द ही आपसे संपर्क करेंगे!',
    bookingSendTelegram: 'Telegram पर भेजें',
    bookingClose: 'बंद करें',
    bookingSendVia: 'के माध्यम से भेजें',
  },
};
