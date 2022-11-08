import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
// import icons for next and prev buttons
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CustomCarousel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item, index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.name || "item" + index}
        style = {{
          display: "none",
        }}
      >
        {item}

        {!!item.caption && (
          <CarouselCaption
            captionText={item.caption}
            captionHeader={item.caption}
          />
        )}
      </CarouselItem>
    );
  });

  useEffect (()=> {
    console.log("items", items);
  }, [items])
  
  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        items={slides}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
        prevIcon={<FaChevronLeft />}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
        nextIcon={<FaChevronRight />}
      />
    </Carousel>
  );
};

export default CustomCarousel;
