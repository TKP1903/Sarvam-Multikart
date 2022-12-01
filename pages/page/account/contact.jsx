import React from "react";
import CommonLayout from "../../../components/shop/common-layout";
import { Container, Row, Col, Media, Form, Label, Input } from "reactstrap";
import Blog from "../../../components/common/Blog/blog1";

const Data = [
  {
    img: "fa-phone",
    title: "Contact us",
    desc1: "044 – 4555 3337",
    desc2: "044 – 4555 2227",
  },
  {
    img: "fa-map-marker",
    title: "ADDRESS",
    desc1: "Address :#A6, SIDCO Industrial Estate, Villivakkam,Chennai – 600 049",
    desc2: "TamilNadu",
  },
  {
    img: "fa-envelope-o",
    title: "ADDRESS",
    desc1: "sarvam@sarvamsafety.com",
  },
  
  
];

const Data2 = [
  {
    img: "fa-phone",
    title: "Contact us",
    desc1: "0422-6690460"
  },
  {
    img: "fa-map-marker",
    title: "ADDRESS",
    desc1: "No: 168, Thirunagar, Vilankurichi Road,Saravanampatti PO,Coimbatore – 641035",
    desc2: "TamilNadu",
  },
  {
    img: "fa-envelope-o",
    title: "ADDRESS",
    desc1: "cbesarvam@sarvamsafety.com",
  },
  
  
];

const Data3 = [
  {
    img: "fa-phone",
    title: "Contact us",
    desc1: "044 – 4555 3337",
    desc2: "044 – 4555 2227",
  },
  {
    img: "fa-map-marker",
    title: "ADDRESS",
    desc1: "Plot no:180/10-A,Lake Area,Near Meenakshi Mission Hospital,Uttangudi Post, Madurai – 625107",
    desc2: "TamilNadu",
  },
  {
    img: "fa-envelope-o",
    title: "ADDRESS",
    desc1: "mdusarvam@sarvamsafety.com",
  },
];

const Data4 = [
  {
    img: "fa-phone",
    title: "Contact us",
    desc1: "0413-2200722 ",
    desc2: "9840967520",
  },
  {
    img: "fa-map-marker",
    title: "ADDRESS",
    desc1: "No:C-20, 6th Cross, Jawahar Nagar, Boomiyanpet. Pondicherry – 605 005",
    desc2: "TamilNadu",
  },
  {
    img: "fa-envelope-o",
    title: "ADDRESS",
    desc1: "pdysarvam@sarvamsafety.com",
  },
];

const Data5 = [
  {
    img: "fa-phone",
    title: "Contact us",
    desc1: "04172-270365",
    desc2: "9840967522",
  },
  {
    img: "fa-map-marker",
    title: "ADDRESS",
    desc1: "No:10, VMC Road,Ranipet – 632401.",
    desc2: "TamilNadu",
  },
  {
    img: "fa-envelope-o",
    title: "ADDRESS",
    desc1: "rptsarvam@sarvamsafety.com",
  },
];

const Data6 = [
  {
    img: "fa-phone",
    title: "Contact us",
    desc1: "0484-2425719",
    desc2: "9349767507",
  },
  {
    img: "fa-map-marker",
    title: "ADDRESS",
    desc1: "X / 225 Peace Cottage,Seaport – Airport Road, North Chittethukkara, CSEZ (Po), kakkanad, Kochi – 682037",
    desc2: "TamilNadu",
  },
  {
    img: "fa-envelope-o",
    title: "ADDRESS",
    desc1: " kochisarvam@sarvamsafety.com",
  },
];


const ContactDetail = ({ img, title, desc1, desc2 }) => {
  return (
    <li>
      <div className="contact-icon">
        <i className={`fa ${img}`} aria-hidden="true"></i>
        <h6>{title}</h6>
      </div>
      <div className="media-body">
        <p>{desc1}</p>
        <p>{desc2}</p>
      </div>
    </li>
  );
};

const Contact = () => {
  return (
    <CommonLayout parent="home" title="Contact">
      <section className="contact-page section-b-space">
        <Container className="contactus-page">

          {/* corporate office detail */}

          <Row className="section-b-space">
             <h1 style={{textAlign:"center",fontSize:"25px"}}>CORPORATE OFFICE</h1>
            <div className="d-flex justify-content-center">
              <Col lg="5" className="map" style={{paddingTop:"11px",height:"95%"}}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9331.67176431221!2d80.19904277619314!3d13.105880752778257!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xadd2786bcce9a4be!2sSarvam%20Safety%20Equipment%20Private%20Limited!5e0!3m2!1sen!2sin!4v1667865878644!5m2!1sen!2sin">
              </iframe>
              </Col>
              <Col lg="5" style={{border:"1px solid grey",textAlign:"left", margin:"10px"}}>
                <div className="contact-right">
                  
                  <ul>
                    {Data.map((data, i) => {
                      return (
                        <ContactDetail
                          key={i}
                          img={data.img}
                          title={data.title}
                          desc1={data.desc1}
                          desc2={data.desc2}
                        />
                      );
                    })}
                  </ul>
                </div>
              </Col>
            </div>

            {/* Branch address */}

            <h1 style={{padding:"30px", margin:"10px"}}>BRANCH OFFICE</h1>
            
            <div className="d-flex justify-content-center">
              <Col lg="5" className="map" style={{height:"95%" , margin:"10px"}}>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9331.67176431221!2d80.19904277619314!3d13.105880752778257!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xadd2786bcce9a4be!2sSarvam%20Safety%20Equipment%20Private%20Limited!5e0!3m2!1sen!2sin!4v1667865878644!5m2!1sen!2sin">
                  </iframe>
                </Col>
              <Col lg="5" style={{border:"1px solid grey" ,width:"380",margin:"10px"}}>
                  <div className="contact-right">
                    <ul>
                      <h1 style={{textAlign:"center"}}>MADURAI BRANCH OFFICE</h1>
                      {Data3.map((data, i) => {
                        return (
                          <ContactDetail
                            key={i}
                            img={data.img}
                            title={data.title}
                            desc1={data.desc1}
                            desc2={data.desc2}
                          />
                        );
                      })}
                    </ul>
                  </div> 
              </Col>
            </div>
            
            <div className="d-flex justify-content-center">
            
              <Col lg="20" style={{border:"1px solid grey",margin:"5px" }}>
                  <div className="contact-right">
                    <ul>
                      <h1 style={{textAlign:"center"}}>PONDICHERRY OFFICE</h1>
                      {Data4.map((data, i) => {
                        return (
                          <ContactDetail 
                            key={i}
                            img={data.img}
                            title={data.title}
                            desc1={data.desc1}
                            desc2={data.desc2}
                          />
                        );
                      })}
                    </ul>
                  </div>
              </Col>
            
            <Col lg="40" className="row " style={{border:"1px solid grey",margin:"5px"}}>
                  <div className="contact-right">
                    <ul>
                      <h1 style={{textAlign:"center"}}>RANIPET</h1>
                      {Data5.map((data, i) => {
                        return (
                          <ContactDetail
                            key={i}
                            img={data.img}
                            title={data.title}
                            desc1={data.desc1}
                            desc2={data.desc2}
                          />
                        );
                      })}
                    </ul>
                  </div>
            </Col>
        
            <Col lg="30" style={{border:"1px solid grey" ,width:"380px",margin:"5px"}}>
                  <div className="contact-right">
                    <ul>
                      <h1 style={{textAlign:"center"}}>COCHIN</h1>
                      {Data6.map((data, i) => {
                        return (
                          <ContactDetail
                            key={i}
                            img={data.img}
                            title={data.title}
                            desc1={data.desc1}
                            desc2={data.desc2}
                          />
                        );
                      })}
                    </ul>
                  </div>
            </Col>
          
            </div>
          </Row>

          {/* Form
          <Row>
            <h1 className="request_form_tittle">Request Form </h1>
            <Col sm="12">
              <Form className="theme-form">
                <Row>
                  <Col md="6">
                    <Label className="form-label" for="name">First Name</Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter Your name"
                      required=""
                    />
                  </Col>
                  <Col md="6">
                    <Label className="form-label" for="email">Last Name</Label>
                    <Input 
                      type="text"
                      className="form-control"
                      id="last-name"
                      placeholder="Email"
                      required=""
                    />
                  </Col>
                  <Col md="6">
                    <Label className="form-label" for="review">Phone number</Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="review"
                      placeholder="Enter your number"
                      required=""
                    />
                  </Col>
                  <Col md="6">
                    <Label className="form-label" for="email">Email</Label>
                    <Input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Email"
                      required=""
                    />
                  </Col>
                  <Col md="12">
                    <Label className="form-label" for="review">Write Your Message</Label>
                    <textarea
                      className="form-control"
                      placeholder="Write Your Message"
                      id="exampleFormControlTextarea1"
                      rows="6"
                    ></textarea>
                  </Col>
                  <Col md="12">
                    <button className="btn btn-solid" type="submit">
                      Send Your Message
                    </button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row> */}

          {/* form  */}

          <form class="row g-2" style={{margin:"0px 120px 10px 120px", display:"flex"}} method>
            <div><h1 style={{textAlgin:"center",color:"#96b357"}}>Request Form</h1></div>
            <div class="col-md-4">
              <input type="text" class="form-control " id="validationServer01"  required placeholder="First Name" />
            </div>
            <div class="col-md-4">
              <input type="text" class="form-control " id="validationServer02"  required placeholder="Last Name" />
              <div class="valid-feedback">
                Looks good!
              </div>
            </div>
            <div class="col-md-4">
              <input type="text" class="form-control " id="validationServer03" aria-describedby="validationServer03Feedback" required placeholder="City" />
              <div id="validationServer03Feedback" class="invalid-feedback">
                Please provide a valid city.
              </div>
            </div>        
            <div class="col-mb">
                <textarea class="form-control " id="validationTextarea" placeholder="Your Message Here" required></textarea>
                <div class="invalid-feedback">
                  Please enter a message in the textarea.
                </div>
              </div>
            <div class="col-10">
              <div class="form-check">
                <input class="form-check-input " type="checkbox" value="" id="invalidCheck3" aria-describedby="invalidCheck3Feedback" required />
                <label class="form-check-label" for="invalidCheck3">
                  Agree to terms and conditions
                </label>
                <div id="invalidCheck3Feedback" class="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <div class="mb-3">
              <button class="btn btn-success" style={{fontSize:"10px"}} type="submit">Submit form</button>
            </div>
          </form>
          {/* Form End */}

        </Container>
        <Blog
        type="fashion"
        titleClass="title1"
        inner="title-inner1"
        smallHeading="Our Clients"
        bigHeading="TOP CLIENTS"
        />
      </section>
    </CommonLayout>
  );
};

export default Contact;
