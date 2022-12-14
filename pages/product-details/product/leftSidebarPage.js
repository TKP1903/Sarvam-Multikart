import React, { useState, useEffect, useRef } from "react";
import ProductTab from "../common/product-tab";
import Service from "../common/service";
import NewProduct from "../../shop/common/newProduct";
import Slider from "react-slick";
import { useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import ImageZoom from "../common/image-zoom";
import DetailsWithPrice from "../common/detail-price";
import Filter from "../common/filter";
import { Container, Row, Col, Media } from "reactstrap";

import { getProductById } from "../../../helpers/custom/apiCallers/Products/apiCaller";

const GET_SINGLE_PRODUCTS = gql`
  query product($id: Int!) {
    product(id: $id) {
      id
      title
      description
      type
      brand
      category
      price
      new
      sale
      discount
      stock
      variants {
        id
        sku
        size
        color
        image_id
      }
      images {
        alt
        src
      }
    }
  }
`;

const _data = {
  product: {
    id: 1,
    title: "Product Title",
    description: "Product Description",
    type: "Product Type",
    brand: "Product Brand",
    category: "Product Category",
    price: 100,
    new: true,
    sale: true,
    discount: 10,
    stock: 10,
    variants: [
      {
        id: 1,
        sku: "SKU",
        size: "S",
        color: "Red",
        image_id: 1,
      },
      {
        id: 2,
        sku: "SKU",
        size: "M",
        color: "Red",
        image_id: 2,
      },
      {
        id: 3,
        sku: "SKU",
        size: "L",
        color: "Red",
        image_id: 3,
      },
    ],
    images: [
      {
        alt: "Product Image",
        src: "/assets/images/pro3/1.jpg",
      },
      {
        alt: "Product Image",
        src: "/assets/images/pro3/2.jpg",
      },
      {
        alt: "Product Image",
        src: "/assets/images/pro3/3.jpg",
      },
    ],
  },
};

const LeftSidebarPage = ({ pathId }) => {
  // var { loading, data } = useQuery(GET_SINGLE_PRODUCTS, {
  //   variables: {
  //     id: parseInt(pathId),
  //   },
  // });
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(_data);

  const [state, setState] = useState({ nav1: null, nav2: null });
  const slider1 = useRef();
  const slider2 = useRef();

  var products = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    fade: true,
  };
  var productsnav = {
    slidesToShow: 3,
    swipeToSlide: true,
    arrows: false,
    dots: false,
    focusOnSelect: true,
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await getProductById(pathId);
      setData(response);
      setLoading(false);
    };
    fetchProduct();
  }, [pathId]);

  useEffect(() => {
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    });
  }, [data]);

  const { nav1, nav2 } = state;

  const filterClick = () => {
    document.getElementById("filter").style.left = "-15px";
  };

  const changeColorVar = (img_id) => {
    slider2.current.slickGoTo(img_id);
  };
  /**
   * Keep these commented out for future reference
   */
  // <Filter />
  // <Service />
  // {/* <!-- side-bar single product slider start --> */}
  // <NewProduct />
  // {/* <!-- side-bar single product slider end --> */}

  return (
    <section className="">
      <div className="collection-wrapper">
        <Container>
          <Row>
            {/* original sm = 3
             */}
            <Col sm="0" className="collection-filter" id="filter">
            </Col>
            <Col lg="9" sm="12" xs="12">
              <Container fluid={true}>
                <Row>
                  <Col xl="12" className="filter-col">
                    <div className="filter-main-btn mb-2">
                      <span onClick={filterClick} className="filter-btn">
                        <i className="fa fa-filter" aria-hidden="true"></i>{" "}
                        filter
                      </span>
                    </div>
                  </Col>
                </Row>
                {!data ||
                  !data.product ||
                  data.product.length === 0 ||
                  loading ? (
                  "loading..."
                ) : (
                  <Row>
                    <Col lg="6" className="product-thumbnail">
                      <Slider
                        {...products}
                        asNavFor={nav2}
                        ref={(slider) => (slider1.current = slider)}
                        className="product-slick"

                      >
                        {data.product.images.map((vari, index) => (
                          <div
                            key={index}
                          >
                            <div
                              className="product-image"
                              style={{
                                width: "100%",
                                display: "flex",
                                paddingBlock: "2rem",
                                justifyContent: "center",
                              }}>
                              <ImageZoom image={vari} />
                            </div>
                          </div>
                        ))}
                      </Slider>
                      {/* <Slider
                        className="slider-nav"
                        {...productsnav}
                        asNavFor={nav1}
                        ref={(slider) => (slider2.current = slider)}
                      >
                        {data.product.variants
                          ? data.product.images.map((vari, index) => (
                            <div key={index}>
                              <Media
                                src={`${vari.src}`}
                                key={index}
                                alt={vari.alt}
                                className="img-fluid"
                              />
                            </div>
                          ))
                          : ""}
                      </Slider> */}
                    </Col>
                    <Col lg="6" className="rtl-text">
                      <DetailsWithPrice
                        item={data.product}
                        changeColorVar={changeColorVar}
                      />
                    </Col>
                  </Row>
                )}
              </Container>
              <ProductTab
                product={data.product}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </section >
  );
};

export default LeftSidebarPage;
