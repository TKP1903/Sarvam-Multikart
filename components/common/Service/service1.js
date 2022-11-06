import React from "react";
import {
  svgFreeShipping,
  svgservice,
  svgoffer,
  svgpayment,
  svgLowCost
} from "../../../services/script";
import { Container, Row, Col } from "reactstrap";
import MasterServiceContent from "./MasterServiceConternt";

const Data = [
  {
    link: svgFreeShipping,
    title: "shipping worldwide",
    service: "Delivery all around the world",
  },
  {
    link: svgservice,
    title: "24 X 7 service",
    service: "online support 8/6",
  },
  {
    link: svgoffer,
    title: "Money Back Guarantee",
    service: "Get 100% money back if the product fails",
  },
  {
    link: svgLowCost,
    title: "Lowest Price Guarantee",
    service: "You won't find lower price anywhere else",
  },
];

const ServiceLayout = ({ sectionClass }) => {
  return (
    <Container>
      <section className={sectionClass}>
        <Row>
          {Data.map((data, index) => {
            return (
              <Col md="3" className="service-block" key={index}>
                <MasterServiceContent
                  link={data.link}
                  title={data.title}
                  service={data.service}
                />
              </Col>
            );
          })}
        </Row>
      </section>
    </Container>
  );
};

export default ServiceLayout;
