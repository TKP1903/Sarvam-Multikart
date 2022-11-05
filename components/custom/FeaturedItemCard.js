import Img from "../custom/MediaImage";

const emptyItem = {
  id: 0,
  title: "",
  price: 0,
  img: "",
  link: "",
  handleAddToCart: () => {},
  handleRetweet: () => {},
  handleHeart: () => {},
};

const FeaturedItem = ({ item = emptyItem }) => {
  // replace all the empty/undefined values with the emptyItem in the item object
  const {
    id,
    title,
    price,
    img,
    link,
    handleAddToCart,
    handleRetweet,
    handleHeart,
  } = {
    ...emptyItem,
    ...item,
  };
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
      <div className="featured__item" id={`featured-item-${id}`}>
        <div className="featured__item__pic set-bg">
          <Img src={img} alt={title} height={736} width={1000} />
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
    </div>
  );
};

export default FeaturedItem;
