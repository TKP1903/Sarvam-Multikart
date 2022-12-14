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

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

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
  getById: async (id) => {
    const i = Number(id) - 1;
    if (i >= _allProducts.length || i < 0)
      throw new Error("Product with given id not found");
    return _allProducts[i];
  },
};

const getProductsByCategory = async (category, from, to) => {
  const getter = async (category, from, to) => {
    const cachedProducts = await getFromCachedProducts(category, from, to);

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
  const data = await getter(category, from, to);
  shuffleArray(data);
  return data;
};

const getProductById = async (id) => {
  try {
    const data = await callAPI.getById(id);
    return {
      product: data,
    };
  }
  catch (err) {
    return {
      error: err.message,
      status: 404,
    };
  }
};

setTimeout(
  () => {
    console.log("Cleared cached products on timeout, Date:", new Date());
    clearCachedProducts();
  },
  // everyday
  1000 * 60 * 60 * 24
);

export { clearCachedProducts, getProductCategories, getProductsByCategory, getProductById };
