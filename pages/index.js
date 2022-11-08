import React from "react";
import Banner from "./layouts/Fashion/Components/Banner";
import CollectionBanner from "./layouts/Fashion/Components/Collection-Banner";
import Parallax from "./layouts/Fashion/Components/Parallax";
import LogoBlock from "../components/common/logo-block";
import HeaderOne from "../components/headers/header-one";
import ServiceLayout from "../components/common/Service/service1";
import ModalComponent from "../components/common/Modal";
import Helmet from "react-helmet";
import MasterFooter from "../components/footers/common/MasterFooter";
import Testimonials from "./Testimonial/Testimonial";
import Featured from "../pages/Featured Product/Featured";
import Blog from "../components/common/Blog/blog1";

const Fashion = () => {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/x-icon" href={"#"} />
      </Helmet>
      <ModalComponent />
      <HeaderOne
        logoName={""}
        brandName={
          <span
            style={{
              fontSize: "1.5rem",
              fontWeight: "300rem",
              marginLeft: "1rem",
            }}
          >
            <span
              id="logo-sarvam-text"
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
              }}
            >
              SARVAM{" "}
            </span>
            <span
              id="logo-safety-text"
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
              }}
            >
              {" "}
              SAFETY{" "}
            </span>
            <span
              id="logo-registred-text"
              style={{
                fontSize: "1.1rem",
                fontWeight: "400",
                verticalAlign: "super",
              }} 
            >
              {" "}
              &#174;{" "}
            </span>
          </span>
        }
        topClass="top-header"
      />
      <Banner />
      <CollectionBanner />
      {/* <Paragraph
        title="title1 section-t-space"
        inner="title-inner1"
        hrClass={false}
      /> */}
      <Featured />
      {/* <SpecialProducts
        type="fashion"
        backImage={true}
        productSlider={Product4}
        line={true}
        title="title1 section-t-space"
        inner="title-inner1"
        designClass="section-b-space p-t-0 ratio_asos"
        noSlider="true"
        cartClass="cart-info cart-wrap"
      /> */}
      <Parallax />
      <ServiceLayout sectionClass="border-section small-section" />
      
      <Testimonials />
      <Blog
        type="fashion"
        titleClass="title1"
        inner="title-inner1"
        smallHeading="Our Clients"
        bigHeading="TOP CLIENTS"
      />
      {/* <Instagram type="fashion" /> */}
      <div className="section-b-space">
        <LogoBlock />
      </div>
      <MasterFooter
        footerClass={`footer-light`}
        footerLayOut={"light-layout upper-footer"}
        footerSection={"small-section border-section border-top-0"}
        belowSection={"section-b-space light-layout"}
        newLatter={true}
        logoName={""}
      />
    </>
  );
};

export default Fashion;
