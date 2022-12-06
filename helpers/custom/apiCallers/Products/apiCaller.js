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

import { _allProducts } from "./dummyData";

const callAPI = {
  getProductsByCategory: async (category, from, to) => {
    const _data = getFromCachedProducts(category) || [];
    return _data.slice(from, to);
    // TODO: Replace with your own API call
    const { data } = await axios.get(
      // Random API
      `https://dummyjson.com/products/${category}`
    );
    return data;
  },
  getAllProducts: async (from, to) => {
    return _allProducts.slice(from, to);
    // TODO: Replace with your own API call
    const { data } = await axios.get(
      // Random API
      "https://dummyjson.com/products"
    );
    return data;
  },
};

const getProductsByCategory = async (category, from, to) => {
  const cachedProducts = getFromCachedProducts(category, from, to);

  if (!!cachedProducts) {
    return cachedProducts;
  }

  if (category === "all") {
    const data = await callAPI.getAllProducts(from, to);
    makeCachedProducts(data);
    makeProductCategories(data);
    return data;
  }

  // TODO: Replace with your own API call
  const data = await callAPI.getProductsByCategory(category, from, to);
  if (!!data && !!data.length) {
    setCategoryInCachedProducts(category, data);
  }

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
