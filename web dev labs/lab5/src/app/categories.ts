import { Product } from "./products";

export interface Categories{
    name:string;
    products: Product[];
    show_products: boolean;
}


export const categories = [
    {
        name: "smartphone",
        show_products:false,
        products: [{
            id: 1,
            name: 'Apple iPhone 15 Pro Max 256Gb серый',
            price: 629_938 ,
            description: 'технология NFC: Да, цвет: серый, тип экрана: OLED, Super Retina XDR display, диагональ: 6.7 дюйм',
            rating:'5',
            link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000',
            image:'https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=preview-large',
            category: "smartphone"
          },
          {
            id: 2,
            name: 'Xiaomi Redmi 12 4G 8 ГБ/256 ГБ черный',
            price: 66_025 ,
            description: 'хороший телефон 2',
            rating:'4.8',
            link: 'https://kaspi.kz/shop/p/xiaomi-redmi-12-4g-8-gb-256-gb-chernyi-110918152/?c=750000000',
            image:'https://resources.cdn-kaspi.kz/img/m/p/h75/hbc/81335343775774.png?format=preview-large',
            category: "smartphone"
          },
          {
            id: 3,
            name: 'Samsung Galaxy A24 6 ГБ/128 ГБ черный',
            price: 86_977 ,
            description: 'Хороший недорогой смартфон 3',
            rating:'4.9',
            link: 'https://kaspi.kz/shop/p/samsung-galaxy-a24-6-gb-128-gb-chernyi-110343531/?c=750000000',
            image:'https://resources.cdn-kaspi.kz/img/m/p/hdc/h12/80750151303198.jpg?format=preview-large',
            category: "smartphone"
          },
          
          {
            id: 4,
            name: 'Poco X6 Pro 12 ГБ/512 ГБ черный',
            price: 164_486 ,
            description: 'Хороший недорогой смартфон 4',
            rating:'4.7',
            link: 'https://kaspi.kz/shop/p/poco-x6-pro-12-gb-512-gb-chernyi-115961596/?c=750000000',
            image:'https://resources.cdn-kaspi.kz/img/m/p/hbe/h45/84940376899614.jpg?format=preview-large',
            category: "smartphone"
          },
          {
            id: 5,
            name: 'Xiaomi Redmi Note 12 6 ГБ/128 ГБ серый',
            price: 77_290 ,
            description: 'Хороший недорогой смартфон 5',
            rating:'4.0',
            link: 'https://www.sulpak.kz/g/igrovaya_konsol_sony_ps5_68_217_',
            image:'https://resources.cdn-kaspi.kz/img/m/p/hca/h10/79755729600542.jpg?format=preview-large',
            category: "smartphone"
          },
          ]
    },
       
    {
        name: "headphones",
        show_products:false,
        products: [
            {
                id: 1,
                name: 'Apple AirPods Pro 2nd generation with Wireless MagSafe Charging',
                price: 108_633 ,
                description: 'Хороший недорогой наушники 1',
                rating:'5.0',
                link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000',
                image:'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=preview-large',
                category: "headphones"
              },
              {
                id: 2,
                name: 'Apple AirPods 2nd generation белый',
                price: 50_958 ,
                description: 'Хороший недорогой наушники 2',
                rating:'4.8',
                link: 'https://kaspi.kz/shop/p/apple-airpods-2nd-generation-belyi-114927908/?c=750000000',
                image:'https://resources.cdn-kaspi.kz/img/m/p/h12/hc8/84594232688670.jpg?format=preview-large',
                category: "headphones"
              },
              {
                id: 3,
                name: 'JBL Tune 510BT черный',
                price: 19_589 ,
                description: 'Хороший недорогой наушники 3',
                rating:'4.8',
                link: 'https://kaspi.kz/shop/p/jbl-tune-510bt-chernyi-101420081/?c=750000000',
                image:'https://resources.cdn-kaspi.kz/img/m/p/hef/h29/64030233788446.jpg?format=preview-large',
                category: "headphones"
              },
              {
                id: 4,
                name: 'Apple EarPods Lightning белый',
                price: 7_916 ,
                description: 'Хороший недорогой наушники 4',
                rating:'4.5',
                link: 'https://kaspi.kz/shop/p/apple-earpods-lightning-belyi-4801876/?c=750000000',
                image:'https://resources.cdn-kaspi.kz/img/m/p/hff/h5c/63764029243422.jpg?format=preview-large',
                category: "headphones"
              },
              {
                id: 5,
                name: 'Newest M10 черный',
                price: 1_148 ,
                description: 'Хороший недорогой наушники 5',
                rating:'3.5',
                link: 'https://kaspi.kz/shop/p/newest-m10-chernyi-102272027/?c=750000000',
                image:'https://resources.cdn-kaspi.kz/img/m/p/hbf/h98/63952956522526.jpg?format=preview-large',
                category: "headphones"
              }
        ]
    },
    {
        name: "laptops",
        show_products:false,
        products: [
            {
                id: 1,
                name: 'Apple MacBook Air 13 MGN93 серебристый',
                price: 409_980 ,
                description: 'Хороший недорогой ноутбук 1',
                rating:'5.0',
                link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/?c=750000000',
                image:'https://resources.cdn-kaspi.kz/img/m/p/h9a/h35/64082972704798.jpg?format=preview-large',
                category: "laptops"
              },
              {
                id: 2,
                name: 'ASUS TUF Gaming F15 FX507ZC4-HN143 черный',
                price: 428_989 ,
                description: 'Хороший недорогой ноутбук 2',
                rating:'4.1',
                link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-f15-fx507zc4-hn143-chernyi-113186739/?c=750000000',
                image:'https://resources.cdn-kaspi.kz/img/m/p/h5d/h8e/83606463807518.jpg?format=preview-large',
                category: "laptops"
              },
              {
                id: 3,
                name: 'ASUS ASUS Vivobook 16 X1605ZA-MB233W 90NB0ZA3-',
                price: 259_990 ,
                description: 'Хороший недорогой ноутбук 3',
                rating:'4.7',
                link: 'https://kaspi.kz/shop/p/asus-asus-vivobook-16-x1605za-mb233w-90nb0za3-m00z30-chernyi-115765487/?c=750000000',
                image:'https://resources.cdn-kaspi.kz/img/m/p/hbb/h7a/84824062033950.jpg?format=preview-large',
                category: "laptops"
              },
              {
                id: 4,
                name: 'HP 15s-eq2017ci 9L6Q8EA серебристый',
                price: 188_000 ,
                description: 'Хороший недорогой ноутбук 4',
                rating:'4.3',
                link: 'https://kaspi.kz/shop/p/hp-15s-eq2017ci-9l6q8ea-serebristyi-115757149/?c=750000000',
                image:'https://resources.cdn-kaspi.kz/img/m/p/hcc/h48/84821068873758.jpg?format=preview-large',
                category: "laptops"
              },
              {
                id: 5,
                name: 'ASUS TUF Gaming F15 90NR0724-M00ZU0 черный',
                price: 445_890 ,
                description: 'Хороший недорогой ноутбук 5',
                rating:'4.9',
                link: 'https://kaspi.kz/shop/p/asus-tuf-gaming-f15-90nr0724-m00zu0-chernyi-114696615/?c=750000000',
                image:'https://resources.cdn-kaspi.kz/img/m/p/hd7/h75/84526795292702.jpg?format=preview-large',
                category: "laptops"
              }
        ]

    },
    {
        name: "others",
        show_products: false,
        products:[
            {
                id: 1,
                name: 'Стул N-12, 81x50x25 см, белый',
                price: 7_389 ,
                description: 'хороший стул',
                rating:'4.8',
                link: 'https://kaspi.kz/shop/p/stul-n-12-81x50x25-sm-belyi-100189414/?c=750000000',
                image:'https://resources.cdn-kaspi.kz/img/m/p/h59/h3b/63900105277470.jpg?format=preview-large',
                category: "мебель"
              },
              {
                id: 2,
                name: 'Mizam 8902061 диван, обивка ткань, 70x210x75 см, серый',
                price: 57_450 ,
                description: 'хороший диван',
                rating:'2.8',
                link: 'https://kaspi.kz/shop/p/mizam-8902061-divan-obivka-tkan-70x210x75-sm-seryi-104172973/?c=750000000',
                image:'https://resources.cdn-kaspi.kz/img/m/p/he7/h17/64383593971742.jpg?format=preview-large',
                category: "Другие"
              },
              {
                id: 3,
                name: 'Кварцевые CASIO G-Shock GST-B100-1AER пластик, сталь',
                price: 244_800 ,
                description: 'Зачем вообще платить парихмакеру?',
                rating:'5.0',
                link: 'https://kaspi.kz/shop/p/kvartsevye-casio-g-shock-gst-b100-1aer-plastik-stal--21411556/?c=750000000',
                image:'https://resources.cdn-kaspi.kz/img/m/p/h19/ha5/63837898932254.jpg?format=preview-large',
                category: "Другие"
              },
              {
                id: 4,
                name: 'Кварцевые CASIO MTP-1374D-1AVDF сталь',
                price: 29_926 ,
                description: 'хорошие часы',
                rating:'4.0',
                link: 'https://kaspi.kz/shop/p/kvartsevye-casio-mtp-1374d-1avdf-stal--21401209/?c=750000000',
                image:'https://resources.cdn-kaspi.kz/img/m/p/h76/h49/63778732965918.jpg?format=preview-large',
                category: "часы"
              },
              {
                id: 5,
                name: 'IMPERIAL Алёна, 120.2x190.5х46.6 см, белый,',
                price: 49_979 ,
                description: 'хороший шкаф',
                rating:'3.3',
                link: 'https://kaspi.kz/shop/p/imperial-aljona-120-2x190-5h46-6-sm-belyi-korichnevyi-104713427/?c=750000000',
                image:'https://resources.cdn-kaspi.kz/img/m/p/h7a/hf4/84709365612574.jpg?format=preview-large',
                category: "мебель"
              }
        ]
    }
];