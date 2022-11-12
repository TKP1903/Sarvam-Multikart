import { useState, useRef, useEffect } from "react";
import Img from "../custom/MediaImage";
import Image from "next/image";

import "../../styles/featuredItemCard.module.css";

const emptyItem = {
  id: 0,
  title: "",
  price: 0,
  images: [""],
  link: "",
  handleAddToCart: () => {},
  handleRetweet: () => {},
  handleHeart: () => {},
};
const ANIMATION_DELAY = 1;

const animations = {
  fadeIn: "fadeIn 0.2s ease",
  fadeOut: "fadeOut 0.2s ease",
  slideIn: "slideIn 0.5s ease-in-out 0s 1 normal forwards",
  slideOut: "slideOut 0.5s ease-in-out 0s 1 normal forwards",
};

const FeaturedItem = ({ item = emptyItem }) => {
  // replace all the empty/undefined values with the emptyItem in the item object
  const {
    id,
    title,
    price,
    images,
    link,
    handleAddToCart,
    handleRetweet,
    handleHeart,
  } = {
    ...emptyItem,
    ...item,
  };

  const [isHovering, setIsHovering] = useState(false);
  const [frontImageStyle, setFrontImageStyle] = useState({});
  const [backImageStyle, setBackImageStyle] = useState({});

  useEffect(() => {
    if (isHovering) {
      setFrontImageStyle({
        display: "none",
        animation: animations.fadeOut,
      });
      setBackImageStyle({
        display: "block",
        animation: animations.slideIn,
      });
      const timeout = setTimeout(() => {
        // setFrontImageStyle({
        //   display: "none",
        // });
      }, ANIMATION_DELAY * 1000);
      return () => {
        clearTimeout(timeout);
      };
    } else {
      setBackImageStyle({
        display: "block",
        animation: animations.slideOut,
      });
      setFrontImageStyle({
        display: "block",
        animation: animations.fadeIn,
      });
      const timeout = setTimeout(() => {
        setBackImageStyle((prev) => ({
          ...prev,
          display: "none",
        }));
        setFrontImageStyle((prev) => ({
          ...prev,
          display: "block",
        }));
      }, ANIMATION_DELAY * 20000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isHovering]);

  console.log({ item });

  return (
    <div className="featured__item" id={`featured-item-${id}`}>
      <div
        className="featured__item__pic set-bg"
        onPointerOver={() => {
          setIsHovering(true);
        }}
        onPointerLeave={() => {
          setIsHovering(false);
        }}
        style={{
          transition: "all 0.5s ease",
        }}
      >
        <Img
          className="front"
          src={images[0].src}
          alt={title}
          height={736}
          width={1000}
          style={frontImageStyle}
        />

        <Img
          className="back"
          src={images[1].src}
          alt={title}
          height={736}
          width={1000}
          style={backImageStyle}
        />

        <ul className="featured__item__pic__hover">
          <li>
            <a href="" onClick={handleHeart}>
              <i className="fa fa-heart"></i>
            </a>
          </li>
          <li>
            <a href="" onClick={handleRetweet}>
              <i className="fa fa-retweet"></i>
            </a>
          </li>
          <li>
            <a href="" onClick={handleAddToCart}>
              <i className="fa fa-shopping-cart"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="featured__item__text">
        <h6>
          <a href={link} className="item-title">
            {title}
          </a>
        </h6>
        <h5> Rs: {price} </h5>
      </div>
    </div>
  );
};

export default FeaturedItem;
