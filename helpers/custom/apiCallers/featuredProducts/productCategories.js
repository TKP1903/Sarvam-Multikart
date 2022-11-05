let categories = [];

const getProductCategories = async () => {
    if (!!categories.length) {
        return categories;
    }
    return [];
};

const makeProductCategories = (products) => {
    const categoriesSet = new Set();
    for (let product of products) {
        categoriesSet.add(product?.category);
    }
    categories = [...categoriesSet];
}

export {
    makeProductCategories,
    getProductCategories,
};