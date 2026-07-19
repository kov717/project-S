import type { Language } from '../i18n/translations';

export type Tour = {
  id: number;
  image: string;
  days: number;
  rating: number;
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  name: Record<Language, string>;
  location: Record<Language, string>;
  description: Record<Language, string>;
  highlights: Record<Language, string[]>;
};

export type VehicleOption = {
  id: string;
  seats: number;
  emoji: string;
  image: string; // <-- REPLACE THIS with your own photo URL
  name: Record<Language, string>;
  description: Record<Language, string>;
  category: 'comfort' | 'suv' | 'budget' | 'luxury' | 'group';
};

/*
 * ============================================
 *  FLEET VEHICLES — Replace placeholder URLs
 *  with your own vehicle photos
 * ============================================
 *  For each vehicle, change the `image` field
 *  from '' to your image URL, e.g.:
 *    image: '/images/prado150.jpg'
 *  or
 *    image: 'https://your-domain.com/prado150.jpg'
 */
export const vehicles: VehicleOption[] = [
  {
    id: 'prado150',
    seats: 5,
    emoji: '🚙',
    image: '', // <-- YOUR PHOTO: Toyota Prado 150
    category: 'suv',
    name: {
      en: 'Toyota Prado 150',
      kk: 'Toyota Prado 150',
      ru: 'Toyota Prado 150',
      zh: '丰田普拉多150',
      hi: 'Toyota Prado 150',
    },
    description: {
      en: 'Reliable 4×4 SUV for mountain roads and off-road adventures',
      kk: 'Тау жолдары мен офф-роуд шытырман оқиғаларына арналған сенімді 4×4',
      ru: 'Надёжный 4×4 внедорожник для горных дорог и бездорожья',
      zh: '可靠的4×4越野车，适合山路和越野探险',
      hi: 'पहाड़ी सड़कों और ऑफ-रोड साहसिक यात्राओं के लिए विश्वसनीय 4×4',
    },
  },
  {
    id: 'alphard',
    seats: 7,
    emoji: '🚐',
    image: '', // <-- YOUR PHOTO: Toyota Alphard
    category: 'luxury',
    name: {
      en: 'Toyota Alphard',
      kk: 'Toyota Alphard',
      ru: 'Toyota Alphard',
      zh: '丰田阿尔法',
      hi: 'Toyota Alphard',
    },
    description: {
      en: 'Premium minivan with maximum comfort for VIP transfers',
      kk: 'VIP трансферлерге арналған максималды жайлылықпен премиум минивэн',
      ru: 'Премиальный минивэн с максимальным комфортом для VIP-трансферов',
      zh: '高级小巴，为VIP接送提供最大舒适度',
      hi: 'VIP ट्रांसफर के लिए अधिकतम आराम के साथ प्रीमियम मिनीवैन',
    },
  },
  {
    id: 'uaz_patriot',
    seats: 5,
    emoji: '🛻',
    image: '', // <-- YOUR PHOTO: UAZ Patriot
    category: 'suv',
    name: {
      en: 'UAZ Patriot',
      kk: 'UAZ Patriot',
      ru: 'УАЗ Патриот',
      zh: '乌AZ爱国者',
      hi: 'UAZ Patriot',
    },
    description: {
      en: 'Rugged Russian SUV built for tough terrain and long expeditions',
      kk: 'Қиын жерлер мен ұзақ экспедицияларға арналған берік ресейлік жол талғамас',
      ru: 'Брутальный российский внедорожник для сложных условий и дальних экспедиций',
      zh: '坚固的俄罗斯越野车，适合恶劣地形和长途探险',
      hi: 'कठिन इलाकों और लंबी अभियान यात्राओं के लिए बना मज़बूत रूसी SUV',
    },
  },
  {
    id: 'bukhanka',
    seats: 9,
    emoji: '🚐',
    image: '', // <-- YOUR PHOTO: UAZ Bukhanka
    category: 'budget',
    name: {
      en: 'UAZ Bukhanka (452)',
      kk: 'UAZ Буханка (452)',
      ru: 'УАЗ Буханка (452)',
      zh: '乌AZ面包车(452)',
      hi: 'UAZ Bukhanka (452)',
    },
    description: {
      en: 'Iconic Soviet van — perfect for adventurous off-road group trips',
      kk: 'Танымал кеңестік фургон — топтық офф-роуд саяхаттарға тамаша',
      ru: 'Легендарный советский фургон — идеален для приключенческих групповых поездок по бездорожью',
      zh: '标志性苏联面包车——完美的冒险越野团体旅行',
      hi: 'प्रसिद्ध सोवियत वैन — साहसिक ऑफ-रोड समूह यात्राओं के लिए आदर्श',
    },
  },
  {
    id: 'vaz',
    seats: 4,
    emoji: '🚗',
    image: '', // <-- YOUR PHOTO: VAZ (Lada)
    category: 'budget',
    name: {
      en: 'VAZ (Lada) Granta',
      kk: 'VAZ (Lada) Granta',
      ru: 'ВАЗ (Лада) Гранта',
      zh: '拉达格兰塔',
      hi: 'VAZ (Lada) Granta',
    },
    description: {
      en: 'Budget-friendly sedan for city tours and highway transfers',
      kk: 'Қалалық турлар мен тас жол трансферлеріне арналған бюджеттік седан',
      ru: 'Бюджетный седан для городских экскурсий и трассовых трансферов',
      zh: '经济型轿车，适合城市游览和公路接送',
      hi: 'शहर के दौरे और हाइवे ट्रांसफर के लिए बजट-अनुकूल सेडान',
    },
  },
];

export const tours: Tour[] = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/26065661/pexels-photo-26065661.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    days: 3,
    rating: 4.9,
    difficulty: 'Moderate',
    name: {
      en: 'Almaty Mountain Adventure',
      kk: 'Алматы тау шытырман оқиғасы',
      ru: 'Горное приключение в Алматы',
      zh: '阿拉木图山地探险',
      hi: 'अल्माटी पर्वत साहसिक यात्रा',
    },
    location: {
      en: 'Almaty Region',
      kk: 'Алматы облысы',
      ru: 'Алматинская область',
      zh: '阿拉木图地区',
      hi: 'अल्माटी क्षेत्र',
    },
    description: {
      en: 'Explore the majestic Tien Shan mountains near Almaty. Hike through alpine meadows, visit glacial lakes, and experience the incredible biodiversity of this UNESCO-protected region.',
      kk: 'Алматы маңындағы салтанатты Тянь-Шань тауларын зерттеңіз. Альпілік шалғындықтар арқылы серуендеңіз, мұздық көлдерге барыңыз.',
      ru: 'Исследуйте величественные горы Тянь-Шаня недалеко от Алматы. Пройдите через альпийские луга, посетите ледниковые озёра.',
      zh: '探索阿拉木图附近壮丽的天山山脉。徒步穿越高山草甸，参观冰川湖泊。',
      hi: 'अल्माटी के पास भव्य तियान शान पर्वतों का अन्वेषण करें। अल्पाइन घास के मैदानों में पैदल यात्रा करें।',
    },
    highlights: {
      en: ['Big Almaty Lake', 'Shymbulak Ski Resort', 'Kok-Zhailau Plateau', 'Alpine Flora & Fauna'],
      kk: ['Үлкен Алматы көлі', 'Шымбұлақ тау шаңғысы', 'Көк-Жайлау', 'Альпілік флора'],
      ru: ['Большое Алматинское озеро', 'Курорт Шымбулак', 'Плато Кок-Жайлау', 'Альпийская флора'],
      zh: ['大阿拉木图湖', '奇姆布拉克滑雪场', '科克贾伊劳高原', '高山动植物'],
      hi: ['बिग अल्माटी लेक', 'शिम्बुलक स्की रिसॉर्ट', 'कोक-झैलाउ पठार', 'अल्पाइन वनस्पति'],
    },
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/18549878/pexels-photo-18549878.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    days: 2,
    rating: 4.7,
    difficulty: 'Easy',
    name: {
      en: 'Astana City Explorer',
      kk: 'Астана қалалық зерттеу',
      ru: 'Исследование города Астана',
      zh: '阿斯塔纳城市探索',
      hi: 'अस्ताना शहर अन्वेषण',
    },
    location: {
      en: 'Astana',
      kk: 'Астана',
      ru: 'Астана',
      zh: '阿斯塔纳',
      hi: 'अस्ताना',
    },
    description: {
      en: 'Discover the futuristic capital of Kazakhstan. Visit iconic landmarks like Baiterek Tower, Khan Shatyr, and the Palace of Peace & Reconciliation. Experience the blend of modern architecture and Kazakh culture.',
      kk: 'Қазақстанның болашақ астанасын ашыңыз. Бәйтерек мұнарасы, Хан Шатыр сияқты танымал жерлерге барыңыз.',
      ru: 'Откройте футуристическую столицу Казахстана. Посетите знаковые достопримечательности: башню Байтерек, Хан Шатыр.',
      zh: '探索哈萨克斯坦的未来主义首都。参观拜铁列克塔、汗·沙特尔等标志性地标。',
      hi: 'कज़ाखस्तान की भविष्यवादी राजधानी की खोज करें। बैतेरेक टॉवर, खान शातिर जैसे प्रतिष्ठित स्थलों का दौरा करें।',
    },
    highlights: {
      en: ['Baiterek Tower', 'Khan Shatyr Entertainment Center', 'Palace of Peace', 'National Museum'],
      kk: ['Бәйтерек мұнарасы', 'Хан Шатыр', 'Бейбітшілік сарайы', 'Ұлттық мұражай'],
      ru: ['Башня Байтерек', 'Хан Шатыр', 'Дворец Мира', 'Национальный музей'],
      zh: ['拜铁列克塔', '汗·沙特尔', '和平宫', '国家博物馆'],
      hi: ['बैतेरेक टॉवर', 'खान शातिर', 'शांति महल', 'राष्ट्रीय संग्रहालय'],
    },
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/21419429/pexels-photo-21419429.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    days: 2,
    rating: 4.8,
    difficulty: 'Moderate',
    name: {
      en: 'Charyn Canyon Expedition',
      kk: 'Шарын каньоны экспедициясы',
      ru: 'Экспедиция в Чарынский каньон',
      zh: '恰伦峡谷探险',
      hi: 'चारिन कैन्यन अभियान',
    },
    location: {
      en: 'Almaty Region',
      kk: 'Алматы облысы',
      ru: 'Алматинская область',
      zh: '阿拉木图地区',
      hi: 'अल्माटी क्षेत्र',
    },
    description: {
      en: 'Journey to the spectacular Charyn Canyon, often compared to the Grand Canyon. Explore the Valley of Castles, hike along the canyon rim, and camp under the stars in this geological wonder.',
      kk: 'Керемет Шарын каньонына саяхаттаңыз. Қамалдар аңғарын зерттеңіз, каньон жағасы бойынша серуендеңіз.',
      ru: 'Путешествие к впечатляющему Чарынскому каньону. Исследуйте Долину Замков, прогуляйтесь по краю каньона.',
      zh: '前往壮观的恰伦峡谷，常被比作大峡谷。探索城堡谷，沿峡谷边缘徒步。',
      hi: 'शानदार चारिन कैन्यन की यात्रा करें। महलों की घाटी का अन्वेषण करें, कैन्यन के किनारे पर पैदल चलें।',
    },
    highlights: {
      en: ['Valley of Castles', 'Canyon Rim Hiking', 'Stargazing Camp', 'Ancient Rock Formations'],
      kk: ['Қамалдар аңғары', 'Каньон бойынша серуен', 'Жұлдызды аспан', 'Ежелгі жартастар'],
      ru: ['Долина Замков', 'Поход по каньону', 'Ночёвка под звёздами', 'Древние скалы'],
      zh: ['城堡谷', '峡谷边缘徒步', '星空露营', '古老岩层'],
      hi: ['महलों की घाटी', 'कैन्यन रिम हाइकिंग', 'तारों का शिविर', 'प्राचीन चट्टानें'],
    },
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/37088309/pexels-photo-37088309.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    days: 4,
    rating: 4.9,
    difficulty: 'Moderate',
    name: {
      en: 'Kolsai & Kaindy Lakes Trek',
      kk: 'Қолсай және Қайыңды көлдері',
      ru: 'Трек к озёрам Кольсай и Каинды',
      zh: '科尔赛与凯因迪湖徒步',
      hi: 'कोलसाई और काइंडी झील ट्रेक',
    },
    location: {
      en: 'Almaty Region',
      kk: 'Алматы облысы',
      ru: 'Алматинская область',
      zh: '阿拉木图地区',
      hi: 'अल्माटी क्षेत्र',
    },
    description: {
      en: 'Trek through pristine forests to reach the stunning Kolsai Lakes and the mystical sunken forest of Lake Kaindy. This multi-day adventure takes you deep into Kazakhstan\'s most beautiful alpine terrain.',
      kk: 'Таза ормандар арқылы таңғажайып Қолсай көлдеріне және Қайыңды көлінің сиқырлы батқан орманына жетіңіз.',
      ru: 'Пройдите через нетронутые леса к потрясающим Кольсайским озёрам и мистическому затонувшему лесу озера Каинды.',
      zh: '穿越原始森林，到达令人惊叹的科尔赛湖和凯因迪湖神秘的沉没森林。',
      hi: 'शानदार कोलसाई झीलों और काइंडी झील के रहस्यमय डूबे हुए जंगल तक पहुँचने के लिए प्राचीन जंगलों से गुजरें।',
    },
    highlights: {
      en: ['Three Kolsai Lakes', 'Sunken Forest of Kaindy', 'Mountain Camping', 'Wildlife Watching'],
      kk: ['Үш Қолсай көлі', 'Қайыңдының батқан орманы', 'Тау кемпинг', 'Жануарларды бақылау'],
      ru: ['Три Кольсайских озера', 'Затонувший лес Каинды', 'Горный кемпинг', 'Наблюдение за фауной'],
      zh: ['三座科尔赛湖', '凯因迪沉没森林', '山地露营', '野生动物观察'],
      hi: ['तीन कोलसाई झीलें', 'काइंडी का डूबा जंगल', 'पर्वत कैम्पिंग', 'वन्यजीव अवलोकन'],
    },
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/7414322/pexels-photo-7414322.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    days: 5,
    rating: 4.8,
    difficulty: 'Easy',
    name: {
      en: 'Great Steppe Nomad Experience',
      kk: 'Ұлы Дала көшпенді тәжірибесी',
      ru: 'Кочевой опыт Великой Степи',
      zh: '大草原游牧体验',
      hi: 'महान स्टेप खानाबदोश अनुभव',
    },
    location: {
      en: 'Central Kazakhstan',
      kk: 'Орталық Қазақстан',
      ru: 'Центральный Казахстан',
      zh: '哈萨克斯坦中部',
      hi: 'मध्य कज़ाखस्तान',
    },
    description: {
      en: 'Live like a nomad on the endless Kazakh steppe. Stay in traditional yurts, learn eagle hunting, ride horses across vast grasslands, and immerse yourself in ancient Kazakh traditions.',
      kk: 'Шексіз қазақ даласында көшпенді сияқты өмір сүріңіз. Дәстүрлі киіз үйлерде тұрыңыз, бүркітші өнерін үйреніңіз.',
      ru: 'Живите как кочевник в бескрайней казахской степи. Остановитесь в юртах, научитесь беркутиной охоте.',
      zh: '在无垠的哈萨克草原上像游牧民族一样生活。住在传统蒙古包里，学习猎鹰。',
      hi: 'अंतहीन कज़ाख स्टेप पर एक खानाबदोश की तरह जिएं। पारंपरिक यर्ट में रहें, ईगल शिकार सीखें।',
    },
    highlights: {
      en: ['Yurt Stay Experience', 'Eagle Hunting Demo', 'Horseback Riding', 'Traditional Kazakh Cuisine'],
      kk: ['Киіз үйде тұру', 'Бүркітші көрсетілімі', 'Ат мінү', 'Қазақ ас мәзірі'],
      ru: ['Проживание в юрте', 'Охота с беркутом', 'Верховая езда', 'Казахская кухня'],
      zh: ['蒙古包住宿', '猎鹰表演', '骑马', '传统哈萨克美食'],
      hi: ['यर्ट में रहने का अनुभव', 'ईगल शिकार प्रदर्शन', 'घुड़सवारी', 'पारंपरिक कज़ाख भोजन'],
    },
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/4321481/pexels-photo-4321481.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
    days: 6,
    rating: 4.9,
    difficulty: 'Challenging',
    name: {
      en: 'Mangystau Desert Wonders',
      kk: 'Маңғыстау шөл ғажайыптары',
      ru: 'Чудеса пустыни Мангыстау',
      zh: '曼格斯套沙漠奇观',
      hi: 'मंग्यस्ताउ रेगिस्तान अजूबे',
    },
    location: {
      en: 'Mangystau Region',
      kk: 'Маңғыстау облысы',
      ru: 'Мангистауская область',
      zh: '曼格斯套地区',
      hi: 'मंग्यस्ताउ क्षेत्र',
    },
    description: {
      en: 'Venture into the otherworldly landscapes of Mangystau. Discover Bozzhyra\'s dramatic rock formations, underground mosques, and the shores of the Caspian Sea in this unforgettable expedition.',
      kk: 'Маңғыстаудың ерекше ландшафттарына саяхаттаңыз. Бозжыраның керемет жартастарын, жерасты мешіттерін ашыңыз.',
      ru: 'Отправьтесь в потусторонние ландшафты Мангыстау. Откройте скалы Бозжыры, подземные мечети и берег Каспия.',
      zh: '深入曼格斯套的超现实景观。发现博兹日拉的壮观岩石、地下清真寺和里海海岸。',
      hi: 'मंग्यस्ताउ के अलौकिक परिदृश्यों में उतरें। बोज़्झीरा की नाटकीय चट्टानों, भूमिगत मस्जिदों की खोज करें।',
    },
    highlights: {
      en: ['Bozzhyra Valley', 'Underground Mosques', 'Caspian Sea Coast', 'Torysh Stone Balls'],
      kk: ['Бозжыра аңғары', 'Жерасты мешіттер', 'Каспий жағалауы', 'Торыш тас шарлары'],
      ru: ['Долина Бозжыра', 'Подземные мечети', 'Побережье Каспия', 'Каменные шары Торыш'],
      zh: ['博兹日拉谷', '地下清真寺', '里海海岸', '托雷什石球'],
      hi: ['बोज़्झीरा घाटी', 'भूमिगत मस्जिदें', 'कैस्पियन सागर तट', 'टोरिश पत्थर गेंदें'],
    },
  },
];
