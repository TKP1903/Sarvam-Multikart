import React, { Fragment } from "react";
import Link from "next/link";
import { Container, Row, Col, Media } from "reactstrap";

// import banner1 from "../../../../Assets/shoe/KARAM FS 210.png";
// import banner2 from "../../../../Assets/head protection/561.png";

import banner1 from "../../../../Assets/collection banner/ad banner small.png";
import banner2 from "../../../../Assets/collection banner/ad banner small2.png";


const Data = [
  {
    img: banner1,
    about: "Shoes",
    offer: "20% off",
    link: "/shop/feet-protection",
    class: "p-right text-center",
  },
  {
    img: banner2,
    about: "Helmet",
    offer: "10% off",
    link: "shop/head-protection",
    class: "p-right text-center",
  },
];

const MasterCollectionBanner = ({ img, about, offer, link, classes }) => {
  return (
    <Col md="6">
      <Link href={link}>
        <a>
          <div className={`collection-banner ${classes}`}>
            <Media
              src={img}
              className="img-fluid"
              alt=""
            />
            <div className="contain-banner">
              <div>
                <h4>{offer}</h4>
                <h2>{about}</h2>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </Col>
  );
};

const CollectionBanner = () => {
  return (
    <Fragment>
      {/*collection banner*/}
      <section className="pb-0">
        <Container>
          <Row className="partition2">
            {Data.map((data, i) => {
              return (
                <MasterCollectionBanner
                  key={i}
                  img={data.img.src}
                  about={data.about}
                  link={data.link}
                  offer={data.offer}
                  classes={data.class}
                />
              );
            })}
          </Row>
        </Container>
      </section>
      {/*collection banner end*/}
    </Fragment>
  );
};

export default CollectionBanner;
