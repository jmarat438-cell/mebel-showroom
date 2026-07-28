export type ProductStatus = 'in-stock' | 'made-to-order';

export type Category = {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
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
};

const img = (id: string, width = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=84`;

export const categories: Category[] = [
  {
    slug: 'living-room',
    name: 'Мебель для гостиной',
    shortName: 'Гостиные',
    description: 'Диванные группы, столики и акцентные предметы для общего пространства.',
    image: img('photo-1600210492486-724fe5c67fb0'),
    position: '50% 52%',
  },
  {
    slug: 'sofas-armchairs',
    name: 'Диваны и кресла',
    shortName: 'Диваны и кресла',
    description: 'Мягкие формы для отдыха, беседы и спокойных домашних вечеров.',
    image: img('photo-1556228453-efd6c1ff04f6'),
    position: '50% 55%',
  },
  {
    slug: 'dining',
    name: 'Столы и стулья',
    shortName: 'Столовые',
    description: 'Обеденные композиции для камерных ужинов и больших встреч.',
    image: img('photo-1617806118233-18e1de247200'),
    position: '50% 54%',
  },
  {
    slug: 'bedroom',
    name: 'Мебель для спальни',
    shortName: 'Спальни',
    description: 'Кровати, прикроватные предметы и тихие композиции для отдыха.',
    image: img('photo-1615874694520-474822394e73'),
    position: '50% 50%',
  },
  {
    slug: 'storage',
    name: 'Шкафы и витрины',
    shortName: 'Хранение',
    description: 'Шкафы, комоды и витрины, которые поддерживают архитектуру комнаты.',
    image: img('photo-1615529182904-14819c35db37'),
    position: '50% 48%',
  },
  {
    slug: 'light-decor',
    name: 'Свет и декор',
    shortName: 'Свет и декор',
    description: 'Светильники и детали, которые завершают интерьерную композицию.',
    image: img('photo-1540932239986-30128078f3c5'),
    position: '50% 45%',
  },
];

export const products: Product[] = [
  {
    slug: 'divan-lento', name: 'Диван «Ленто»', sku: 'WA-101', category: 'sofas-armchairs',
    status: 'in-stock', featured: true,
    description: 'Низкий силуэт и глубокая посадка для просторной гостиной.',
    images: [img('photo-1556228453-efd6c1ff04f6'), img('photo-1583847268964-b28dc8f51f92'), img('photo-1616486338812-3dadae4b4ace')],
  },
  {
    slug: 'kreslo-avia', name: 'Кресло «Авиа»', sku: 'WA-102', category: 'sofas-armchairs',
    status: 'made-to-order', featured: true,
    description: 'Выразительное кресло с округлой спинкой и мягкой геометрией.',
    images: [img('photo-1567538096630-e0c55bd6374c'), img('photo-1567016432779-094069958ea5')],
  },
  {
    slug: 'stol-orion', name: 'Обеденный стол «Орион»', sku: 'WA-201', category: 'dining',
    status: 'in-stock', featured: true,
    description: 'Стол для центральной композиции в современной столовой.',
    images: [img('photo-1617806118233-18e1de247200'), img('photo-1615066390971-03e4e1c36ddf')],
  },
  {
    slug: 'stul-nora', name: 'Стул «Нора»', sku: 'WA-202', category: 'dining',
    status: 'made-to-order',
    description: 'Лаконичный обеденный стул с мягкой посадкой.',
    images: [img('photo-1598300056393-4aac492f4344'), img('photo-1555041469-a586c61ea9bc')],
  },
  {
    slug: 'krovat-tessa', name: 'Кровать «Тесса»', sku: 'WA-301', category: 'bedroom',
    status: 'made-to-order', featured: true,
    description: 'Спокойная пропорция и мягкое изголовье для камерной спальни.',
    images: [img('photo-1615874694520-474822394e73'), img('photo-1616594039964-ae9021a400a0')],
  },
  {
    slug: 'tumba-mira', name: 'Прикроватная тумба «Мира»', sku: 'WA-302', category: 'bedroom',
    status: 'in-stock',
    description: 'Компактный предмет с чистой линией фасада.',
    images: [img('photo-1616486338812-3dadae4b4ace'), img('photo-1600566753086-00f18fb6b3ea6')],
  },
  {
    slug: 'gostinaya-aura', name: 'Композиция «Аура»', sku: 'WA-401', category: 'living-room',
    status: 'made-to-order', featured: true,
    description: 'Собранная композиция для гостиной в тёплых нейтральных оттенках.',
    images: [img('photo-1600210492486-724fe5c67fb0'), img('photo-1618221195710-dd6b41faaea6')],
  },
  {
    slug: 'stolik-velo', name: 'Журнальный столик «Вело»', sku: 'WA-402', category: 'living-room',
    status: 'in-stock',
    description: 'Невысокий столик для мягкой группы и предметов декора.',
    images: [img('photo-1532372320572-cda25653a694'), img('photo-1618220179428-22790b461013')],
  },
  {
    slug: 'komod-arden', name: 'Комод «Арден»', sku: 'WA-501', category: 'storage',
    status: 'in-stock', featured: true,
    description: 'Горизонтальный объём для хранения и интерьерной экспозиции.',
    images: [img('photo-1615529182904-14819c35db37'), img('photo-1618220179428-22790b461013')],
  },
  {
    slug: 'vitrina-linea', name: 'Витрина «Линеа»', sku: 'WA-502', category: 'storage',
    status: 'made-to-order',
    description: 'Вертикальная витрина для посуды, книг и памятных предметов.',
    images: [img('photo-1595428774223-ef52624120d2'), img('photo-1615873968403-89e068629265')],
  },
  {
    slug: 'svetilnik-sfera', name: 'Подвесной светильник «Сфера»', sku: 'WA-601', category: 'light-decor',
    status: 'in-stock', featured: true,
    description: 'Мягкий рассеянный свет для обеденной зоны или гостиной.',
    images: [img('photo-1540932239986-30128078f3c5'), img('photo-1524484485831-a92ffc0de03f')],
  },
  {
    slug: 'lampa-elara', name: 'Настольная лампа «Элара»', sku: 'WA-602', category: 'light-decor',
    status: 'made-to-order',
    description: 'Акцентный свет для консоли, тумбы или рабочего стола.',
    images: [img('photo-1507473885765-e6ed057f782c'), img('photo-1494438639946-1ebd1d20bf85')],
  },
];

export const categoryBySlug = (slug: string) => categories.find((item) => item.slug === slug);
export const productBySlug = (slug: string) => products.find((item) => item.slug === slug);
export const productsInCategory = (slug: string) => products.filter((item) => item.category === slug);
export const statusLabel = (status: ProductStatus) => status === 'in-stock' ? 'В наличии' : 'Под заказ';
