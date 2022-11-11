import { _cachedProducts } from "./dummyData";

const cachedProducts = _cachedProducts;

const clearCachedProducts = () => {
  Object.keys(cachedProducts).forEach((key) => {
    cachedProducts[key] = [];
  });
};

const makeCachedProducts = (() => {
  let isCalled = false;
  return (allProducts) => {
    console.log ("makeCachedProducts called", { allProducts });
    if (isCalled) {
      return;
    }
    isCalled = true;
    const _cachedProducts = {};
    _cachedProducts["all"] = allProducts;
    for (const product of allProducts) {
      if (!Array.isArray(_cachedProducts[product.category])) {
        _cachedProducts[product.category] = [];
      }
      _cachedProducts[product.category].push(product);
    }
    cachedProducts = _cachedProducts;
    return _cachedProducts;
  };
})();

const setCategoryInCachedProducts = (category, data) => {
  if (!cachedProducts[category]) {
    cachedProducts[category] = [];
  }
  cachedProducts[category] = data;
};

const getFromCachedProducts = (category) => {
  if (!cachedProducts || !cachedProducts[category]) {
    return null;
  }
  return cachedProducts[category];
};

export {
  clearCachedProducts,
  makeCachedProducts,
  getFromCachedProducts,
  setCategoryInCachedProducts,
};
