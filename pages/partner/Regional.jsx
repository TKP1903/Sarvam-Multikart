import React from 'react'
import CommonLayout from "../../components/shop/common-layout";
import { Container, Row, Col, Media } from "reactstrap";
import bannerimg from "../../Assets/collection banner/Banner-img-template.png";


export default function Regionalpartner() {

  // const RegDetailData = [
  //   {
  //     img:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/010.jpg",
  //     title:"3M India Ltd"
  //   },
  //   {
  //     img:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/010.jpg",
  //     title:"3M India Ltd"
  //   },
  //   {
  //     img:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/010.jpg",
  //     title:"3M India Ltd"
  //   },
  //   {
  //     img:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/010.jpg",
  //     title:"3M India Ltd"
  //   },
  //   {
  //     img:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/010.jpg",
  //     title:"3M India Ltd"
  //   },
  //   {
  //     img:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/451895/010.jpg",
  //     title:"3M India Ltd"
  //   },
  // ];

  // const RegDetail = ({img, title}) => {
  //   return (
  //      <div>
  //       <ul class="img-list col-grid-box">
  //         <li><Media src={img} /></li>
  //         <h6>{title}</h6>
  //       </ul>
  //      </div>
  //   );
  // };


  return (
    <CommonLayout parent="home" title="BUSSINESS PARTNER">
      <Container>
        {/* <Row>
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
              {RegDetailData.map((data, i) => {
                return(
                  <RegDetail
                  key={i}
                  img={data.img} 
                  title={data.title}
                  />
                );
              })}
            </section>
          </Col>
        </Row> */}
        
      <div class="section">
        <h1>Regional Partner</h1>
        <div class="grid">
          <div class="item item--medium">
            <div class="item__details">
            3M India Ltd
            </div>
          </div>
          <div class="item item--medium">
            <div class="item__details">
              Acme Fabrik Plast
            </div>
          </div>
          <div class="item item--medium">
            <div class="item__details">
              Karam Industries
            </div>
          </div>
          <div class="item item--medium">
            <div class="item__details">
              Superhouse Limited
            </div>
          </div>
          <div class="item item--medium">
            <div class="item__details">
              E.I. Dupont India Pvt Limited
            </div>
          </div>
          <div class="item item--medium">
            <div class="item__details">
              Honeywell International India Pvt Ltd
            </div>
          </div>
        </div>
      </div>
      
      <div class="section">
        <h1>International Partner</h1>
        <div class="grid">
          <div class="item2 item--medium">
            <div class="item__details">
              3M India Ltd
            </div>
          </div>
          <div class="item2 item--medium">
            <div class="item__details">
              Acme Fabrik Plast
            </div>
          </div>
          <div class="item2 item--medium">
            <div class="item__details">
              Karam Industries
            </div>
          </div>
          <div class="item2 item--medium">
            <div class="item__details">
              Superhouse Limited
            </div>
          </div>
          
        </div>
      </div>
      </Container>
    </CommonLayout>
  );
}
