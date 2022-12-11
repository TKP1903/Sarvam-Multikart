const _allProducts = [
  // Only 2 _categories ( hand and foot protection )
  {
    id: 1,
    title: "Gloves Cotton Knitted - Colour : Blue",
    description: "Product 1 description",
    price: 14.5,
    img: "https://sarvamsafety.com/image/cache/catalog/32%20Gloves%20Cotton%20Knitted%2090%20gms%20-%207%20Gauge%20-%20Blue-270x270.jpg",
    category: "hand-protection",
  },
  {
    id: 2,
    title: "Gloves Cotton Knitted - 7 GAUGE - KNP",
    description: "Product 2 description",
    price: 12.65,
    img: "https://sarvamsafety.com/image/cache/catalog/28%20Gloves%20Cotton%20Knitted%2070%20gms%20-%207%20GAUGE%20%20-%20KNP-270x270.jpg",
    category: "hand-protection",
  },
  {
    id: 3,
    title: "Gloves Cotton Knitted - Colour: Dark Grey",
    description: "Product 3 description",
    price: 11.5,
    img: "https://sarvamsafety.com/image/cache/catalog/8%20Gloves%20Cotton%20Knitted%2050gms%20-%20Colour%20Dark%20Grey-270x270.jpg",
    category: "hand-protection",
  },
  {
    id: 4,
    title: "Gloves Maxilite Nitrile Single Side Dipped",
    description: "Product 4 description",
    price: 130,
    img: "https://sarvamsafety.com/image/cache/catalog/products/82%20Gloves%20Neoprene%20-%20HD%2027%20NEO-270x270.jpg",
    category: "hand-protection",
  },
  {
    id: 5,
    title: "Gloves Neoprene - HD 27 NEO",
    description: "Product 5 description",
    price: 130,
    img: "https://sarvamsafety.com/image/cache/catalog/products/82%20Gloves%20Neoprene%20-%20HD%2027%20NEO-270x270.jpg",
    category: "hand-protection",
  },
  {
    id: 6,
    title: "Gloves Neoprene - NEO 400",
    description: "Product 6 description",
    price: 180,
    img: "https://sarvamsafety.com/image/cache/catalog/products/93%20Gloves%20Neoprene%20-%20NEO%20400-270x270.jpg",
    category: "hand-protection",
  },
  {
    id: 7,
    title:
      "Adjacent Safety Shoe - S.T. Grain Leather - DIP PU Sole - D.D ; D.C - Low Ankle",
    description: "Product 7 description",
    price: 1070.0,
    img: "https://sarvamsafety.com/image/cache/catalog/3-270x270.jpg",
    category: "foot-protection",
  },
  {
    id: 8,
    title:
      "Allen Cooper 1177 Safety Shoe - S.T- Upper BT Leather - PU D.D, D.C Sole - L.A",
    description: "Product 8 description",
    price: 1280.0,
    img: "https://sarvamsafety.com/image/cache/catalog/products/147%20Safety%20Shoe%20-%20S.T-%20Upper%20BT%20Leather%20-%20PU%20D.D,%20D.C%20Sole%20-%20L.A%20-%20Size%208%20-%20AC%201177-270x270.jpg",
    category: "foot-protection",
  },
  {
    id: 9,
    title:
      "Allen Cooper Safety Shoe - S.T- Upper Buff Barton Leather - PU D.D, D.C Sole - L.A - 1284",
    description: "Product 9 description",
    price: 1335.0,
    img: "https://sarvamsafety.com/image/cache/catalog/1-270x270.jpg",
    category: "foot-protection",
  },
  {
    id: 10,
    title:
      "Allen Cooper Safety Shoe S.T. Booty Print Leather - PU - D.D - D.C Sole - High Ankle",
    description:
      "Allen Cooper Safety Shoe S.T. Booty Print Leather - PU - D.D - D.C Sole - High Ankle",
    price: 1625.0,
    img: "https://sarvamsafety.com/image/cache/catalog/products/2-100x100-270x270.jpeg",
    category: "foot-protection",
  },
  // 11th dec 2022

  {
    "category": "calibration",
    "description": "BW-Solo",
    "id": 21,
    "img": "/assets/images/sarvam/products/calibration/BW-Solo.png",
    "price": 0,
    "title": "BW-Solo"
  },
  {
    "category": "calibration",
    "description": "image",
    "id": 22,
    "img": "/assets/images/sarvam/products/calibration/image.png",
    "price": 0,
    "title": "image"
  },
  {
    "category": "calibration",
    "description": "multirae-wireless-portable-multi-gas-monitor-500x500",
    "id": 23,
    "img": "/assets/images/sarvam/products/calibration/multirae-wireless-portable-multi-gas-monitor-500x500.jpg",
    "price": 0,
    "title": "multirae-wireless-portable-multi-gas-monitor-500x500"
  },
  {
    "category": "calibration",
    "description": "sensepoint_xcl-w1_1",
    "id": 24,
    "img": "/assets/images/sarvam/products/calibration/sensepoint_xcl-w1_1.jpg",
    "price": 0,
    "title": "sensepoint_xcl-w1_1"
  },
  {
    "category": "calibration",
    "description": "sensepoint_xrl-w1_1_",
    "id": 25,
    "img": "/assets/images/sarvam/products/calibration/sensepoint_xrl-w1_1_.jpg",
    "price": 0,
    "title": "sensepoint_xrl-w1_1_"
  },
  {
    "category": "coverall",
    "description": "coverall 1",
    "id": 26,
    "img": "/assets/images/sarvam/products/coverall/coverall 1.png",
    "price": 0,
    "title": "coverall 1"
  },
  {
    "category": "coverall",
    "description": "coverall 10",
    "id": 27,
    "img": "/assets/images/sarvam/products/coverall/coverall 10.png",
    "price": 0,
    "title": "coverall 10"
  },
  {
    "category": "coverall",
    "description": "coverall 11",
    "id": 28,
    "img": "/assets/images/sarvam/products/coverall/coverall 11.png",
    "price": 0,
    "title": "coverall 11"
  },
  {
    "category": "coverall",
    "description": "coverall 12",
    "id": 29,
    "img": "/assets/images/sarvam/products/coverall/coverall 12.png",
    "price": 0,
    "title": "coverall 12"
  },
  {
    "category": "coverall",
    "description": "coverall 13",
    "id": 30,
    "img": "/assets/images/sarvam/products/coverall/coverall 13.png",
    "price": 0,
    "title": "coverall 13"
  },
  {
    "category": "coverall",
    "description": "coverall 2",
    "id": 31,
    "img": "/assets/images/sarvam/products/coverall/coverall 2.png",
    "price": 0,
    "title": "coverall 2"
  },
  {
    "category": "coverall",
    "description": "coverall 3",
    "id": 32,
    "img": "/assets/images/sarvam/products/coverall/coverall 3.png",
    "price": 0,
    "title": "coverall 3"
  },
  {
    "category": "coverall",
    "description": "coverall 7",
    "id": 33,
    "img": "/assets/images/sarvam/products/coverall/coverall 7.png",
    "price": 0,
    "title": "coverall 7"
  },
  {
    "category": "coverall",
    "description": "coverall 8",
    "id": 34,
    "img": "/assets/images/sarvam/products/coverall/coverall 8.png",
    "price": 0,
    "title": "coverall 8"
  },
  {
    "category": "coverall",
    "description": "coverall 9",
    "id": 35,
    "img": "/assets/images/sarvam/products/coverall/coverall 9.png",
    "price": 0,
    "title": "coverall 9"
  },
  {
    "category": "fall-arrest",
    "description": "fall-arrest 1",
    "id": 36,
    "img": "/assets/images/sarvam/products/fall-arrest/fall-arrest 1.png",
    "price": 0,
    "title": "fall-arrest 1"
  },
  {
    "category": "fall-arrest",
    "description": "fall-arrest 2",
    "id": 37,
    "img": "/assets/images/sarvam/products/fall-arrest/fall-arrest 2.png",
    "price": 0,
    "title": "fall-arrest 2"
  },
  {
    "category": "hand-protection",
    "description": "Glove 01",
    "id": 38,
    "img": "/assets/images/sarvam/products/hand-protection/Glove 01.png",
    "price": 0,
    "title": "Glove 01"
  },
  {
    "category": "hand-protection",
    "description": "Glove 02",
    "id": 39,
    "img": "/assets/images/sarvam/products/hand-protection/Glove 02.png",
    "price": 0,
    "title": "Glove 02"
  },
  {
    "category": "hand-protection",
    "description": "Glove 03",
    "id": 40,
    "img": "/assets/images/sarvam/products/hand-protection/Glove 03.png",
    "price": 0,
    "title": "Glove 03"
  },
  {
    "category": "hand-protection",
    "description": "Glove 04",
    "id": 41,
    "img": "/assets/images/sarvam/products/hand-protection/Glove 04.png",
    "price": 0,
    "title": "Glove 04"
  },
  {
    "category": "hand-protection",
    "description": "Glove 05",
    "id": 42,
    "img": "/assets/images/sarvam/products/hand-protection/Glove 05.png",
    "price": 0,
    "title": "Glove 05"
  },
  {
    "category": "hand-protection",
    "description": "Glove 06",
    "id": 43,
    "img": "/assets/images/sarvam/products/hand-protection/Glove 06.png",
    "price": 0,
    "title": "Glove 06"
  },
  {
    "category": "hand-protection",
    "description": "Glove 07",
    "id": 44,
    "img": "/assets/images/sarvam/products/hand-protection/Glove 07.jpg",
    "price": 0,
    "title": "Glove 07"
  },
  {
    "category": "hand-protection",
    "description": "Glove 08",
    "id": 45,
    "img": "/assets/images/sarvam/products/hand-protection/Glove 08.jpg",
    "price": 0,
    "title": "Glove 08"
  },
  {
    "category": "hand-protection",
    "description": "Glove 09",
    "id": 46,
    "img": "/assets/images/sarvam/products/hand-protection/Glove 09.jpg",
    "price": 0,
    "title": "Glove 09"
  },
  {
    "category": "hand-protection",
    "description": "Glove 10",
    "id": 47,
    "img": "/assets/images/sarvam/products/hand-protection/Glove 10.jpg",
    "price": 0,
    "title": "Glove 10"
  },
  {
    "category": "hand-protection",
    "description": "Glove 11",
    "id": 48,
    "img": "/assets/images/sarvam/products/hand-protection/Glove 11.jpg",
    "price": 0,
    "title": "Glove 11"
  },
  {
    "category": "hand-protection",
    "description": "Glove 12",
    "id": 49,
    "img": "/assets/images/sarvam/products/hand-protection/Glove 12.jpg",
    "price": 0,
    "title": "Glove 12"
  },
  {
    "category": "hand-protection",
    "description": "Glove 13",
    "id": 50,
    "img": "/assets/images/sarvam/products/hand-protection/Glove 13.jpg",
    "price": 0,
    "title": "Glove 13"
  },
  {
    "category": "hand-protection",
    "description": "Glove 14",
    "id": 51,
    "img": "/assets/images/sarvam/products/hand-protection/Glove 14.jpg",
    "price": 0,
    "title": "Glove 14"
  },
  {
    "category": "hand-protection",
    "description": "Glove 15",
    "id": 52,
    "img": "/assets/images/sarvam/products/hand-protection/Glove 15.jpg",
    "price": 0,
    "title": "Glove 15"
  },
  {
    "category": "hand-protection",
    "description": "Glove 16",
    "id": 53,
    "img": "/assets/images/sarvam/products/hand-protection/Glove 16.jpg",
    "price": 0,
    "title": "Glove 16"
  },
  {
    "category": "hand-protection",
    "description": "Glove 17",
    "id": 54,
    "img": "/assets/images/sarvam/products/hand-protection/Glove 17.jpg",
    "price": 0,
    "title": "Glove 17"
  },
  {
    "category": "hand-protection",
    "description": "Glove 18",
    "id": 55,
    "img": "/assets/images/sarvam/products/hand-protection/Glove 18.jpg",
    "price": 0,
    "title": "Glove 18"
  },
  {
    "category": "hand-protection",
    "description": "Glove 19",
    "id": 56,
    "img": "/assets/images/sarvam/products/hand-protection/Glove 19.jpg",
    "price": 0,
    "title": "Glove 19"
  },
  {
    "category": "hand-protection",
    "description": "Glove 20",
    "id": 57,
    "img": "/assets/images/sarvam/products/hand-protection/Glove 20.jpg",
    "price": 0,
    "title": "Glove 20"
  },
  {
    "category": "hand-protection",
    "description": "Glove 21",
    "id": 58,
    "img": "/assets/images/sarvam/products/hand-protection/Glove 21.jpg",
    "price": 0,
    "title": "Glove 21"
  },
  {
    "category": "hand-protection",
    "description": "Glove 22",
    "id": 59,
    "img": "/assets/images/sarvam/products/hand-protection/Glove 22.jpg",
    "price": 0,
    "title": "Glove 22"
  },
  {
    "category": "hand-protection",
    "description": "Glove 22",
    "id": 60,
    "img": "/assets/images/sarvam/products/hand-protection/Glove 22.png",
    "price": 0,
    "title": "Glove 22"
  },
  {
    "category": "hand-protection",
    "description": "Glove 23",
    "id": 61,
    "img": "/assets/images/sarvam/products/hand-protection/Glove 23.jpg",
    "price": 0,
    "title": "Glove 23"
  },
  {
    "category": "hand-protection",
    "description": "Glove 23",
    "id": 62,
    "img": "/assets/images/sarvam/products/hand-protection/Glove 23.png",
    "price": 0,
    "title": "Glove 23"
  },
  {
    "category": "hand-protection",
    "description": "Glove 24",
    "id": 63,
    "img": "/assets/images/sarvam/products/hand-protection/Glove 24.jpg",
    "price": 0,
    "title": "Glove 24"
  },
  {
    "category": "hand-protection",
    "description": "Glove 24",
    "id": 64,
    "img": "/assets/images/sarvam/products/hand-protection/Glove 24.png",
    "price": 0,
    "title": "Glove 24"
  },
  {
    "category": "hand-protection",
    "description": "Glove 25",
    "id": 65,
    "img": "/assets/images/sarvam/products/hand-protection/Glove 25.jpg",
    "price": 0,
    "title": "Glove 25"
  },
  {
    "category": "hand-protection",
    "description": "Glove 25",
    "id": 66,
    "img": "/assets/images/sarvam/products/hand-protection/Glove 25.png",
    "price": 0,
    "title": "Glove 25"
  },
  {
    "category": "hand-protection",
    "description": "Glove 26",
    "id": 67,
    "img": "/assets/images/sarvam/products/hand-protection/Glove 26.jpg",
    "price": 0,
    "title": "Glove 26"
  },
  {
    "category": "hand-protection",
    "description": "Glove 26",
    "id": 68,
    "img": "/assets/images/sarvam/products/hand-protection/Glove 26.png",
    "price": 0,
    "title": "Glove 26"
  },
  {
    "category": "hand-protection",
    "description": "Glove 27",
    "id": 69,
    "img": "/assets/images/sarvam/products/hand-protection/Glove 27.jpg",
    "price": 0,
    "title": "Glove 27"
  },
  {
    "category": "hand-protection",
    "description": "Glove 28",
    "id": 70,
    "img": "/assets/images/sarvam/products/hand-protection/Glove 28.png",
    "price": 0,
    "title": "Glove 28"
  },
  {
    "category": "hand-protection",
    "description": "Glove BLACK 1",
    "id": 71,
    "img": "/assets/images/sarvam/products/hand-protection/Glove BLACK 1.png",
    "price": 0,
    "title": "Glove BLACK 1"
  },
  {
    "category": "hand-protection",
    "description": "NKD5001",
    "id": 72,
    "img": "/assets/images/sarvam/products/hand-protection/NKD5001.png",
    "price": 0,
    "title": "NKD5001"
  },
  {
    "category": "respiratory-protection",
    "description": "3M 1200",
    "id": 73,
    "img": "/assets/images/sarvam/products/respiratory-protection/3M 1200.jpg",
    "price": 0,
    "title": "3M 1200"
  },
  {
    "category": "respiratory-protection",
    "description": "3M 6200 half face piece_1",
    "id": 74,
    "img": "/assets/images/sarvam/products/respiratory-protection/3M 6200 half face piece_1.png",
    "price": 0,
    "title": "3M 6200 half face piece_1"
  },
  {
    "category": "respiratory-protection",
    "description": "3M 6800 full face piece_1",
    "id": 75,
    "img": "/assets/images/sarvam/products/respiratory-protection/3M 6800 full face piece_1.png",
    "price": 0,
    "title": "3M 6800 full face piece_1"
  },
  {
    "category": "respiratory-protection",
    "description": "3M 7502",
    "id": 76,
    "img": "/assets/images/sarvam/products/respiratory-protection/3M 7502.jpg",
    "price": 0,
    "title": "3M 7502"
  },
  {
    "category": "respiratory-protection",
    "description": "3M ADFLO SERIES",
    "id": 77,
    "img": "/assets/images/sarvam/products/respiratory-protection/3M ADFLO SERIES.jpg",
    "price": 0,
    "title": "3M ADFLO SERIES"
  },
  {
    "category": "respiratory-protection",
    "description": "3M G5-01",
    "id": 78,
    "img": "/assets/images/sarvam/products/respiratory-protection/3M G5-01.png",
    "price": 0,
    "title": "3M G5-01"
  },
  {
    "category": "respiratory-protection",
    "description": "3M Mat-na-phong-doc-3M-HF52-1a",
    "id": 79,
    "img": "/assets/images/sarvam/products/respiratory-protection/3M Mat-na-phong-doc-3M-HF52-1a.jpg",
    "price": 0,
    "title": "3M Mat-na-phong-doc-3M-HF52-1a"
  },
  {
    "category": "respiratory-protection",
    "description": "3M TR 300",
    "id": 80,
    "img": "/assets/images/sarvam/products/respiratory-protection/3M TR 300.jpg",
    "price": 0,
    "title": "3M TR 300"
  },
  {
    "category": "respiratory-protection",
    "description": "3M TR 600",
    "id": 81,
    "img": "/assets/images/sarvam/products/respiratory-protection/3M TR 600.jpg",
    "price": 0,
    "title": "3M TR 600"
  },
  {
    "category": "respiratory-protection",
    "description": "3M VERSAFLO",
    "id": 82,
    "img": "/assets/images/sarvam/products/respiratory-protection/3M VERSAFLO.jpg",
    "price": 0,
    "title": "3M VERSAFLO"
  },
  {
    "category": "respiratory-protection",
    "description": "3M VERTEX COOLING SYSTEM",
    "id": 83,
    "img": "/assets/images/sarvam/products/respiratory-protection/3M VERTEX COOLING SYSTEM.jpg",
    "price": 0,
    "title": "3M VERTEX COOLING SYSTEM"
  },
  {
    "category": "respiratory-protection",
    "description": "3M-3200",
    "id": 84,
    "img": "/assets/images/sarvam/products/respiratory-protection/3M-3200.jpg",
    "price": 0,
    "title": "3M-3200"
  },
  {
    "category": "respiratory-protection",
    "description": "3M-SA-2000",
    "id": 85,
    "img": "/assets/images/sarvam/products/respiratory-protection/3M-SA-2000.jpg",
    "price": 0,
    "title": "3M-SA-2000"
  },
  {
    "category": "respiratory-protection",
    "description": "HONEYWELL 1005591 - 5140 PNG - Copy",
    "id": 86,
    "img": "/assets/images/sarvam/products/respiratory-protection/HONEYWELL 1005591 - 5140 PNG - Copy.png",
    "price": 0,
    "title": "HONEYWELL 1005591 - 5140 PNG - Copy"
  },
  {
    "category": "respiratory-protection",
    "description": "HONEYWELL 1015635 - 5311 png - Copy",
    "id": 87,
    "img": "/assets/images/sarvam/products/respiratory-protection/HONEYWELL 1015635 - 5311 png - Copy.png",
    "price": 0,
    "title": "HONEYWELL 1015635 - 5311 png - Copy"
  },
  {
    "category": "respiratory-protection",
    "description": "HONEYWELL H910 PLUS PNG - Copy",
    "id": 88,
    "img": "/assets/images/sarvam/products/respiratory-protection/HONEYWELL H910 PLUS PNG - Copy.png",
    "price": 0,
    "title": "HONEYWELL H910 PLUS PNG - Copy"
  },
  {
    "category": "respiratory-protection",
    "description": "HONEYWELL HONEYWELL_5251 - Copy",
    "id": 89,
    "img": "/assets/images/sarvam/products/respiratory-protection/HONEYWELL HONEYWELL_5251 - Copy.png",
    "price": 0,
    "title": "HONEYWELL HONEYWELL_5251 - Copy"
  },
  {
    "category": "respiratory-protection",
    "description": "HONEYWELL SUPERONE-3207 1032501 png - Copy",
    "id": 90,
    "img": "/assets/images/sarvam/products/respiratory-protection/HONEYWELL SUPERONE-3207 1032501 png - Copy.png",
    "price": 0,
    "title": "HONEYWELL SUPERONE-3207 1032501 png - Copy"
  },
  {
    "category": "respiratory-protection",
    "description": "HONEYWELL T8000FullSet",
    "id": 91,
    "img": "/assets/images/sarvam/products/respiratory-protection/HONEYWELL T8000FullSet.png0111.png",
    "price": 0,
    "title": "HONEYWELL T8000FullSet"
  },
  {
    "category": "safety-cans-and-carbinates",
    "description": "129698_V_Lg",
    "id": 92,
    "img": "/assets/images/sarvam/products/safety-cans-and-carbinates/129698_V_Lg.jpg",
    "price": 0,
    "title": "129698_V_Lg"
  },
  {
    "category": "safety-cans-and-carbinates",
    "description": "253261-acid-corrosive-storage-locking-cabinet-diversiifed",
    "id": 93,
    "img": "/assets/images/sarvam/products/safety-cans-and-carbinates/253261-acid-corrosive-storage-locking-cabinet-diversiifed.png",
    "price": 0,
    "title": "253261-acid-corrosive-storage-locking-cabinet-diversiifed"
  },
  {
    "category": "safety-cans-and-carbinates",
    "description": "2827_2_202101211650295608966_rawpng",
    "id": 94,
    "img": "/assets/images/sarvam/products/safety-cans-and-carbinates/2827_2_202101211650295608966_rawpng.png",
    "price": 0,
    "title": "2827_2_202101211650295608966_rawpng"
  },
  {
    "category": "safety-cans-and-carbinates",
    "description": "28663_use",
    "id": 95,
    "img": "/assets/images/sarvam/products/safety-cans-and-carbinates/28663_use.jpg",
    "price": 0,
    "title": "28663_use"
  },
  {
    "category": "safety-cans-and-carbinates",
    "description": "460185png",
    "id": 96,
    "img": "/assets/images/sarvam/products/safety-cans-and-carbinates/460185png.png",
    "price": 0,
    "title": "460185png"
  },
  {
    "category": "safety-cans-and-carbinates",
    "description": "4WLW7_AS01png",
    "id": 97,
    "img": "/assets/images/sarvam/products/safety-cans-and-carbinates/4WLW7_AS01png.png",
    "price": 0,
    "title": "4WLW7_AS01png"
  },
  {
    "category": "safety-cans-and-carbinates",
    "description": "8831022_3",
    "id": 98,
    "img": "/assets/images/sarvam/products/safety-cans-and-carbinates/8831022_3.png",
    "price": 0,
    "title": "8831022_3"
  },
  {
    "category": "safety-cans-and-carbinates",
    "description": "891202_GRP1_2",
    "id": 99,
    "img": "/assets/images/sarvam/products/safety-cans-and-carbinates/891202_GRP1_2.png",
    "price": 0,
    "title": "891202_GRP1_2"
  },
  {
    "category": "safety-cans-and-carbinates",
    "description": "ChemCor-Lined-safety-cabinets",
    "id": 100,
    "img": "/assets/images/sarvam/products/safety-cans-and-carbinates/ChemCor-Lined-safety-cabinets.png",
    "price": 0,
    "title": "ChemCor-Lined-safety-cabinets"
  },
  {
    "category": "safety-cans-and-carbinates",
    "description": "P-H22855___M",
    "id": 101,
    "img": "/assets/images/sarvam/products/safety-cans-and-carbinates/P-H22855___M.jpg",
    "price": 0,
    "title": "P-H22855___M"
  },
  {
    "category": "safety-cans-and-carbinates",
    "description": "plastic safety cans",
    "id": 102,
    "img": "/assets/images/sarvam/products/safety-cans-and-carbinates/plastic safety cans.jpg",
    "price": 0,
    "title": "plastic safety cans"
  },
  {
    "category": "safety-cans-and-carbinates",
    "description": "png m can",
    "id": 103,
    "img": "/assets/images/sarvam/products/safety-cans-and-carbinates/png m can.png",
    "price": 0,
    "title": "png m can"
  },
  {
    "category": "safety-cans-and-carbinates",
    "description": "png s can",
    "id": 104,
    "img": "/assets/images/sarvam/products/safety-cans-and-carbinates/png s can.png",
    "price": 0,
    "title": "png s can"
  },
  {
    "category": "safety-cans-and-carbinates",
    "description": "png11",
    "id": 105,
    "img": "/assets/images/sarvam/products/safety-cans-and-carbinates/png11.png",
    "price": 0,
    "title": "png11"
  },
  {
    "category": "safety-cans-and-carbinates",
    "description": "png22",
    "id": 106,
    "img": "/assets/images/sarvam/products/safety-cans-and-carbinates/png22.png",
    "price": 0,
    "title": "png22"
  },
  {
    "category": "safety-cans-and-carbinates",
    "description": "png33",
    "id": 107,
    "img": "/assets/images/sarvam/products/safety-cans-and-carbinates/png33.png",
    "price": 0,
    "title": "png33"
  },
  {
    "category": "safety-cans-and-carbinates",
    "description": "PRD_DRM201_ISET",
    "id": 108,
    "img": "/assets/images/sarvam/products/safety-cans-and-carbinates/PRD_DRM201_ISET.jpg",
    "price": 0,
    "title": "PRD_DRM201_ISET"
  },
  {
    "category": "safety-cans-and-carbinates",
    "description": "type 2 safety can png",
    "id": 109,
    "img": "/assets/images/sarvam/products/safety-cans-and-carbinates/type 2 safety can png.png",
    "price": 0,
    "title": "type 2 safety can png"
  },
  {
    "category": "safety-cans-and-carbinates",
    "description": "type 2 safety can",
    "id": 110,
    "img": "/assets/images/sarvam/products/safety-cans-and-carbinates/type 2 safety can.jpg",
    "price": 0,
    "title": "type 2 safety can"
  },
  {
    "category": "safety-cans-and-carbinates",
    "description": "typr 1 safety canns png",
    "id": 111,
    "img": "/assets/images/sarvam/products/safety-cans-and-carbinates/typr 1 safety canns png.png",
    "price": 0,
    "title": "typr 1 safety canns png"
  },
  {
    "category": "safety-cans-and-carbinates",
    "description": "typr 1 safety canns",
    "id": 112,
    "img": "/assets/images/sarvam/products/safety-cans-and-carbinates/typr 1 safety canns.jpg",
    "price": 0,
    "title": "typr 1 safety canns"
  },
  {
    "category": "safety-cans-and-carbinates",
    "description": "unnamed",
    "id": 113,
    "img": "/assets/images/sarvam/products/safety-cans-and-carbinates/unnamed.jpg",
    "price": 0,
    "title": "unnamed"
  },
  {
    "category": "safety-cans-and-carbinates",
    "description": "waste dis png",
    "id": 114,
    "img": "/assets/images/sarvam/products/safety-cans-and-carbinates/waste dis png.png",
    "price": 0,
    "title": "waste dis png"
  },
  {
    "category": "safety-cans-and-carbinates",
    "description": "_2_8_28623_lg_1",
    "id": 115,
    "img": "/assets/images/sarvam/products/safety-cans-and-carbinates/_2_8_28623_lg_1.jpg",
    "price": 0,
    "title": "_2_8_28623_lg_1"
  },
  {
    "category": "shoe",
    "description": "Adjacent",
    "id": 116,
    "img": "/assets/images/sarvam/products/shoe/Adjacent.png",
    "price": 0,
    "title": "Adjacent"
  },
  {
    "category": "shoe",
    "description": "AGILE CT",
    "id": 117,
    "img": "/assets/images/sarvam/products/shoe/AGILE CT.png",
    "price": 0,
    "title": "AGILE CT"
  },
  {
    "category": "shoe",
    "description": "BLITZ",
    "id": 118,
    "img": "/assets/images/sarvam/products/shoe/BLITZ.png",
    "price": 0,
    "title": "BLITZ"
  },
  {
    "category": "shoe",
    "description": "KARAM FS 210",
    "id": 119,
    "img": "/assets/images/sarvam/products/shoe/KARAM FS 210.png",
    "price": 0,
    "title": "KARAM FS 210"
  },
  {
    "category": "shoe",
    "description": "Ketone",
    "id": 120,
    "img": "/assets/images/sarvam/products/shoe/Ketone.png",
    "price": 0,
    "title": "Ketone"
  },
  {
    "category": "shoe",
    "description": "Volant",
    "id": 121,
    "img": "/assets/images/sarvam/products/shoe/Volant.png",
    "price": 0,
    "title": "Volant"
  },
  {
    "category": "traffic-safety",
    "description": "CONE",
    "id": 122,
    "img": "/assets/images/sarvam/products/traffic-safety/CONE.png",
    "price": 0,
    "title": "CONE"
  },
  {
    "category": "traffic-safety",
    "description": "road studs",
    "id": 123,
    "img": "/assets/images/sarvam/products/traffic-safety/road studs.png",
    "price": 0,
    "title": "road studs"
  },
  {
    "category": "traffic-safety",
    "description": "RUBBER CORNER GUARD",
    "id": 124,
    "img": "/assets/images/sarvam/products/traffic-safety/RUBBER CORNER GUARD.png",
    "price": 0,
    "title": "RUBBER CORNER GUARD"
  },
  {
    "category": "traffic-safety",
    "description": "Rubber-Speed-Breaker",
    "id": 125,
    "img": "/assets/images/sarvam/products/traffic-safety/Rubber-Speed-Breaker.jpg",
    "price": 0,
    "title": "Rubber-Speed-Breaker"
  },
  {
    "category": "traffic-safety",
    "description": "Solar-Warning-Traffic-Cone-Light-Red",
    "id": 126,
    "img": "/assets/images/sarvam/products/traffic-safety/Solar-Warning-Traffic-Cone-Light-Red.jpg",
    "price": 0,
    "title": "Solar-Warning-Traffic-Cone-Light-Red"
  },
  // 11th dec 2022 -- shoes

  {
    "category": "feet-protection",
    "description": "ACME 05",
    "id": 127,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/05/1.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/05/2.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/05/3.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/05/4.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/05/5.JPG"
      }
    ],
    "price": 0,
    "title": "ACME 05"
  },
  {
    "category": "feet-protection",
    "description": "ACME 09",
    "id": 128,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/09/1.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/09/2.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/09/3.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/09/4.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/09/5.JPG"
      }
    ],
    "price": 0,
    "title": "ACME 09"
  },
  {
    "category": "feet-protection",
    "description": "ACME 11",
    "id": 129,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/11/IMG_0436.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/11/IMG_0437.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/11/IMG_0438.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/11/IMG_0439.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/11/IMG_0440.JPG"
      }
    ],
    "price": 0,
    "title": "ACME 11"
  },
  {
    "category": "feet-protection",
    "description": "ACME 12",
    "id": 130,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/12/IMG_2670.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/12/IMG_2671.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/12/IMG_2673.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/12/IMG_2674.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/12/IMG_2680.jpg"
      }
    ],
    "price": 0,
    "title": "ACME 12"
  },
  {
    "category": "feet-protection",
    "description": "ACME 13",
    "id": 131,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/13/IMG_2682.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/13/IMG_2684.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/13/IMG_2686.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/13/IMG_2688.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/13/IMG_2689.JPG"
      }
    ],
    "price": 0,
    "title": "ACME 13"
  },
  {
    "category": "feet-protection",
    "description": "ACME 14",
    "id": 132,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/14/IMG_2691.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/14/IMG_2693.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/14/IMG_2696.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/14/IMG_2698.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/14/IMG_2701.JPG"
      }
    ],
    "price": 0,
    "title": "ACME 14"
  },
  {
    "category": "feet-protection",
    "description": "ACME 15",
    "id": 133,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/15/IMG_2703.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/15/IMG_2704.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/15/IMG_2707.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/15/IMG_2710.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/15/IMG_2711.JPG"
      }
    ],
    "price": 0,
    "title": "ACME 15"
  },
  {
    "category": "feet-protection",
    "description": "ACME 17",
    "id": 134,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/17/IMG_0540.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/17/IMG_0541.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/17/IMG_0542.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/17/png023.png"
      }
    ],
    "price": 0,
    "title": "ACME 17"
  },
  {
    "category": "feet-protection",
    "description": "ACME 18",
    "id": 135,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/18/IMG_8306.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/18/IMG_8307.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/18/IMG_8309.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/18/IMG_8312.JPG"
      }
    ],
    "price": 0,
    "title": "ACME 18"
  },
  {
    "category": "feet-protection",
    "description": "ACME ASICS",
    "id": 136,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/ASICS/IMG_0055.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/ASICS/IMG_0056.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/ASICS/IMG_0057.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/ASICS/IMG_0058.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/ASICS/IMG_0059.jpg"
      }
    ],
    "price": 0,
    "title": "ACME ASICS"
  },
  {
    "category": "feet-protection",
    "description": "ACME ATOM",
    "id": 137,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/ATOM/IMG_0025.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/ATOM/IMG_0026.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/ATOM/IMG_0027.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/ATOM/IMG_0028.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/ATOM/IMG_0029.jpg"
      }
    ],
    "price": 0,
    "title": "ACME ATOM"
  },
  {
    "category": "feet-protection",
    "description": "ACME BOXYLIC",
    "id": 138,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/BOXYLIC/IMG_0070.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/BOXYLIC/IMG_0071.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/BOXYLIC/IMG_0072.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/BOXYLIC/IMG_0073.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/BOXYLIC/IMG_0074.jpg"
      }
    ],
    "price": 0,
    "title": "ACME BOXYLIC"
  },
  {
    "category": "feet-protection",
    "description": "ACME ISQUARE",
    "id": 139,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/ISQUARE/IMG_0535.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/ISQUARE/IMG_0536.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/ISQUARE/IMG_0537.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/ISQUARE/png 01.png"
      }
    ],
    "price": 0,
    "title": "ACME ISQUARE"
  },
  {
    "category": "feet-protection",
    "description": "ACME KETONE",
    "id": 140,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/KETONE/IMG_0047.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/KETONE/IMG_0049.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/KETONE/IMG_0051.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/KETONE/IMG_0053.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/KETONE/IMG_0054.jpg"
      }
    ],
    "price": 0,
    "title": "ACME KETONE"
  },
  {
    "category": "feet-protection",
    "description": "ACME NEUTRON",
    "id": 141,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/NEUTRON/IMG_0081.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/NEUTRON/IMG_0082.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/NEUTRON/IMG_0083.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/NEUTRON/IMG_0084.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/NEUTRON/IMG_0085.jpg"
      }
    ],
    "price": 0,
    "title": "ACME NEUTRON"
  },
  {
    "category": "feet-protection",
    "description": "ACME OZONE",
    "id": 142,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/OZONE/IMG_0030.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/OZONE/IMG_0031.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/OZONE/IMG_0032.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/OZONE/IMG_0033.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/OZONE/IMG_0046.jpg"
      }
    ],
    "price": 0,
    "title": "ACME OZONE"
  },
  {
    "category": "feet-protection",
    "description": "ACME STORM",
    "id": 143,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/STORM/IMG_0075.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/STORM/IMG_0076.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/STORM/IMG_0077.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/STORM/IMG_0078.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/STORM/IMG_0080.jpg"
      }
    ],
    "price": 0,
    "title": "ACME STORM"
  },
  {
    "category": "feet-protection",
    "description": "ACME TUSKER",
    "id": 144,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/TUSKER/IMG_0092.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/TUSKER/IMG_0093.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/TUSKER/IMG_0094.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/TUSKER/IMG_0095.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ACME/TUSKER/IMG_0096.jpg"
      }
    ],
    "price": 0,
    "title": "ACME TUSKER"
  },
  {
    "category": "feet-protection",
    "description": "ALLEN COOPER 01",
    "id": 145,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/01/IMG_0282.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/01/IMG_0283.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/01/IMG_0284.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/01/IMG_0285.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/01/IMG_0286.JPG"
      }
    ],
    "price": 0,
    "title": "ALLEN COOPER 01"
  },
  {
    "category": "feet-protection",
    "description": "ALLEN COOPER 02",
    "id": 146,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/02/IMG_0288.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/02/IMG_0289.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/02/IMG_0290.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/02/IMG_0291.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/02/IMG_0292.JPG"
      }
    ],
    "price": 0,
    "title": "ALLEN COOPER 02"
  },
  {
    "category": "feet-protection",
    "description": "ALLEN COOPER 03",
    "id": 147,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/03/IMG_0293.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/03/IMG_0294.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/03/IMG_0295.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/03/IMG_0296.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/03/IMG_0298.JPG"
      }
    ],
    "price": 0,
    "title": "ALLEN COOPER 03"
  },
  {
    "category": "feet-protection",
    "description": "ALLEN COOPER 04",
    "id": 148,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/04/IMG_0299.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/04/IMG_0300.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/04/IMG_0301.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/04/IMG_0303.JPG"
      }
    ],
    "price": 0,
    "title": "ALLEN COOPER 04"
  },
  {
    "category": "feet-protection",
    "description": "ALLEN COOPER 05",
    "id": 149,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/05/IMG_0443.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/05/IMG_0444.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/05/IMG_0445.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/05/IMG_0448.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/05/IMG_0449.JPG"
      }
    ],
    "price": 0,
    "title": "ALLEN COOPER 05"
  },
  {
    "category": "feet-protection",
    "description": "ALLEN COOPER 06",
    "id": 150,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/06/IMG_0450.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/06/IMG_0451.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/06/IMG_0452.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/06/IMG_0453.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/06/IMG_0454.JPG"
      }
    ],
    "price": 0,
    "title": "ALLEN COOPER 06"
  },
  {
    "category": "feet-protection",
    "description": "ALLEN COOPER 07",
    "id": 151,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/07/IMG_0456.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/07/IMG_0457.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/07/IMG_0458.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/07/IMG_0460.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/07/IMG_0461.JPG"
      }
    ],
    "price": 0,
    "title": "ALLEN COOPER 07"
  },
  {
    "category": "feet-protection",
    "description": "ALLEN COOPER 08",
    "id": 152,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/08/IMG_0462.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/08/IMG_0463.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/08/IMG_0464.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/08/IMG_0465.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ALLEN COOPER/08/IMG_0466.jpg"
      }
    ],
    "price": 0,
    "title": "ALLEN COOPER 08"
  },
  {
    "category": "feet-protection",
    "description": "FUEL 01",
    "id": 153,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/FUEL/01/IMG_8293.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/FUEL/01/IMG_8294.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/FUEL/01/IMG_8295.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/FUEL/01/IMG_8296.JPG"
      }
    ],
    "price": 0,
    "title": "FUEL 01"
  },
  {
    "category": "feet-protection",
    "description": "FUEL 02",
    "id": 154,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/FUEL/02/IMG_8299.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/FUEL/02/IMG_8301.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/FUEL/02/IMG_8302.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/FUEL/02/IMG_8303.JPG"
      }
    ],
    "price": 0,
    "title": "FUEL 02"
  },
  {
    "category": "feet-protection",
    "description": "KARAM 01",
    "id": 155,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/KARAM/01/IMG_8256.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/KARAM/01/IMG_8257.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/KARAM/01/IMG_8258.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/KARAM/01/IMG_8259.JPG"
      }
    ],
    "price": 0,
    "title": "KARAM 01"
  },
  {
    "category": "feet-protection",
    "description": "KARAM 02",
    "id": 156,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/KARAM/02/IMG_8261.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/KARAM/02/IMG_8263.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/KARAM/02/IMG_8264.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/KARAM/02/IMG_8267.JPG"
      }
    ],
    "price": 0,
    "title": "KARAM 02"
  },
  {
    "category": "feet-protection",
    "description": "KARAM 03",
    "id": 157,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/KARAM/03/IMG_8268.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/KARAM/03/IMG_8270.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/KARAM/03/IMG_8272.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/KARAM/03/IMG_8274.JPG"
      }
    ],
    "price": 0,
    "title": "KARAM 03"
  },
  {
    "category": "feet-protection",
    "description": "KARAM 04",
    "id": 158,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/KARAM/04/IMG_8276.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/KARAM/04/IMG_8277.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/KARAM/04/IMG_8280.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/KARAM/04/IMG_8282.JPG"
      }
    ],
    "price": 0,
    "title": "KARAM 04"
  },
  {
    "category": "feet-protection",
    "description": "KARAM 05",
    "id": 159,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/KARAM/05/IMG_3137.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/KARAM/05/IMG_3138.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/KARAM/05/IMG_3139.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/KARAM/05/IMG_3140.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/KARAM/05/IMG_3141.JPG"
      }
    ],
    "price": 0,
    "title": "KARAM 05"
  },
  {
    "category": "feet-protection",
    "description": "ROCKLAND 01",
    "id": 160,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ROCKLAND/01/IMG_1829.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ROCKLAND/01/IMG_1831.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ROCKLAND/01/IMG_1833.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ROCKLAND/01/IMG_1834.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ROCKLAND/01/IMG_1835.jpg"
      }
    ],
    "price": 0,
    "title": "ROCKLAND 01"
  },
  {
    "category": "feet-protection",
    "description": "ROCKLAND 02",
    "id": 161,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ROCKLAND/02/IMG_1839.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ROCKLAND/02/IMG_1840.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ROCKLAND/02/IMG_1842.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ROCKLAND/02/IMG_1843.jpg"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ROCKLAND/02/IMG_1844.JPG"
      }
    ],
    "price": 0,
    "title": "ROCKLAND 02"
  },
  {
    "category": "feet-protection",
    "description": "ROCKLAND 03",
    "id": 162,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ROCKLAND/03/IMG_1845.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ROCKLAND/03/IMG_1847.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ROCKLAND/03/IMG_1848.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ROCKLAND/03/IMG_1849.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ROCKLAND/03/IMG_1864 - Copy (2) - Copy.JPG"
      }
    ],
    "price": 0,
    "title": "ROCKLAND 03"
  },
  {
    "category": "feet-protection",
    "description": "ROCKLAND 04",
    "id": 163,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ROCKLAND/04/IMG_1851.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ROCKLAND/04/IMG_1853.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ROCKLAND/04/IMG_1854.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ROCKLAND/04/IMG_1856.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ROCKLAND/04/IMG_1864 - Copy (2) - Copy.JPG"
      }
    ],
    "price": 0,
    "title": "ROCKLAND 04"
  },
  {
    "category": "feet-protection",
    "description": "ROCKLAND 05",
    "id": 164,
    "images": [
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ROCKLAND/05/IMG_1858.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ROCKLAND/05/IMG_1860.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ROCKLAND/05/IMG_1861.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ROCKLAND/05/IMG_1863.JPG"
      },
      {
        "alt": "",
        "id": "",
        "image_id": "",
        "src": "/assets/images/sarvam/products/feet-protection/ROCKLAND/05/IMG_1864 - Copy (2) - Copy.JPG"
      }
    ],
    "price": 0,
    "title": "ROCKLAND 05"
  },
];

const _categories = (() => {
  // make categies array form the products
  const categoriesSet = new Set();
  for (let product of _allProducts) {
    categoriesSet.add(product?.category);
  }
  return [...categoriesSet];
})();

function _makeCachedProducts(allProducts) {
  const cachedProducts = {};
  cachedProducts["all"] = allProducts;
  for (const product of allProducts) {
    if (!Array.isArray(cachedProducts[product.category])) {
      cachedProducts[product.category] = [];
    }
    cachedProducts[product.category].push(product);
  }
  return cachedProducts;
}
const _cachedProducts = _makeCachedProducts(_allProducts) || {};

// add additional feild as empty string in the  array acc. to the gql query syntax
for (let product of _allProducts) {
  /**
   * this is the syntax of the gql query
   * items {
        id
        title
        description
        type
        brand
        category
        price
        new
        sale
        stock
        discount
        variants {
          id
          sku
          size
          color
          image_id
        }
        images {
          image_id
          id
          alt
          src
        }
      }
   */
  // modify all the products acc the above syntax
  product.type = "";
  product.brand = "";
  product.new = "";
  product.sale = "";
  product.stock = "";
  product.discount = "";

  const variants = [];
  // add 3 variants with emtpy feilds
  for (let i = 0; i < 3; i++) {
    variants.push({
      id: "",
      sku: "",
      size: "",
      color: "",
      image_id: "",
    });
  }
  product.variants = variants;
  if (!product.images) {

    const images = [];

    const randomProduct = (_ = null) => {
      return Math.floor(Math.random() * _allProducts.length || 0);
    };
    // use random image for 2 and 3 images
    images.length = 3;
    images[0] = {
      image_id: "",
      id: "",
      alt: "",
      src: product.img || randomProduct().img || "",
    };
    images[1] = {
      image_id: "",
      id: "",
      alt: "",
      src: randomProduct().img || "",
    };
    images[2] = {
      image_id: "",
      id: "",
      alt: "",
      src: randomProduct().img || "",
    };

    product.images = images;
  }
}

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};
shuffleArray(_allProducts);

// ! // put random image id in the img url
// for (let i = 0; i < _allProducts.length; i++) {
//   const random = Math.floor(Math.random() * 1000);
//   _allProducts[i].img = `https://picsum.photos/id/${random}/736/1000`;
// }

export default _allProducts;
export { _allProducts, _cachedProducts };

// Path: pages\Featured Product\apiCallers\getProductsByCategory.js
