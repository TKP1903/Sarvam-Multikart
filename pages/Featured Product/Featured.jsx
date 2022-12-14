import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselCaption,
  CarouselControl,
  CarouselIndicators,
  CarouselItem,
} from "reactstrap";

import ProductItem from "../../components/common/product-box/ProductBox1";
import FeaturedItem from "../../components/custom/FeaturedItemCard";
import Img from "../../components/custom/MediaImage";
import { shuffleArray } from "../../functions";
import {
  clearCachedProducts,
  getProductCategories,
  getProductsByCategory,
} from "../../helpers/custom/apiCallers/featuredProducts/apiCaller";

// const productCategories = [
//   "Head Protection",
//   "Foot Protection",
//   "Hand Protection",
//   "Eye Protection",
//   "Respiratory Protection",
//   "Hearing Protection",
// ];

const Featured = () => {
  // TODO:: Implement featured products filter
  /**
   * featured item
   * {
   *  id: number,
   *  name: string,
   *  price: number,
   *  img: string,
   *  link: string,
   *  handleAddToCart: () => {},
   *  handleRetweet: () => {},
   *  handleHeart: () => {},
   * }
   */
  const [loading, setLoading] = useState(true);
  const [productCategories, setProductCategories] = useState([]);
  const [featuredItems, setFeaturedItems] = useState([]);
  const [filterSelected, setFilterSelected] = useState("all");

  useEffect(() => {
    const getCategories = async () => {
      const categories = await getProductCategories();
      setProductCategories(categories);
    };
    getCategories();
  }, []);

  useEffect(() => {
    setLoading(true);
    const getFeaturedItems = async () => {
      const data = await getProductsByCategory(filterSelected || "all");
      if (filterSelected === "all") {
        // ! limit products to 8
        data = data.slice(0, 8);
        // ! shuffle products
        shuffleArray(data);
      }
      setFeaturedItems(data || []);
      setLoading(false);
    };
    getFeaturedItems();
  }, [filterSelected]);

  console.log({ featuredItems }, { productCategories });

  return (
    <div>
      <section className="featured spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Featured Products</h2>
              </div>
              <div className="featured__controls">
                <ul>
                  <li
                    className={filterSelected === "all" ? "active" : ""}
                    data-filter="*"
                    onClick={() => {
                      setFilterSelected("all");
                    }}
                  >
                    All
                  </li>
                  {productCategories.map((category) => (
                    <li
                      className={filterSelected === category ? "active" : ""}
                      onClick={() => setFilterSelected(category)}
                      data-filter={"." + category}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="row featured__filter">
            {loading ? (
              <div className="col-lg-12">
                <div className="loading">Loading...</div>
              </div>
            ) : (
              featuredItems.map((item, index) => {
                // <ProductItem
                //   des={true}
                //   product={item}
                //   symbol={symbol}
                //   cartClass="cart-info cart-wrap"
                //   addCompare={() => {}}
                //   addWishlist={() => {}}
                //   addCart={() => {}}
                // />
                return (
                  <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                    <FeaturedItem
                      key={"featured-item-" + item.id}
                      item={{
                        ...item,
                        img: item.img || "",
                        link: "/product/" + item.id,
                      }}
                    />
                  </div>
                );
              })
            )}
            {/* <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
              <div className="featured__item">
                <div className="featured__item__pic set-bg">
                  <Img
                    src={img1}
                    alt= ""
                    // style={{ width: "35%" }}
                  />
                  <ul className="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6>
                    <a href="#">PN 521 Shelmet - Ratchet - IS Mark - White</a>
                  </h6>
                  <h5>Rs:1500</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
              <div className="featured__item">
                <div className="featured__item__pic set-bg">
                  <Img src={img2} alt="" />
                  <ul className="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6>
                    <a href="#">PN 521 Shelmet - Ratchet - IS Mark - White</a>
                  </h6>
                  <h5>Rs:1500</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
              <div className="featured__item">
                <div className="featured__item__pic set-bg">
                  <Img src={img3} alt="" />
                  <ul className="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6>
                    <a href="#">PN 521 Shelmet - Ratchet - IS Mark - White</a>
                  </h6>
                  <h5>Rs:1500</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
              <div className="featured__item">
                <div className="featured__item__pic set-bg">
                  <Img src={img4} alt="" />
                  <ul className="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6>
                    <a href="#">
                      Adjacent Safety Shoe - S.T. Grain Leather - DIP PU Sole -
                      D.D ; D.C - Low Ankle
                    </a>
                  </h6>
                  <h5>Rs:1500</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
              <div className="featured__item">
                <div className="featured__item__pic set-bg" data-setbg={img1}>
                  <Img src={img5} alt="" />
                  <ul className="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6>
                    <a href="#">
                      Adjacent Safety Shoe - S.T. Grain Leather - DIP PU Sole -
                      D.D ; D.C - Low Ankle
                    </a>
                  </h6>
                  <h5>Rs:1500</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fastfood">
              <div className="featured__item">
                <div className="featured__item__pic set-bg" data-setbg="">
                  <Img src={img6} alt="" />
                  <ul className="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6>
                    <a href="#">
                      Adjacent Safety Shoe - S.T. Grain Leather - DIP PU Sole -
                      D.D ; D.C - Low Ankle
                    </a>
                  </h6>
                  <h5>Rs:1500</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
              <div className="featured__item">
                <div
                  className="featured__item__pic set-bg"
                  data-setbg="img/featured/feature-7.jpg"
                >
                  <Img src={img7} alt="" />
                  <ul className="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6>
                    <a href="#">
                      Adjacent Safety Shoe - S.T. Grain Leather - DIP PU Sole -
                      D.D ; D.C - Low Ankle
                    </a>
                  </h6>
                  <h5>Rs:1500</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
              <div className="featured__item">
                <div
                  className="featured__item__pic set-bg"
                  data-setbg="img/featured/feature-8.jpg"
                >
                  <Img src={img8} alt="" />
                  <ul className="featured__item__pic__hover">
                    <li>
                      <a href="#">
                        <i className="fa fa-heart"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-retweet"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-shopping-cart"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="featured__item__text">
                  <h6>
                    <a href="#">
                      Adjacent Safety Shoe - S.T. Grain Leather - DIP PU Sole -
                      D.D ; D.C - Low Ankle
                    </a>
                  </h6>
                  <h5>Rs:1500</h5>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featured;
