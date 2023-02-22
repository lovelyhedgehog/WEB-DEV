export interface Product {
    id: number;
    name: string;
    rating: number;
    description: string;
    image: string;
    link: string;
  }
  
  export const products = [
    {
        id: 0,
        name: "Xiaomi Redmi Note 10 Pro 8",
        rating: 5.0,
        description: "Сверхвысокая частота обновления. Высокая частота обновления 120 Гц обеспечивает бесперебойную работу и высокую детализацию изображения при просмотре веб-страниц. Частота дискретизации сенсорного слоя. Высокая частота дискретизации до 360 Гц обеспечивает более высокую чувствительность и удобство работы.",
        image: './assets/images/xiaomi1.png',
        link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-11-pro-8-gb-128-gb-seryi-103971386/?c=750000000#!/item',
    },
    {
        id: 1,
        name: "Смартфон Samsung Galaxy A13",
        description: "Благодаря 6.6-дюймовому экрану Infinity-V на смартфоне Galaxy A13 вы сможете увидеть все, что было скрыто от вашего взгляда.",
        rating: 5.0,
        image: './assets/images/samsung1.png',
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-a13-4-gb-128-gb-chernyi-104253279/?c=750000000#!/item',
    },
    {
        id: 2,
        name: "Смартфон Samsung Galaxy A53",
        description: "Благодаря 6.6-дюймовому экрану Infinity-V на смартфоне Galaxy A13 вы сможете увидеть все, что было скрыто от вашего взгляда.",
        rating: 4.5,
        image: './assets/images/samsung2.png',
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-a53-5g-8-gb-256-gb-belyi-104259269/?c=750000000#!/item',
    },
    {
        id: 3,
        name: "Смартфон ASUS Zenfone",
        description: "---",
        rating: 1,
        image:'./assets/images/asus1.png',
        link:'https://kaspi.kz/shop/p/asus-zenfone-9-8-gb-128-gb-chernyi-108484704/?c=750000000#!/item',
    },
    {
        id: 4,
        name: "Смартфон Samsung Galaxy S21 FE",
        description: "Встречайте нового игрока в команде Galaxy S21 – мощный и стильный Galaxy S21 FE 5G. В нем мы собрали все, что вам понравилось в предыдущих моделях, и создали настоящий смартфон зрительских симпатий.",
        rating: 4.5,
        image: './assets/images/samsung3.png',
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-s21-fe-6-gb-128-gb-seryi-103394241/?c=750000000#!/item'
    },
    {
        id: 5,
        name: "Смартфон Samsung Galaxy Z Fold4",
        description: "Элегантное сочетание уникального форм-фактора и натуральных классических оттенков притягивает внимание каждый раз, когда вы его открываете. ",
        rating: 3.0,
        image: './assets/images/samsung4.png',
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-z-fold4-12-gb-256-gb-bezhevyi-podarok-106036367/?c=750000000#!/item'
    },
    {
        id: 6,
        name: "Смартфон Samsung Galaxy A33",
        description: "Высочайшая скорость следующего поколения мобильной связи 5G меняет способ взаимодействия и обмена контентом — от невероятно плавных игр и потоковой передачи до сверхбыстрого обмена и загрузки. ",
        rating: 4.0,
        image: './assets/images/samsung5.png',
        link: 'https://kaspi.kz/shop/p/samsung-galaxy-a33-5g-6-gb-128-gb-belyi-104424593/?c=750000000#!/item'
    },
    {
        id: 7,
        name: "Смартфон Apple iPhone 11 128Gb желтый",
        description: "Высочайшая скорость следующего поколения мобильной связи 5G меняет способ взаимодействия и обмена контентом — от невероятно плавных игр и потоковой передачи до сверхбыстрого обмена и загрузки. ",
        rating: 4.0,
        image: './assets/images/apple1.png',
        link: 'https://kaspi.kz/shop/p/apple-iphone-11-128gb-zheltyi-1005110/?c=750000000#!/item'
    },
    {
        id: 8,
        name: "Смартфон Apple iPhone 13 Pro 1Tb серый",
        description: "Apple iPhone 13 Pro получил дисплей 6.1 дюйма Super Retina XDR1 с адаптивной частотой обновления до 120 Гц и технологией ProMotion для более быстрого и плавного взаимодействия. ",
        rating: 5.0,
        image: './assets/images/apple2.png',
        link: 'https://kaspi.kz/shop/p/apple-iphone-13-pro-1tb-seryi-102298785/?c=750000000#!/item'
    },
    {
        id: 9,
        name: "Смартфон Apple iPhone 13 Pro Max 256Gb зеленый",
        description: "Apple iPhone 13 Pro Max получил дисплей 6.7 дюйма Super Retina XDR1 с адаптивной частотой обновления до 120 Гц и технологией ProMotion для более быстрого и плавного взаимодействия ",
        rating: 5.0,
        image: './assets/images/apple3.png',
        link: 'https://kaspi.kz/shop/p/apple-iphone-13-pro-max-256gb-zelenyi-104079153/?c=750000000#!/item'
    },
  ];