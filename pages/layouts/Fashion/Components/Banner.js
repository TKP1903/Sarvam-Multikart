import React, { Fragment } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import MasterBanner from "./MasterBanner";
import img from 'next/image';

// image 
import banner1 from "../../../../Assets/hero-image/website022.jpg";
import banner2 from "../../../../Assets/hero-image/firefighter-4324587_1280.jpg";
import banner3 from "../../../../Assets/hero-image/fire-fighters-1006924_1280.jpg";



const Data = [
  {
    img: banner1,
    title: "welcome to Sarvam",
    // desc: "Fire Safety ",
    link: "",
  },
  {
    img: banner2,
    title: "welcome to Sarvam",
    desc: "Fire Safety",
    link: "",
  },
  {
    img: banner3,
    title: "welcome to Sarvam",
    desc: "Fire Safety",
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
