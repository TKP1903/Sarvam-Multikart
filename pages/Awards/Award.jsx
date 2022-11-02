import Carousel from "react-elastic-carousel";
import Item from "./Item";
import Img from "next/image";
import award1 from "../../Assets/wall of frame/award1.webp";
import award2 from "../../Assets/wall of frame/award2.webp";
import award3 from "../../Assets/wall of frame/award3.webp";
import award4 from "../../Assets/wall of frame/award4.webp";
import award5 from "../../Assets/wall of frame/award5.webp";

const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1, pagination: false },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  // { width: 1200, itemsToShow: 4 }
];

const images = [
  {
    imgPath: award1,
  },
  {
    imgPath: award2,
  },
  {
    imgPath: award3,
  },
  {
    imgPath: award4,
  },
  {
    imgPath: award5,
  },
  {
    imgPath: award2,
  },
  {
    imgPath: award1,
  },
  {
    imgPath: award4,
  },
];
function Award() {
  return (
    <div className="container" style={{ padding: "20px" }}>
      <div className="counter__container">
        <div className="Award__MainHeading">
          <h1>Wall Of Fame</h1>
          <p className="Award__para">
            All Roads That to success have to pass through hard work
            boulevard,at some point of time.
          </p>
        </div>
        <div className="carousel-wrapper">
          <Carousel
            itemsToScroll={3}
            breakPoints={breakPoints}
            infiniteLoop={true}
            enableAutoPlay
            autoPlaySpeed={3000}
            enableSwipe="true"
            transitionMs="500"
          >
            {images.map((item, indx) => (
              <Item key={indx}>
                <div className="award__cardContainer">
                  <Img className="award__img" src={item.imgPath} alt={indx} />
                </div>
              </Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Award;
