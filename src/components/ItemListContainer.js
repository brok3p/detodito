function Button(props) {
    return (<button onClick={props.onClick} className="btn-primary">{props.text}</button>);
  }

function ItemListContainer() {
    const productos = [
        {
            "shipping": {
                "shippingType": "free",
                "shippingPrice": 0
            },
            "stock": {
                "stockTotal": 50,
                "options": [
                    {
                        "combination": [
                            {
                                "name": "color",
                                "value": "negro",
                                "_id": "62d03ce9f8e9c742a923b216"
                            }
                        ],
                        "stock": 50,
                        "_id": "62d03ce9f8e9c742a923b215"
                    }
                ]
            },
            "rating": {
                "total_votes": []
            },
            "_id": "62d03ce9f8e9c742a923b214",
            "title": "Mouse gamer con luz LED multicolor",
            "description": "Mouse gamer liviano, muy bueno para shooters",
            "pictures": [
                "http://res.cloudinary.com/dl7ktqtgv/image/upload/v1657814247/Images/bt82paukvixsr7tedwq1.jpg",
                "http://res.cloudinary.com/dl7ktqtgv/image/upload/v1657814248/Images/kdwt5r7tnhib6ncufxtt.jpg",
                "http://res.cloudinary.com/dl7ktqtgv/image/upload/v1657814248/Images/qwogng4rmgveu0tvyx6k.jpg"
            ],
            "price": 15,
            "earnings": 8.45,
            "currency": "USD",
            "status": true,
            "seller": "62d03b7ff8e9c742a923af8c",
            "category": "62bc996f7531a26c209cdd4d",
            "subCategory": "62bc98ff7531a26c209cdd4a",
            "condition": "new",
            "totalSold": 0,
            "brand": "Mardel Tecno",
            "location": "Buenos Aires",
            "visibility": 3,
            "questions": [
                {
                    "seller_id": "62d037a5f8e9c742a923ab0f",
                    "data": "...",
                    "_id": "62d03ce9f8e9c742a923b2140",
                    "product_id": "62d03ce9f8e9c742a923b214",
                    "name": "Juan Cruz",
                    "date": "2022-07-15T02:51:45.862Z",
                    "time": "23:51",
                    "coments": [],
                    "coment": ""
                }
            ],
            "transactions": [],
            "reviews": [],
            "date_created": "2022-07-14T15:57:29.459Z",
            "last_update": "2022-07-14T15:57:29.459Z"
        },
        {
            "shipping": {
                "shippingType": "free",
                "shippingPrice": 0
            },
            "stock": {
                "stockTotal": 10,
                "options": [
                    {
                        "combination": [
                            {
                                "name": "color",
                                "value": "negro",
                                "_id": "62d03fb6996ea2855b7fb84a"
                            }
                        ],
                        "stock": 10,
                        "_id": "62d03fb6996ea2855b7fb849"
                    }
                ]
            },
            "rating": {
                "total_votes": []
            },
            "_id": "62d03fb6996ea2855b7fb848",
            "title": "Teclado mecanico Redragon k552",
            "description": "Teclado mecánico gamer, sonido increíble y con luces RGB completas",
            "pictures": [
                "http://res.cloudinary.com/dl7ktqtgv/image/upload/v1657814964/Images/awipx2iwsi3daotev3ho.jpg",
                "http://res.cloudinary.com/dl7ktqtgv/image/upload/v1657814965/Images/tx04chq5lcrspvylqg2q.jpg",
                "http://res.cloudinary.com/dl7ktqtgv/image/upload/v1657814965/Images/naon9zzcpgzfutvd7cuh.jpg"
            ],
            "price": 23,
            "earnings": 14.29,
            "currency": "USD",
            "status": true,
            "seller": "62d03b7ff8e9c742a923af8c",
            "category": "62bc996f7531a26c209cdd4d",
            "subCategory": "62bc98ff7531a26c209cdd4a",
            "condition": "new",
            "totalSold": 0,
            "brand": "Mardel Tecno",
            "location": "Buenos Aires",
            "visibility": 3,
            "questions": [],
            "transactions": [],
            "reviews": [],
            "date_created": "2022-07-14T16:09:26.563Z",
            "last_update": "2022-07-14T16:09:26.563Z"
        },
        {
            "shipping": {
                "shippingType": "free",
                "shippingPrice": 0
            },
            "stock": {
                "stockTotal": 100,
                "options": [
                    {
                        "combination": [
                            {
                                "name": "color",
                                "value": "azul",
                                "_id": "62d04819142f13793c85fda5"
                            },
                            {
                                "name": "memoria interna",
                                "value": "256",
                                "_id": "62d04819142f13793c85fda6"
                            },
                            {
                                "name": "memoria ram",
                                "value": "8",
                                "_id": "62d04819142f13793c85fda7"
                            }
                        ],
                        "stock": 100,
                        "_id": "62d04819142f13793c85fda4"
                    }
                ]
            },
            "rating": {
                "total_votes": []
            },
            "_id": "62d04819142f13793c85fda3",
            "title": "Apple iPhone 13 Pro (512 GB) - Azul Sierra",
            "description": "Phone 13 Pro. El mayor avance en el sistema de cámaras Pro de Apple hasta ahora. Pantalla Super Retina XDR con ProMotion que brinda una respuesta más rápida y fluida. Chip A15 Bionic para un rendimiento fuera de serie. Diseño resistente y un gran salto en duración de batería.",
            "pictures": [
                "http://res.cloudinary.com/dl7ktqtgv/image/upload/v1657817111/Images/tu84duiepono3cbvjukb.jpg",
                "http://res.cloudinary.com/dl7ktqtgv/image/upload/v1657817112/Images/ahsa0mzfzhcgaqxhpi2y.jpg",
                "http://res.cloudinary.com/dl7ktqtgv/image/upload/v1657817113/Images/xj53cufs85otux7doqfe.jpg"
            ],
            "price": 1099,
            "earnings": 777.79,
            "currency": "USD",
            "status": true,
            "seller": "62d04790142f13793c85fd71",
            "category": "62bc996f7531a26c209cdd4d",
            "subCategory": "62bc92b97531a26c209cdd24",
            "condition": "new",
            "totalSold": 0,
            "brand": "Apple",
            "location": "Entre Ríos",
            "visibility": 3,
            "questions": [
                {
                    "data": "hola",
                    "_id": "62d04819142f13793c85fda30",
                    "product_id": "62d04819142f13793c85fda3",
                    "name": null,
                    "date": "2022-07-14T20:03:27.781Z",
                    "time": "17:3",
                    "coments": [
                        {
                            "coment": "Quiero 1kilo",
                            "date": "2022-07-14T20:45:21.903Z",
                            "time": "17:45"
                        },
                        {
                            "coment": "Hola",
                            "date": "2022-07-14T20:59:32.670Z",
                            "time": "17:59"
                        },
                        {
                            "coment": "Quiero 3 litros",
                            "date": "2022-07-14T20:59:40.907Z",
                            "time": "17:59"
                        }
                    ],
                    "coment": ""
                },
                {
                    "data": "Que tal esto",
                    "_id": "62d04819142f13793c85fda31",
                    "product_id": "62d04819142f13793c85fda3",
                    "name": null,
                    "date": "2022-07-16T21:47:51.740Z",
                    "time": "18:47",
                    "coments": [],
                    "coment": ""
                }
            ],
            "transactions": [],
            "reviews": [],
            "date_created": "2022-07-14T16:45:13.634Z",
            "last_update": "2022-07-14T16:45:13.634Z"
        },
        {
            "shipping": {
                "shippingType": "free",
                "shippingPrice": 0
            },
            "stock": {
                "stockTotal": 287,
                "options": [
                    {
                        "combination": [
                            {
                                "name": "color",
                                "value": "blanco",
                                "_id": "62d048f1142f13793c85fde1"
                            },
                            {
                                "name": "memoria interna",
                                "value": "256",
                                "_id": "62d048f1142f13793c85fde2"
                            },
                            {
                                "name": "memoria ram",
                                "value": "16",
                                "_id": "62d048f1142f13793c85fde3"
                            }
                        ],
                        "stock": 290,
                        "_id": "62d048f1142f13793c85fde0"
                    }
                ]
            },
            "rating": {
                "total_votes": []
            },
            "_id": "62d048f1142f13793c85fddf",
            "title": "Apple iPhone 13 (256 GB) - Blanco estelar",
            "description": "iPhone 13. El sistema de dos cámaras más avanzado en un iPhone. El superrápido chip A15 Bionic. Un gran\nsalto en duración de batería. Un diseño resistente. Y una pantalla Super Retina XDR más brillante.",
            "pictures": [
                "http://res.cloudinary.com/dl7ktqtgv/image/upload/v1657817327/Images/nknmyy87gnhqeqgug0yg.jpg",
                "http://res.cloudinary.com/dl7ktqtgv/image/upload/v1657817327/Images/bn8klc3byj7zx3bwerer.jpg",
                "http://res.cloudinary.com/dl7ktqtgv/image/upload/v1657817330/Images/ax6x1obwf80bfoxbazwd.jpg"
            ],
            "price": 999,
            "earnings": 706.79,
            "currency": "USD",
            "status": true,
            "seller": "62d04790142f13793c85fd71",
            "category": "62bc996f7531a26c209cdd4d",
            "subCategory": "62bc92b97531a26c209cdd24",
            "condition": "new",
            "totalSold": 1,
            "brand": "Apple",
            "location": "Entre Ríos",
            "visibility": 3,
            "questions": [],
            "transactions": [],
            "reviews": [],
            "date_created": "2022-07-14T16:48:49.944Z",
            "last_update": "2022-07-14T16:48:49.944Z"
        },
        {
            "shipping": {
                "shippingType": "free",
                "shippingPrice": 0
            },
            "stock": {
                "stockTotal": 288,
                "options": [
                    {
                        "combination": [
                            {
                                "name": "color",
                                "value": "negro",
                                "_id": "62d049ac142f13793c85fe1f"
                            },
                            {
                                "name": "memoria interna",
                                "value": "256",
                                "_id": "62d049ac142f13793c85fe20"
                            },
                            {
                                "name": "memoria ram",
                                "value": "16",
                                "_id": "62d049ac142f13793c85fe21"
                            }
                        ],
                        "stock": 289,
                        "_id": "62d049ac142f13793c85fe1e"
                    }
                ]
            },
            "rating": {
                "average": 5,
                "total_votes": [
                    5
                ]
            },
            "_id": "62d049ac142f13793c85fe1d",
            "title": "Apple iPhone 13 mini (256 GB) - Azul medianoche",
            "description": "Phone 13 mini. El sistema de dos cámaras más avanzado en un iPhone. El superrápido chip A15 Bionic. Un salto en duración de batería. Un diseño resistente. Y una pantalla Super Retina XDR más brillante.",
            "pictures": [
                "http://res.cloudinary.com/dl7ktqtgv/image/upload/v1657817516/Images/hlefcxu2heqerdfjodkr.jpg",
                "http://res.cloudinary.com/dl7ktqtgv/image/upload/v1657817517/Images/surditf459ed8bxyxcid.jpg"
            ],
            "price": 899,
            "earnings": 635.79,
            "currency": "USD",
            "status": true,
            "seller": "62d04790142f13793c85fd71",
            "category": "62bc996f7531a26c209cdd4d",
            "subCategory": "62bc92b97531a26c209cdd24",
            "condition": "new",
            "totalSold": 1,
            "brand": "Apple",
            "location": "Entre Ríos",
            "visibility": 3,
            "questions": [],
            "transactions": [],
            "reviews": [
                "62d706aef5a3f2412b5dbcf6"
            ],
            "date_created": "2022-07-14T16:51:56.797Z",
            "last_update": "2022-07-14T16:51:56.797Z"
        },
        {
            "shipping": {
                "shippingType": "free",
                "shippingPrice": 0
            },
            "stock": {
                "stockTotal": 84,
                "options": [
                    {
                        "combination": [
                            {
                                "name": "color",
                                "value": "blanco",
                                "_id": "62d04a98142f13793c85fe74"
                            },
                            {
                                "name": "memoria ram",
                                "value": "8",
                                "_id": "62d04a98142f13793c85fe75"
                            },
                            {
                                "name": "tipo de memoria",
                                "value": "ssd",
                                "_id": "62d04a98142f13793c85fe76"
                            },
                            {
                                "name": "memoria",
                                "value": "256",
                                "_id": "62d04a98142f13793c85fe77"
                            },
                            {
                                "name": "tamaño de pantalla",
                                "value": "15",
                                "_id": "62d04a98142f13793c85fe78"
                            }
                        ],
                        "stock": 91,
                        "_id": "62d04a98142f13793c85fe73"
                    }
                ]
            },
            "rating": {
                "average": 5,
                "total_votes": [
                    5,
                    5
                ]
            },
            "_id": "62d04a98142f13793c85fe72",
            "title": "Apple Macbook Air (13 pulgadas, 2020, Chip M1, 256 GB de SSD, 8 GB de RAM) - Plata",
            "description": "La notebook más delgada y ligera de Apple viene con los superpoderes del chip M1. Termina todos tus proyectos mucho más rápido con el CPU de 8 núcleos y disfruta como nunca antes de apps y juegos con gráficos avanzados gracias al GPU de hasta 8 núcleos. Además, el Neural Engine de 16 núcleos se encarga de acelerar todos los procesos de aprendizaje automático. Todo en un diseño silencioso sin ventilador que te ofrece la mayor duración de batería en una MacBook Air: hasta 18 horas. (1) Portátil como siempre, más poderosa que nunca.\n",
            "pictures": [
                "http://res.cloudinary.com/dl7ktqtgv/image/upload/v1657817750/Images/j4fdes1cwjhomamgbrto.jpg",
                "http://res.cloudinary.com/dl7ktqtgv/image/upload/v1657817751/Images/gryyujb0p6aag7oofhfs.jpg",
                "http://res.cloudinary.com/dl7ktqtgv/image/upload/v1657817752/Images/plwx3zlti4v3blvjb3hz.png"
            ],
            "price": 1099,
            "earnings": 777.79,
            "currency": "USD",
            "status": true,
            "seller": "62d04790142f13793c85fd71",
            "category": "62bc996f7531a26c209cdd4d",
            "subCategory": "62bc95d87531a26c209cdd2e",
            "condition": "new",
            "totalSold": 3,
            "brand": "Apple",
            "location": "Entre Ríos",
            "visibility": 3,
            "questions": [
                {
                    "seller_id": "62d04a465ae299718a5e63d9",
                    "data": "hola, esta disponible?",
                    "_id": "62d04a98142f13793c85fe720",
                    "product_id": "62d04a98142f13793c85fe72",
                    "name": null,
                    "date": "2022-07-14T19:12:09.742Z",
                    "time": "14:12",
                    "coments": [],
                    "coment": ""
                },
                {
                    "data": "hola, te sirven 900?",
                    "_id": "62d04a98142f13793c85fe721",
                    "product_id": "62d04a98142f13793c85fe72",
                    "name": null,
                    "date": "2022-07-14T21:02:39.180Z",
                    "time": "18:2",
                    "coments": [
                        {
                            "coment": "",
                            "date": "2022-07-14T21:02:52.053Z",
                            "time": "18:2"
                        },
                        {
                            "coment": "Si, pero al blue en 350 pesos",
                            "date": "2022-07-14T21:03:05.246Z",
                            "time": "18:3"
                        }
                    ],
                    "coment": ""
                },
                {
                    "data": "buen proyecto ",
                    "_id": "62d04a98142f13793c85fe722",
                    "product_id": "62d04a98142f13793c85fe72",
                    "name": null,
                    "date": "2022-08-05T01:20:33.004Z",
                    "time": "21:20",
                    "coments": [
                        {
                            "user_id": "62ec7049055e8300134dee60",
                            "user_name": "Joaquin",
                            "coment": "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                            "date": "2022-08-05T01:20:49.744Z",
                            "time": "21:20"
                        },
                        {
                            "user_id": "62ec7049055e8300134dee60",
                            "user_name": "Joaquin",
                            "coment": "ahi se los rompi xD",
                            "date": "2022-08-05T01:21:18.036Z",
                            "time": "21:21"
                        }
                    ],
                    "coment": ""
                },
                {
                    "data": "Pero que poronga es Soy Henry",
                    "_id": "62d04a98142f13793c85fe723",
                    "product_id": "62d04a98142f13793c85fe72",
                    "name": null,
                    "date": "2022-08-08T23:09:25.568Z",
                    "time": "20:9",
                    "coments": [],
                    "coment": ""
                }
            ],
            "transactions": [],
            "reviews": [
                "62d053a046e3fd79e7cb05a4",
                "62d05c6a46e3fd79e7cb0859"
            ],
            "date_created": "2022-07-14T16:55:52.174Z",
            "last_update": "2022-07-14T16:55:52.174Z"
        },
        {
            "shipping": {
                "shippingType": "free",
                "shippingPrice": 0
            },
            "stock": {
                "stockTotal": 114,
                "options": [
                    {
                        "combination": [
                            {
                                "name": "color",
                                "value": "blanco",
                                "_id": "62d04b01142f13793c85feb2"
                            },
                            {
                                "name": "memoria interna",
                                "value": "64",
                                "_id": "62d04b01142f13793c85feb3"
                            },
                            {
                                "name": "memoria ram",
                                "value": "4",
                                "_id": "62d04b01142f13793c85feb4"
                            }
                        ],
                        "stock": 124,
                        "_id": "62d04b01142f13793c85feb1"
                    }
                ]
            },
            "rating": {
                "total_votes": []
            },
            "_id": "62d04b01142f13793c85feb0",
            "title": "Apple iPhone 11 (64 GB) - Blanco",
            "description": "Graba videos 4K y captura retratos espectaculares y paisajes increíbles con el sistema de dos cámaras. Toma grandes fotos con poca luz gracias al modo Noche. Disfruta colores reales en las fotos, videos y juegos con la pantalla Liquid Retina de 6.1 pulgadas (3). Aprovecha un rendimiento sin precedentes en los juegos, la realidad aumentada y la fotografía con el chip A13 Bionic. Haz mucho más sin necesidad de volver a cargar el teléfono gracias a su batería de larga duración (2). Y no te preocupes si se moja, el iPhone 11 tiene una resistencia al agua de hasta 30 minutos a una profundidad máxima de 2 metros (1).",
            "pictures": [
                "http://res.cloudinary.com/dl7ktqtgv/image/upload/v1657817856/Images/jzw09wae92lyeslzxbpn.jpg",
                "http://res.cloudinary.com/dl7ktqtgv/image/upload/v1657817857/Images/o3yips4jhrtolvcdblu3.jpg"
            ],
            "price": 799,
            "earnings": 564.79,
            "currency": "USD",
            "status": true,
            "seller": "62d04790142f13793c85fd71",
            "category": "62bc996f7531a26c209cdd4d",
            "subCategory": "62bc92b97531a26c209cdd24",
            "condition": "new",
            "totalSold": 0,
            "brand": "Apple",
            "location": "Entre Ríos",
            "visibility": 3,
            "questions": [
                {
                    "data": "dios sos bos ",
                    "_id": "62d04b01142f13793c85feb00",
                    "product_id": "62d04b01142f13793c85feb0",
                    "name": null,
                    "date": "2022-07-15T15:09:44.890Z",
                    "time": "12:9",
                    "coments": [],
                    "coment": ""
                }
            ],
            "transactions": [],
            "reviews": [],
            "date_created": "2022-07-14T16:57:37.613Z",
            "last_update": "2022-07-14T16:57:37.613Z"
        },
        {
            "shipping": {
                "shippingType": "free",
                "shippingPrice": 0
            },
            "stock": {
                "stockTotal": 121,
                "options": [
                    {
                        "combination": [
                            {
                                "name": "color",
                                "value": "rojo",
                                "_id": "62d04be8142f13793c85ff06"
                            },
                            {
                                "name": "memoria interna",
                                "value": "128",
                                "_id": "62d04be8142f13793c85ff07"
                            },
                            {
                                "name": "memoria ram",
                                "value": "6",
                                "_id": "62d04be8142f13793c85ff08"
                            }
                        ],
                        "stock": 123,
                        "_id": "62d04be8142f13793c85ff05"
                    }
                ]
            },
            "rating": {
                "average": 5,
                "total_votes": [
                    5
                ]
            },
            "_id": "62d04be8142f13793c85ff04",
            "title": "Apple iPhone 12 (128 GB) - (PRODUCT)RED",
            "description": "El iPhone 12 tiene una espectacular pantalla Super Retina XDR de 6.1 pulgadas (1). Un frente de Ceramic Shield, cuatro veces más resistente a las caídas (2). Modo Noche en todas las cámaras, para que puedas tomar fotos increíbles con poca luz. Grabación, edición y reproducción de video en Dolby Vision con calidad cinematográfica. Y el potente chip A14 Bionic. Además, es compatible con los nuevos accesorios MagSafe, que se acoplan fácilmente a tu iPhone y permiten una carga inalámbrica más rápida (3). Que comience la diversión.\n\n",
            "pictures": [
                "http://res.cloudinary.com/dl7ktqtgv/image/upload/v1657818087/Images/vmy0unnm1lewtnldohsp.jpg",
                "http://res.cloudinary.com/dl7ktqtgv/image/upload/v1657818089/Images/h1ceeyhqtfqhevvdde4m.jpg"
            ],
            "price": 849,
            "earnings": 600.29,
            "currency": "USD",
            "status": true,
            "seller": "62d04790142f13793c85fd71",
            "category": "62bc996f7531a26c209cdd4d",
            "subCategory": "62bc92b97531a26c209cdd24",
            "condition": "new",
            "totalSold": 2,
            "brand": "Apple",
            "location": "Entre Ríos",
            "visibility": 3,
            "questions": [],
            "transactions": [],
            "reviews": [
                "62d05c5a46e3fd79e7cb0834"
            ],
            "date_created": "2022-07-14T17:01:28.826Z",
            "last_update": "2022-07-14T17:01:28.826Z"
        },
        {
            "shipping": {
                "shippingType": "free",
                "shippingPrice": 0
            },
            "stock": {
                "stockTotal": 5,
                "options": [
                    {
                        "combination": [
                            {
                                "name": "color",
                                "value": "dorado",
                                "_id": "62d04e9746e3fd79e7cb0212"
                            },
                            {
                                "name": "memoria interna",
                                "value": "256",
                                "_id": "62d04e9746e3fd79e7cb0213"
                            },
                            {
                                "name": "memoria ram",
                                "value": "16",
                                "_id": "62d04e9746e3fd79e7cb0214"
                            }
                        ],
                        "stock": 5,
                        "_id": "62d04e9746e3fd79e7cb0211"
                    }
                ]
            },
            "rating": {
                "total_votes": []
            },
            "_id": "62d04e9746e3fd79e7cb0210",
            "title": "Samsung Galaxy s22 Ultra",
            "description": "El buque insignia de Samsung. Disfrutá de la mejor cámara y potencia del mercado",
            "pictures": [
                "http://res.cloudinary.com/dl7ktqtgv/image/upload/v1657818773/Images/akdszb4cxcuqyodpusoo.jpg",
                "http://res.cloudinary.com/dl7ktqtgv/image/upload/v1657818774/Images/ffy5hv2bagtrxilkzbtp.jpg",
                "http://res.cloudinary.com/dl7ktqtgv/image/upload/v1657818775/Images/hu1xjlcqwm6djqb8btn3.jpg"
            ],
            "price": 1000,
            "earnings": 707.5,
            "currency": "USD",
            "status": true,
            "seller": "62d03b7ff8e9c742a923af8c",
            "category": "62bc996f7531a26c209cdd4d",
            "subCategory": "62bc92b97531a26c209cdd24",
            "condition": "new",
            "totalSold": 0,
            "brand": "Mardel Tecno",
            "location": "Buenos Aires",
            "visibility": 3,
            "questions": [],
            "transactions": [],
            "reviews": [],
            "date_created": "2022-07-14T17:12:55.874Z",
            "last_update": "2022-07-14T17:12:55.874Z"
        },
        {
            "shipping": {
                "shippingType": "free",
                "shippingPrice": 0
            },
            "stock": {
                "stockTotal": 24,
                "options": [
                    {
                        "combination": [
                            {
                                "name": "color",
                                "value": "negro",
                                "_id": "62d05d3b46e3fd79e7cb08a3"
                            },
                            {
                                "name": "memoria interna",
                                "value": "128",
                                "_id": "62d05d3b46e3fd79e7cb08a4"
                            },
                            {
                                "name": "memoria ram",
                                "value": "16",
                                "_id": "62d05d3b46e3fd79e7cb08a5"
                            }
                        ],
                        "stock": 25,
                        "_id": "62d05d3b46e3fd79e7cb08a2"
                    }
                ]
            },
            "rating": {
                "average": 5,
                "total_votes": [
                    5,
                    5
                ]
            },
            "_id": "62d05d3b46e3fd79e7cb08a1",
            "title": "Samsung s22 ",
            "description": "increible samsung con potente procesador snapdragon",
            "pictures": [
                "http://res.cloudinary.com/dl7ktqtgv/image/upload/v1657822520/Images/otfxjr6r00zztwbnb0s0.jpg",
                "http://res.cloudinary.com/dl7ktqtgv/image/upload/v1657822521/Images/k1xgtcbdqj045766yoel.jpg",
                "http://res.cloudinary.com/dl7ktqtgv/image/upload/v1657822522/Images/lwhz3tjdzwbp6vejrabj.png"
            ],
            "price": 1200,
            "earnings": 849.5,
            "currency": "USD",
            "status": true,
            "seller": "62d05cb846e3fd79e7cb0886",
            "category": "62bc996f7531a26c209cdd4d",
            "subCategory": "62bc92b97531a26c209cdd24",
            "condition": "new",
            "totalSold": 1,
            "brand": "samsung",
            "location": "Buenos Aires",
            "visibility": 3,
            "questions": [
                {
                    "seller_id": "62d04a465ae299718a5e63d9",
                    "data": "lo envían gratis?",
                    "_id": "62d05d3b46e3fd79e7cb08a10",
                    "product_id": "62d05d3b46e3fd79e7cb08a1",
                    "name": null,
                    "date": "2022-07-14T18:16:21.110Z",
                    "time": "13:16",
                    "coments": [
                        {
                            "user_id": "62d05b49f11ba60011f90ffb",
                            "user_name": null,
                            "coment": "hola si tiene envio gratis",
                            "date": "2022-07-14T18:16:45.401Z",
                            "time": "15:16"
                        }
                    ],
                    "coment": ""
                },
                {
                    "seller_id": "62d04a465ae299718a5e63d9",
                    "data": "envian en buenos aires",
                    "_id": "62d05d3b46e3fd79e7cb08a11",
                    "product_id": "62d05d3b46e3fd79e7cb08a1",
                    "name": null,
                    "date": "2022-07-14T18:16:58.711Z",
                    "time": "13:16",
                    "coments": [],
                    "coment": ""
                }
            ],
            "transactions": [],
            "reviews": [
                "62d05de446e3fd79e7cb0988",
                "62d05e1646e3fd79e7cb0990"
            ],
            "date_created": "2022-07-14T18:15:23.216Z",
            "last_update": "2022-07-14T18:15:23.216Z"
        },
        {
            "shipping": {
                "shippingType": "seller",
                "shippingPrice": 0
            },
            "stock": {
                "stockTotal": 15,
                "options": [
                    {
                        "combination": [
                            {
                                "name": "color",
                                "value": "negro",
                                "_id": "62d707a6f5a3f2412b5dbd22"
                            }
                        ],
                        "stock": 15,
                        "_id": "62d707a6f5a3f2412b5dbd21"
                    }
                ]
            },
            "rating": {
                "total_votes": []
            },
            "_id": "62d707a6f5a3f2412b5dbd20",
            "title": "govee barras de luz LED",
            "description": "luces rgb ",
            "pictures": [
                "http://res.cloudinary.com/dl7ktqtgv/image/upload/v1658259364/Images/ox1eifu88lbyk88vi2iv.jpg",
                "http://res.cloudinary.com/dl7ktqtgv/image/upload/v1658259365/Images/ahvjcaxonnp2wjxnqbuw.jpg"
            ],
            "price": 80,
            "earnings": 58.4,
            "currency": "USD",
            "status": true,
            "seller": "62d0362df8e9c742a923aa2b",
            "category": "62bc996f7531a26c209cdd4d",
            "subCategory": "62bc98ff7531a26c209cdd4a",
            "condition": "new",
            "totalSold": 0,
            "brand": "govee",
            "location": "Buenos Aires",
            "visibility": 3,
            "questions": [],
            "transactions": [],
            "reviews": [],
            "date_created": "2022-07-19T19:36:06.628Z",
            "last_update": "2022-07-19T19:36:06.628Z"
        }
    ];

    const onHandlerAddProduct = () => console.log('add product');
    
    return (
        <section className="section-container">
      <div className='productos'>
          {
            productos.map((producto) => (
              <div className='card bb' key={producto._id}>
                <div className="card card-body">
                <h3>{producto.title}</h3>
                <img className='producto-image' src={producto.pictures[0]} alt={producto.title}></img>
                <p>{producto.brand}</p>
                <Button onClick={onHandlerAddProduct} text="Add to car"></Button>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    );
    
}
export default ItemListContainer;