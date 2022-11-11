let categories = [];

const getProductCategories = async () => {
  if (!!categories.length) {
    return categories;
  }
  return [];
};

const makeProductCategories = (() => {
  let isCalled = false;
  return (products) => {
    console.log("makeProductCategories called", { products });
    if (isCalled) {
      return;
    }
    isCalled = true;
    const categoriesSet = new Set();
    for (let product of products) {
      categoriesSet.add(product?.category);
    }
    categories = [...categoriesSet];
  };
})();

export { makeProductCategories, getProductCategories };
