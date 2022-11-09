import React from 'react'
import CommonLayout from "../../components/shop/common-layout";
import { Container, Row, Col, Media } from "reactstrap";
import bannerimg from "../../Assets/collection banner/Banner-img-template.png";

export default function Regionalpartner() {
  return (
    <CommonLayout parent="home" title="regional-partner">
      <Container>
        <Row>
          <Col lg="12">
                    <div className="banner-section">
                      <Media
                        src={bannerimg.src}
                        className="img-fluid blur-up lazyload"
                        alt=""
                      />
                    </div>
          </Col>
          <Col sm="12">
            <section className='regional-img'>
              <ul class="img-list">
                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/010.jpg" /></li>
                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/012.jpg" /></li>
                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/015.jpg" /></li>
                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/038.jpg" /></li>
                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/044.jpg" /></li>
                <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/044.jpg" /></li>
              </ul>
            </section>
          </Col>
        </Row>       
      </Container>
    </CommonLayout>
  );
}
