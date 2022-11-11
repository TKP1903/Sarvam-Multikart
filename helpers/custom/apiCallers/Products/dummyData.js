const _allProducts = [
  // Only 2 _categories ( hand and foot protection )
  {
    id: 1,
    title: "Gloves Cotton Knitted - Colour : Blue",
    description: "Product 1 description",
    price: 14.5,
    img: "https://sarvamsafety.com/image/cache/catalog/32%20Gloves%20Cotton%20Knitted%2090%20gms%20-%207%20Gauge%20-%20Blue-270x270.jpg",
    category: "Hand Protection",
  },
  {
    id: 2,
    title: "Gloves Cotton Knitted - 7 GAUGE - KNP",
    description: "Product 2 description",
    price: 12.65,
    img: "https://sarvamsafety.com/image/cache/catalog/28%20Gloves%20Cotton%20Knitted%2070%20gms%20-%207%20GAUGE%20%20-%20KNP-270x270.jpg",
    category: "Hand Protection",
  },
  {
    id: 3,
    title: "Gloves Cotton Knitted - Colour: Dark Grey",
    description: "Product 3 description",
    price: 11.5,
    img: "https://sarvamsafety.com/image/cache/catalog/8%20Gloves%20Cotton%20Knitted%2050gms%20-%20Colour%20Dark%20Grey-270x270.jpg",
    category: "Hand Protection",
  },
  {
    id: 4,
    title: "Gloves Maxilite Nitrile Single Side Dipped",
    description: "Product 4 description",
    price: 130,
    img: "https://sarvamsafety.com/image/cache/catalog/products/82%20Gloves%20Neoprene%20-%20HD%2027%20NEO-270x270.jpg",
    category: "Hand Protection",
  },
  {
    id: 5,
    title: "Gloves Neoprene - HD 27 NEO",
    description: "Product 5 description",
    price: 130,
    img: "https://sarvamsafety.com/image/cache/catalog/products/82%20Gloves%20Neoprene%20-%20HD%2027%20NEO-270x270.jpg",
    category: "Hand Protection",
  },
  {
    id: 6,
    title: "Gloves Neoprene - NEO 400",
    description: "Product 6 description",
    price: 180,
    img: "https://sarvamsafety.com/image/cache/catalog/products/93%20Gloves%20Neoprene%20-%20NEO%20400-270x270.jpg",
    category: "Hand Protection",
  },
  {
    id: 7,
    title:
      "Adjacent Safety Shoe - S.T. Grain Leather - DIP PU Sole - D.D ; D.C - Low Ankle",
    description: "Product 7 description",
    price: 1070.0,
    img: "https://sarvamsafety.com/image/cache/catalog/3-270x270.jpg",
    category: "Foot Protection",
  },
  {
    id: 8,
    title:
      "Allen Cooper 1177 Safety Shoe - S.T- Upper BT Leather - PU D.D, D.C Sole - L.A",
    description: "Product 8 description",
    price: 1280.0,
    img: "https://sarvamsafety.com/image/cache/catalog/products/147%20Safety%20Shoe%20-%20S.T-%20Upper%20BT%20Leather%20-%20PU%20D.D,%20D.C%20Sole%20-%20L.A%20-%20Size%208%20-%20AC%201177-270x270.jpg",
    category: "Foot Protection",
  },
  {
    id: 9,
    title:
      "Allen Cooper Safety Shoe - S.T- Upper Buff Barton Leather - PU D.D, D.C Sole - L.A - 1284",
    description: "Product 9 description",
    price: 1335.0,
    img: "https://sarvamsafety.com/image/cache/catalog/1-270x270.jpg",
    category: "Foot Protection",
  },
  {
    id: 10,
    title:
      "Allen Cooper Safety Shoe S.T. Booty Print Leather - PU - D.D - D.C Sole - High Ankle",
    description:
      "Allen Cooper Safety Shoe S.T. Booty Print Leather - PU - D.D - D.C Sole - High Ankle",
    price: 1625.0,
    img: "https://sarvamsafety.com/image/cache/catalog/products/2-100x100-270x270.jpeg",
    category: "Foot Protection",
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
