const phone = '79884491000';

export const contacts = {
  phoneDisplay: '+7 988 449-10-00',
  phoneLink: `tel:+${phone}`,
  whatsapp: `https://wa.me/${phone}`,
  telegram: 'https://t.me/invavilon_mebel',
  instagram: 'https://www.instagram.com/vavilon_mebel/',
  route: 'https://2gis.ru/makhachkala/firm/70000001021681508',
  email: 'mailto:vavilon.zakup@yandex.ru',
  address: 'Махачкала, проспект Амет-Хана Султана, 5а/1',
};

export const whatsappProductUrl = (name: string, sku: string, url: URL) => {
  const messageName = name.replace(/[«»]/g, '');
  const message = `Здравствуйте! Меня заинтересовал товар «${messageName}», артикул ${sku}: ${url.toString()}. Подскажите, пожалуйста, цену и наличие.`;
  return `${contacts.whatsapp}?text=${encodeURIComponent(message)}`;
};
