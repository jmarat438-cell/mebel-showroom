export type ProductStatus = 'in-stock' | 'made-to-order' | 'on-request';

export type Category = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  imageAvif: string;
  imageJpeg: string;
  position: string;
};

export type Product = {
  slug: string;
  name: string;
  sku: string;
  category: string;
  status: ProductStatus;
  description: string;
  images: string[];
  featured?: boolean;
  price?: number;
  oldPrice?: number;
  dimensions?: string;
  sourceUrl?: string;
};

export const categories: Category[] = [
  {
    slug: 'living-room',
    name: 'Мебель для гостиной',
    shortName: 'Гостиные',
    description: 'Диванные группы, столики и акцентные предметы для общего пространства.',
    imageAvif: '/media/wellart/category-living.avif',
    imageJpeg: '/media/wellart/category-living.jpg',
    position: '50% 52%',
  },
  {
    slug: 'sofas-armchairs',
    name: 'Диваны и кресла',
    shortName: 'Диваны и кресла',
    description: 'Мягкие формы для отдыха, беседы и спокойных домашних вечеров.',
    imageAvif: '/media/wellart/category-sofas.avif',
    imageJpeg: '/media/wellart/category-sofas.jpg',
    position: '50% 55%',
  },
  {
    slug: 'dining',
    name: 'Столы и стулья',
    shortName: 'Столовые',
    description: 'Обеденные композиции для камерных ужинов и больших встреч.',
    imageAvif: '/media/wellart/category-dining.avif',
    imageJpeg: '/media/wellart/category-dining.jpg',
    position: '50% 54%',
  },
  {
    slug: 'bedroom',
    name: 'Мебель для спальни',
    shortName: 'Спальни',
    description: 'Кровати, прикроватные предметы и тихие композиции для отдыха.',
    imageAvif: '/media/wellart/category-bedroom.avif',
    imageJpeg: '/media/wellart/category-bedroom.jpg',
    position: '50% 50%',
  },
  {
    slug: 'storage',
    name: 'Шкафы и витрины',
    shortName: 'Хранение',
    description: 'Шкафы, комоды и витрины, которые поддерживают архитектуру комнаты.',
    imageAvif: '/media/wellart/category-storage.avif',
    imageJpeg: '/media/wellart/category-storage.jpg',
    position: '50% 48%',
  },
  {
    slug: 'light-decor',
    name: 'Свет и декор',
    shortName: 'Свет и декор',
    description: 'Светильники и детали, которые завершают интерьерную композицию.',
    imageAvif: '/media/wellart/category-decor.avif',
    imageJpeg: '/media/wellart/category-decor.jpg',
    position: '50% 45%',
  },
];

export const products: Product[] = [
  {
    slug: 'stolik-capella', name: 'Журнальный стол Capella', sku: 'TG-387', category: 'living-room',
    status: 'on-request', price: 90000, dimensions: '98 × 70 × 39 см',
    description: 'Керамическая столешница с рисунком под мрамор, изогнутые ножки из тёмного дерева и металлическое основание.',
    images: ['/products/telegram/capella.jpg'],
    sourceUrl: 'https://t.me/wellart_m/387',
  },
  {
    slug: 'vitrina-willa', name: 'Витрина Willa', sku: 'TG-392', category: 'storage',
    status: 'on-request', featured: true, price: 99000, dimensions: '69 × 44 × 162 см',
    description: 'Современная дизайнерская витрина в минималистичном стиле для посуды, декора и коллекционных предметов.',
    images: ['/products/telegram/willa.jpg'],
    sourceUrl: 'https://t.me/wellart_m/392',
  },
  {
    slug: 'bufet-soho', name: 'Буфет Soho', sku: 'TG-403', category: 'storage',
    status: 'on-request', price: 225000, dimensions: '209 × 48 × 75 см',
    description: 'Лаконичный буфет, построенный на балансе формы, фактуры и свободного пространства.',
    images: ['/products/telegram/soho.jpg'],
    sourceUrl: 'https://t.me/wellart_m/403',
  },
  {
    slug: 'divan-mardini', name: 'Угловой диван Mardini', sku: 'TG-367-A', category: 'sofas-armchairs',
    status: 'on-request', featured: true, price: 170000, oldPrice: 399000, dimensions: '265 × 310 × 105 см',
    description: 'Лаконичный угловой диван с глубокой посадкой и спокойной фактурной обивкой.',
    images: ['/products/telegram/mardini.jpg', '/products/telegram/mardini-detail.jpg'],
    sourceUrl: 'https://t.me/wellart_m/367',
  },
  {
    slug: 'stol-wood', name: 'Журнальный стол Wood', sku: 'TG-367-B', category: 'living-room',
    status: 'on-request', price: 22000,
    description: 'Базовый журнальный стол из дерева с выразительной геометрией опор.',
    images: ['/products/telegram/wood.jpg', '/products/telegram/mardini.jpg'],
    sourceUrl: 'https://t.me/wellart_m/367',
  },
  {
    slug: 'kreslo-armis', name: 'Кресло Armis', sku: 'TG-370', category: 'sofas-armchairs',
    status: 'on-request', price: 65000,
    description: 'Кресло с фактурной обивкой, деревянным каркасом и анатомической посадкой.',
    images: ['/products/telegram/armis-armchair.jpg'],
    sourceUrl: 'https://t.me/wellart_m/370',
  },
  {
    slug: 'divan-armis', name: 'Диван Armis', sku: 'TG-373', category: 'sofas-armchairs',
    status: 'on-request', price: 223000, dimensions: '270 × 100 см',
    description: 'Диван с обволакивающим силуэтом, низкой посадкой и контрастными боковыми деталями.',
    images: ['/products/telegram/armis-sofa.jpg'],
    sourceUrl: 'https://t.me/wellart_m/373',
  },
  {
    slug: 'stol-by-kepi', name: 'Журнальный стол By Kepi', sku: 'TG-376', category: 'living-room',
    status: 'on-request', price: 392000, dimensions: '134 × 85 × 35 см',
    description: 'Скульптурный журнальный стол с многослойным основанием и глубоким чёрным глянцем.',
    images: ['/products/telegram/by-kepi.jpg'],
    sourceUrl: 'https://t.me/wellart_m/376',
  },
  {
    slug: 'stolik-astor-coffee', name: 'Кофейный столик Astor', sku: 'TG-379-A', category: 'living-room',
    status: 'on-request', price: 17000, dimensions: 'Ø 48 см',
    description: 'Компактный кофейный столик с округлой столешницей и металлическим основанием.',
    images: ['/products/telegram/astor-detail.jpg', '/products/telegram/astor-set.jpg'],
    sourceUrl: 'https://t.me/wellart_m/379',
  },
  {
    slug: 'stol-astor', name: 'Журнальный стол Astor', sku: 'TG-379-B', category: 'living-room',
    status: 'on-request', price: 33000, dimensions: 'Ø 100 см',
    description: 'Низкий журнальный стол с плавной столешницей и лаконичным металлическим основанием.',
    images: ['/products/telegram/astor-set.jpg', '/products/telegram/astor-detail.jpg'],
    sourceUrl: 'https://t.me/wellart_m/379',
  },
  {
    slug: 'stol-brazze', name: 'Журнальный стол Brazze', sku: 'TG-382', category: 'living-room',
    status: 'on-request', price: 83000, dimensions: '125 × 97 см',
    description: 'Чёрный журнальный стол с закалённым стеклом и фактурными вставками.',
    images: ['/products/telegram/brazze.jpg'],
    sourceUrl: 'https://t.me/wellart_m/382',
  },
  {
    slug: 'stol-icon-dark', name: 'Тёмный столик Icon', sku: 'TG-389-A', category: 'living-room',
    status: 'on-request', featured: true, price: 55000,
    description: 'Органичный столик без строгих углов, который можно комбинировать со светлой моделью Icon.',
    images: ['/products/telegram/icon-set.jpg', '/products/telegram/icon-detail.jpg', '/products/telegram/icon-overview.jpg'],
    sourceUrl: 'https://t.me/wellart_m/389',
  },
  {
    slug: 'stol-icon-light', name: 'Светлый столик Icon', sku: 'TG-389-B', category: 'living-room',
    status: 'on-request', price: 83000,
    description: 'Светлый керамический столик органичной формы для самостоятельной или парной композиции.',
    images: ['/products/telegram/icon-overview.jpg', '/products/telegram/icon-detail.jpg', '/products/telegram/icon-set.jpg'],
    sourceUrl: 'https://t.me/wellart_m/389',
  },
  {
    slug: 'tualetny-stolik-round-mirror', name: 'Туалетный столик с круглым зеркалом', sku: 'TG-400', category: 'bedroom',
    status: 'on-request',
    description: 'Туалетный столик с круглым зеркалом, вместительной тумбой и глубокими выдвижными ящиками.',
    images: ['/products/telegram/dressing-table.jpg'],
    sourceUrl: 'https://t.me/wellart_m/400',
  },
  {
    slug: 'kreslo-enne-lyon', name: 'Лаундж-кресло Enne Lyon', sku: 'TG-407-A', category: 'sofas-armchairs',
    status: 'on-request',
    description: 'Лаундж-кресло с высокой спинкой, мягкой кожаной посадкой и светлым деревянным каркасом.',
    images: ['/products/telegram/enne-lyon.jpg', '/products/telegram/enne-lyon-detail.jpg'],
    sourceUrl: 'https://t.me/wellart_m/407',
  },
  {
    slug: 'stolik-bag', name: 'Приставной столик Bag', sku: 'TG-407-B', category: 'living-room',
    status: 'on-request',
    description: 'Приставной столик с тёмным стеклом и интегрированной кожаной газетницей.',
    images: ['/products/telegram/bag-table.jpg', '/products/telegram/enne-lyon.jpg'],
    sourceUrl: 'https://t.me/wellart_m/407',
  },
  {
    slug: 'divan-era', name: 'Диван Era', sku: 'TG-349', category: 'sofas-armchairs',
    status: 'made-to-order', price: 315000, dimensions: '375 × 95 см',
    description: 'Просторный диван с мягкой геометрией и глубокой посадкой. Модель можно изготовить в других размерах и тканях под интерьер.',
    images: ['/products/telegram/era.jpg'],
    sourceUrl: 'https://t.me/wellart_m/349',
  },
  {
    slug: 'divan-panama', name: 'Четырёхместный диван Panama', sku: 'TG-331', category: 'sofas-armchairs',
    status: 'on-request', price: 172000, dimensions: '250 × 100 см',
    description: 'Четырёхместный диван с округлыми линиями, глубокой посадкой и выразительной фактурной обивкой.',
    images: ['/products/telegram/panama.jpg'],
    sourceUrl: 'https://t.me/wellart_m/331',
  },
  {
    slug: 'divan-roma', name: 'Угловой диван Roma', sku: 'TG-306', category: 'sofas-armchairs',
    status: 'on-request', dimensions: '335 × 390 × 145 см',
    description: 'Акцентный угловой диван для просторной гостиной. Плавный силуэт собирает большую мягкую композицию без визуальной тяжести.',
    images: ['/products/telegram/roma-sofa.jpg'],
    sourceUrl: 'https://t.me/wellart_m/306',
  },
  {
    slug: 'divan-luna', name: 'Угловой диван Luna', sku: 'TG-364', category: 'sofas-armchairs',
    status: 'on-request', price: 540000, dimensions: '440 × 245 см',
    description: 'Низкий угловой диван с фактурной обивкой и деревянными элементами в подлокотниках, которые можно использовать как мини-столики.',
    images: ['/products/telegram/luna.jpg'],
    sourceUrl: 'https://t.me/wellart_m/364',
  },
  {
    slug: 'obedennyi-stol-roma', name: 'Обеденный стол Roma', sku: 'TG-311-A', category: 'dining',
    status: 'on-request', price: 155000, dimensions: '240 × 105 см',
    description: 'Обеденный стол из коллекции Roma с выразительной древесной фактурой и мягко скруглённой столешницей.',
    images: ['/products/telegram/roma-dining.jpg'],
    sourceUrl: 'https://t.me/wellart_m/311',
  },
  {
    slug: 'stul-roma', name: 'Стул Roma', sku: 'TG-311-B', category: 'dining',
    status: 'on-request', price: 30000,
    description: 'Обеденный стул Roma с мягкой посадкой и округлым силуэтом, созданный для одноимённой столовой коллекции.',
    images: ['/products/telegram/roma-dining.jpg'],
    sourceUrl: 'https://t.me/wellart_m/311',
  },
  {
    slug: 'obedennyi-stol-fugato', name: 'Обеденный стол Fugato', sku: 'TG-325-A', category: 'dining',
    status: 'on-request', price: 227000, dimensions: '240 × 100 см',
    description: 'Большой обеденный стол Fugato с монументальной столешницей для просторной столовой композиции.',
    images: ['/products/telegram/fugato-dining.jpg'],
    sourceUrl: 'https://t.me/wellart_m/325',
  },
  {
    slug: 'stul-dolmen', name: 'Стул Dolmen', sku: 'TG-325-B', category: 'dining',
    status: 'on-request', price: 35000,
    description: 'Мягкий обеденный стул Dolmen со спокойным силуэтом, который можно сочетать со столами разных коллекций.',
    images: ['/products/telegram/fugato-dining.jpg'],
    sourceUrl: 'https://t.me/wellart_m/325',
  },
  {
    slug: 'obedennyi-stol-agua', name: 'Обеденный стол Agua', sku: 'TG-278-A', category: 'dining',
    status: 'on-request', price: 130000, dimensions: '213 × 100 см',
    description: 'Обеденный стол Agua с выразительным основанием и светлой столешницей для современной столовой зоны.',
    images: ['/products/telegram/agua-dining.jpg'],
    sourceUrl: 'https://t.me/wellart_m/278',
  },
  {
    slug: 'stul-malta', name: 'Стул Malta', sku: 'TG-278-B', category: 'dining',
    status: 'on-request', price: 27000,
    description: 'Обеденный стул Malta с мягкой посадкой и лаконичной геометрией, представленный в композиции со столом Agua.',
    images: ['/products/telegram/agua-dining.jpg'],
    sourceUrl: 'https://t.me/wellart_m/278',
  },
  {
    slug: 'obedennyi-stol-taj-mahal', name: 'Обеденный стол Taj Mahal', sku: 'TG-221-A', category: 'dining',
    status: 'on-request', price: 150000, dimensions: '220 × 100 см',
    description: 'Стол из обеденной коллекции Taj Mahal, в которой современная геометрия соединяется с тёплой домашней атмосферой.',
    images: ['/products/telegram/taj-mahal-dining.jpg'],
    sourceUrl: 'https://t.me/wellart_m/221',
  },
  {
    slug: 'obedennyi-stol-alfa', name: 'Обеденный стол Alfa', sku: 'TG-230-A', category: 'dining',
    status: 'on-request', price: 145000, dimensions: '220 × 100 см',
    description: 'Обеденный стол Alfa для семейной столовой зоны с выразительной столешницей и устойчивым основанием.',
    images: ['/products/telegram/alfa-dining.jpg'],
    sourceUrl: 'https://t.me/wellart_m/230',
  },
  {
    slug: 'tualetny-stolik-camaro', name: 'Туалетный столик Camaro', sku: 'TG-247-A', category: 'bedroom',
    status: 'on-request', price: 75000, dimensions: '160 × 48 см',
    description: 'Туалетный столик Camaro с плавными округлыми линиями и вместительными ящиками для ежедневных принадлежностей.',
    images: ['/products/telegram/camaro-dressing.jpg'],
    sourceUrl: 'https://t.me/wellart_m/247',
  },
  {
    slug: 'zerkalo-camaro', name: 'Зеркало Camaro', sku: 'TG-247-B', category: 'bedroom',
    status: 'on-request', price: 34000, dimensions: '82 × 68 см',
    description: 'Зеркало Camaro мягкой органичной формы, которое завершает композицию туалетного столика из той же коллекции.',
    images: ['/products/telegram/camaro-dressing.jpg'],
    sourceUrl: 'https://t.me/wellart_m/247',
  },
  {
    slug: 'krovat-camaro', name: 'Кровать Camaro', sku: 'TG-250-A', category: 'bedroom',
    status: 'on-request', price: 170000, dimensions: '180 × 200 см',
    description: 'Кровать Camaro с мягким объёмным изголовьем и спокойными округлыми формами для цельной спальни.',
    images: ['/products/telegram/camaro-bedroom.jpg'],
    sourceUrl: 'https://t.me/wellart_m/250',
  },
  {
    slug: 'prikrovatnaya-tumba-camaro', name: 'Прикроватная тумба Camaro', sku: 'TG-250-B', category: 'bedroom',
    status: 'on-request', price: 37000, dimensions: '70 × 48 × 43 см',
    description: 'Компактная прикроватная тумба Camaro с округлым корпусом и удобной закрытой системой хранения.',
    images: ['/products/telegram/camaro-bedroom.jpg'],
    sourceUrl: 'https://t.me/wellart_m/250',
  },
  {
    slug: 'shkaf-camaro', name: 'Шкаф Camaro', sku: 'TG-250-C', category: 'bedroom',
    status: 'on-request', price: 225000, dimensions: '300 × 60 × 230 см',
    description: 'Вместительный шкаф Camaro с лаконичными фасадами, который поддерживает мягкую геометрию спальной коллекции.',
    images: ['/products/telegram/camaro-bedroom.jpg'],
    sourceUrl: 'https://t.me/wellart_m/250',
  },
  {
    slug: 'tualetny-stolik-wagon', name: 'Туалетный столик Wagon', sku: 'TG-236-A', category: 'bedroom',
    status: 'on-request', price: 115000,
    description: 'Туалетный столик Wagon с тёплой древесной фактурой, строгой геометрией и скрытым функциональным хранением.',
    images: ['/products/telegram/wagon-dressing.jpg'],
    sourceUrl: 'https://t.me/wellart_m/236',
  },
  {
    slug: 'zerkalo-wagon', name: 'Зеркало Wagon', sku: 'TG-236-B', category: 'bedroom',
    status: 'on-request', price: 18500,
    description: 'Настенное зеркало для туалетного столика Wagon, выдержанное в спокойной современной геометрии коллекции.',
    images: ['/products/telegram/wagon-dressing.jpg'],
    sourceUrl: 'https://t.me/wellart_m/236',
  },
  {
    slug: 'stellazh-san-marino', name: 'Стеллаж San Marino', sku: 'TG-358', category: 'storage',
    status: 'on-request', price: 120000, dimensions: '220 × 30 × 70 см',
    description: 'Открытый стеллаж San Marino для книг, бокалов и декора. Глянцевые поверхности отражают свет и сохраняют ощущение воздуха.',
    images: ['/products/telegram/san-marino.jpg'],
    sourceUrl: 'https://t.me/wellart_m/358',
  },
  {
    slug: 'bufet-roma', name: 'Буфет Roma', sku: 'TG-314', category: 'storage',
    status: 'on-request', price: 175000, dimensions: '225 × 52 × 81 см',
    description: 'Буфет Roma в глубоком древесном оттенке с плавными краями и выразительным круглым зеркалом в композиции.',
    images: ['/products/telegram/roma-buffet.jpg'],
    sourceUrl: 'https://t.me/wellart_m/314',
  },
  {
    slug: 'vitrina-valensia', name: 'Витрина Valensia', sku: 'TG-322', category: 'storage',
    status: 'on-request', price: 200000, dimensions: '220 × 105 × 40 см',
    description: 'Чёрная витрина Valensia для посуды и декора, построенная на сочетании классической симметрии и современной отделки.',
    images: ['/products/telegram/valensia.jpg'],
    sourceUrl: 'https://t.me/wellart_m/322',
  },
  {
    slug: 'tv-tumba-fugato', name: 'ТВ-тумба Fugato', sku: 'TG-298', category: 'storage',
    status: 'on-request', price: 140000, dimensions: '220 × 50 см',
    description: 'ТВ-тумба Fugato с тёмной древесной фактурой, закрытыми секциями хранения и контрастными деревянными ножками.',
    images: ['/products/telegram/fugato-tv.jpg'],
    sourceUrl: 'https://t.me/wellart_m/298',
  },
  {
    slug: 'bufet-vaselon', name: 'Буфет Vaselon', sku: 'TG-244', category: 'storage',
    status: 'on-request', price: 269000, dimensions: '90 × 45 × 171 см',
    description: 'Высокий буфет Vaselon для посуды и коллекционного декора. Компактная ширина позволяет встроить его даже в небольшую столовую зону.',
    images: ['/products/telegram/vaselon.jpg'],
    sourceUrl: 'https://t.me/wellart_m/244',
  },
  {
    slug: 'bufet-oreo', name: 'Буфет Oreo', sku: 'TG-263-A', category: 'storage',
    status: 'on-request', price: 205000, dimensions: '240 × 50 × 82 см',
    description: 'Широкий буфет Oreo из тёмного дерева с плавным силуэтом и закрытым хранением для гостиной или столовой.',
    images: ['/products/telegram/oreo-buffet.jpg'],
    sourceUrl: 'https://t.me/wellart_m/263',
  },
  {
    slug: 'nastennoye-panno-110-130', name: 'Настенное панно 110 × 130 см', sku: 'TG-355', category: 'light-decor',
    status: 'on-request', price: 43000, dimensions: '110 × 130 см',
    description: 'Минималистичное настенное панно в природной палитре, которое соединяет дерево и мягкие нейтральные оттенки интерьера.',
    images: ['/products/telegram/panel-wood.jpg'],
    sourceUrl: 'https://t.me/wellart_m/355',
  },
  {
    slug: 'kartina-s-zolotoy-liniey', name: 'Абстрактная картина с золотой линией', sku: 'TG-267', category: 'light-decor',
    status: 'on-request', price: 50000, dimensions: '100 × 150 см',
    description: 'Абстрактная картина ручной работы в коричневых и кремовых оттенках с тонкой золотистой линией и рельефными мазками.',
    images: ['/products/telegram/artwork-abstract-brown.jpg'],
    sourceUrl: 'https://t.me/wellart_m/267',
  },
  {
    slug: 'kartina-loshad-i-vetvi', name: 'Картина с лошадью и цветущими ветвями', sku: 'TG-272', category: 'light-decor',
    status: 'in-stock', price: 46000, dimensions: '134 × 124 см',
    description: 'Картина с лаконичным силуэтом лошади и цветущими ветвями в мягкой природной палитре.',
    images: ['/products/telegram/artwork-horse.jpg'],
    sourceUrl: 'https://t.me/wellart_m/272',
  },
  {
    slug: 'abstraktnaya-kartina-115-162', name: 'Абстрактная картина 115 × 162 см', sku: 'TG-283', category: 'light-decor',
    status: 'on-request', price: 38000, dimensions: '115 × 162 см',
    description: 'Масштабное абстрактное полотно с мягким цветовым балансом и выразительной фактурой для столовой или гостиной.',
    images: ['/products/telegram/artwork-abstract-neutral.jpg'],
    sourceUrl: 'https://t.me/wellart_m/283',
  },
  {
    slug: 'abstraktnaya-kartina-123-153', name: 'Абстрактная картина 123 × 153 см', sku: 'TG-227', category: 'light-decor',
    status: 'on-request', price: 45000, dimensions: '123 × 153 см',
    description: 'Абстрактная картина с многослойным сочетанием цвета и фактуры, рассчитанная на заметный акцент в спокойном интерьере.',
    images: ['/products/telegram/artwork-abstract-color.jpg'],
    sourceUrl: 'https://t.me/wellart_m/227',
  },
  {
    slug: 'kartina-v-etno-stile', name: 'Картина в этно-стиле', sku: 'TG-242', category: 'light-decor',
    status: 'on-request', price: 46000, dimensions: '134 × 124 см',
    description: 'Картина в этнической стилистике с графичным рисунком и природными оттенками для завершения интерьерной композиции.',
    images: ['/products/telegram/artwork-ethno.jpg'],
    sourceUrl: 'https://t.me/wellart_m/242',
  },
  {
    slug: 'kompoziciya-balance', name: 'Консоль и зеркало Balance', sku: 'TG-291', category: 'light-decor',
    status: 'on-request', price: 97000, dimensions: '120 × 175 × 50 см',
    description: 'Композиция Balance из консоли и зеркала, построенная на сочетании дерева, металла и строгих пропорций.',
    images: ['/products/telegram/balance.jpg'],
    sourceUrl: 'https://t.me/wellart_m/291',
  },
  {
    slug: 'kartina-akcenty', name: 'Картина «Акценты»', sku: 'TG-343', category: 'light-decor',
    status: 'on-request', price: 50000,
    description: 'Современная абстрактная картина с мягкими округлыми формами и сбалансированной цветовой палитрой.',
    images: ['/products/telegram/artwork-accents.jpg'],
    sourceUrl: 'https://t.me/wellart_m/343',
  },
];

export const categoryBySlug = (slug: string) => categories.find((item) => item.slug === slug);
export const productBySlug = (slug: string) => products.find((item) => item.slug === slug);
export const productsInCategory = (slug: string) => products.filter((item) => item.category === slug).reverse();
export const statusLabel = (status: ProductStatus) => {
  if (status === 'in-stock') return 'В наличии';
  if (status === 'made-to-order') return 'Под заказ';
  return 'Наличие уточняется';
};

export const formatPrice = (price?: number) => price
  ? `${new Intl.NumberFormat('ru-RU').format(price)} ₽`
  : 'Цена по запросу';
