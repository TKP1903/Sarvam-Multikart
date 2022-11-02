import React from "react";
import CommonLayout from "../../components/shop/common-layout";
import { Container, Row, Col, Media } from "reactstrap";
import aboutus from "../../public/assets/images/about/aboutus.jpg";
// import avtar from "../../public/assets/images/avtar.jpg";
// import two from "../../public/assets/images/2.jpg";
import Slider from "react-slick";
import { Slider2, Slider4 } from "../../services/script";
// import team1 from "../../public/assets/images/team/1.jpg";
// import team2 from "../../public/assets/images/team/2.jpg";
// import team3 from "../../public/assets/images/team/3.jpg";
// import team4 from "../../public/assets/images/team/4.jpg";
// import ServiceLayout from "../../components/common/Service/service1.js";

const TeamData = [
  {
    img: '/assets/images/team/1.jpg',
    name: "Hileri Keol",
    post: "CEo & Founder At Company",
  },
  {
    img: '/assets/images/team/2.jpg',
    name: "Hileri Keol",
    post: "CEo & Founder At Company",
  },
  {
    img: '/assets/images/team/3.jpg',
    name: "Hileri Keol",
    post: "CEo & Founder At Company",
  },
  {
    img: '/assets/images/team/4.jpg',
    name: "Hileri Keol",
    post: "CEo & Founder At Company",
  },
  {
    img: '/assets/images/team/1.jpg',
    name: "Hileri Keol",
    post: "CEo & Founder At Company",
  },
];

const Team = ({ img, name, post }) => {
  return (
    <div>
      <div>
        <Media src={img} className="img-fluid blur-up lazyload bg-img" alt="" />
      </div>
      <h4>{name}</h4>
      <h6>{post}</h6>
    </div>
  );
};

const TeamDetailData = [
  { 
    name: "Vision",
    post: "",
    about:
      "SARVAM SAFETY is your one stop solution provider for in lifeand industrial safety equipment by catering to various segments.",
  },
  {
    name: "Mission",
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
          <h5>{name}</h5>
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
              <Col lg="12">
                <div className="banner-section">
                  <Media
                    src={aboutus.src}
                    className="img-fluid blur-up lazyload"
                    alt=""
                  />
                </div>
              </Col>
              <Col sm="12">
                <h4>
                Who we are
                </h4>
                <p>
                  The word 'SARVAM' a Sanskrit word that stands for "Everything" or "Complete", represents to the totality of our strengths as a company - Infrastructure, Man power, Rich Experience, Extensive Product Range, Quality and undying passion to remain ahead of the times. All backed by our capable and experienced sales, Marketing, Back end Supporting, Service and Logistics team.SARVAM SAFETY Equipment (P) ltd is a Channel partner for reputed National and International Life Saving Equipment Manufacturers, catering the safety needs of various Industrial segments such as Automobiles, Chemical, Engineering, Pharmaceuticals, Refineries, Construction, power sectors , Fire service, Government sectors, IT , Hotels and various Institutions.
                </p>
                
              </Col>
            </Row>
          </Container>
        </section>

        {/* <!--Testimonial start--> */}
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
        {/* <!--Testimonial ends--> */}

        {/* <!--Team start--> */}
        <section id="team" className="team section-b-space ratio_asos">
          <Container>
            <Row>
              <Col sm="12">
                <h2>Our Team</h2>
                <Slider className="team-4" {...Slider4}>
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
              </Col>
            </Row>
          </Container>
        </section>
        {/* <!--Team ends--> */}

        <div className="section-b-space">
          {/* <ServiceLayout
            sectionClass={"service border-section small-section"}
          /> */}
        </div>
      </CommonLayout>
    </>
  );
};

export default AboutUs;
