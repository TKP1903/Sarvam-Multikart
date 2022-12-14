import React from "react";
import CommonLayout from "../../components/shop/common-layout";
import { Container, Row, Col, Media } from "reactstrap";
import aboutus from "../../public/assets/images/about/ab2.png";
import Slider from "react-slick";
import { Slider1, Slider2, Slider4 } from "../../services/script";
import ServiceLayout from "../../components/common/Service/service1";
import Award from "../Awards/Award";

const TeamData = (() => {
  const teamData = [];
  for (let i = 1; i <= 4; i++) {
    teamData.push({
      img: `/assets/images/sarvam/team/${i}.webp`,
    });
  }
  return teamData;
})();

const Team = ({ img, name = "", post = "" }) => {
  return (
    <div
      className="home text-center"
      style={{
        backgroundSize: "contain",
        // height: "500px",
        background: `url(${img}) center center no-repeat`
      }}
    >
      <Container>
        <Row>
          <Col>
            <div className="slider-contain">
              <div>
                <h4 style={{ color: "white" }}>{name}</h4>
                <h6 style={{ color: "white" }}>{post}</h6>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
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
          <h5 style={{ fontSize: "23px", fontWeight: "bold" }} >{name}</h5>
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
        <section
          className="about-page section-b-space"
          style={{
            paddingTop: "0px",
          }}
        >
          <Container>
            <Row>
              {/* <Col lg="12" style={{alignContent:"center"}}>
                <div className="banner-section" >
                  <center>
                  <Media 
                    src={aboutus.src}
                    className="img-fluid blur-up lazyload"
                    alt=""
                  />
                  </center>
                </div>
              </Col> */}

              <Col sm="12" style={{
                paddingTop: "0px",

              }}>
                <h4
                  style={{
                    padding: 0,
                    marginTop: 0,
                    marginBottom: "20px",
                  }}
                  className="aboutus-title"
                >
                  Who we are?
                </h4>
                <center
                  style={{
                    background: "url(/assets/gifs/loader/1.gif) center center no-repeat",
                    backgroundSize: "10%",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div
                    className="youtube-wrapper"
                    style={{
                      position: "relative",
                      paddingBottom: "56.25%" /* 16:9 */,
                      height: "0",
                      overflow: "hidden",
                      width: "100%",
                    }}
                  >
                    <iframe
                      frameborder="0"
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/YoXTO60j91g"
                      title="Sarvam"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    />
                  </div>
                </center>
                <p
                  className="text-secondary"
                  style={{
                    "fontSize": "1.4rem",
                    "textAlign": "left",
                    "padding-block": "1.7rem",
                    "padding-inline": "1rem",
                    "marginBlock": "0.5rem",
                    "lineHeight": "179%",
                    "letterSpacing": "3px",
                    "fontWeight": "500",
                    "fontFamily": "'Lato'",
                  }}
                >
                  <strong>SARVAM</strong> translates to <u>Everything</u> or <u>Complete</u> in Sanskrit,
                  represents all of our company's strengths, including our infrastructure, human capital, depth of knowledge, wide range of products, quality, and unshakable commitment to being ahead of the curve. Our talented and competent sales, marketing, back end supporting, service, and logistics teams provide assistance for all of these. SARVAM SAFETY Equipment (P) LTD serves the safety needs of many industrial segments, including automobiles, chemicals, engineering, pharmaceuticals, refineries, construction, power sectors, fire service, government sectors, IT, hotels, and various institutions. It is a channel partner for reputable national and international life saving equipment manufacturers.
                  {/* The word "SARVAM" a Sanskrit word that stands for "Everything"
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
                  Institutions. */}
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
                <h2 style={{ textTransform: "none", fontSize: "2rem", textAlign: "center", color: "#7fad39" }}>
                  PEOPLE BEHIND THE SCENE
                </h2>
                <h4 style={{ color: "grey", fontWeight: "100" }}>
                  Good teams incorporate teamwork into their culture, creating
                  the building blocks for success.
                </h4>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <section className="p-4">
                  <Slider
                    {...Slider1}
                    className="slide-1 home-slider"
                    autoplay={true}
                  // accessibility={true}
                  >

                    {TeamData.map((data, i) => {
                      return (
                        <Team
                          key={i}
                          img={data.img}
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
