import React, { useState } from "react";
import {
  Col,
  Media,
  Row,
  Modal,
  ModalBody,
  Input,
  Form,
  Button,
  ModalHeader,
} from "reactstrap";
import offerBanner from "../../public/assets/images/Offer-banner.png";

const ModalComponent = () => {
  const [modal, setModal] = useState(true);

  const toggle = () => setModal(!modal);

  return (
    <Modal
      isOpen={modal}
      toggle={toggle}
      className="theme-modal modal-lg"
      centered
    >
      <div>
        <ModalBody
          className="modal1"
        >
          <Row className="compare-modal">
            <Col lg="12">
              <div className="modal-bg">
                <Button
                  type="button"
                  className="btn-close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={toggle}
                >
                </Button>
                <div
                  className="offer-content"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%"
                  }}
                >
                  <div
                    className="img-wrapper"
                    style={{
                      height: "40vh",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <img
                      style={{
                        marginTop: "1rem",
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                      src="/assets/images/sarvam/popup/logo.png"
                      className="img-fluid blur-up lazyload"
                      alt="Sarvam Safety"
                    />
                  </div>
                  <center>
                    <h3
                      style={{
                        fontSize: "2rem",
                        color: "var(--theme-deafult)",
                      }}
                    > Thinking ahead for your safety </h3>
                  </center>
                  {/* <Form
                    action="#"
                    className="auth-form needs-validation"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    target="_blank"
                  >
                    <div className="form-group mx-sm-3">
                      <Input
                        type="text"
                        className="form-control"
                        name="EMAIL"
                        id="mce-EMAIL"
                        placeholder="Enter your email"
                        required="required"
                      />
                      <Button
                        type="submit"
                        className="btn btn-solid"
                        id="mc-submit"
                      >
                        subscribe
                      </Button>
                    </div>
                  </Form> */}
                </div>
              </div>
            </Col>
          </Row>
        </ModalBody>
      </div>
    </Modal >
  );
};

export default ModalComponent;
