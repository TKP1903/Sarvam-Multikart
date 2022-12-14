import _allProducts from "./products.json";

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
        _price
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


    const randomProduct = (_ = null) => {
      return Math.floor(Math.random() * _allProducts.length || 0);
    };
    // use random image for 2 and 3 images
    const images = [{
      image_id: "",
      id: "",
      alt: "",
      src: product.img || randomProduct().img || "",
    }];
    // images[1] = {
    //   image_id: "",
    //   id: "",
    //   alt: "",
    //   src: randomProduct().img || "",
    // };
    // images[2] = {
    //   image_id: "",
    //   id: "",
    //   alt: "",
    //   src: randomProduct().img || "",
    // };

    product.images = images;
  }
}

// ! // put random image id in the img url
// for (let i = 0; i < _allProducts.length; i++) {
//   const random = Math.floor(Math.random() * 1000);
//   _allProducts[i].img = `https://picsum.photos/id/${random}/736/1000`;
// }

export default _allProducts;
export { _allProducts, _cachedProducts };

// Path: pages\Featured Product\apiCallers\getProductsByCategory.js
