import Img from 'next/image';
import { Col, Container, Row } from "reactstrap";

const MasterBanner = ({ img,classes }) => {
  return (
    <div>
      <div className={`home ${img} ${classes ? classes : "text-center"}`}>
        <Container>
          <Row>
            <Col>
              <div className="slider-contain">
                  <Img src={img} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MasterBanner;
