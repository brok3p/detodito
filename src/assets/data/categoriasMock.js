// https://ml7e.herokuapp.com/categories
const categoriasMock = {
    "status": "success",
    "data": {
        "categories": [
            {
                "_id": "62bc77cc7531a26c209cdd18",
                "name": "Animales y Mascotas",
                "subcategories": [
                    {
                        "_id": "62bc7310eceac2556cb55fef",
                        "name": "Perros",
                        "properties": [
                            {
                                "nameprop": "alimentos",
                                "options": [
                                    "adulto",
                                    "mediano",
                                    "cachorro"
                                ],
                                "_id": "62bc7310eceac2556cb55ff0"
                            },
                            {
                                "nameprop": "tamaño",
                                "options": [
                                    "chico",
                                    "mediano",
                                    "grande"
                                ],
                                "_id": "62bc7310eceac2556cb55ff1"
                            }
                        ]
                    },
                    {
                        "_id": "62bc7396eceac2556cb55ff3",
                        "name": "Gatos",
                        "properties": [
                            {
                                "nameprop": "alimentos",
                                "options": [
                                    "adulto",
                                    "mediano",
                                    "cachorro"
                                ],
                                "_id": "62bc7396eceac2556cb55ff4"
                            },
                            {
                                "nameprop": "tamaño",
                                "options": [
                                    "chico",
                                    "grande"
                                ],
                                "_id": "62bc7396eceac2556cb55ff5"
                            }
                        ]
                    },
                    {
                        "_id": "62bc73c8eceac2556cb55ff7",
                        "name": "Otros",
                        "properties": [
                            {
                                "nameprop": "alimentos",
                                "options": [
                                    "adulto",
                                    "mediano",
                                    "cachorro"
                                ],
                                "_id": "62bc73c8eceac2556cb55ff8"
                            },
                            {
                                "nameprop": "tamaño",
                                "options": [
                                    "chico",
                                    "grande"
                                ],
                                "_id": "62bc73c8eceac2556cb55ff9"
                            }
                        ]
                    },
                    {
                        "_id": "62bc74b4eceac2556cb55ffb",
                        "name": "Accesorios",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bc74b4eceac2556cb55ffc"
                            }
                        ]
                    }
                ]
            },
            {
                "_id": "62bc996f7531a26c209cdd4d",
                "name": "Tecnologia",
                "subcategories": [
                    {
                        "_id": "62bc92b97531a26c209cdd24",
                        "name": "Celulares",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bc92b97531a26c209cdd25"
                            },
                            {
                                "nameprop": "memoria interna",
                                "options": [
                                    "16",
                                    "32",
                                    "64",
                                    "128",
                                    "256"
                                ],
                                "_id": "62bc92b97531a26c209cdd26"
                            },
                            {
                                "nameprop": "memoria ram",
                                "options": [
                                    "2",
                                    "4",
                                    "5",
                                    "6",
                                    "7",
                                    "8",
                                    "16"
                                ],
                                "_id": "62bc92b97531a26c209cdd27"
                            }
                        ]
                    },
                    {
                        "_id": "62bc92c07531a26c209cdd29",
                        "name": "Tablets",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bc92c07531a26c209cdd2a"
                            },
                            {
                                "nameprop": "memoria interna",
                                "options": [
                                    "16",
                                    "32",
                                    "64",
                                    "128",
                                    "256"
                                ],
                                "_id": "62bc92c07531a26c209cdd2b"
                            },
                            {
                                "nameprop": "memoria ram",
                                "options": [
                                    "2",
                                    "4",
                                    "5",
                                    "6",
                                    "7",
                                    "8",
                                    "16"
                                ],
                                "_id": "62bc92c07531a26c209cdd2c"
                            }
                        ]
                    },
                    {
                        "_id": "62bc95d87531a26c209cdd2e",
                        "name": "Notebooks",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bc95d87531a26c209cdd2f"
                            },
                            {
                                "nameprop": "memoria ram",
                                "options": [
                                    "2",
                                    "4",
                                    "6",
                                    "8",
                                    "12",
                                    "16",
                                    "32",
                                    "64"
                                ],
                                "_id": "62bc95d87531a26c209cdd30"
                            },
                            {
                                "nameprop": "tipo de memoria",
                                "options": [
                                    "ssd",
                                    "hdd"
                                ],
                                "_id": "62bc95d87531a26c209cdd31"
                            },
                            {
                                "nameprop": "memoria",
                                "options": [
                                    "32",
                                    "64",
                                    "128",
                                    "256",
                                    "512",
                                    "1024",
                                    "2048"
                                ],
                                "_id": "62bc95d87531a26c209cdd32"
                            },
                            {
                                "nameprop": "tamaño de pantalla",
                                "options": [
                                    "11",
                                    "12",
                                    "13",
                                    "14",
                                    "15",
                                    "16",
                                    "17"
                                ],
                                "_id": "62bc95d87531a26c209cdd33"
                            },
                            {
                                "nameprop": "procesador",
                                "options": [
                                    "core i3",
                                    "core i5",
                                    "core i7",
                                    "core i9",
                                    "ryzen 3",
                                    "ryzen 5",
                                    "ryzen 7",
                                    "ryzen 9"
                                ],
                                "_id": "62bc95d87531a26c209cdd34"
                            }
                        ]
                    },
                    {
                        "_id": "62bc95e37531a26c209cdd36",
                        "name": "PC",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bc95e37531a26c209cdd37"
                            },
                            {
                                "nameprop": "memoria ram",
                                "options": [
                                    "2",
                                    "4",
                                    "6",
                                    "8",
                                    "12",
                                    "16",
                                    "32",
                                    "64"
                                ],
                                "_id": "62bc95e37531a26c209cdd38"
                            },
                            {
                                "nameprop": "tipo de memoria",
                                "options": [
                                    "ssd",
                                    "hdd"
                                ],
                                "_id": "62bc95e37531a26c209cdd39"
                            },
                            {
                                "nameprop": "memoria",
                                "options": [
                                    "32",
                                    "64",
                                    "128",
                                    "256",
                                    "512",
                                    "1024",
                                    "2048"
                                ],
                                "_id": "62bc95e37531a26c209cdd3a"
                            },
                            {
                                "nameprop": "procesador",
                                "options": [
                                    "core i3",
                                    "core i5",
                                    "core i7",
                                    "core i9",
                                    "ryzen 3",
                                    "ryzen 5",
                                    "ryzen 7",
                                    "ryzen 9"
                                ],
                                "_id": "62bc95e37531a26c209cdd3b"
                            }
                        ]
                    },
                    {
                        "_id": "62bc96b87531a26c209cdd3d",
                        "name": "Audio",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bc96b87531a26c209cdd3e"
                            },
                            {
                                "nameprop": "tipo de audio",
                                "options": [
                                    "auriculares",
                                    "estereo",
                                    "microfono"
                                ],
                                "_id": "62bc96b87531a26c209cdd3f"
                            }
                        ]
                    },
                    {
                        "_id": "62bc982d7531a26c209cdd41",
                        "name": "Televisores",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bc982d7531a26c209cdd42"
                            },
                            {
                                "nameprop": "tamaño",
                                "options": [
                                    "22",
                                    "24",
                                    "28",
                                    "32",
                                    "40",
                                    "42",
                                    "43",
                                    "48",
                                    "49",
                                    "50",
                                    "55",
                                    "59",
                                    "60",
                                    "65",
                                    "70",
                                    "75",
                                    "77",
                                    "85"
                                ],
                                "_id": "62bc982d7531a26c209cdd43"
                            },
                            {
                                "nameprop": "resolucion",
                                "options": [
                                    "HD",
                                    "full HD",
                                    "4k",
                                    "8k",
                                    "UHD"
                                ],
                                "_id": "62bc982d7531a26c209cdd44"
                            },
                            {
                                "nameprop": "tipo",
                                "options": [
                                    "LED",
                                    "LCD"
                                ],
                                "_id": "62bc982d7531a26c209cdd45"
                            }
                        ]
                    },
                    {
                        "_id": "62bc98677531a26c209cdd47",
                        "name": "Drones",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bc98677531a26c209cdd48"
                            }
                        ]
                    },
                    {
                        "_id": "62bc98ff7531a26c209cdd4a",
                        "name": "Accesorios Tec",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bc98ff7531a26c209cdd4b"
                            }
                        ]
                    }
                ]
            },
            {
                "_id": "62bc9ce7fb89b40812de09a4",
                "name": "Vehículos",
                "subcategories": [
                    {
                        "_id": "62bc9b81fb89b40812de0987",
                        "name": "Autos",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bc9b81fb89b40812de0988"
                            },
                            {
                                "nameprop": "puertas",
                                "options": [
                                    "2",
                                    "4",
                                    "5"
                                ],
                                "_id": "62bc9b81fb89b40812de0989"
                            },
                            {
                                "nameprop": "modelo",
                                "options": [],
                                "_id": "62bc9b81fb89b40812de098a"
                            },
                            {
                                "nameprop": "año",
                                "options": [],
                                "_id": "62bc9b81fb89b40812de098b"
                            },
                            {
                                "nameprop": "kilometraje",
                                "options": [],
                                "_id": "62bc9b81fb89b40812de098c"
                            }
                        ]
                    },
                    {
                        "_id": "62bc9b9dfb89b40812de098e",
                        "name": "Motos",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bc9b9dfb89b40812de098f"
                            },
                            {
                                "nameprop": "modelo",
                                "options": [],
                                "_id": "62bc9b9dfb89b40812de0990"
                            },
                            {
                                "nameprop": "año",
                                "options": [],
                                "_id": "62bc9b9dfb89b40812de0991"
                            },
                            {
                                "nameprop": "kilometraje",
                                "options": [],
                                "_id": "62bc9b9dfb89b40812de0992"
                            }
                        ]
                    },
                    {
                        "_id": "62bc9bc3fb89b40812de0994",
                        "name": "Camionetas",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bc9bc3fb89b40812de0995"
                            },
                            {
                                "nameprop": "puertas",
                                "options": [
                                    "2",
                                    "4",
                                    "5"
                                ],
                                "_id": "62bc9bc3fb89b40812de0996"
                            },
                            {
                                "nameprop": "modelo",
                                "options": [],
                                "_id": "62bc9bc3fb89b40812de0997"
                            },
                            {
                                "nameprop": "año",
                                "options": [],
                                "_id": "62bc9bc3fb89b40812de0998"
                            },
                            {
                                "nameprop": "kilometraje",
                                "options": [],
                                "_id": "62bc9bc3fb89b40812de0999"
                            }
                        ]
                    },
                    {
                        "_id": "62bc9bd3fb89b40812de099b",
                        "name": "Camiones",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bc9bd3fb89b40812de099c"
                            },
                            {
                                "nameprop": "modelo",
                                "options": [],
                                "_id": "62bc9bd3fb89b40812de099d"
                            },
                            {
                                "nameprop": "año",
                                "options": [],
                                "_id": "62bc9bd3fb89b40812de099e"
                            },
                            {
                                "nameprop": "kilometraje",
                                "options": [],
                                "_id": "62bc9bd3fb89b40812de099f"
                            }
                        ]
                    },
                    {
                        "_id": "62bc9c0bfb89b40812de09a1",
                        "name": "Otros Vehículos",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bc9c0bfb89b40812de09a2"
                            }
                        ]
                    }
                ]
            },
            {
                "_id": "62bca178428cf3f97d274e38",
                "name": "Ropa",
                "subcategories": [
                    {
                        "_id": "62bc9e2d428cf3f97d274e1c",
                        "name": "Remeras",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bc9e2d428cf3f97d274e1d"
                            },
                            {
                                "nameprop": "talles",
                                "options": [
                                    "XS\"",
                                    "S\"",
                                    "M\"",
                                    "L\"",
                                    "XL\"",
                                    "XXL\"",
                                    "XXXL\""
                                ],
                                "_id": "62bc9e2d428cf3f97d274e1e"
                            }
                        ]
                    },
                    {
                        "_id": "62bc9e35428cf3f97d274e20",
                        "name": "Camperas",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bc9e35428cf3f97d274e21"
                            },
                            {
                                "nameprop": "talles",
                                "options": [
                                    "XS\"",
                                    "S\"",
                                    "M\"",
                                    "L\"",
                                    "XL\""
                                ],
                                "_id": "62bc9e35428cf3f97d274e22"
                            }
                        ]
                    },
                    {
                        "_id": "62bc9e3a428cf3f97d274e24",
                        "name": "Camisas",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bc9e3a428cf3f97d274e25"
                            },
                            {
                                "nameprop": "talles",
                                "options": [
                                    "XS\"",
                                    "S\"",
                                    "M\"",
                                    "L\"",
                                    "XL\"",
                                    "XXL\""
                                ],
                                "_id": "62bc9e3a428cf3f97d274e26"
                            }
                        ]
                    },
                    {
                        "_id": "62bc9f06428cf3f97d274e28",
                        "name": "Pantalones",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bc9f06428cf3f97d274e29"
                            },
                            {
                                "nameprop": "talles",
                                "options": [],
                                "_id": "62bc9f06428cf3f97d274e2a"
                            }
                        ]
                    },
                    {
                        "_id": "62bca003428cf3f97d274e2c",
                        "name": "Zapatillas",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bca003428cf3f97d274e2d"
                            },
                            {
                                "nameprop": "talles",
                                "options": [],
                                "_id": "62bca003428cf3f97d274e2e"
                            }
                        ]
                    },
                    {
                        "_id": "62bca012428cf3f97d274e30",
                        "name": "Zapatos",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bca012428cf3f97d274e31"
                            },
                            {
                                "nameprop": "talles",
                                "options": [],
                                "_id": "62bca012428cf3f97d274e32"
                            }
                        ]
                    },
                    {
                        "_id": "62bca109428cf3f97d274e34",
                        "name": "Bebes",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bca109428cf3f97d274e35"
                            },
                            {
                                "nameprop": "talles",
                                "options": [],
                                "_id": "62bca109428cf3f97d274e36"
                            }
                        ]
                    },
                    {
                        "_id": "62bca1547531a26c209cdd4f",
                        "name": "Otros Ropa",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bca1547531a26c209cdd50"
                            }
                        ]
                    }
                ]
            },
            {
                "_id": "62bca43d428cf3f97d274e40",
                "name": "Alimentos",
                "subcategories": [
                    {
                        "_id": "62bca3c4428cf3f97d274e3a",
                        "name": "No perecederos",
                        "properties": []
                    },
                    {
                        "_id": "62bca3db7531a26c209cdd54",
                        "name": "Golosinas",
                        "properties": []
                    },
                    {
                        "_id": "62bca3e9428cf3f97d274e3c",
                        "name": "Bebidas Alcohólicas",
                        "properties": []
                    },
                    {
                        "_id": "62bca3f3428cf3f97d274e3e",
                        "name": "Bebidas sin alcohol",
                        "properties": []
                    }
                ]
            },
            {
                "_id": "62bca676428cf3f97d274e4a",
                "name": "Cuidado personal",
                "subcategories": [
                    {
                        "_id": "62bca4ff428cf3f97d274e42",
                        "name": "Higiene",
                        "properties": []
                    },
                    {
                        "_id": "62bca5d7428cf3f97d274e44",
                        "name": "Estética",
                        "properties": [
                            {
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bca5d7428cf3f97d274e45",
                                "nameprop": "color"
                            }
                        ]
                    },
                    {
                        "_id": "62bca5f4428cf3f97d274e47",
                        "name": "Cosmética",
                        "properties": [
                            {
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bca5f4428cf3f97d274e48",
                                "nameprop": "color"
                            }
                        ]
                    }
                ]
            },
            {
                "_id": "62bcaf56428cf3f97d274e7c",
                "name": "Electrodomésticos",
                "subcategories": [
                    {
                        "_id": "62bcad93428cf3f97d274e60",
                        "name": "Cocinas",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bcad93428cf3f97d274e61"
                            },
                            {
                                "nameprop": "tipo",
                                "options": [
                                    "eléctrica",
                                    "gas"
                                ],
                                "_id": "62bcad93428cf3f97d274e62"
                            },
                            {
                                "nameprop": "alto",
                                "options": [],
                                "_id": "62bcad93428cf3f97d274e63"
                            },
                            {
                                "nameprop": "ancho",
                                "options": [],
                                "_id": "62bcad93428cf3f97d274e64"
                            },
                            {
                                "nameprop": "profundidad",
                                "options": [],
                                "_id": "62bcad93428cf3f97d274e65"
                            }
                        ]
                    },
                    {
                        "_id": "62bcae24428cf3f97d274e67",
                        "name": "Heladeras",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bcae24428cf3f97d274e68"
                            },
                            {
                                "nameprop": "tipo",
                                "options": [
                                    "no-frost",
                                    "frost"
                                ],
                                "_id": "62bcae24428cf3f97d274e69"
                            },
                            {
                                "nameprop": "alto",
                                "options": [],
                                "_id": "62bcae24428cf3f97d274e6a"
                            },
                            {
                                "nameprop": "ancho",
                                "options": [],
                                "_id": "62bcae24428cf3f97d274e6b"
                            },
                            {
                                "nameprop": "profundidad",
                                "options": [],
                                "_id": "62bcae24428cf3f97d274e6c"
                            }
                        ]
                    },
                    {
                        "_id": "62bcae99428cf3f97d274e6e",
                        "name": "Lavarropas",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bcae99428cf3f97d274e6f"
                            },
                            {
                                "nameprop": "capacidad de volumen",
                                "options": [],
                                "_id": "62bcae99428cf3f97d274e70"
                            },
                            {
                                "nameprop": "tipo de carga",
                                "options": [
                                    "frontal",
                                    "superior"
                                ],
                                "_id": "62bcae99428cf3f97d274e71"
                            },
                            {
                                "nameprop": "alto",
                                "options": [],
                                "_id": "62bcae99428cf3f97d274e72"
                            },
                            {
                                "nameprop": "ancho",
                                "options": [],
                                "_id": "62bcae99428cf3f97d274e73"
                            },
                            {
                                "nameprop": "profundidad",
                                "options": [],
                                "_id": "62bcae99428cf3f97d274e74"
                            }
                        ]
                    },
                    {
                        "_id": "62bcaefa428cf3f97d274e76",
                        "name": "Otros electrodomésticos",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bcaefa428cf3f97d274e77"
                            },
                            {
                                "nameprop": "alto",
                                "options": [],
                                "_id": "62bcaefa428cf3f97d274e78"
                            },
                            {
                                "nameprop": "ancho",
                                "options": [],
                                "_id": "62bcaefa428cf3f97d274e79"
                            },
                            {
                                "nameprop": "profundidad",
                                "options": [],
                                "_id": "62bcaefa428cf3f97d274e7a"
                            }
                        ]
                    }
                ]
            },
            {
                "_id": "62bcafe7428cf3f97d274e84",
                "name": "Librería",
                "subcategories": [
                    {
                        "_id": "62bcafab428cf3f97d274e7e",
                        "name": "Útiles escolares",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bcafab428cf3f97d274e7f"
                            }
                        ]
                    },
                    {
                        "_id": "62bcafb7428cf3f97d274e81",
                        "name": "Útiles de oficina",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bcafb7428cf3f97d274e82"
                            }
                        ]
                    }
                ]
            },
            {
                "_id": "62bcb1d0428cf3f97d274e92",
                "name": "Entretenimiento",
                "subcategories": [
                    {
                        "_id": "62bcb077428cf3f97d274e86",
                        "name": "Juguetes",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bcb077428cf3f97d274e87"
                            }
                        ]
                    },
                    {
                        "_id": "62bcb08a428cf3f97d274e89",
                        "name": "Juegos de mesa",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bcb08a428cf3f97d274e8a"
                            }
                        ]
                    },
                    {
                        "_id": "62bcb0b9428cf3f97d274e8c",
                        "name": "Audiovisual",
                        "properties": []
                    },
                    {
                        "_id": "62bcb165428cf3f97d274e8e",
                        "name": "Consolas",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bcb165428cf3f97d274e8f"
                            },
                            {
                                "nameprop": "modelo",
                                "options": [],
                                "_id": "62bcb165428cf3f97d274e90"
                            }
                        ]
                    }
                ]
            },
            {
                "_id": "62bcb273428cf3f97d274e9c",
                "name": "Herramientas",
                "subcategories": [
                    {
                        "_id": "62bcb222428cf3f97d274e94",
                        "name": "Herramientas Profesionales",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bcb222428cf3f97d274e95"
                            },
                            {
                                "nameprop": "profesión",
                                "options": [],
                                "_id": "62bcb222428cf3f97d274e96"
                            }
                        ]
                    },
                    {
                        "_id": "62bcb24a428cf3f97d274e98",
                        "name": "Herramientas Domésticas",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bcb24a428cf3f97d274e99"
                            },
                            {
                                "nameprop": "profesión",
                                "options": [],
                                "_id": "62bcb24a428cf3f97d274e9a"
                            }
                        ]
                    }
                ]
            },
            {
                "_id": "62bcb443428cf3f97d274eb0",
                "name": "Hogar",
                "subcategories": [
                    {
                        "_id": "62bcb378428cf3f97d274e9e",
                        "name": "Muebles",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bcb378428cf3f97d274e9f"
                            },
                            {
                                "nameprop": "ambiente",
                                "options": [
                                    "cocina",
                                    "sala",
                                    "comedor",
                                    "baño",
                                    "terraza",
                                    "habitacion",
                                    "jardín"
                                ],
                                "_id": "62bcb378428cf3f97d274ea0"
                            },
                            {
                                "nameprop": "material",
                                "options": [],
                                "_id": "62bcb378428cf3f97d274ea1"
                            },
                            {
                                "nameprop": "alto",
                                "options": [],
                                "_id": "62bcb378428cf3f97d274ea2"
                            },
                            {
                                "nameprop": "ancho",
                                "options": [],
                                "_id": "62bcb378428cf3f97d274ea3"
                            },
                            {
                                "nameprop": "profundidad",
                                "options": [],
                                "_id": "62bcb378428cf3f97d274ea4"
                            }
                        ]
                    },
                    {
                        "_id": "62bcb3b7428cf3f97d274ea6",
                        "name": "Decoración",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bcb3b7428cf3f97d274ea7"
                            },
                            {
                                "nameprop": "ambiente",
                                "options": [
                                    "cocina",
                                    "sala",
                                    "comedor",
                                    "baño",
                                    "terraza",
                                    "habitacion",
                                    "jardín"
                                ],
                                "_id": "62bcb3b7428cf3f97d274ea8"
                            },
                            {
                                "nameprop": "alto",
                                "options": [],
                                "_id": "62bcb3b7428cf3f97d274ea9"
                            },
                            {
                                "nameprop": "ancho",
                                "options": [],
                                "_id": "62bcb3b7428cf3f97d274eaa"
                            },
                            {
                                "nameprop": "profundidad",
                                "options": [],
                                "_id": "62bcb3b7428cf3f97d274eab"
                            }
                        ]
                    },
                    {
                        "_id": "62bcb404428cf3f97d274ead",
                        "name": "Otros hogar",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bcb404428cf3f97d274eae"
                            }
                        ]
                    }
                ]
            },
            {
                "_id": "62bcb4ef428cf3f97d274eb7",
                "name": "Deportes",
                "subcategories": [
                    {
                        "_id": "62bcb495428cf3f97d274eb2",
                        "name": "Accesorios deportivos",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bcb495428cf3f97d274eb3"
                            }
                        ]
                    },
                    {
                        "_id": "62bcb4c0428cf3f97d274eb5",
                        "name": "Fitness",
                        "properties": []
                    }
                ]
            },
            {
                "_id": "62bcb664428cf3f97d274ecb",
                "name": "Inmobiliaria",
                "subcategories": [
                    {
                        "_id": "62bcb5e2428cf3f97d274eb9",
                        "name": "Departamentos",
                        "properties": [
                            {
                                "nameprop": "piezas",
                                "options": [],
                                "_id": "62bcb5e2428cf3f97d274eba"
                            },
                            {
                                "nameprop": "baños",
                                "options": [],
                                "_id": "62bcb5e2428cf3f97d274ebb"
                            },
                            {
                                "nameprop": "área",
                                "options": [],
                                "_id": "62bcb5e2428cf3f97d274ebc"
                            }
                        ]
                    },
                    {
                        "_id": "62bcb5f2428cf3f97d274ebe",
                        "name": "Casas",
                        "properties": [
                            {
                                "nameprop": "piezas",
                                "options": [],
                                "_id": "62bcb5f2428cf3f97d274ebf"
                            },
                            {
                                "nameprop": "baños",
                                "options": [],
                                "_id": "62bcb5f2428cf3f97d274ec0"
                            },
                            {
                                "nameprop": "área",
                                "options": [],
                                "_id": "62bcb5f2428cf3f97d274ec1"
                            }
                        ]
                    },
                    {
                        "_id": "62bcb5f9428cf3f97d274ec3",
                        "name": "Local",
                        "properties": [
                            {
                                "nameprop": "piezas",
                                "options": [],
                                "_id": "62bcb5f9428cf3f97d274ec4"
                            },
                            {
                                "nameprop": "baños",
                                "options": [],
                                "_id": "62bcb5f9428cf3f97d274ec5"
                            },
                            {
                                "nameprop": "área",
                                "options": [],
                                "_id": "62bcb5f9428cf3f97d274ec6"
                            }
                        ]
                    },
                    {
                        "_id": "62bcb616428cf3f97d274ec8",
                        "name": "Terreno",
                        "properties": [
                            {
                                "nameprop": "área",
                                "options": [],
                                "_id": "62bcb616428cf3f97d274ec9"
                            }
                        ]
                    }
                ]
            },
            {
                "_id": "62bcb7ef428cf3f97d274ecf",
                "name": "Otros",
                "subcategories": [
                    {
                        "_id": "62bcb6f27531a26c209cdd56",
                        "name": "Instrumentos",
                        "properties": [
                            {
                                "nameprop": "color",
                                "options": [
                                    "amarrillo",
                                    "azul",
                                    "blanco",
                                    "bordó",
                                    "celeste",
                                    "dorado",
                                    "gris",
                                    "marrón",
                                    "naranja",
                                    "negro",
                                    "plateado",
                                    "rojo",
                                    "verde"
                                ],
                                "_id": "62bcb6f27531a26c209cdd57"
                            },
                            {
                                "nameprop": "tipo",
                                "options": [
                                    "percusión",
                                    "viento",
                                    "cuerda"
                                ],
                                "_id": "62bcb6f27531a26c209cdd58"
                            }
                        ]
                    },
                    {
                        "_id": "62bcb736428cf3f97d274ecd",
                        "name": "Servicios",
                        "properties": []
                    },
                    {
                        "_id": "62bcb7527531a26c209cdd5a",
                        "name": "Eventos",
                        "properties": []
                    },
                    {
                        "_id": "62bcb76b7531a26c209cdd5c",
                        "name": "Otros...",
                        "properties": []
                    }
                ]
            }
        ]
    }
}
export default categoriasMock;