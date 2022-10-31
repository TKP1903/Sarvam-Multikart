import React, { Fragment } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import MasterBanner from "./MasterBanner";
import Img from 'next/image';

// image 
import homeimg from "../../../../Assets/hero-image/fire-fighters trans.png";
import homeimg2 from "../../../../Assets/hero-image/fire-fighters-1006924_1280.jpg";
import homeimg3 from "../../../../Assets/hero-image/firefighter-4324587_1280.jpg";
import homeimg4 from "../../../../Assets/hero-image/website022.jpg";


const Data = [
  {
    img: homeimg,
    title: "welcome to Sarvam",
    // desc: "Fire Safety ",
    link: "",
  },
  {
    img: homeimg2,
    title: "welcome to Sarvam",
    desc: "Fire Safety",
    link: "",
  },
  {
    img: homeimg3,
    title: "welcome to Sarvam",
    desc: "Fire Safety",
    link: "",
  },
  {
    img: homeimg4,
    title: "welcome to Sarvam",
    desc: "Fire Safety",
    link: "",
  },
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
