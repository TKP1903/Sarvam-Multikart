import { _cachedProducts } from "./dummyData";

const cachedProducts = _cachedProducts || {};

const clearCachedProducts = () => {
  Object.keys(cachedProducts).forEach((key) => {
    cachedProducts[key] = [];
  });
};

const makeCachedProducts = (allProducts) => {
  const _cachedProducts = {};
  _cachedProducts["all"] = allProducts;
  allProducts.forEach((product) => {
    if (!_cachedProducts[product.category]) {
      _cachedProducts[product.category] = [];
    }
    _cachedProducts[product.category].push(product);
  });
  cachedProducts = _cachedProducts;
  console.log({ cachedProducts, allProducts });
  return _cachedProducts;
};

const setCategoryInCachedProducts = (category, data) => {
  if (!cachedProducts[category]) {
    cachedProducts[category] = [];
  }
  cachedProducts[category] = [...cachedProducts[category], ...data];
};

const getFromCachedProducts = (category, from, to) => {
  if (!cachedProducts || !cachedProducts[category]) {
    return null;
  }
  return cachedProducts[category].slice (from, to);
};

export {
  clearCachedProducts,
  makeCachedProducts,
  getFromCachedProducts,
  setCategoryInCachedProducts,
};
