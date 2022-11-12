import { useState, useRef } from "react";
import Img from "../custom/MediaImage";

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
const ANIMATION_DELAY = 0.5;

const animations = {
  fadeIn: "fadeIn 0.5s ease",
  fadeOut: "fadeOut 0.5s ease",
  slideIn: "slideIn 0.5s ease-in-out 0s 1 normal forwards",
  slideOut: "slideOut 0.5s ease-in-out 0s 1 normal backwards",
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

  const [frontImageAnimtion, setFrontImageAnimtion] = useState("");
  const [backImageAnimtion, setBackImageAnimtion] = useState(
    animations.slideIn
  );
  const [frontImageDisplay, setFrontImageDisplay] = useState("block");
  const [backImageDisplay, setBackImageDisplay] = useState("none");

  console.log({ item });

  return (
    <div className="featured__item" id={`featured-item-${id}`}>
      <div
        className="featured__item__pic set-bg"
        // onMouseOver={
        //   () => setIsHovering(false)
        // }
        onPointerOver={() => {
          setIsHovering(true);
          setFrontImageAnimtion(animations.fadeOut);
          setBackImageAnimtion(animations.slideIn);
          setFrontImageDisplay("none");
          setBackImageDisplay("block");
        }}
        onPointerLeave={() => {
          setIsHovering(false);
          setFrontImageAnimtion(animations.fadeIn);
          setBackImageAnimtion(animations.slideOut);
          setFrontImageDisplay("block");
          setBackImageDisplay("none");
        }}
        style={{
          transition: "all 0.5s ease",
        }}
      >
        <Img
          // ref={frontImageRef}
          className="front"
          src={images[0].src}
          alt={title}
          height={736}
          width={1000}
          style={{
            display: frontImageDisplay,
            animation: frontImageAnimtion,
          }}
        />
        
        <Img
          // ref={backImageRef}
          className="back"
          src={images[1].src}
          alt={title}
          height={736}
          width={1000}
          style={{
            display: backImageDisplay,
            animation: backImageAnimtion,
          }}
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
