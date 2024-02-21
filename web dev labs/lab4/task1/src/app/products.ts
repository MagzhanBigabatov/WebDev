export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: string;
  url: string;
}

export const products = [
  {
    id: 1,
    name: 'Видеокарта MSI GeForce RTX 4080 SUPER 16G GAMING X SLIM 16 Гб',
    price: 653_512,
    description: 'серия: GeForce RTX 40 Series, объем видеопамяти: 16.0 Гб, тип видеопамяти: GDDR6X, рекомендуемая мощность блока питания: 850.0 Вт',
    image: "https://resources.cdn-kaspi.kz/img/m/p/h3a/h4e/85136370040862.jpg?format=gallery-medium",
    rating: "8 by 10",  
    url: "https://kaspi.kz/shop/p/msi-geforce-rtx-4080-super-16g-gaming-x-slim-16-gb-116535095/?c=750000000"
  },
  {
    id: 2,
    name: 'Ноутбук Apple MacBook Air 13 MGN63 серый',
    price: 409_499 ,
    description: 'диагональ экрана: 13.3 дюйм, процессор: Apple M1, видеокарта: Apple M1 7 core, размер оперативной памяти: 8.0 Гб, тип жесткого диска: SSD, общий объем накопителей: 256.0 Гб',
    image: "https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-medium",
    rating: "8.5 by 10",
    url: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn63-seryi-100797845/?c=750000000"
  },
  {
    id: 3,
    name: 'iPhone 14 Pro Max 256gb',
    price: 620_283,
    description: 'технология NFC: Да, цвет: фиолетовый, тип экрана: OLED, Super Retina XDR display с возможностью постоянной работы, диагональ: 6.7 дюйм, размер оперативной памяти: 6 ГБ, процессор: 6-ядерный Apple A16 Bionic, объем встроенной памяти: 256.0 ГБ, емкость аккумулятора: 4300.0 мАч',
    image: "https://resources.cdn-kaspi.kz/img/m/p/h19/h85/64508108931102.jpg?format=gallery-medium",
    rating: "9 by 10",
    url: "https://kaspi.kz/shop/p/apple-iphone-14-pro-max-256gb-fioletovyi-106363342/?c=750000000"
  },
  {
    id: 4,
    name: 'Смартфон Samsung Galaxy A33 5G 6 ГБ/128 ГБ',
    price: 129_999,
    description: 'технология NFC: Да, цвет: черный, тип экрана: Super AMOLED, сенсорный, Corning Gorilla Glass 5, диагональ: 6.4 дюйм, размер оперативной памяти: 6 ГБ, процессор: 8-ядерный Exynos 1280, объем встроенной памяти: 128.0 ГБ, емкость аккумулятора: 5000.0 мАч',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h56/h8c/49894748160030/samsung-galaxy-a33-5g-6-gb-128-gb-cernyj-104398547-1.jpg",
    rating: "5 by 10",
    url: "https://kaspi.kz/shop/p/samsung-galaxy-a33-5g-6-gb-128-gb-chernyi-104398547/?c=750000000#!/item"
  },
  {
    id: 5,
    name: 'Зарядное устройство Apple 20W USB-C Power Adapter + Apple USB-C - Lightning 1 м',
    price: 6_713,
    description: 'тип: сетевая зарядка, количество подключаемых устройств: 1, быстрая зарядка: Да, разъем подключения: USB Type-C',
    image: "https://resources.cdn-kaspi.kz/img/m/p/h84/hd8/64039078559774.jpg?format=gallery-medium",
    rating: "3.5 by 10",
    url: "https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-apple-usb-c---lightning-1-m-101103131/?c=750000000"
  },
  {
    id: 6,
    name: 'Смартфон Apple iPhone 13 128Gb розовый',
    price: 291_399 ,
    description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко.',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha0/h0e/46392660819998/apple-iphone-13-128gb-rozovyj-102298145-1-Container.jpg",
    rating: "7 by 10",
    url: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-rozovyi-102298145/?c=750000000#!/item"
  },
  {
    id: 7,
    name: 'Смарт-часы Apple Watch SE 40 мм черный',
    price: 130_952,
    description: 'поддержка платформ: iOS, материал корпуса: алюминий, цвет корпуса: черный, форма корпуса: прямоугольная, интерфейсы: Bluetooth, ,Wi-Fi, ,NFC, технология экрана: OLED, объем встроенной памяти: 32 Гб, время работы: до 18 часов',
    image: "https://resources.cdn-kaspi.kz/img/m/p/ha3/h60/63868199403550.jpg?format=gallery-medium",
    rating: "7.5 by 10",
    url: "https://kaspi.kz/shop/p/apple-watch-se-40-mm-chernyi-100568123/?c=750000000"
  },
  {
    id: 8,
    name: 'Смартфон Xiaomi Redmi 10C 4 ГБ/128 ГБ ',
    price: 83_988,
    description: 'Xiaomi Redmi 10C оснащен большим дисплеем с диагональю 6.71 дюйма с защитным стеклом Corning Gorilla Glass, которое защищает экран от царапин и повреждений при падениях. ',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h58/hff/51348549861406/xiaomi-redmi-10c-4-gb-128-gb-zelenyi-104443164-1.jpg",
    rating: "8 by 10",
    url: "https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-128-gb-seryi-104417231/?c=750000000#!/item"
  },
  {
    id: 9,
    name: 'Наушники Apple AirPods Pro 2nd generation with Wireless MagSafe Charging Case белый',
    price: 113_462,
    description: 'тип: наушники, вид: внутриканальные, подключение: беспроводное, тип акустического оформления: закрытые, тип крепления: без крепления, система активного шумоподавления: Да, микрофон: Да',
    image: "https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium",
    rating: "9 by 10",
    url: "https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000"
  },
  {
    id: 10,
    name: 'Смартфон Xiaomi Redmi 10C 4 ГБ/64 ГБ',
    price: 59_817,
    description: 'технология NFC: Нет, цвет: серый, тип экрана: IPS, сенсорный, мультитач, диагональ: 6.71 дюйм, размер оперативной памяти: 4 ГБ, процессор: 8-ядерный Qualcomm Snapdragon 680, объем встроенной памяти: 64.0 ГБ, емкость аккумулятора: 5000.0 мАч',
    image: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9f/h3e/49939919699998/xiaomi-redmi-10c-4-gb-64-gb-seryj-104417151-1.jpg",
    rating: "6 by 10",
    url: "https://kaspi.kz/shop/p/xiaomi-redmi-10c-4-gb-64-gb-seryi-104417151/?c=750000000#!/item"
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/