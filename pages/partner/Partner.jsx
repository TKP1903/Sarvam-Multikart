import React from 'react'
import CommonLayout from "../../components/shop/common-layout";
import { Container, Row, Col, Media } from "reactstrap";
import bannerimg from "../../Assets/collection banner/Banner-img-template.png";

// img of logos

export default function Regionalpartner() {
  const imgData = [
    "/assets/images/logos/1.png",
    // "/assets/images/logos/2.png",
    // "/assets/images/logos/3.png",
    // "/assets/images/logos/4.png",
    // "/assets/images/logos/5.png",
    // "/assets/images/logos/6.png",
    // "/assets/images/logos/7.png",
  ];
  
  

  return (
      <CommonLayout parent="home" title="BUSSINESS PARTNER">
        <Container>
       
          {/* <Col md="12">
              {imgData.map((imgSrc, i) => {
                return (
                  <div key={i}> 
                    <div className="logo-block" >
                      <a href={null}>
                        <Media src={imgSrc} alt="" style={{FlexDirection:"row"}}/>
                      </a>
                    </div>
                  </div>
                );
              })}
          </Col> */}

          {/* new style  */}
          <div class="gallery-image">
    <div class="img-box">
      <img src="http://www.sarvamsafety.com/wp-content/uploads/2014/12/3m.png" alt="" /> 
      <div class="caption">
          <p>3M India Ltd</p>
          <p class="opacity-low">personal safety division</p>
        </div>
    </div>
    <div class="img-box">
      <img src="http://www.sarvamsafety.com/wp-content/uploads/2014/12/dupoint.png" alt="" />
        <div class="caption">
          <p>E.I. Dupont India Pvt Limited</p>
          <p class="opacity-low">Chemical Protective clothings</p>
        </div>
    </div>
    <div class="img-box">
      <img src="http://www.sarvamsafety.com/wp-content/uploads/2015/03/honeywell_02.png" alt="" />     
        <div class="caption">
          <p>Honeywell Analytics</p>
          <p class="opacity-low">Gas Detectors (Portable & Fixed)</p>
        </div>
    </div>
    <div class="img-box">
      <img src="http://www.sarvamsafety.com/wp-content/uploads/2014/12/acme.png" alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p>Acme Fabrik Plast</p>
          <p class="opacity-low">Safety Shoes & Rain wears</p>
        </div>
      </div> 
    </div>
    <div class="img-box">
      <img src="" alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p>Sea</p>
          <p class="opacity-low">Cityscape</p>
        </div>
      </div> 
    </div>
    <div class="img-box">
      <img src="" alt="" />
      <div class="transparent-box">
        <div class="caption">
          <p>Vintage</p>
          <p class="opacity-low">Cinematic</p>
        </div>
      </div> 
    </div>
  </div>
          {/* new style end  */}

        <div class="section">
          <h1>Regional Partner</h1>
          <div class="grid">
            
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
                Justrite India
              </div>
            </div>
            <div class="item2 item--medium">
              <div class="item__details">
              ESCA Tech, Inc.
              </div>
            </div>
            <div class="item2 item--medium">
              <div class="item__details">
              Auburn Manufacturing
              </div>
            </div>
            <div class="item2 item--medium">
              <div class="item__details">
              Tempshield
              </div>
            </div>
            <div class="item2 item--medium">
              <div class="item__details">
              New Pig
              </div>
            </div>
            
          </div>
        </div>
        </Container>
      </CommonLayout>
    );
  }
