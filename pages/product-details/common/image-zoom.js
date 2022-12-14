import React from 'react';
import { Container, Media, Row, Col } from 'reactstrap';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const {
    useState,
    useRef,
} = React;

const ImageZoom = (props) => {
    const { image } = props;
    const popupRef = useRef(null);
    const closePopup = () => {
        popupRef.current.close();
    };

    // return (
    //     <Media
    //         src={image.src}
    //         alt={image.alt}
    //         className="img-fluid image_zoom_cls-0"
    //     />
    // );
    return (
        <Popup
            ref={popupRef}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'rgba(0, 0, 0, 0.5)',
            }}
            trigger={
                <div
                    className="product-image-wrap"
                    style={{
                        display: 'flex',
                        width: 'fit-content',
                    }}
                >
                    <Media
                        src={image.src}
                        alt={image.alt}
                        className="img-fluid image_zoom_cls-0"
                        style={{
                            background: 'transparent',
                            filter: 'drop-shadow(2px 4px 6px black)',
                        }}
                    />
                </div>
            }
            modal
            nested
        >
            <Container>
                <Row>
                    <Col
                        sm={12}
                        style={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <button
                            type="button"
                            className="close"
                            onClick={closePopup}
                        >
                            &times;
                        </button>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <Media
                            src={image.src}
                            alt={"loading" + image.alt || ""}
                            className="img-fluid"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'contain',
                                background: 'url(/assets/gif/loader/1.gif) center center no-repeat',
                                backgroundSize: 'contain',
                            }}
                        />
                    </Col>
                </Row>
            </Container>
        </Popup>
    );
}

export default ImageZoom;
