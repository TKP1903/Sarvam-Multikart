import { axios } from 'axios';

import { allProducts, cachedProducts, makeCachedProducts } from './dummyData';

// const cachedProducts = {};

const clearCache = () => {
    Object.keys(cachedProducts).forEach((key) => {
        cachedProducts[key] = [];
    });
};

const callAPI = async (category) => {
    const response = await axios.get(`https://api.example.com/products/${category}`);
    if (category === 'all') {
        clearCache();
        allProducts = response.data;
        makeCachedProducts(allProducts);
        return allProducts;
    }
    cachedProducts[category] = [
        ...cachedProducts[category],
        ...response.data
    ];
    return response.data;
}

const getProductsByCategory = async (category) => {
    if (category === 'all') {
        return allProducts;
    }
    if (!!cachedProducts[category]) {
        return cachedProducts[category];
    }

    // TODO: Replace with your own API call
    const { data } = await callAPI(category);

    cachedProducts[category] = data;

    return data;
}

export default getProductsByCategory;
export { clearCache };