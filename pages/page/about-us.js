import React from "react";
import CommonLayout from "../../components/shop/common-layout";
import { Container, Row, Col, Media } from "reactstrap";
import aboutus from "../../public/assets/images/about/ab2.png";
import Slider from "react-slick";
import { Slider2, Slider4 } from "../../services/script";
import ServiceLayout from "../../components/common/Service/service1";
import Award from "../Awards/Award";

const TeamData = [
  {
    img: "/assets/images/team/1.png",
  },
  {
    img: "/assets/images/team/2.png",
  },
  {
    img: "/assets/images/team/3.png",
  },
  {
    img: "/assets/images/team/4.png",
  },
];

const Team = ({ img, name, post }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Media
            src={img}
            className="img-fluid blur-up lazyload bg-img "
            alt="Can't load image"
            style={{
              objectFit: "cover",
              height: "400px",
            }}
          />
          <h4>{name}</h4>
          <h6>{post}</h6>
        </Col>
      </Row>
    </Container>
  );
};

const TeamDetailData = [
  {
    name: "VISION",
    post: "",
    about:
      "SARVAM SAFETY is your one stop solution provider for in lifeand industrial safety equipment by catering to various segments.",
  },
  {
    name: "MISSION",
    post: "",
    about:
      "SARVAM SAFETY is your one stop solution provider for in lifeand industrial safety equipment by catering to various segments .",
  },
];

const TeamDetail = ({ img, name, post, about }) => {
  return (
    <div>
      <div className="media">
        <div className="text-center">
          <Media src={img} alt="#" />
          <h5 style={{fontSize:"23px",fontWeight:"bold"}} >{name}</h5>
          <h6>{post}</h6>
        </div>
        <div className="media-body">
          <p>{about}</p>
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <>
      <CommonLayout parent="home" title="About-us">
        {/* // <!-- about section start --> */}
        <section className="about-page section-b-space">
          <Container>
            <Row>
              <Col lg="12" style={{alignContent:"center"}}>
                <div className="banner-section" >
                  <center>
                  <Media 
                    src={aboutus.src}
                    className="img-fluid blur-up lazyload"
                    alt=""
                  />
                  </center>
                </div>
              </Col>
             
              <Col sm="12">
                <h4 className="aboutus-title">Who we are?</h4>
               <center><iframe width="80%" height="500" src="https://www.youtube.com/embed/YoXTO60j91g" title="Sarvam" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{alignContent:"center"}}></iframe></center>
                <p
                  style={{
                    display: "flex",
                    fontSize: "1.3rem",textAlign:"center"
                  }}
                >
                  The word "SARVAM" a Sanskrit word that stands for "Everything"
                  or "Complete", represents to the totality of our strengths as
                  a company - Infrastructure, Man power, Rich Experience,
                  Extensive Product Range, Quality and undying passion to remain
                  ahead of the times. All backed by our capable and experienced
                  sales, Marketing, Back end Supporting, Service and Logistics
                  team.SARVAM SAFETY Equipment (P) LTD is a Channel partner for
                  reputed National and International Life Saving Equipment
                  Manufacturers, catering the safety needs of various Industrial
                  segments such as Automobiles, Chemical, Engineering,
                  Pharmaceuticals, Refineries, Construction, power sectors, Fire
                  service, Government sectors, IT , Hotels and various
                  Institutions.
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        {/* <!-- vision and mission start--> */}
        <section className="testimonial small-section">
          <Container>
            <Row>
              <Col sm="12">
                <Slider
                  {...Slider2}
                  className="slide-2 testimonial-slider no-arrow"
                >
                  {TeamDetailData.map((data, i) => {
                    return (
                      <TeamDetail
                        key={i}
                        img={data.img}
                        name={data.name}
                        post={data.post}
                        about={data.about}
                      />
                    );
                  })}
                </Slider>
              </Col>
            </Row>
          </Container>
        </section>
        {/* <!-- vision and mission ends--> */}

        <Award />

        {/* <!--Team start--> */}
        <section id="team" className="team section-b-space ratio_asos">
          <Container>
            <Row>
              <Col sm="12">
                <h2 style={{ textTransform: "none", fontSize: "2rem", textAlign:"center",color:"#7fad39" }}>
                  PEOPLE BEHIND THE SCENE
                </h2>
                <h4 style={{color:"grey",fontWeight:"100"}}>
                  Good teams incorporate teamwork into their culture, creating
                  the building blocks for success.
                </h4>
                <section className="p-4">
                  {/* <CustomCarsousel
                    items={TeamData.map((data, i) => {
                      return (
                        <Team
                          key={"team-" + i}
                          img={data.img}
                          // name={data.name}
                          // post={data.post}
                        />
                      );
                    })}
                  /> */}
                  <Slider
                    className="slide-1 home-slider"
                    autoplay={true}
                    // accessibility={true}
                  >
                    {TeamData.map((data, i) => {
                      return (
                        <Team
                          key={i}
                          img={data.img}
                          name={data.name}
                          post={data.post}
                        />
                      );
                    })}
                  </Slider>
                </section>
                
              </Col>
            </Row>
          </Container>
        </section>
        {/* <!--Team ends--> */}

        <div className="section-b-space">
          <ServiceLayout
            sectionClass={"service border-section small-section"}
          />
        </div>
      </CommonLayout>
    </>
  );
};

export default AboutUs;
