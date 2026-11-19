const body = document.body;
const themeColor = document.querySelector('meta[name="theme-color"]');
const themeToggles = [...document.querySelectorAll(".theme-toggle")];
const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
const modelSection = document.querySelector("#model-selection");
const variantGrid = document.querySelector("#variant-grid");
const cartPanel = document.querySelector("#bag");
const bagToggle = document.querySelector(".bag-link");
const currency = new Intl.NumberFormat("en-US");
const cart = [];
const languages = { en: "English", uz: "O‘zbekcha", ru: "Русский" };
const translations = {
  "Loading your iSpace experience…": ["iSpace sahifasi yuklanmoqda…", "Загружаем iSpace…"],
  "Discover Apple products, services and expert support": ["Apple mahsulotlari, xizmatlari va mutaxassislar yordamidan foydalaning", "Откройте для себя продукты Apple, услуги и помощь экспертов"],
  "Explore the collection": ["To‘plamni ko‘rish", "Смотреть коллекцию"],
  "Apple Premium Partner": ["Apple Premium hamkori", "Премиум-партнёр Apple"],
  "Search products": ["Mahsulotlarni qidirish", "Поиск товаров"],
  "Choose a store": ["Do‘konni tanlang", "Выберите магазин"],
  "Tashkent": ["Toshkent", "Ташкент"],
  "O‘zbekcha": ["O‘zbekcha", "Узбекский"],
  "Русский": ["Rus tili", "Русский"],
  "English": ["Ingliz tili", "Английский"],
  "Your bag": ["Savatchangiz", "Ваша корзина"],
  "Your bag is empty.": ["Savatchangiz bo‘sh.", "Ваша корзина пуста."],
  "Subtotal": ["Jami", "Итого"],
  "Continue to checkout": ["Rasmiylashtirishga o‘tish", "Перейти к оформлению"],
  "Checkout details can be confirmed with your selected store.": ["Buyurtma tafsilotlarini tanlangan do‘kon bilan aniqlashtirishingiz mumkin.", "Детали заказа можно уточнить в выбранном магазине."],
  "Meet the latest iPhone": ["Yangi iPhone bilan tanishing", "Знакомьтесь: новый iPhone"],
  "A fresh perspective": ["Yangi nigoh", "Новый взгляд"],
  "on iPhone.": ["iPhone’da.", "на iPhone."],
  "Language": ["Til", "Язык"],
  "Explore the latest technology, designed to fit the way you live.": ["Hayot tarzingizga mos yaratilgan eng yangi texnologiyalarni kashf eting.", "Откройте для себя новейшие технологии, созданные для вашего образа жизни."],
  "Explore iPhone": ["iPhone’ni ko‘rish", "Смотреть iPhone"],
  "Explore AirPods": ["AirPods’ni ko‘rish", "Смотреть AirPods"],
  "Trade in your device": ["Qurilmangizni almashtiring", "Обменяйте устройство"],
  "Make room": ["Yangi g‘oyalar uchun joy", "Место для больших"],
  "for big ideas.": ["yarating.", "идей."],
  "Meet Mac": ["Mac bilan tanishing", "Знакомьтесь: Mac"],
  "Powerful performance and beautiful design, wherever you work.": ["Qayerda ishlashingizdan qat’i nazar, kuchli unumdorlik va nafis dizayn.", "Высокая производительность и красивый дизайн — где бы вы ни работали."],
  "Sound that moves": ["Harakatga hamohang", "Звук, который"],
  "with you.": ["ovoz.", "всегда с вами."],
  "Meet AirPods": ["AirPods bilan tanishing", "Знакомьтесь: AirPods"],
  "Find your focus and bring your favorite sounds along.": ["Diqqatingizni jamlang va sevimli musiqangizni o‘zingiz bilan olib yuring.", "Сосредоточьтесь и возьмите любимую музыку с собой."],
  "Find your next device": ["Keyingi qurilmangizni toping", "Найдите своё следующее устройство"],
  "Explore all Apple devices": ["Barcha Apple qurilmalarini ko‘ring", "Все устройства Apple"],
  "View new arrivals": ["Yangi mahsulotlarni ko‘rish", "Новинки"],
  "Select a model": ["Modelni tanlang", "Выберите модель"],
  "Available models": ["Mavjud modellar", "Доступные модели"],
  "Close": ["Yopish", "Закрыть"],
  "Choose a configuration to see its details and add it to your bag.": ["Tafsilotlarni ko‘rish va savatchaga qo‘shish uchun konfiguratsiyani tanlang.", "Выберите конфигурацию, чтобы узнать подробности и добавить её в корзину."],
  "Just landed": ["Yangi kelganlar", "Новинки"],
  "New arrivals": ["Yangi mahsulotlar", "Новые поступления"],
  "Browse all devices": ["Barcha qurilmalarni ko‘rish", "Все устройства"],
  "Flexible payments": ["Qulay to‘lovlar", "Гибкая оплата"],
  "Make it yours, your way.": ["O‘zingizga mosini tanlang.", "Выбирайте на своих условиях."],
  "Find a payment option that works for you.": ["O‘zingizga mos to‘lov usulini tanlang.", "Выберите удобный способ оплаты."],
  "Learn more": ["Batafsil", "Подробнее"],
  "iSpace rewards": ["iSpace bonuslari", "Бонусы iSpace"],
  "More perks with every purchase.": ["Har bir xariddan ko‘proq manfaat.", "Больше преимуществ с каждой покупкой."],
  "Enjoy benefits when you shop with us.": ["Biz bilan xarid qiling va imtiyozlarga ega bo‘ling.", "Получайте преимущества за покупки у нас."],
  "Discover benefits": ["Imtiyozlarni ko‘rish", "Узнать о преимуществах"],
  "The latest stories": ["So‘nggi yangiliklar", "Последние истории"],
  "Ideas, guides and inspiration.": ["G‘oyalar, qo‘llanmalar va ilhom.", "Идеи, инструкции и вдохновение."],
  "Get more from the technology you love.": ["Sevimli texnologiyangizdan yanada ko‘proq foydalaning.", "Получайте больше от любимых технологий."],
  "Explore the journal": ["Maqolalarni o‘qish", "Читать статьи"],
  "The iSpace experience": ["iSpace tajribasi", "Опыт iSpace"],
  "More than a place to shop": ["Xariddan ham ko‘prog‘i", "Больше, чем просто магазин"],
  "Explore our services": ["Xizmatlarimizni ko‘rish", "Наши услуги"],
  "Expert advice": ["Mutaxassis maslahati", "Совет эксперта"],
  "Our specialists can help you choose the right device and get started.": ["Mutaxassislarimiz to‘g‘ri qurilmani tanlash va undan foydalanishni boshlashga yordam beradi.", "Наши специалисты помогут выбрать подходящее устройство и начать им пользоваться."],
  "Talk to a specialist": ["Mutaxassis bilan bog‘lanish", "Связаться со специалистом"],
  "Trade-in": ["Trade-in", "Трейд-ин"],
  "Bring in an eligible device and explore available upgrade options.": ["Mos qurilmangizni olib keling va yangilash imkoniyatlarini ko‘ring.", "Принесите подходящее устройство и узнайте варианты обмена."],
  "Discover trade-in": ["Trade-in haqida", "Подробнее о трейд-ин"],
  "Choose from convenient payment options at checkout.": ["Buyurtma berishda qulay to‘lov usulini tanlang.", "Выберите удобный способ оплаты при оформлении заказа."],
  "See payment options": ["To‘lov usullarini ko‘rish", "Способы оплаты"],
  "Delivery and pickup": ["Yetkazib berish va olib ketish", "Доставка и самовывоз"],
  "Choose delivery or collect your order from a nearby store.": ["Buyurtmangizni yetkazib berishni yoki yaqin do‘kondan olib ketishni tanlang.", "Выберите доставку или заберите заказ в ближайшем магазине."],
  "Find a store": ["Do‘konni topish", "Найти магазин"],
  "Made for everyday": ["Har kun uchun yaratilgan", "Создано для каждого дня"],
  "Discover something special": ["O‘zgacha imkoniyatlarni kashf eting", "Откройте для себя особенное"],
  "Powerful by design.": ["Dizaynida ham qudrat.", "Мощь в каждой детали."],
  "Go further with Mac.": ["Mac bilan yanada olg‘a.", "Достигайте большего с Mac."],
  "Sound that moves with you.": ["Sizga hamohang ovoz.", "Звук, который всегда с вами."],
  "Limited-time highlights": ["Cheklangan muddatli takliflar", "Предложения ограниченного срока"],
  "Best offers": ["Eng yaxshi takliflar", "Лучшие предложения"],
  "Shop all products": ["Barcha mahsulotlarni ko‘rish", "Все товары"],
  "A smarter upgrade": ["Qulayroq yangilanish", "Умное обновление"],
  "Ready for something new?": ["Yangilikka tayyormisiz?", "Готовы к чему-то новому?"],
  "Trade in an eligible device and see what upgrade options are available.": ["Mos qurilmangizni topshiring va yangilash imkoniyatlarini bilib oling.", "Сдайте подходящее устройство и узнайте доступные варианты обмена."],
  "Explore trade-in": ["Trade-in imkoniyatlarini ko‘rish", "Узнать о трейд-ин"],
  "Imagination, meet iPad.": ["Tasavvur va iPad uchrashuvi.", "Встречайте iPad и воображение."],
  "Incredible versatility for work, play and everything between.": ["Ish, hordiq va boshqa barcha ishlar uchun ajoyib imkoniyatlar.", "Универсальность для работы, отдыха и всего остального."],
  "Explore iPad": ["iPad’ni ko‘rish", "Смотреть iPad"],
  "The finishing touches": ["Yakuniy jihatlar", "Завершающие штрихи"],
  "Accessories for every day": ["Har kun uchun aksessuarlar", "Аксессуары на каждый день"],
  "Explore accessories": ["Aksessuarlarni ko‘rish", "Смотреть аксессуары"],
  "Need a hand?": ["Yordam kerakmi?", "Нужна помощь?"],
  "Find the right device for you.": ["O‘zingizga mos qurilmani toping.", "Найдите подходящее устройство."],
  "Browse by category, compare configurations and choose your favorite.": ["Toifalarni ko‘ring, konfiguratsiyalarni solishtiring va yoqqanini tanlang.", "Просматривайте категории, сравнивайте конфигурации и выбирайте подходящее."],
  "Start exploring": ["Ko‘rishni boshlash", "Начать просмотр"],
  "Why shop with iSpace": ["Nega iSpace’dan xarid qilishadi", "Почему выбирают iSpace"],
  "A little more peace of mind": ["Xotirjamlik uchun ko‘proq sabab", "Больше уверенности в покупке"],
  "Apple products": ["Apple mahsulotlari", "Продукты Apple"],
  "Explore a curated range of Apple devices and accessories.": ["Tanlangan Apple qurilmalari va aksessuarlarini ko‘ring.", "Ознакомьтесь с подборкой устройств и аксессуаров Apple."],
  "Helpful specialists": ["Yordam beruvchi mutaxassislar", "Опытные специалисты"],
  "Get personal guidance before and after your purchase.": ["Xariddan oldin va keyin shaxsiy maslahat oling.", "Получите персональную консультацию до и после покупки."],
  "Convenient shopping": ["Qulay xarid", "Удобные покупки"],
  "Shop online or visit a store to experience products in person.": ["Onlayn xarid qiling yoki mahsulotlarni do‘konda ko‘ring.", "Покупайте онлайн или приходите в магазин, чтобы увидеть товары."],
  "Support when you need it": ["Kerak paytda yordam", "Поддержка, когда она нужна"],
  "Find answers, service information and practical advice.": ["Javoblar, xizmatlar haqida ma’lumot va foydali maslahatlarni toping.", "Найдите ответы, информацию об услугах и полезные советы."],
  "A device for every moment": ["Har bir lahza uchun qurilma", "Устройство для каждого момента"],
  "Explore the Apple lineup": ["Apple qurilmalari bilan tanishing", "Линейка устройств Apple"],
  "Powerful computers for work and creativity.": ["Ish va ijod uchun kuchli kompyuterlar.", "Мощные компьютеры для работы и творчества."],
  "Remarkable cameras, performance and connection.": ["Ajoyib kameralar, unumdorlik va aloqa.", "Превосходные камеры, производительность и связь."],
  "Versatile touch-screen experiences for every day.": ["Har kun uchun qulay sensorli qurilmalar.", "Универсальные сенсорные устройства на каждый день."],
  "Useful features to keep you moving and connected.": ["Faol va aloqada bo‘lishga yordam beruvchi imkoniyatlar.", "Полезные функции для активности и связи."],
  "Immersive sound, wherever the day takes you.": ["Kuningiz qayerda o‘tmasin, ajoyib ovoz.", "Насыщенный звук, где бы вы ни были."],
  "Explore Mac": ["Mac’ni ko‘rish", "Смотреть Mac"],
  "Explore Watch": ["Watch’ni ko‘rish", "Смотреть Watch"],
  "Simple from start to finish": ["Boshidan oxirigacha sodda", "Просто от начала до конца"],
  "How to order": ["Qanday buyurtma berish", "Как оформить заказ"],
  "Choose your product, select a configuration and place your order online or with help from our team.": ["Mahsulotni va konfiguratsiyani tanlang, buyurtmani onlayn yoki jamoamiz yordamida rasmiylashtiring.", "Выберите товар и конфигурацию, оформите заказ онлайн или с помощью нашей команды."],
  "Need help? Contact us": ["Yordam kerakmi? Bog‘laning", "Нужна помощь? Свяжитесь с нами"],
  "Choose a product": ["Mahsulotni tanlang", "Выберите товар"],
  "Browse categories and select the model you want.": ["Toifalarni ko‘rib, kerakli modelni tanlang.", "Просмотрите категории и выберите нужную модель."],
  "Pick your configuration": ["Konfiguratsiyani tanlang", "Выберите конфигурацию"],
  "Compare available options and add your choice to the bag.": ["Mavjud variantlarni solishtirib, tanlovingizni savatchaga qo‘shing.", "Сравните доступные варианты и добавьте выбранный в корзину."],
  "Choose how to receive it": ["Qabul qilish usulini tanlang", "Выберите способ получения"],
  "Select delivery or pickup when completing your order.": ["Buyurtmani rasmiylashtirishda yetkazib berish yoki olib ketishni tanlang.", "При оформлении заказа выберите доставку или самовывоз."],
  "Here to help": ["Yordam berishga tayyormiz", "Мы готовы помочь"],
  "Frequently asked questions": ["Ko‘p so‘raladigan savollar", "Часто задаваемые вопросы"],
  "Are the products sold by iSpace genuine Apple products?": ["iSpace mahsulotlari haqiqiy Apple mahsulotlarimi?", "iSpace продаёт оригинальную продукцию Apple?"],
  "iSpace offers Apple products and accessories. For details about a specific item, contact the store team before ordering.": ["iSpace Apple mahsulotlari va aksessuarlarini taklif qiladi. Muayyan mahsulot haqida bilish uchun buyurtmadan oldin do‘kon bilan bog‘laning.", "iSpace предлагает продукцию и аксессуары Apple. Уточните подробности о товаре в магазине перед заказом."],
  "Can I trade in my current device?": ["Joriy qurilmamni almashtira olamanmi?", "Можно обменять своё устройство?"],
  "Trade-in availability and value depend on the device and its condition. Visit a store or contact our specialists to learn about current options.": ["Almashtirish imkoniyati va qiymati qurilma holatiga bog‘liq. Mavjud takliflarni do‘kon yoki mutaxassislarimizdan bilib oling.", "Возможность и стоимость обмена зависят от устройства и его состояния. Узнайте о предложениях в магазине или у специалистов."],
  "Can I choose delivery or store pickup?": ["Yetkazib berish yoki do‘kondan olib ketishni tanlay olamanmi?", "Можно выбрать доставку или самовывоз?"],
  "Available delivery and pickup options are shown during checkout and may vary by location and product.": ["Yetkazib berish va olib ketish variantlari buyurtma berishda ko‘rsatiladi va hudud hamda mahsulotga qarab farq qilishi mumkin.", "Доступные варианты доставки и самовывоза показываются при оформлении и зависят от региона и товара."],
  "How can I get help choosing a product?": ["Mahsulot tanlashda qanday yordam olsam bo‘ladi?", "Как получить помощь с выбором товара?"],
  "Our specialists can help you compare devices and configurations. Use the store information below to find a convenient location.": ["Mutaxassislarimiz qurilmalar va konfiguratsiyalarni solishtirishga yordam beradi. Yaqin do‘konni quyidagi ma’lumotlardan toping.", "Наши специалисты помогут сравнить устройства и конфигурации. Найдите удобный магазин по информации ниже."],
  "Explore Apple products, accessories and support at iSpace.": ["iSpace’da Apple mahsulotlari, aksessuarlari va yordamini ko‘ring.", "Продукты Apple, аксессуары и поддержка в iSpace."],
  "Products": ["Mahsulotlar", "Товары"],
  "Help and services": ["Yordam va xizmatlar", "Помощь и услуги"],
  "Our services": ["Xizmatlarimiz", "Наши услуги"],
  "Get in touch": ["Biz bilan bog‘laning", "Свяжитесь с нами"],
  "Contact support": ["Yordam xizmatiga murojaat", "Связаться с поддержкой"],
  "For business": ["Biznes uchun", "Для бизнеса"],
  "Tashkent, Uzbekistan": ["Toshkent, O‘zbekiston", "Ташкент, Узбекистан"],
  "Stay in the know": ["Yangiliklardan xabardor bo‘ling", "Будьте в курсе"],
  "Sign up for product news and updates.": ["Mahsulot yangiliklari va xabarlari uchun obuna bo‘ling.", "Подпишитесь на новости и обновления продуктов."],
  "Email address": ["Elektron pochta manzili", "Электронная почта"],
  "© 2026 iSpace. All rights reserved.": ["© 2026 iSpace. Barcha huquqlar himoyalangan.", "© 2026 iSpace. Все права защищены."],
  "Privacy": ["Maxfiylik", "Конфиденциальность"],
  "Terms": ["Shartlar", "Условия"],
  "Dark mode": ["Tungi rejim", "Тёмная тема"],
  "Light mode": ["Kunduzgi rejim", "Светлая тема"],
  "English · Uzbekistan": ["O‘zbekcha · O‘zbekiston", "Русский · Узбекистан"],
  "Qty": ["Soni", "Кол-во"],
  "Remove": ["Olib tashlash", "Удалить"],
  "Option 01": ["Variant 01", "Вариант 01"],
  "Option 02": ["Variant 02", "Вариант 02"],
  "Option 03": ["Variant 03", "Вариант 03"],
  "Option 04": ["Variant 04", "Вариант 04"],
  "Option 05": ["Variant 05", "Вариант 05"],
  "Mac · Select a configuration": ["Mac · Konfiguratsiyani tanlang", "Mac · Выберите конфигурацию"],
  "iPhone · Select a configuration": ["iPhone · Konfiguratsiyani tanlang", "iPhone · Выберите конфигурацию"],
  "iPad · Select a configuration": ["iPad · Konfiguratsiyani tanlang", "iPad · Выберите конфигурацию"],
  "Watch · Select a configuration": ["Watch · Konfiguratsiyani tanlang", "Watch · Выберите конфигурацию"],
  "AirPods · Select a configuration": ["AirPods · Konfiguratsiyani tanlang", "AirPods · Выберите конфигурацию"],
  "Laptops & desktops": ["Noutbuklar va kompyuterlar", "Ноутбуки и компьютеры"],
  "The latest iPhone": ["Eng yangi iPhone", "Новый iPhone"],
  "A world of possibilities": ["Cheksiz imkoniyatlar", "Мир возможностей"],
  "A healthier you": ["Sog‘lom hayot", "Здоровый образ жизни"],
  "Sound in every moment": ["Har lahzada ovoz", "Звук в каждом моменте"],
  "Entertainment at home": ["Uydagi ko‘ngilochar olam", "Развлечения дома"],
  "The perfect addition": ["Mukammal qo‘shimcha", "Идеальное дополнение"],
  "Keep track of it all": ["Muhim narsalarni kuzating", "Следите за важным"],
  "Light, fast and ready to go.": ["Yengil, tezkor va doim tayyor.", "Лёгкий, быстрый и всегда готов."],
  "Pro performance in every detail.": ["Har bir jihatida Pro unumdorligi.", "Профессиональная мощь в каждой детали."],
  "Powerful and wonderfully versatile.": ["Kuchli va juda qulay.", "Мощный и невероятно универсальный."],
  "A helpful companion for your day.": ["Kuningiz uchun foydali hamroh.", "Полезный спутник на каждый день."],
  "Immersive sound, wherever you go.": ["Qayerda bo‘lmang, maftunkor ovoz.", "Насыщенный звук, куда бы вы ни отправились."],
  "Choose your favorite finish.": ["O‘zingiz yoqtirgan rangni tanlang.", "Выберите любимый цвет."],
  "A powerful Mac for demanding work.": ["Murakkab vazifalar uchun kuchli Mac.", "Мощный Mac для сложных задач."],
  "Essential features for everyday.": ["Har kun uchun zarur imkoniyatlar.", "Всё необходимое на каждый день."],
  "Your everyday listening companion.": ["Har kunlik musiqa hamrohingiz.", "Ваш спутник для прослушивания каждый день."],
  "Wireless headphones": ["Simsiz quloqchinlar", "Беспроводные наушники"],
  "Find your perfect sound.": ["O‘zingizga mos ovozni toping.", "Найдите свой идеальный звук."],
  "Smart home": ["Aqlli uy", "Умный дом"],
  "A little more comfort at home.": ["Uyingizda yanada ko‘proq qulaylik.", "Больше комфорта дома."],
  "Everyday carry": ["Har kunlik aksessuarlar", "Аксессуары на каждый день"],
  "Useful additions for your devices.": ["Qurilmalaringiz uchun foydali qo‘shimchalar.", "Полезные дополнения для ваших устройств."],
  "Track your essentials": ["Muhim narsalaringizni kuzating", "Следите за своими вещами"],
  "Keep everyday items close.": ["Kundalik buyumlaringizni yo‘qotmang.", "Держите важные вещи рядом."],
  "Select a configuration": ["Konfiguratsiyani tanlang", "Выберите конфигурацию"],
  "Option": ["Variant", "Вариант"],
  "Add to bag": ["Savatchaga qo‘shish", "В корзину"],
  "Search products to see suggestions.": ["Mahsulot tavsiyalarini ko‘rish uchun qidiring.", "Начните поиск, чтобы увидеть товары."],
  "No matching products found.": ["Mos mahsulot topilmadi.", "Подходящие товары не найдены."],
  "Product": ["Mahsulot", "Товар"],
  "Model": ["Model", "Модель"],
  "Thanks for signing up.": ["Obuna bo‘lganingiz uchun rahmat.", "Спасибо за подписку."],
  "Your bag is ready. Contact your selected store to complete checkout.": ["Savatchangiz tayyor. Buyurtmani yakunlash uchun tanlangan do‘kon bilan bog‘laning.", "Корзина готова. Свяжитесь с выбранным магазином, чтобы завершить заказ."],
  "added to your bag": ["savatchaga qo‘shildi", "добавлен в корзину"],
  "Switch to light mode": ["Kunduzgi rejimga o‘tish", "Включить светлую тему"],
  "Switch to dark mode": ["Tungi rejimga o‘tish", "Включить тёмную тему"],
  "Open menu": ["Menyuni ochish", "Открыть меню"],
  "Close menu": ["Menyuni yopish", "Закрыть меню"],
  "Search": ["Qidirish", "Поиск"],
  "Shopping bag": ["Savatcha", "Корзина"],
  "Account": ["Hisob", "Аккаунт"],
  "Browse": ["Ko‘rish", "Смотреть"],
  "models": ["modellari", "модели"],
  "apple": ["apple", "apple"],
  "watch": ["soat", "часы"],
  "accessories": ["aksessuarlar", "аксессуары"],
  "Services": ["Xizmatlar", "Услуги"],
  "Deals": ["Takliflar", "Предложения"],
  "Stores": ["Do‘konlar", "Магазины"],
  "Contact": ["Aloqa", "Контакты"],
  "Support": ["Yordam", "Поддержка"],
  "Business": ["Biznes", "Бизнес"],
  "Brands": ["Brendlar", "Бренды"],
  "Mac": ["Mac", "Mac"],
  "iPhone": ["iPhone", "iPhone"],
  "iPad": ["iPad", "iPad"],
  "Watch": ["Soat", "Часы"],
  "AirPods": ["AirPods", "AirPods"],
  "TV & Home": ["TV va uy", "ТВ и дом"],
  "Accessories": ["Aksessuarlar", "Аксессуары"],
  "Apple Watch": ["Apple Watch", "Apple Watch"],
  "MacBook Air": ["MacBook Air", "MacBook Air"],
  "MacBook Pro": ["MacBook Pro", "MacBook Pro"],
  "AirPods Pro": ["AirPods Pro", "AirPods Pro"],
  "iPhone Pro": ["iPhone Pro", "iPhone Pro"],
  "iPad Air": ["iPad Air", "iPad Air"],
  "Apple Watch Series": ["Apple Watch Series", "Apple Watch Series"],
  "Apple Watch SE": ["Apple Watch SE", "Apple Watch SE"]
};
let currentLanguage = ["en", "uz", "ru"].includes(localStorage.getItem("ispace-language"))
  ? localStorage.getItem("ispace-language") : "uz";
const textSources = new WeakMap();
const attributeSources = new WeakMap();
const searchInput = document.querySelector("#site-search");
const searchSuggestions = document.querySelector("#search-suggestions");
const languageToggle = document.querySelector(".language-choice");
const languageMenu = document.querySelector(".language-menu");

function translate(value) {
  const pair = translations[value];
  if (!pair) return value;
  return currentLanguage === "uz" ? pair[0] : currentLanguage === "ru" ? pair[1] : value;
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage;
  document.title = currentLanguage === "en"
    ? "iSpace — Apple products and accessories"
    : currentLanguage === "uz" ? "iSpace — Apple mahsulotlari va aksessuarlari" : "iSpace — продукты и аксессуары Apple";
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node;
  while ((node = walker.nextNode())) {
    if (node.parentElement.closest(".language-menu") || node.parentElement.closest(".footer-theme")) continue;
    if (!textSources.has(node)) textSources.set(node, node.textContent);
    const source = textSources.get(node);
    const trimmed = source.trim();
    if (!trimmed) continue;
    const start = source.length - source.trimStart().length;
    const end = source.length - source.trimEnd().length;
    node.textContent = `${source.slice(0, start)}${translate(trimmed)}${end ? source.slice(-end) : ""}`;
  }
  document.querySelectorAll("[placeholder], [aria-label], [title]").forEach((element) => {
    const attributes = attributeSources.get(element) || {};
    ["placeholder", "aria-label", "title"].forEach((name) => {
      if (!element.hasAttribute(name)) return;
      if (!(name in attributes)) attributes[name] = element.getAttribute(name);
      element.setAttribute(name, translate(attributes[name]));
    });
    attributeSources.set(element, attributes);
  });
  document.querySelector(".language-current").textContent = currentLanguage.toUpperCase();
  languageToggle.setAttribute("aria-label", `${translate("Language")}: ${languages[currentLanguage]}`);
  document.querySelector(".footer-theme").textContent = translate(body.classList.contains("dark-mode") ? "Light mode" : "Dark mode");
  document.querySelectorAll(".language-menu [data-language]").forEach((button) => {
    button.setAttribute("aria-current", String(button.dataset.language === currentLanguage));
  });
  showSlide(activeSlide);
}

const categories = [
  {
    name: "Mac",
    subtitle: "Laptops & desktops",
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=500&q=75",
    models: [["MacBook Air", 15900000], ["MacBook Pro", 25900000], ["MacBook Neo", 10900000], ["iMac", 18900000], ["Mac mini", 9990000]]
  },
  {
    name: "iPhone",
    subtitle: "The latest iPhone",
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=500&q=75",
    models: [["iPhone Pro Max", 24900000], ["iPhone Pro", 21900000], ["iPhone", 15900000], ["iPhone Plus", 17900000], ["iPhone SE", 8990000]]
  },
  {
    name: "iPad",
    subtitle: "A world of possibilities",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=500&q=75",
    models: [["iPad Pro 13-inch", 20900000], ["iPad Pro 11-inch", 17900000], ["iPad Air", 10900000], ["iPad mini", 8990000], ["iPad", 6990000]]
  },
  {
    name: "Watch",
    subtitle: "A healthier you",
    image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=500&q=75",
    models: [["Apple Watch Ultra", 11900000], ["Apple Watch Series", 7990000], ["Apple Watch SE", 4990000], ["Apple Watch Nike", 8990000], ["Apple Watch Hermès", 18900000]]
  },
  {
    name: "AirPods",
    subtitle: "Sound in every moment",
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?auto=format&fit=crop&w=500&q=75",
    models: [["AirPods Pro", 3990000], ["AirPods Max", 8990000], ["AirPods", 2990000], ["AirPods with ANC", 3490000], ["AirPods (USB-C)", 2490000]]
  },
  { name: "TV & Home", subtitle: "Entertainment at home", image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=500&q=75", target: "#accessories" },
  { name: "Accessories", subtitle: "The perfect addition", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=500&q=75", target: "#accessories" },
  { name: "AirTag", subtitle: "Keep track of it all", image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=500&q=75", target: "#accessories" }
];

const variantDetails = {
  Mac: ["16GB · 256GB · Silver", "16GB · 512GB · Midnight", "24GB · 512GB · Starlight", "24GB · 1TB · Space Black", "32GB · 1TB · Silver"],
  iPhone: ["256GB · Black", "256GB · Silver", "512GB · Blue", "512GB · Black", "1TB · Silver"],
  iPad: ["128GB · Wi-Fi · Space Gray", "256GB · Wi-Fi · Silver", "256GB · Cellular · Blue", "512GB · Wi-Fi · Space Gray", "1TB · Cellular · Silver"],
  Watch: ["41mm · GPS · Midnight", "41mm · GPS · Starlight", "45mm · GPS · Midnight", "45mm · Cellular · Black", "49mm · Cellular · Natural"],
  AirPods: ["Standard charging case", "Wireless charging case", "USB-C charging case", "White · USB-C", "Midnight · USB-C"]
};

const arrivals = [
  { name: "MacBook Air", detail: "Light, fast and ready to go.", price: 15900000, category: "Mac", image: categories[0].image },
  { name: "iPhone Pro", detail: "Pro performance in every detail.", price: 21900000, category: "iPhone", image: categories[1].image },
  { name: "iPad Air", detail: "Powerful and wonderfully versatile.", price: 10900000, category: "iPad", image: categories[2].image },
  { name: "Apple Watch Series", detail: "A helpful companion for your day.", price: 7990000, category: "Watch", image: categories[3].image },
  { name: "AirPods Pro", detail: "Immersive sound, wherever you go.", price: 3990000, category: "AirPods", image: categories[4].image }
];

const deals = [
  { name: "iPhone", detail: "Choose your favorite finish.", price: 15900000, category: "iPhone", image: categories[1].image },
  { name: "MacBook Pro", detail: "A powerful Mac for demanding work.", price: 25900000, category: "Mac", image: categories[0].image },
  { name: "Apple Watch SE", detail: "Essential features for everyday.", price: 4990000, category: "Watch", image: categories[3].image },
  { name: "AirPods", detail: "Your everyday listening companion.", price: 2990000, category: "AirPods", image: categories[4].image }
];

const accessories = [
  { name: "Wireless headphones", model: "AirPods Pro", detail: "Find your perfect sound.", price: 3490000, category: "AirPods", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=75" },
  { name: "Smart home", detail: "A little more comfort at home.", price: 1290000, category: "TV & Home", image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=75" },
  { name: "Everyday carry", detail: "Useful additions for your devices.", price: 890000, category: "Accessories", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=600&q=75" },
  { name: "Track your essentials", detail: "Keep everyday items close.", price: 490000, category: "AirTag", image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=600&q=75" }
];

function formatPrice(value) {
  return `UZS ${currency.format(value)}`;
}

function renderCategories() {
  const grid = document.querySelector("#category-grid");
  grid.innerHTML = categories.map((category) => {
    const modelMenu = category.models
      ? `<div class="category-flyout" aria-label="${category.name} models">${category.models.map(([model]) => `<a href="#model-selection" data-category="${category.name}" data-model="${model}">${model}<span aria-hidden="true"> →</span></a>`).join("")}</div>`
      : "";
    return `<article class="category-item${category.models ? "" : " category-static"}">
      ${category.models
        ? `<button class="category-trigger" type="button" data-category-trigger="${category.name}" aria-label="Browse ${category.name} models" aria-expanded="false">`
        : `<a class="category-trigger" href="${category.target}">`}
        <span class="category-image"><img src="${category.image}" alt="" loading="lazy"></span>
        <span class="category-name">${category.name}</span><span class="category-sub">${category.subtitle}</span>
      ${category.models ? "</button>" : "</a>"}${modelMenu}
    </article>`;
  }).join("");
}

function productCard(product, index) {
  const catalogCategory = categories.find((category) => category.name === product.category && category.models);
  const target = catalogCategory ? "#model-selection" : "#accessories";
  const productModel = product.model || product.name;
  const modelAttributes = catalogCategory ? `data-category="${product.category}" data-model="${productModel}"` : "";
  return `<article class="product-card" data-product-name="${product.name}" data-product-category="${product.category}" data-search="${`${product.name} ${product.detail} ${product.category}`.toLowerCase()}">
    <a class="product-image" href="${target}" ${modelAttributes} aria-label="View ${product.name}">
      <img src="${product.image}" alt="" loading="lazy"><span class="product-index">0${index + 1}</span>
    </a>
    <div class="product-info"><p class="product-category">${product.category}</p><h3>${product.name}</h3><p class="product-detail">${product.detail}</p>
      <div class="product-bottom"><strong>${formatPrice(product.price)}</strong><button class="add-button" type="button" data-add-to-bag="${product.name}" data-price="${product.price}" aria-label="Add ${product.name} to bag">Add to bag <span aria-hidden="true">+</span></button></div>
    </div>
  </article>`;
}

function renderProductGrid(selector, products) {
  document.querySelector(selector).innerHTML = products.map(productCard).join("");
}

function selectModel(categoryName, modelName) {
  const category = categories.find((item) => item.name === categoryName);
  if (!category || !category.models) return;
  const model = category.models.find(([name]) => name === modelName) || category.models[0];
  const basePrice = model[1];
  document.querySelector("#selected-category-label").textContent = `${category.name} · Select a configuration`;
  document.querySelector("#selected-model-title").textContent = model[0];
  variantGrid.innerHTML = variantDetails[category.name].map((detail, index) => {
    const price = basePrice + (index * (category.name === "AirPods" ? 150000 : 450000));
    return `<article class="variant-card" data-search="${`${model[0]} ${detail} ${category.name}`.toLowerCase()}">
      <div class="variant-image"><img src="${category.image}" alt="" loading="lazy"><span>Option 0${index + 1}</span></div>
      <div class="variant-copy"><p>${category.name}</p><h3>${model[0]}</h3><span class="variant-detail">${detail}</span>
        <div class="variant-bottom"><strong>${formatPrice(price)}</strong><button class="add-button" type="button" data-add-to-bag="${model[0]} — ${detail}" data-price="${price}">Add to bag <span aria-hidden="true">+</span></button></div>
      </div>
    </article>`;
  }).join("");
  applyLanguage();
  modelSection.hidden = false;
  modelSection.classList.remove("section-highlight");
  requestAnimationFrame(() => modelSection.classList.add("section-highlight"));
}

function setTheme(isDark) {
  body.classList.toggle("dark-mode", isDark);
  localStorage.setItem("ispace-theme", isDark ? "dark" : "light");
  themeColor.content = isDark ? "#111214" : "#ffffff";
  themeToggles.forEach((button) => {
    button.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
  });
  document.querySelector(".footer-theme").textContent = translate(isDark ? "Light mode" : "Dark mode");
}

function languageVariants(value) {
  const pair = translations[value];
  return pair ? [value, ...pair] : [value];
}

function getSearchEntries() {
  const entries = [];
  categories.forEach((category) => {
    (category.models || []).forEach(([model]) => {
      entries.push({ kind: "model", name: model, category: category.name });
    });
  });
  [...arrivals, ...deals, ...accessories].forEach((product) => {
    entries.push({ kind: "product", ...product });
  });
  return entries;
}

function searchValues(entry) {
  return [entry.name, entry.detail || "", entry.category || ""]
    .flatMap(languageVariants)
    .join(" ")
    .toLocaleLowerCase();
}

function closeSuggestions() {
  searchSuggestions.hidden = true;
  searchInput.setAttribute("aria-expanded", "false");
}

function renderSuggestions(term) {
  const normalizedTerm = term.trim().toLocaleLowerCase();
  if (!normalizedTerm) {
    closeSuggestions();
    return [];
  }
  const matches = getSearchEntries()
    .filter((entry) => searchValues(entry).includes(normalizedTerm))
    .slice(0, 7);
  searchSuggestions.replaceChildren();
  if (!matches.length) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "search-suggestion-empty";
    emptyMessage.textContent = translate("No matching products found.");
    searchSuggestions.append(emptyMessage);
  } else {
    matches.forEach((entry, index) => {
      const option = document.createElement("button");
      option.className = "search-suggestion";
      option.type = "button";
      option.role = "option";
      option.dataset.suggestionIndex = String(index);
      const title = document.createElement("strong");
      title.textContent = translate(entry.name);
      const subtitle = document.createElement("span");
      subtitle.textContent = entry.kind === "model"
        ? `${translate(entry.category)} · ${translate("Model")}`
        : `${translate(entry.category)} · ${translate("Product")}`;
      option.append(title, subtitle);
      searchSuggestions.append(option);
    });
  }
  searchSuggestions.hidden = false;
  searchInput.setAttribute("aria-expanded", "true");
  return matches;
}

function selectSearchResult(entry) {
  if (!entry) return;
  searchInput.value = entry.name;
  closeSuggestions();
  if (categories.some((category) => category.name === entry.category && category.models)) {
    const model = entry.kind === "model" ? entry.name : entry.model || entry.name;
    selectModel(entry.category, model);
    modelSection.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  const productCardElement = [...document.querySelectorAll(".product-card")].find((card) =>
    card.dataset.productName === entry.name && card.dataset.productCategory === entry.category
  );
  const target = productCardElement || document.querySelector("#accessories");
  target.scrollIntoView({ behavior: "smooth", block: "center" });
  if (productCardElement) {
    productCardElement.classList.remove("section-highlight");
    requestAnimationFrame(() => productCardElement.classList.add("section-highlight"));
  }
}

function renderCart() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  document.querySelector(".bag-count").textContent = String(count);
  document.querySelector(".cart-empty").hidden = cart.length > 0;
  document.querySelector(".cart-summary").hidden = cart.length === 0;
  const itemsContainer = document.querySelector(".cart-items");
  itemsContainer.replaceChildren();
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price * item.quantity;
    const row = document.createElement("div");
    row.className = "cart-item";
    const details = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = item.name;
    const quantity = document.createElement("span");
    quantity.textContent = `${translate("Qty")} ${item.quantity} · ${formatPrice(item.price)}`;
    details.append(title, quantity);
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "cart-remove";
    remove.dataset.cartRemove = String(index);
    remove.setAttribute("aria-label", `${translate("Remove")} ${item.name}`);
    remove.textContent = "×";
    row.append(details, remove);
    itemsContainer.append(row);
  });
  document.querySelector(".cart-total").textContent = formatPrice(total);
}

function closeCart() {
  cartPanel.hidden = true;
  bagToggle.setAttribute("aria-expanded", "false");
}

renderCategories();
renderProductGrid("#new-arrivals-grid", arrivals);
renderProductGrid("#deal-grid", deals);
renderProductGrid("#accessories-grid", accessories);

setTheme(localStorage.getItem("ispace-theme") === "dark");

themeToggles.forEach((button) => {
  button.addEventListener("click", () => setTheme(!body.classList.contains("dark-mode")));
});

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
});

mainNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header") && mainNav.classList.contains("is-open")) {
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
  }
  if (!event.target.closest(".category-item")) {
    document.querySelectorAll(".category-item.is-open").forEach((item) => {
      item.classList.remove("is-open");
      item.querySelector("[data-category-trigger]").setAttribute("aria-expanded", "false");
    });
  }
  const modelLink = event.target.closest("[data-model][data-category]");
  if (modelLink) {
    event.preventDefault();
    selectModel(modelLink.dataset.category, modelLink.dataset.model);
    modelLink.blur();
    document.querySelectorAll(".category-item.is-open").forEach((item) => {
      item.classList.remove("is-open");
      item.querySelector("[data-category-trigger]").setAttribute("aria-expanded", "false");
    });
    if (mainNav.classList.contains("is-open")) {
      mainNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
    modelSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  const categoryTrigger = event.target.closest("[data-category-trigger]");
  if (categoryTrigger) {
    const categoryItem = categoryTrigger.closest(".category-item");
    const shouldOpen = !categoryItem.classList.contains("is-open");
    document.querySelectorAll(".category-item.is-open").forEach((item) => {
      item.classList.remove("is-open");
      item.querySelector("[data-category-trigger]").setAttribute("aria-expanded", "false");
    });
    categoryItem.classList.toggle("is-open", shouldOpen);
    categoryTrigger.setAttribute("aria-expanded", String(shouldOpen));
  }
  const addButton = event.target.closest("[data-add-to-bag]");
  if (addButton) {
    const existing = cart.find((item) => item.name === addButton.dataset.addToBag);
    if (existing) existing.quantity += 1;
    else cart.push({ name: addButton.dataset.addToBag, price: Number(addButton.dataset.price), quantity: 1 });
    renderCart();
    const toast = document.querySelector(".toast");
    toast.textContent = `${addButton.dataset.addToBag} ${translate("added to your bag")}`;
    toast.classList.add("is-visible");
    window.clearTimeout(window.toastTimeout);
    window.toastTimeout = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
  }
  const removeButton = event.target.closest("[data-cart-remove]");
  if (removeButton) {
    cart.splice(Number(removeButton.dataset.cartRemove), 1);
    renderCart();
  }
});

document.querySelector(".close-models").addEventListener("click", () => {
  modelSection.hidden = true;
  document.querySelector("#categories").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector(".search-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const term = searchInput.value.trim().toLocaleLowerCase();
  const firstMatch = getSearchEntries().find((entry) => searchValues(entry).includes(term));
  if (term) selectSearchResult(firstMatch);
  else renderSuggestions("");
});

searchInput.addEventListener("input", () => renderSuggestions(searchInput.value));
searchInput.addEventListener("focus", () => {
  if (searchInput.value.trim()) renderSuggestions(searchInput.value);
});
searchSuggestions.addEventListener("click", (event) => {
  const option = event.target.closest("[data-suggestion-index]");
  if (!option) return;
  const term = searchInput.value.trim().toLocaleLowerCase();
  const matches = getSearchEntries().filter((entry) => searchValues(entry).includes(term)).slice(0, 7);
  selectSearchResult(matches[Number(option.dataset.suggestionIndex)]);
});
languageToggle.addEventListener("click", () => {
  const isOpening = languageMenu.hidden;
  languageMenu.hidden = !isOpening;
  languageToggle.setAttribute("aria-expanded", String(isOpening));
});
languageMenu.addEventListener("click", (event) => {
  const option = event.target.closest("[data-language]");
  if (!option || !languages[option.dataset.language]) return;
  currentLanguage = option.dataset.language;
  localStorage.setItem("ispace-language", currentLanguage);
  languageMenu.hidden = true;
  languageToggle.setAttribute("aria-expanded", "false");
  applyLanguage();
  if (searchInput.value.trim()) renderSuggestions(searchInput.value);
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".search-form")) closeSuggestions();
  if (!event.target.closest(".language-switcher")) {
    languageMenu.hidden = true;
    languageToggle.setAttribute("aria-expanded", "false");
  }
});

document.querySelector(".newsletter-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const toast = document.querySelector(".toast");
  toast.textContent = translate("Thanks for signing up.");
  toast.classList.add("is-visible");
  window.clearTimeout(window.toastTimeout);
  window.toastTimeout = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
  event.currentTarget.reset();
});

bagToggle.addEventListener("click", () => {
  const isOpening = cartPanel.hidden;
  cartPanel.hidden = !isOpening;
  bagToggle.setAttribute("aria-expanded", String(isOpening));
});
document.querySelector(".cart-close").addEventListener("click", closeCart);
document.querySelector(".checkout-button").addEventListener("click", () => {
  const toast = document.querySelector(".toast");
  toast.textContent = translate("Your bag is ready. Contact your selected store to complete checkout.");
  toast.classList.add("is-visible");
  window.clearTimeout(window.toastTimeout);
  window.toastTimeout = window.setTimeout(() => toast.classList.remove("is-visible"), 3200);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCart();
    document.querySelectorAll(".category-item.is-open").forEach((item) => {
      item.classList.remove("is-open");
      item.querySelector("[data-category-trigger]").setAttribute("aria-expanded", "false");
    });
    mainNav.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open menu");
  }
});

const heroSlides = [
  {
    image: "assets/macbook-pro-boost-clean.png",
    alt: "MacBook Pro 14-inch pre-order offer",
    artwork: true,
  },
  {
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1800&q=85",
    alt: "Featured iPhone",
    heading: { en: "A fresh perspective<br>on iPhone.", uz: "Yangi nigoh<br>iPhone’da.", ru: "Новый взгляд<br>на iPhone." },
    eyebrow: "Meet the latest iPhone", copy: "Explore the latest technology, designed to fit the way you live.",
    cta: "Explore iPhone",
  },
  {
    image: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?auto=format&fit=crop&w=1800&q=85",
    alt: "Featured AirPods",
    heading: { en: "Sound that moves<br>with you.", uz: "Harakatga hamohang<br>ovoz.", ru: "Звук, который<br>всегда с вами." },
    eyebrow: "Meet AirPods", copy: "Find your focus and bring your favorite sounds along.",
    cta: "Explore AirPods",
  }
];
let activeSlide = 0;
const heroDots = [...document.querySelectorAll(".hero-dots button")];
function showSlide(index) {
  activeSlide = (index + heroSlides.length) % heroSlides.length;
  const slide = heroSlides[activeSlide];
  const hero = document.querySelector(".hero");
  const image = hero.querySelector(".hero-image");
  const copy = hero.querySelector(".hero-copy");
  image.src = slide.image;
  image.alt = slide.alt;
  hero.classList.toggle("has-artwork", Boolean(slide.artwork));
  copy.hidden = Boolean(slide.artwork);
  hero.querySelector(".hero-mobile-copy").hidden = !slide.artwork;
  if (!slide.artwork) {
    hero.querySelector(".eyebrow").textContent = translate(slide.eyebrow);
    hero.querySelector("h1").innerHTML = slide.heading[currentLanguage];
    hero.querySelector(".hero-copy > p:not(.eyebrow)").textContent = translate(slide.copy);
    hero.querySelector(".hero-actions .button").textContent = translate(slide.cta);
  }
  heroDots.forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === activeSlide);
    dot.setAttribute("aria-pressed", String(dotIndex === activeSlide));
  });
}
let heroRotation;
const hero = document.querySelector(".hero");
function startHeroRotation() {
  window.clearInterval(heroRotation);
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || document.hidden || hero.matches(":hover") || hero.contains(document.activeElement)) return;
  heroRotation = window.setInterval(() => showSlide(activeSlide + 1), 5500);
}
heroDots.forEach((dot, index) => dot.addEventListener("click", () => {
  showSlide(index);
  startHeroRotation();
}));
document.querySelector("[data-hero-prev]").addEventListener("click", () => {
  showSlide(activeSlide - 1);
  startHeroRotation();
});
document.querySelector("[data-hero-next]").addEventListener("click", () => {
  showSlide(activeSlide + 1);
  startHeroRotation();
});
hero.addEventListener("pointerenter", () => window.clearInterval(heroRotation));
hero.addEventListener("pointerleave", startHeroRotation);
hero.addEventListener("focusin", () => window.clearInterval(heroRotation));
hero.addEventListener("focusout", (event) => {
  if (!hero.contains(event.relatedTarget)) startHeroRotation();
});
document.addEventListener("visibilitychange", startHeroRotation);

applyLanguage();
showSlide(activeSlide);
startHeroRotation();
const pageLoader = document.querySelector(".page-loader");
const loaderStartedAt = Date.now();
function hidePageLoader() {
  const remainingTime = Math.max(0, 450 - (Date.now() - loaderStartedAt));
  window.setTimeout(() => {
    pageLoader.classList.add("is-hidden");
    pageLoader.setAttribute("aria-hidden", "true");
  }, remainingTime);
}
if (document.readyState === "complete") hidePageLoader();
else window.addEventListener("load", hidePageLoader, { once: true });

