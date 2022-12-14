import React from 'react'
import CommonLayout from "../../components/shop/common-layout";
import { Container, Row, Col, Media } from "reactstrap";
import bannerimg from "../../Assets/collection banner/Banner-img-template.png";

// img of logos

export default function Partner() {

  return (
      <CommonLayout parent="home" title="BUSSINESS PARTNER">
        <Container>
       

          {/* Regional partner  */}

      <div className='container section'> 
        <h1 style={{fontSize:"20px",fontWeight:"bold",color:"#96b357"}}>Regional Partner</h1>
            <div class="gallery-image">
              <div class="img-box">
                <img src="http://www.sarvamsafety.com/wp-content/uploads/2014/12/3m.png" style={{height:"100px" ,width:"100px",margin:"15px"}} /> 
                <div class="caption">
                    <h1>3M India Ltd</h1>
                    <p class="opacity-low">Personal safety division</p>
                  </div>
              </div>
              <div class="img-box">
                <img src="http://www.sarvamsafety.com/wp-content/uploads/2014/12/acme.png" style={{height:"100px" ,width:"100px",margin:"15px"}} /> 
                <div class="caption">
                    <h1>Acme Fabrik Plast</h1>
                    <p class="opacity-low">Safety Shoes & Rain wears</p>
                  </div>
              </div>
              <div class="img-box">
                <img src="http://www.sarvamsafety.com/wp-content/uploads/2014/12/karam.png" style={{height:"100px" ,width:"100px",margin:"15px"}} /> 
                <div class="caption">
                    <h1>Karam Industries</h1>
                    <p class="opacity-low">Fall Protection & Other PPE’s</p>
                  </div>
              </div>
              <div class="img-box">
                <img src="http://www.sarvamsafety.com/wp-content/uploads/2014/12/superhouse.png" style={{height:"100px" ,width:"100px",margin:"15px"}} /> 
                <div class="caption">
                    <h1>Superhouse Limited</h1>
                    <p class="opacity-low">Safety Shoes</p>
                  </div>
              </div>
              <div class="img-box">
                <img src="http://www.sarvamsafety.com/wp-content/uploads/2014/12/dupoint.png" style={{height:"100px" ,width:"100px",margin:"15px"}} /> 
                <div class="caption">
                    <h1>E.I. Dupont India Pvt Limited</h1>
                    <p class="opacity-low">Chemical Protective clothings</p>
                  </div>
              </div> 
              <div class="img-box">
                <img src="http://www.sarvamsafety.com/wp-content/uploads/2014/12/honeywell_01.png" style={{height:"100px" ,width:"100px",margin:"15px"}} /> 
                <div class="caption">
                    <h1>Honeywell International <br /> India Pvt Ltd</h1>
                    <p class="opacity-low">Safety Products, Electrical Safety</p>
                  </div>
              </div> 
              <div class="img-box">
                <img src="http://www.sarvamsafety.com/wp-content/uploads/2014/12/esqaure.png" style={{height:"100px" ,width:"100px",margin:"15px"}} /> 
                <div class="caption">
                    <h1>E-Square Alliance Pvt ltd</h1>
                    <p class="opacity-low">Lockouts & Tag out, Traffic Safety</p>
                  </div>
              </div> 
              <div class="img-box">
                <img src="http://www.sarvamsafety.com/wp-content/uploads/2014/12/arvind.png" style={{height:"100px" ,width:"100px",margin:"15px"}} /> 
                <div class="caption">
                    <h1>Arvind Ltd</h1>
                    <p class="opacity-low">PROBAN – FR Coverall</p>
                  </div>
              </div> 
              <div class="img-box">
                <img src="http://www.sarvamsafety.com/wp-content/uploads/2015/03/honeywell_02.png" style={{height:"100px" ,width:"100px",margin:"15px"}} /> 
                <div class="caption">
                    <h1>Honeywell Analytics</h1>
                    <p class="opacity-low">Gas Detectors (Portable & Fixed)</p>
                  </div>
              </div> 
            </div>
      </div>     
          {/* Regional partner end */}


          {/* International parnter start */}
          <div className='container section'> 
        <h1 style={{fontSize:"20px",fontWeight:"bold",color:"#96b357"}}>International Partner</h1>
            <div class="gallery-image">
              <div class="img-box">
                <img src="http://www.sarvamsafety.com/wp-content/uploads/2014/12/justrite.png" style={{height:"100px" ,width:"100px",margin:"15px"}} /> 
                <div class="caption">
                    <h1>Justrite India</h1>
                    <p class="opacity-low">Safety Can & Cabinets for Flammable liquid storage.</p>
                  </div>
              </div>
              <div class="img-box">
                <img src="http://www.sarvamsafety.com/wp-content/uploads/2014/12/escatech.png" style={{height:"100px" ,width:"100px",margin:"15px"}} /> 
                <div class="caption">
                    <h1>ESCA Tech, Inc.</h1>
                    <p class="opacity-low">D-Lead® products - Hand and Body Wash</p>
                  </div>
              </div>
              <div class="img-box">
                <img src="http://www.sarvamsafety.com/wp-content/uploads/2014/12/auburn.png" style={{height:"100px" ,width:"100px",margin:"15px"}} /> 
                <div class="caption">
                    <h1>Auburn Manufacturing</h1>
                    <p class="opacity-low">FM Approved welding Blankets and curtains</p>
                  </div>
              </div>
              <div class="img-box">
                <img src="http://www.sarvamsafety.com/wp-content/uploads/2014/12/tempshield.png" style={{height:"100px" ,width:"100px",margin:"15px"}} /> 
                <div class="caption">
                    <h1>Tempshield</h1>
                    <p class="opacity-low">Cryo gloves and aprons</p>
                  </div>
              </div>
              <div class="img-box">
                <img src="http://www.sarvamsafety.com/wp-content/uploads/2014/12/newpig.png" style={{height:"100px" ,width:"100px",margin:"15px"}} /> 
                <div class="caption">
                    <h1>New Pig</h1>
                    <p class="opacity-low">Sorbents - Maintenance, Oil, Chemical - Spill kit</p>
                  </div>
              </div> 
              
            </div>
      </div>
          {/* International parnter End */}

        </Container>
      </CommonLayout>
    );
  }
