import axios from "axios";

import {
  makeProductCategories,
  getProductCategories,
} from "./productCategories";

import {
  clearCachedProducts,
  makeCachedProducts,
  getFromCachedProducts,
  setCategoryInCachedProducts,
} from "./cachedProducts";
import _allProducts from "./dummyData";

const callAPI = {
  getProductsByCategory: async (category) => {
    return _cachedProducts[category];
    // TODO: Replace with your own API call
    const { data } = await axios.get(
      // Random API
      `https://dummyjson.com/products/${category}`
    );
    return data;
  },
  getAllProducts: async () => {
    return _allProducts;
    // TODO: Replace with your own API call
    const { data } = await axios.get(
      // Random API
      "https://dummyjson.com/products"
    );
    return data;
  },
};

const getProductsByCategory = async (category) => {
  const cachedProducts = getFromCachedProducts(category);

  if (!!cachedProducts) {
    return cachedProducts;
  }

  if (category === "all") {
    const data = await callAPI["getAllProducts"]();
    makeCachedProducts(data);
    makeProductCategories(data);
    return data;
  }

  // TODO: Replace with your own API call
  const data = await callAPI["getProductsByCategory"](category);

  setCategoryInCachedProducts(category, data);

  return data;
};

setTimeout(
  () => {
    console.log("Cleared cached products on timeout, Date:", new Date());
    clearCachedProducts();
  },
  // everyday
  1000 * 60 * 60 * 24
);

export { clearCachedProducts, getProductCategories, getProductsByCategory };
