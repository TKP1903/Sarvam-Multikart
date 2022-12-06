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
  {
    id: 21,
    title: "BW-Solo",
    description: "BW-Solo",
    price: 0,
    img: "/assets/images/sarvam/products/calibration/BW-Solo.png",
    category: "calibration",
  },
  {
    id: 22,
    title: "image",
    description: "image",
    price: 0,
    img: "/assets/images/sarvam/products/calibration/image.png",
    category: "calibration",
  },
  {
    id: 23,
    title: "multirae-wireless-portable-multi-gas-monitor-500x500",
    description: "multirae-wireless-portable-multi-gas-monitor-500x500",
    price: 0,
    img: "/assets/images/sarvam/products/calibration/multirae-wireless-portable-multi-gas-monitor-500x500.jpg",
    category: "calibration",
  },
  {
    id: 24,
    title: "sensepoint_xcl-w1_1",
    description: "sensepoint_xcl-w1_1",
    price: 0,
    img: "/assets/images/sarvam/products/calibration/sensepoint_xcl-w1_1.jpg",
    category: "calibration",
  },
  {
    id: 25,
    title: "sensepoint_xrl-w1_1_",
    description: "sensepoint_xrl-w1_1_",
    price: 0,
    img: "/assets/images/sarvam/products/calibration/sensepoint_xrl-w1_1_.jpg",
    category: "calibration",
  },
  {
    id: 26,
    title: "IMG_0657png",
    description: "IMG_0657png",
    price: 0,
    img: "/assets/images/sarvam/products/coverall/IMG_0657png.png",
    category: "coverall",
  },
  {
    id: 27,
    title: "IMG_0666png copy",
    description: "IMG_0666png copy",
    price: 0,
    img: "/assets/images/sarvam/products/coverall/IMG_0666png copy.png",
    category: "coverall",
  },
  {
    id: 28,
    title: "IMG_0673png copy",
    description: "IMG_0673png copy",
    price: 0,
    img: "/assets/images/sarvam/products/coverall/IMG_0673png copy.png",
    category: "coverall",
  },
  {
    id: 29,
    title: "IMG_0673png copyyy",
    description: "IMG_0673png copyyy",
    price: 0,
    img: "/assets/images/sarvam/products/coverall/IMG_0673png copyyy.png",
    category: "coverall",
  },
  {
    id: 30,
    title: "IMG_0673png copyyyy",
    description: "IMG_0673png copyyyy",
    price: 0,
    img: "/assets/images/sarvam/products/coverall/IMG_0673png copyyyy.png",
    category: "coverall",
  },
  {
    id: 31,
    title: "IMG_0682png",
    description: "IMG_0682png",
    price: 0,
    img: "/assets/images/sarvam/products/coverall/IMG_0682png.png",
    category: "coverall",
  },
  {
    id: 32,
    title: "IMG_0696png",
    description: "IMG_0696png",
    price: 0,
    img: "/assets/images/sarvam/products/coverall/IMG_0696png.png",
    category: "coverall",
  },
  {
    id: 33,
    title: "IMG_0703",
    description: "IMG_0703",
    price: 0,
    img: "/assets/images/sarvam/products/coverall/IMG_0703.JPG",
    category: "coverall",
  },
  {
    id: 34,
    title: "IMG_0717",
    description: "IMG_0717",
    price: 0,
    img: "/assets/images/sarvam/products/coverall/IMG_0717.JPG",
    category: "coverall",
  },
  {
    id: 35,
    title: "IMG_0728",
    description: "IMG_0728",
    price: 0,
    img: "/assets/images/sarvam/products/coverall/IMG_0728.JPG",
    category: "coverall",
  },
  {
    id: 36,
    title: "IMG_0737png",
    description: "IMG_0737png",
    price: 0,
    img: "/assets/images/sarvam/products/coverall/IMG_0737png.png",
    category: "coverall",
  },
  {
    id: 37,
    title: "IMG_0777png copy",
    description: "IMG_0777png copy",
    price: 0,
    img: "/assets/images/sarvam/products/coverall/IMG_0777png copy.png",
    category: "coverall",
  },
  {
    id: 38,
    title: "ULTITEC1000L-00png",
    description: "ULTITEC1000L-00png",
    price: 0,
    img: "/assets/images/sarvam/products/coverall/ULTITEC1000L-00png.png",
    category: "coverall",
  },
  {
    id: 39,
    title: "PN-16PNG",
    description: "PN-16PNG",
    price: 0,
    img: "/assets/images/sarvam/products/fall-arrest/PN-16PNG.png",
    category: "fall-arrest",
  },
  {
    id: 40,
    title: "PN-22-scaledPNG",
    description: "PN-22-scaledPNG",
    price: 0,
    img: "/assets/images/sarvam/products/fall-arrest/PN-22-scaledPNG.png",
    category: "fall-arrest",
  },
  {
    id: 41,
    title: "129698_V_Lg",
    description: "129698_V_Lg",
    price: 0,
    img: "/assets/images/sarvam/products/safety-cans-and-carbinates/129698_V_Lg.jpg",
    category: "safety-cans-and-carbinates",
  },
  {
    id: 42,
    title: "253261-acid-corrosive-storage-locking-cabinet-diversiifed",
    description: "253261-acid-corrosive-storage-locking-cabinet-diversiifed",
    price: 0,
    img: "/assets/images/sarvam/products/safety-cans-and-carbinates/253261-acid-corrosive-storage-locking-cabinet-diversiifed.png",
    category: "safety-cans-and-carbinates",
  },
  {
    id: 43,
    title: "2827_2_202101211650295608966_rawpng",
    description: "2827_2_202101211650295608966_rawpng",
    price: 0,
    img: "/assets/images/sarvam/products/safety-cans-and-carbinates/2827_2_202101211650295608966_rawpng.png",
    category: "safety-cans-and-carbinates",
  },
  {
    id: 44,
    title: "28663_use",
    description: "28663_use",
    price: 0,
    img: "/assets/images/sarvam/products/safety-cans-and-carbinates/28663_use.jpg",
    category: "safety-cans-and-carbinates",
  },
  {
    id: 45,
    title: "460185png",
    description: "460185png",
    price: 0,
    img: "/assets/images/sarvam/products/safety-cans-and-carbinates/460185png.png",
    category: "safety-cans-and-carbinates",
  },
  {
    id: 46,
    title: "4WLW7_AS01png",
    description: "4WLW7_AS01png",
    price: 0,
    img: "/assets/images/sarvam/products/safety-cans-and-carbinates/4WLW7_AS01png.png",
    category: "safety-cans-and-carbinates",
  },
  {
    id: 47,
    title: "8831022_3",
    description: "8831022_3",
    price: 0,
    img: "/assets/images/sarvam/products/safety-cans-and-carbinates/8831022_3.png",
    category: "safety-cans-and-carbinates",
  },
  {
    id: 48,
    title: "891202_GRP1_2",
    description: "891202_GRP1_2",
    price: 0,
    img: "/assets/images/sarvam/products/safety-cans-and-carbinates/891202_GRP1_2.png",
    category: "safety-cans-and-carbinates",
  },
  {
    id: 49,
    title: "ChemCor-Lined-safety-cabinets",
    description: "ChemCor-Lined-safety-cabinets",
    price: 0,
    img: "/assets/images/sarvam/products/safety-cans-and-carbinates/ChemCor-Lined-safety-cabinets.png",
    category: "safety-cans-and-carbinates",
  },
  {
    id: 50,
    title: "P-H22855___M",
    description: "P-H22855___M",
    price: 0,
    img: "/assets/images/sarvam/products/safety-cans-and-carbinates/P-H22855___M.jpg",
    category: "safety-cans-and-carbinates",
  },
  {
    id: 51,
    title: "plastic safety cans",
    description: "plastic safety cans",
    price: 0,
    img: "/assets/images/sarvam/products/safety-cans-and-carbinates/plastic safety cans.jpg",
    category: "safety-cans-and-carbinates",
  },
  {
    id: 52,
    title: "png m can",
    description: "png m can",
    price: 0,
    img: "/assets/images/sarvam/products/safety-cans-and-carbinates/png m can.png",
    category: "safety-cans-and-carbinates",
  },
  {
    id: 53,
    title: "png s can",
    description: "png s can",
    price: 0,
    img: "/assets/images/sarvam/products/safety-cans-and-carbinates/png s can.png",
    category: "safety-cans-and-carbinates",
  },
  {
    id: 54,
    title: "png11",
    description: "png11",
    price: 0,
    img: "/assets/images/sarvam/products/safety-cans-and-carbinates/png11.png",
    category: "safety-cans-and-carbinates",
  },
  {
    id: 55,
    title: "png22",
    description: "png22",
    price: 0,
    img: "/assets/images/sarvam/products/safety-cans-and-carbinates/png22.png",
    category: "safety-cans-and-carbinates",
  },
  {
    id: 56,
    title: "png33",
    description: "png33",
    price: 0,
    img: "/assets/images/sarvam/products/safety-cans-and-carbinates/png33.png",
    category: "safety-cans-and-carbinates",
  },
  {
    id: 57,
    title: "PRD_DRM201_ISET",
    description: "PRD_DRM201_ISET",
    price: 0,
    img: "/assets/images/sarvam/products/safety-cans-and-carbinates/PRD_DRM201_ISET.jpg",
    category: "safety-cans-and-carbinates",
  },
  {
    id: 58,
    title: "type 2 safety can png",
    description: "type 2 safety can png",
    price: 0,
    img: "/assets/images/sarvam/products/safety-cans-and-carbinates/type 2 safety can png.png",
    category: "safety-cans-and-carbinates",
  },
  {
    id: 59,
    title: "type 2 safety can",
    description: "type 2 safety can",
    price: 0,
    img: "/assets/images/sarvam/products/safety-cans-and-carbinates/type 2 safety can.jpg",
    category: "safety-cans-and-carbinates",
  },
  {
    id: 60,
    title: "typr 1 safety canns png",
    description: "typr 1 safety canns png",
    price: 0,
    img: "/assets/images/sarvam/products/safety-cans-and-carbinates/typr 1 safety canns png.png",
    category: "safety-cans-and-carbinates",
  },
  {
    id: 61,
    title: "typr 1 safety canns",
    description: "typr 1 safety canns",
    price: 0,
    img: "/assets/images/sarvam/products/safety-cans-and-carbinates/typr 1 safety canns.jpg",
    category: "safety-cans-and-carbinates",
  },
  {
    id: 62,
    title: "unnamed",
    description: "unnamed",
    price: 0,
    img: "/assets/images/sarvam/products/safety-cans-and-carbinates/unnamed.jpg",
    category: "safety-cans-and-carbinates",
  },
  {
    id: 63,
    title: "waste dis png",
    description: "waste dis png",
    price: 0,
    img: "/assets/images/sarvam/products/safety-cans-and-carbinates/waste dis png.png",
    category: "safety-cans-and-carbinates",
  },
  {
    id: 64,
    title: "_2_8_28623_lg_1",
    description: "_2_8_28623_lg_1",
    price: 0,
    img: "/assets/images/sarvam/products/safety-cans-and-carbinates/_2_8_28623_lg_1.jpg",
    category: "safety-cans-and-carbinates",
  },
  {
    id: 65,
    title: "Adjacent",
    description: "Adjacent",
    price: 0,
    img: "/assets/images/sarvam/products/shoe/Adjacent.png",
    category: "shoe",
  },
  {
    id: 66,
    title: "AGILE CT",
    description: "AGILE CT",
    price: 0,
    img: "/assets/images/sarvam/products/shoe/AGILE CT.png",
    category: "shoe",
  },
  {
    id: 67,
    title: "BLITZ",
    description: "BLITZ",
    price: 0,
    img: "/assets/images/sarvam/products/shoe/BLITZ.png",
    category: "shoe",
  },
  {
    id: 68,
    title: "KARAM FS 210",
    description: "KARAM FS 210",
    price: 0,
    img: "/assets/images/sarvam/products/shoe/KARAM FS 210.png",
    category: "shoe",
  },
  {
    id: 69,
    title: "Ketone",
    description: "Ketone",
    price: 0,
    img: "/assets/images/sarvam/products/shoe/Ketone.png",
    category: "shoe",
  },
  {
    id: 70,
    title: "Volant",
    description: "Volant",
    price: 0,
    img: "/assets/images/sarvam/products/shoe/Volant.png",
    category: "shoe",
  },
  {
    id: 71,
    title: "CONE",
    description: "CONE",
    price: 0,
    img: "/assets/images/sarvam/products/traffic-safety/CONE.png",
    category: "traffic-safety",
  },
  {
    id: 72,
    title: "road studs",
    description: "road studs",
    price: 0,
    img: "/assets/images/sarvam/products/traffic-safety/road studs.png",
    category: "traffic-safety",
  },
  {
    id: 73,
    title: "RUBBER CORNER GUARD",
    description: "RUBBER CORNER GUARD",
    price: 0,
    img: "/assets/images/sarvam/products/traffic-safety/RUBBER CORNER GUARD.png",
    category: "traffic-safety",
  },
  {
    id: 74,
    title: "Rubber-Speed-Breaker",
    description: "Rubber-Speed-Breaker",
    price: 0,
    img: "/assets/images/sarvam/products/traffic-safety/Rubber-Speed-Breaker.jpg",
    category: "traffic-safety",
  },
  {
    id: 75,
    title: "Solar-Warning-Traffic-Cone-Light-Red",
    description: "Solar-Warning-Traffic-Cone-Light-Red",
    price: 0,
    img: "/assets/images/sarvam/products/traffic-safety/Solar-Warning-Traffic-Cone-Light-Red.jpg",
    category: "traffic-safety",
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
