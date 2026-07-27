from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.lib.utils import ImageReader
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from pypdf import PdfReader
from PIL import Image


ROOT = Path('/Users/maratsamov/Documents/Codex/2026-07-27/ghj')
SCREENS = ROOT / 'tmp/pdfs/screens'
OUT = ROOT / 'output/pdf/vavilon-site-concept.pdf'
FINAL = ROOT / 'outputs/vavilon-site-concept.pdf'
LOGO = ROOT / 'work/assets/vavilon-logo-original.png'
CONTACT_PHOTO = SCREENS / '08-contact-photo.jpg'

W, H = 960, 540
IVORY = HexColor('#F4F0E9')
PAPER = HexColor('#FBF8F2')
TAUPE = HexColor('#D8CEC2')
MUTED = HexColor('#81756B')
WALNUT = HexColor('#4A3025')
INK = HexColor('#211A17')
BRONZE = HexColor('#A77B4B')
GREEN = HexColor('#496451')

pdfmetrics.registerFont(TTFont('Georgia', '/System/Library/Fonts/Supplemental/Georgia.ttf'))
pdfmetrics.registerFont(TTFont('Georgia-Bold', '/System/Library/Fonts/Supplemental/Georgia Bold.ttf'))
pdfmetrics.registerFont(TTFont('Arial', '/System/Library/Fonts/Supplemental/Arial.ttf'))
pdfmetrics.registerFont(TTFont('Arial-Bold', '/System/Library/Fonts/Supplemental/Arial Bold.ttf'))

with Image.open(SCREENS / '08-contacts.png') as contact_source:
    contact_source.crop((0, 70, 778, 1000)).convert('RGB').save(CONTACT_PHOTO, quality=92)


def image_size(path):
    return ImageReader(str(path)).getSize()


def draw_cover_image(c, path, x, y, w, h, anchor_x=0.5, anchor_y=0.5):
    img = ImageReader(str(path))
    iw, ih = img.getSize()
    scale = max(w / iw, h / ih)
    dw, dh = iw * scale, ih * scale
    dx = x - (dw - w) * anchor_x
    dy = y - (dh - h) * anchor_y
    c.saveState()
    clip = c.beginPath()
    clip.rect(x, y, w, h)
    c.clipPath(clip, stroke=0, fill=0)
    c.drawImage(img, dx, dy, width=dw, height=dh, mask='auto')
    c.restoreState()


def draw_contain_image(c, path, x, y, w, h, bg=None):
    if bg:
        c.setFillColor(bg)
        c.rect(x, y, w, h, stroke=0, fill=1)
    img = ImageReader(str(path))
    iw, ih = img.getSize()
    scale = min(w / iw, h / ih)
    dw, dh = iw * scale, ih * scale
    c.drawImage(img, x + (w - dw) / 2, y + (h - dh) / 2, width=dw, height=dh, mask='auto')


def wrap_lines(text, font, size, max_width):
    words = text.split()
    lines, current = [], ''
    for word in words:
        probe = f'{current} {word}'.strip()
        if pdfmetrics.stringWidth(probe, font, size) <= max_width:
            current = probe
        else:
            if current:
                lines.append(current)
            current = word
    if current:
        lines.append(current)
    return lines


def draw_text(c, text, x, y, max_width, font='Arial', size=14, leading=None, color=INK, max_lines=None):
    leading = leading or size * 1.35
    lines = wrap_lines(text, font, size, max_width)
    if max_lines:
        lines = lines[:max_lines]
    c.setFont(font, size)
    c.setFillColor(color)
    for line in lines:
        c.drawString(x, y, line)
        y -= leading
    return y


def label(c, text, x, y, color=MUTED):
    c.setFont('Arial-Bold', 8)
    c.setFillColor(color)
    c.drawString(x, y, text.upper())


def title(c, text, x, y, max_width, size=34, color=INK):
    return draw_text(c, text, x, y, max_width, font='Georgia', size=size, leading=size * 1.08, color=color)


def page_chrome(c, page, dark=False, section='КОНЦЕПЦИЯ САЙТА'):
    fg = PAPER if dark else INK
    line = HexColor('#6F625A') if dark else TAUPE
    c.setStrokeColor(line)
    c.setLineWidth(0.7)
    c.line(40, H - 32, W - 40, H - 32)
    c.setFont('Arial-Bold', 7.5)
    c.setFillColor(fg)
    c.drawString(40, H - 22, f'ВАВИЛОН  /  {section}')
    c.drawRightString(W - 40, H - 22, f'{page:02d}  /  12')


def framed_image(c, path, x, y, w, h, radius=3, bg=PAPER):
    c.setFillColor(bg)
    c.roundRect(x + 5, y - 5, w, h, radius, stroke=0, fill=1)
    draw_cover_image(c, path, x, y, w, h)


def phone(c, path, x, y, w, h, dark=False):
    c.setFillColor(HexColor('#0F0E0D') if dark else PAPER)
    c.roundRect(x - 7, y - 7, w + 14, h + 14, 20, stroke=0, fill=1)
    c.setStrokeColor(HexColor('#3D3936') if dark else TAUPE)
    c.setLineWidth(1)
    c.roundRect(x - 7, y - 7, w + 14, h + 14, 20, stroke=1, fill=0)
    draw_cover_image(c, path, x, y, w, h, anchor_x=0, anchor_y=1)


OUT.parent.mkdir(parents=True, exist_ok=True)
FINAL.parent.mkdir(parents=True, exist_ok=True)
c = canvas.Canvas(str(OUT), pagesize=(W, H), pageCompression=1)
c.setTitle('Вавилон. Концепция сайта-витрины')
c.setAuthor('Концепция для согласования')
c.setSubject('Презентация сайта салона мебели и светотехники')

# 01. Cover
draw_cover_image(c, SCREENS / '01-hero.png', 0, 0, W, H, anchor_x=0.52)
c.setFillColor(HexColor('#211A17'))
c.setFillAlpha(0.30)
c.rect(0, 0, W, H, stroke=0, fill=1)
c.setFillAlpha(1)
c.setFillColor(PAPER)
c.setFont('Arial-Bold', 8)
c.drawString(50, H - 44, 'КОНЦЕПЦИЯ ЦИФРОВОГО ШОУРУМА  /  2026')
c.drawImage(str(LOGO), 50, H - 132, width=128, height=76, mask='auto', preserveAspectRatio=True, anchor='c')
c.setFillColor(INK)
c.setFillAlpha(0.92)
c.rect(0, 0, W, 72, stroke=0, fill=1)
c.setFillAlpha(1)
c.setFont('Georgia', 20)
c.setFillColor(PAPER)
c.drawString(50, 37, 'Сайт-витрина салона «Вавилон»')
c.setFont('Arial', 9)
c.setFillColor(HexColor('#CFC4BA'))
c.drawRightString(W - 50, 37, 'ПРЕЗЕНТАЦИЯ КОНЦЕПЦИИ  /  МАХАЧКАЛА')
c.showPage()

# 02. Direction
c.setFillColor(IVORY); c.rect(0, 0, W, H, stroke=0, fill=1)
page_chrome(c, 2, section='ВИЗУАЛЬНОЕ НАПРАВЛЕНИЕ')
label(c, 'Креативная идея', 50, 450, WALNUT)
title(c, 'Тихий свет шоурума', 50, 414, 470, size=42)
draw_text(c, 'Сайт ощущается как неспешный маршрут по салону: тёплый камень, тёмное дерево, мягкий свет и крупные интерьерные кадры.', 50, 312, 400, size=13, leading=19, color=MUTED)
draw_text(c, 'Впечатление строится на фотографиях и пространстве, а не на громких обещаниях или декоративном псевдолюксе.', 50, 230, 400, size=13, leading=19, color=MUTED)
colors = [
    (INK, 'ТЁМНЫЙ ОРЕХ', '#211A17'),
    (WALNUT, 'ОРЕХ', '#4A3025'),
    (BRONZE, 'БРОНЗА', '#A77B4B'),
    (TAUPE, 'КАМЕНЬ', '#D8CEC2'),
    (PAPER, 'СЛОНОВАЯ КОСТЬ', '#FBF8F2'),
]
sx = 525
for i, (color, name, code) in enumerate(colors):
    yy = 425 - i * 76
    c.setFillColor(color); c.rect(sx, yy, 74, 52, stroke=0, fill=1)
    c.setFillColor(INK); c.setFont('Arial-Bold', 8); c.drawString(sx + 92, yy + 29, name)
    c.setFont('Arial', 8); c.setFillColor(MUTED); c.drawString(sx + 92, yy + 14, code)
c.setFillColor(WALNUT); c.roundRect(50, 74, 400, 66, 7, stroke=0, fill=1)
c.setFillColor(PAPER); c.setFont('Arial-Bold', 10); c.drawString(70, 111, 'ПРИНЦИП')
c.setFont('Georgia', 16); c.drawString(70, 87, 'Показывать, а не убеждать')
c.showPage()

# 03. Hero
c.setFillColor(PAPER); c.rect(0, 0, W, H, stroke=0, fill=1)
page_chrome(c, 3, section='ГЛАВНАЯ СТРАНИЦА')
label(c, 'Первый экран', 44, 468, WALNUT)
title(c, 'Сильное первое впечатление', 44, 438, 510, size=31)
draw_text(c, 'Один выразительный интерьерный кадр, короткое позиционирование и два понятных действия.', 590, 434, 310, size=11, leading=16, color=MUTED)
framed_image(c, SCREENS / '01-hero.png', 44, 44, 872, 342)
c.showPage()

# 04. Categories
c.setFillColor(IVORY); c.rect(0, 0, W, H, stroke=0, fill=1)
page_chrome(c, 4, section='КАТЕГОРИИ')
draw_cover_image(c, SCREENS / '02-categories.png', 34, 48, 640, 432, anchor_x=0.45)
label(c, 'Навигация по ассортименту', 716, 420, WALNUT)
title(c, 'Категории как интерьерная галерея', 716, 386, 200, size=27)
draw_text(c, 'Асимметричная сетка создаёт ритм и не превращает главную страницу в маркетплейс.', 716, 250, 195, size=11, leading=16, color=MUTED)
draw_text(c, '6 стартовых разделов', 716, 165, 195, font='Arial-Bold', size=12, color=INK)
draw_text(c, 'Гостиные, диваны и кресла, столовые, спальни, хранение, свет и декор.', 716, 140, 195, size=10, leading=15, color=MUTED)
c.showPage()

# 05. Selected products
c.setFillColor(PAPER); c.rect(0, 0, W, H, stroke=0, fill=1)
page_chrome(c, 5, section='ВЫБОР САЛОНА')
label(c, 'Избранные предметы', 44, 468, WALNUT)
title(c, 'Спокойная подача товара', 44, 438, 470, size=31)
draw_text(c, 'Фото, название, статус и цена по запросу. Только информация, которая помогает сделать следующий шаг.', 550, 438, 360, size=11, leading=16, color=MUTED)
framed_image(c, SCREENS / '03-featured.png', 44, 48, 872, 338)
c.showPage()

# 06. Catalog
c.setFillColor(IVORY); c.rect(0, 0, W, H, stroke=0, fill=1)
page_chrome(c, 6, section='КАТАЛОГ')
draw_contain_image(c, SCREENS / '05-catalog-top.png', 0, 0, 610, H, bg=IVORY)
c.setFillColor(PAPER); c.rect(610, 0, 350, H, stroke=0, fill=1)
label(c, 'Функциональная часть', 655, 430, WALNUT)
title(c, 'Найти нужное без лишнего шума', 655, 394, 250, size=30)
items = [
    ('01', 'Поиск по названию и артикулу'),
    ('02', 'Фильтры по категории и статусу'),
    ('03', 'Состояние пустой выдачи и сброс'),
]
yy = 254
for num, text_value in items:
    c.setFillColor(BRONZE); c.circle(670, yy + 3, 14, stroke=0, fill=1)
    c.setFillColor(PAPER); c.setFont('Arial-Bold', 7); c.drawCentredString(670, yy, num)
    draw_text(c, text_value, 698, yy + 7, 205, size=10.5, leading=14, color=INK)
    yy -= 61
c.showPage()

# 07. Product
c.setFillColor(PAPER); c.rect(0, 0, W, H, stroke=0, fill=1)
page_chrome(c, 7, section='КАРТОЧКА ТОВАРА')
draw_cover_image(c, SCREENS / '07-product.png', 32, 42, 680, 440, anchor_x=0.42, anchor_y=0.55)
label(c, 'Главная конверсия', 752, 420, WALNUT)
title(c, 'От интереса к разговору', 752, 386, 170, size=26)
draw_text(c, 'Карточка не перегружена. Все ключевые сведения ведут к одному действию: обсудить конкретную модель с менеджером.', 752, 258, 165, size=10.5, leading=15, color=MUTED)
c.setFillColor(WALNUT); c.roundRect(752, 130, 165, 48, 6, stroke=0, fill=1)
c.setFillColor(PAPER); c.setFont('Arial-Bold', 9); c.drawCentredString(834.5, 150, 'УЗНАТЬ ЦЕНУ')
draw_text(c, 'Название, артикул и ссылка автоматически подставляются в WhatsApp.', 752, 101, 165, size=9, leading=13, color=MUTED)
c.showPage()

# 08. Mobile overview
c.setFillColor(INK); c.rect(0, 0, W, H, stroke=0, fill=1)
page_chrome(c, 8, dark=True, section='МОБИЛЬНАЯ ВЕРСИЯ')
label(c, 'Адаптивность', 50, 468, BRONZE)
title(c, 'Сайт сохраняет характер на телефоне', 50, 435, 420, size=31, color=PAPER)
draw_text(c, 'Крупная типографика, понятное меню и две карточки в ряд без ощущения тесного маркетплейса.', 50, 347, 320, size=11, leading=16, color=HexColor('#CFC4BA'))
phone(c, SCREENS / '09-mobile-home.png', 502, 62, 138, 354, dark=True)
phone(c, SCREENS / '10-mobile-catalog.png', 688, 62, 138, 354, dark=True)
c.setFillColor(BRONZE); c.rect(50, 92, 312, 2, stroke=0, fill=1)
c.setFont('Georgia', 17); c.setFillColor(PAPER); c.drawString(50, 62, 'Один визуальный язык на всех экранах')
c.showPage()

# 09. Mobile product flow
c.setFillColor(IVORY); c.rect(0, 0, W, H, stroke=0, fill=1)
page_chrome(c, 9, section='МОБИЛЬНЫЙ СЦЕНАРИЙ')
phone(c, SCREENS / '11-mobile-product.png', 48, 54, 160, 410)
phone(c, SCREENS / '12-mobile-product-info.png', 252, 54, 160, 410)
label(c, 'Карточка товара', 490, 420, WALNUT)
title(c, 'Цена всегда на расстоянии одного касания', 490, 386, 400, size=32)
notes = [
    'Галерея работает пальцем и клавиатурой.',
    'Статус и цена читаются без прокрутки по горизонтали.',
    'Нижняя кнопка остаётся доступной в нужный момент.',
]
yy = 245
for idx, note in enumerate(notes, 1):
    c.setFillColor(BRONZE); c.setFont('Georgia', 15); c.drawString(490, yy, f'0{idx}')
    draw_text(c, note, 530, yy + 2, 350, size=10.5, leading=15, color=MUTED)
    yy -= 58
c.showPage()

# 10. Showroom and contacts
c.setFillColor(PAPER); c.rect(0, 0, W, H, stroke=0, fill=1)
page_chrome(c, 10, section='ДОВЕРИЕ И КОНТАКТЫ')
draw_cover_image(c, CONTACT_PHOTO, 0, 0, 660, H, anchor_x=0.5)
c.setFillColor(INK); c.rect(660, 0, 300, H, stroke=0, fill=1)
label(c, 'Локальная близость', 705, 425, BRONZE)
title(c, 'Из каталога в шоурум', 705, 387, 210, size=30, color=PAPER)
draw_text(c, 'Адрес, маршрут, телефон и мессенджеры собраны в одном месте. Посетителю не нужно искать контакты в социальных сетях.', 705, 276, 205, size=10.5, leading=16, color=HexColor('#CFC4BA'))
c.setStrokeColor(HexColor('#6E625B')); c.line(705, 177, 910, 177)
c.setFont('Arial-Bold', 9); c.setFillColor(PAPER); c.drawString(705, 150, 'МАХАЧКАЛА')
draw_text(c, 'Проспект Амет-Хана Султана, 5а/1', 705, 127, 205, size=10, leading=14, color=HexColor('#CFC4BA'))
c.showPage()

# 11. Conversion flow
c.setFillColor(IVORY); c.rect(0, 0, W, H, stroke=0, fill=1)
page_chrome(c, 11, section='ПОЛЬЗОВАТЕЛЬСКИЙ СЦЕНАРИЙ')
label(c, 'Как сайт работает для бизнеса', 48, 454, WALNUT)
title(c, 'Один путь, понятный контекст обращения', 48, 420, 760, size=35)
steps = [
    ('01', 'Категория', 'Посетитель выбирает комнату или тип мебели.'),
    ('02', 'Модель', 'Сопоставляет фотографии, статус и описание.'),
    ('03', 'Карточка', 'Открывает конкретный предмет и артикул.'),
    ('04', 'Консультация', 'WhatsApp получает товар и ссылку автоматически.'),
]
xs = [48, 278, 508, 738]
for i, (num, heading, body) in enumerate(steps):
    x = xs[i]
    c.setFillColor(WALNUT if i == 3 else PAPER)
    c.roundRect(x, 154, 174, 166, 7, stroke=0, fill=1)
    c.setStrokeColor(TAUPE); c.roundRect(x, 154, 174, 166, 7, stroke=1, fill=0)
    c.setFillColor(BRONZE if i < 3 else HexColor('#D6B386'))
    c.setFont('Arial-Bold', 8); c.drawString(x + 18, 290, num)
    c.setFillColor(PAPER if i == 3 else INK)
    c.setFont('Georgia', 17); c.drawString(x + 18, 250, heading)
    draw_text(c, body, x + 18, 215, 138, size=9.3, leading=13, color=HexColor('#D8CEC2') if i == 3 else MUTED)
    if i < 3:
        c.setStrokeColor(BRONZE); c.line(x + 183, 235, x + 220, 235)
        c.line(x + 215, 239, x + 220, 235); c.line(x + 215, 231, x + 220, 235)
c.setFont('Arial', 10); c.setFillColor(MUTED)
c.drawString(48, 102, 'Дополнительные действия: звонок  /  Telegram  /  маршрут в 2ГИС')
c.showPage()

# 12. Next steps
c.setFillColor(INK); c.rect(0, 0, W, H, stroke=0, fill=1)
page_chrome(c, 12, dark=True, section='СЛЕДУЮЩИЙ ЭТАП')
c.drawImage(str(LOGO), 54, H - 160, width=180, height=108, mask='auto', preserveAspectRatio=True, anchor='c')
label(c, 'После согласования концепции', 54, 326, BRONZE)
title(c, 'Наполнить сайт реальным ассортиментом', 54, 288, 510, size=38, color=PAPER)
left = [
    'Подтвердить категории и названия',
    'Передать 12-18 стартовых товаров',
    'Заменить временные фотографии',
]
right = [
    'Уточнить график и условия доставки',
    'Добавить юридические реквизиты',
    'Подключить домен после проверки',
]
for col, values in enumerate((left, right)):
    x = 54 + col * 410
    yy = 155
    for value in values:
        c.setFillColor(BRONZE); c.circle(x + 4, yy + 3, 3, stroke=0, fill=1)
        draw_text(c, value, x + 18, yy + 7, 350, size=10.5, color=HexColor('#D6CCC3'))
        yy -= 42
c.setStrokeColor(HexColor('#62564E')); c.line(54, 52, W - 54, 52)
c.setFont('Arial', 8); c.setFillColor(HexColor('#A99D93'))
c.drawString(54, 32, 'Демонстрационная концепция. Категории, товары и фотографии подлежат замене перед публикацией.')
c.showPage()

c.save()

reader = PdfReader(str(OUT))
if len(reader.pages) != 12:
    raise RuntimeError(f'Expected 12 pages, got {len(reader.pages)}')
FINAL.write_bytes(OUT.read_bytes())
print(f'Created {OUT} ({len(reader.pages)} pages)')
print(f'Copied to {FINAL}')
