import React, { Fragment } from "react";
import Slider from "react-slick";
import Link from "next/link";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { Slider3 } from "../../../services/script";
import { Media, Container, Row, Col } from "reactstrap";

import img from "../../../public/assets/images/sarvam/top-clients/Amara-raja.webp";

const GET_PRODUCTS = gql`
  query blog($type: String!) {
    blog(type: $type) {
      img
      link
      titleClass
      desc
      date
    }
  }
`;

const hostName = (() => {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return "";
})();

const topClientsPath = `${hostName}/assets/images/sarvam/top-clients`;

const BlogSection = ({
  type,
  sectionClass,
  titleClass,
  inner,
  hrClass,
  smallHeading,
  bigHeading,
}) => {
  // let { data } = useQuery(GET_PRODUCTS, {
  //   variables: {
  //     type: type,
  //   },
  // });

  const data = {
    blog: [
      {
        img: `${topClientsPath}/Amara-raja.jpg`,
        link: "",
        titleClass: "",
        desc: "Amara Raja Batteries LTD",
        date: "",
      },
      {
        img: `${topClientsPath}/Bradken.jpg`,
        link: "",
        titleClass: "",
        desc: "Bradken India PVT LTD",
        date: "",
      },
      {
        img: `${topClientsPath}/Nordex.jpg`,
        link: "",
        titleClass: "",
        desc: "Nordex India PVT LTD",
        date: "",
      },
      {
        img: `${topClientsPath}/Royal-enfield.jpg`,
        link: "",
        titleClass: "",
        desc: "Royal Enfield LTD - Oragadam",
        date: "",
      },
    ],
  };
  return (
    <Fragment>
      <section className={sectionClass}>
        <Container>
          <Row>
            <Col md="12">
              <div className={titleClass}>
                <h4>{smallHeading}</h4>
                <h2 className={inner}>{bigHeading}</h2>
                {hrClass ? (
                  <hr role="tournament6"></hr>
                ) : (
                  <div className="line">
                    <span></span>
                  </div>
                )}
              </div>
              <Slider
                {...Slider3}
                className="slide-3 "
                arrows={true}
                accessibility={true}
              >
                {data &&
                  data.blog.map((item, index) => (
                    <Col md="12" key={index}>
                      <Link href={`/blogs/blog_detail`}>
                        <div className="classic-effect">
                          <Media src={item.img} className="img-fluid" alt="" />
                          <span></span>
                        </div>
                      </Link>
                      <div className="blog-details">
                        <h4>{item.titleClass}</h4>
                        <Link href={`/blogs/blog_detail`}>
                          <p>{item.desc} </p>
                        </Link>
                        <hr className="style1" />
                        <h6>by: {item.date}</h6>
                      </div>
                    </Col>
                  ))}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};
export default BlogSection;
