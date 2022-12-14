import { urlFriendly2prettyName } from "../../../../functions";
import { _allProducts } from "./dummyData";

let categories = [];

export const makeProductCategories = (() => {
  let isCalled = false;
  return (products) => {
    if (isCalled) {
      return;
    }
    isCalled = true;
    const categoriesSet = new Set();
    for (let product of products) {

      const category = urlFriendly2prettyName(product?.category);
      categoriesSet.add(category);
    }
    categories = [...categoriesSet];
  };
})();

export const _getProductCategories = async () => {
  if (!!categories.length) {
    return categories;
  }
  makeProductCategories(_allProducts);
  return [];
};

makeProductCategories(_allProducts);
