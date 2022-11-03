
import Img1 from "../../../Assets/head protection/Untitled-1.png";
import Img2 from "../../../Assets/head protection/Untitled-1.png";
import Img3 from "../../../Assets/head protection/Untitled-1.png";
import Img4 from "../../../Assets/head protection/Untitled-1.png";
import Img5 from "../../../Assets/head protection/Untitled-1.png";
import Img6 from "../../../Assets/head protection/Untitled-1.png";
import Img7 from "../../../Assets/head protection/Untitled-1.png";
import Img8 from "../../../Assets/head protection/Untitled-1.png";


const img1 = require("../../../Assets/head protection/Untitled-1.png");

/**
 * categories
 * 2. Head Protection
 * 3. Eye Protection
 * 4. Hearing Protection
 * 5. Respiratory Protection
 * 6. Hand Protection
 * 7. Foot Protection
 * 8. Fire Protection
 * 9. Genereal Safety
 */
const allProducts = [
  {
    id: 1,
    name: "Product 1",
    description: "Product 1 description",
    price: 100,
    img: "https://picsum.photos/id/1/300/300",
    category: "Head Protection",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Product 2 description",
    price: 200,
    img: "https://picsum.photos/id/1/300/300",
    category: "Head Protection",
  },
  {
    id: 3,
    name: "Product 3",
    description: "Product 3 description",
    price: 300,
    img: "https://picsum.photos/id/1/300/300",
    category: "Head Protection",
  },
  {
    id: 4,
    name: "Product 4",
    description: "Product 4 description",
    price: 400,
    img: "https://picsum.photos/id/1/300/300",
    category: "Fire Protection",
  },
  {
    id: 5,
    name: "Product 5",
    description: "Product 5 description",
    price: 500,
    img: "https://picsum.photos/id/1/300/300",
    category: "Fire Protection",
  },
  {
    id: 6,
    name: "Product 6",
    description: "Product 6 description",
    price: 600,
    img: "https://picsum.photos/id/1/300/300",
    category: "Eye Protection",
  },
  {
    id: 7,
    name: "Product 7",
    description: "Product 7 description",
    price: 700,
    img: "https://picsum.photos/id/1/300/300",
    category: "Eye Protection",
  },
  {
    id: 8,
    name: "Product 8",
    description: "Product 8 description",
    price: 800,
    img: "https://picsum.photos/id/1/300/300",
    category: "Hearing Protection",
  },
  {
    id: 9,
    name: "Product 9",
    description: "Product 9 description",
    price: 900,
    img: "https://picsum.photos/id/1/300/300",
    category: "Hearing Protection",
  },
  {
    id: 10,
    name: "Product 10",
    description: "Product 10 description",
    price: 1000,
    img: "https://picsum.photos/id/1/300/300",
    category: "Respiratory Protection",
  },
  {
    id: 11,
    name: "Product 11",
    description: "Product 11 description",
    price: 1100,
    img: "https://picsum.photos/id/1/300/300",
    category: "Respiratory Protection",
  },
  {
    id: 12,
    name: "Product 12",
    description: "Product 12 description",
    price: 1200,
    img: "https://picsum.photos/id/1/300/300",
    category: "Hand Protection",
  },
  {
    id: 13,
    name: "Product 13",
    description: "Product 13 description",
    price: 1300,
    img: "https://picsum.photos/id/1/300/300",
    category: "Hand Protection",
  },
  {
    id: 14,
    name: "Product 14",
    description: "Product 14 description",
    price: 1400,
    img: "https://picsum.photos/id/1/300/300",
    category: "Foot Protection",
  },
  {
    id: 15,
    name: "Product 15",
    description: "Product 15 description",
    price: 1500,
    img: "https://picsum.photos/id/1/300/300",
    category: "Foot Protection",
  },
  {
    id: 16,
    name: "Product 16",
    description: "Product 16 description",
    price: 1600,
    img: "https://picsum.photos/id/1/300/300",
    category: "General Safety",
  },
  {
    id: 17,
    name: "Product 17",
    description: "Product 17 description",
    price: 1700,
    img: "https://picsum.photos/id/1/300/300",
    category: "General Safety",
  },
];

// put random image id in the img url
for (let i = 0; i < allProducts.length; i++) {
    const random = Math.floor(Math.random() * 1000);
    allProducts[i].img = `https://picsum.photos/id/${random}/736/1000`;
}

const makeCachedProducts = (allProducts) => {
  const _cachedProducts = {};
  allProducts.forEach((product) => {
    if (!_cachedProducts[product.category]) {
      _cachedProducts[product.category] = [];
    }
    _cachedProducts[product.category].push(product);
  });
  return _cachedProducts;
};

const cachedProducts = makeCachedProducts(allProducts);

// Path: pages\Featured Product\apiCallers\getProductsByCategory.js

export default allProducts;
export { 
    allProducts,
    cachedProducts,
    makeCachedProducts,
};