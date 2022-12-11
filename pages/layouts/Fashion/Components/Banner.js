import React, { Fragment } from "react";
import Slider from "react-slick";
import MasterBanner from "./MasterBanner";

import Link from "next/link";
import { Container, Row, Col } from "reactstrap";

// image 
import banner1 from "../../../../Assets/hero-image/BANNER2.png";
import banner2 from "../../../../Assets/hero-image/BANNER.png";

const Data = [
  {
    img: "home3",
    // title: "Welcome to Safety",
    // desc: "Sarvam Safety",
    link: "",
  },
  {
    img: "home2",
    // title: "Welcome to safety",
    // desc: "Fire Safety",
    link: "",
  }
];


const Banner = () => {
  return (
    <Fragment>
      <section className="p-0">
        <Slider className="slide-1 home-slider">
          {Data.map((data, i) => {
            return (
              <MasterBanner
                key={i}
                img={data.img}
                desc={data.desc}
                title={data.title}
                link={data.link}
              />
            );
          })}
        </Slider>
      </section>
      
    </Fragment>
  );
};

export default Banner;
