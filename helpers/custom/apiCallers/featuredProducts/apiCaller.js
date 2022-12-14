import axios from "axios";

import {
  makeProductCategories,
  _getProductCategories,
} from "./productCategories";

import {
  clearCachedProducts,
  makeCachedProducts,
  getFromCachedProducts,
  setCategoryInCachedProducts,
} from "./cachedProducts";

import { _allProducts } from "./dummyData";
import { shuffleArray, pretty2urlFriendly } from "../../../../functions";

const callAPI = {
  getProductsByCategory: async (category) => {
    return getFromCachedProducts(category) || [];
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
  category = pretty2urlFriendly(category);
  const cachedProducts = getFromCachedProducts(category);

  if (!!cachedProducts) {
    return cachedProducts;
  }

  if (category === "all") {
    const data = await callAPI["getAllProducts"]();
    makeCachedProducts(data);
    return data;
  }

  // TODO: Replace with your own API call
  const data = await callAPI["getProductsByCategory"](category);

  setCategoryInCachedProducts(category, data);

  return data;
};

const getProductCategories = async () => {
  return _getProductCategories();
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
