const phone = '79201221212';

export const contacts = {
  name: 'Well Art',
  tagline: 'Мебель, которая подчёркивает не стиль, а личность.',
  phoneDisplay: '+7 920 122-12-12',
  phoneLink: `tel:+${phone}`,
  whatsapp: `https://wa.me/${phone}`,
  telegram: 'https://t.me/wellart_m',
  instagram: 'https://www.instagram.com/wellart.ru/',
  taplink: 'https://taplink.cc/wellart',
  route: 'https://2gis.ru/makhachkala/firm/70000001061375141',
  address: 'Махачкала, улица Гагарина, 32/1 стр.',
  floor: '5 этажей',
  hours: 'Ежедневно, 10:00-19:00',
};

export const whatsappUrl = (message: string) => `${contacts.whatsapp}?text=${encodeURIComponent(message)}`;

export const whatsappProductUrl = (name: string, sku: string, url: URL) => {
  const messageName = name.replace(/[«»]/g, '');
  const message = `Здравствуйте! Меня заинтересовал товар «${messageName}», артикул ${sku}: ${url.toString()}. Подскажите, пожалуйста, цену и наличие.`;
  return whatsappUrl(message);
};
