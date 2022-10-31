import React from "react";
import { Table, Media } from "reactstrap";
import slider from "../../public/assets/images/email-temp/e-2-slider.jpg";
import banner from "../../public/assets/images/email-temp/banner.jpg";
import banner2 from "../../public/assets/images/email-temp/banner-2.jpg";
import ten from "../../public/assets/images/email-temp/10.jpg";
import eleven from "../../public/assets/images/email-temp/11.jpg";
import twale from "../../public/assets/images/email-temp/12.jpg";
import MasterItems from "./common/master-items-email-template";
import SocialEmailTemplate from "./common/social-email-template";
import MasterMenu from "./common/menu-email-template";

const ItemsData = [
  {
    img: "/assets/images/email-temp/13.jpg",
    link: "#",
    about: "When an unknown.",
    price: "$45.00",
  },
  {
    img: "/assets/images/email-temp/14.jpg",
    link: "#",
    about: "When an unknown.",
    price: "$45.00",
  },
];

const BannerData = [
  { img: banner, link: "#" },
  { img: banner2, link: "#" },
];
const EmailTemplate2 = () => (
  <>
    <Table
      borderless
      className="email-template-table"
      cellPadding="0"
      cellSpacing="0"
    >
      <tbody>
        <tr>
          <td style={{ padding: "0" }}>
            <MasterMenu />
            <Table
              className="slider"
              align="center"
              border="0"
              cellPadding="0"
              cellSpacing="0"
              width="100%"
            >
              <tbody>
                <tr>
                  <th
                    style={{
                      backgroundColor: "#11bfff",
                      padding: "30px",
                      width: "60%",
                    }}
                  >
                    <Table
                      border="0"
                      cellPadding="0"
                      cellSpacing="0"
                      width="100%"
                    >
                      <tbody>
                        <tr>
                          <td
                            style={{
                              color: "#ffffff",
                              fontSize: "16px",
                              lineHeight: "20px",
                              textTransform: "uppercase",
                              textAlign: "left",
                              paddingBottom: "5px",
                            }}
                          >
                            New Color
                          </td>
                        </tr>
                        <tr>
                          <td
                            className="h2-white left pb20"
                            style={{
                              color: "#ffffff",
                              fontFamily: "'Roboto', sans-serif",
                              fontSize: "52px",
                              lineHeight: "58px",
                              textTransform: "uppercase",
                              fontWeight: "bold",
                              textAlign: "left",
                              paddingBottom: "20px",
                            }}
                          >
                            new <br />
                            season
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <p
                              style={{
                                fontSize: "13px",
                                lineHeight: "18px",
                                color: "#ffffff",
                                textAlign: "left",
                              }}
                            >
                              We are committed to your satisfaction with every
                              order.
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <Table>
                      <tbody>
                        <tr style={{ textAlign: "left" }}>
                          <td
                            className="text-button white-button"
                            style={{
                              fontSize: "14px",
                              display: "inline-block",
                              lineHeight: "18px",
                              textAlign: "center",
                              textTransform: "uppercase",
                              padding: "10px",
                              background: "#ffffff",
                              color: "#f54084",
                              fontWeight: "bold",
                            }}
                          >
                            <a
                              href="#"
                              target="_blan"
                              style={{
                                color: "#4e54cb",
                                textDecoration: "none",
                              }}
                            >
                              <span
                                style={{
                                  color: "#f1415e",
                                  textDecoration: "none",
                                }}
                              >
                                shop now
                              </span>
                            </a>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </th>
                  <th align="center" style={{ padding: "0" }}>
                    <Media src={slider.src} alt="" style={{ marginBottom: "0" }} />
                  </th>
                </tr>
              </tbody>
            </Table>

            <Table
              className="product-box-sec"
              align="center"
              border="0"
              cellPadding="0"
              cellSpacing="0"
              width="100%"
              style={{ marginTop: "30px" }}
            >
              <thead>
                <tr>
                  <td colSpan="5">
                    <h4
                      className="title"
                      style={{
                        width: "100%",
                        textAlign: "center",
                        marginTop: "0",
                        marginBottom: "10px",
                      }}
                    >
                      trending product
                    </h4>
                    <p style={{ margin: "0" }}>GET EVEN 25% OFF DISCOUNT</p>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  {ItemsData.map((data, i) => {
                    return (
                      <MasterItems
                        key={i}
                        img={data.img}
                        link={data.link}
                        about={data.about}
                        price={data.price}
                        widthClass="100%"
                      />
                    );
                  })}
                </tr>
              </tbody>
            </Table>
            {BannerData.map((data, index) => {
              return (
                <Table
                  key={index}
                  border="0"
                  cellPadding="0"
                  cellSpacing="0"
                  align="center"
                  style={{ marginTop: "0" }}
                >
                  <tbody>
                    <tr className="add-with-banner">
                      <td>
                        <a href={data.link}>
                          <Media
                            src={data.img.src}
                            alt="product"
                            style={{ width: "100%" }}
                          />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              );
            })}
            <Table
              className="pro-box-sec"
              align="center"
              border="0"
              cellPadding="0"
              cellSpacing="0"
              width="100%"
              style={{ marginTop: "0" }}
            >
              <tbody>
                <tr>
                  <td align="center">
                    <Table
                      align="center"
                      border="0"
                      className="display-width-inner"
                      cellPadding="0"
                      cellSpacing="0"
                      width="100%"
                      style={{
                        maxWidth: "450px",
                        marginBottom: "0",
                        verticalAlign: "middle",
                      }}
                    >
                      <tbody>
                        <tr>
                          <td
                            align="center"
                            style={{ width: "40%", padding: "0" }}
                          >
                            <Media
                              className="img-sec"
                              src={ten.src}
                              alt=""
                              style={{ width: "225px", marginBottom: "0" }}
                            />
                          </td>
                          <td
                            align="center"
                            style={{
                              backgroundColor: "#fafafa",
                              width: "60%",
                              padding: "0",
                            }}
                          >
                            <h3
                              style={{
                                margin: "0",
                                fontSize: "18px",
                                color: "black",
                                fontWeight: "600",
                                marginTop: "4px",
                              }}
                            >
                              Product One
                            </h3>
                            <div
                              style={{
                                color: "#E01931",
                                fontWeight: "normal",
                                fontSize: "16px",
                                lineHeight: "22px",
                                letterSpacing: "1px",
                                margin: "2px",
                              }}
                            >
                              <span
                                style={{
                                  color: "#666666",
                                  fontWeight: "normal",
                                  fontSize: "15px",
                                  lineHeight: "25px",
                                  letterSpacing: "1px",
                                }}
                                className="txt-price1"
                                data-color="Price1"
                                data-size="Price1"
                                data-min="10"
                                data-max="35"
                              >
                                $25.00
                              </span>
                              <span className="txt-price2">
                                &nbsp;&nbsp;&nbsp;
                              </span>
                              $20.90
                            </div>
                            <div
                              style={{
                                padding: "15px 0px",
                                textTransform: "uppercase",
                                fontSize: "11px",
                                letterSpacing: "1px",
                              }}
                            >
                              <a
                                href="#"
                                style={{
                                  color: "#ffffff",
                                  textDecoration: "none",
                                  background: "#000",
                                  padding: "8px 12px",
                                }}
                              >
                                SHOP NOW
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <Table
                      align="center"
                      border="0"
                      className="display-width-inner"
                      cellPadding="0"
                      cellSpacing="0"
                      width="100%"
                      style={{ maxWidth: "450px", marginBottom: "0" }}
                    >
                      <tbody>
                        <tr>
                          <td
                            align="center"
                            style={{
                              backgroundColor: "#fafafa",
                              width: "60%",
                              padding: "0",
                            }}
                          >
                            <h3
                              style={{
                                margin: "0",
                                fontSize: "18px",
                                color: "black",
                                fontWeight: "600",
                                marginTop: "4px",
                              }}
                            >
                              Product One
                            </h3>
                            <div
                              style={{
                                color: "#E01931",
                                fontWeight: "normal",
                                fontSize: "16px",
                                lineHeight: "22px",
                                letterSpacing: "1px",
                                margin: "2px",
                              }}
                            >
                              <span
                                style={{
                                  color: "#666666",
                                  fontSize: "15px",
                                  lineHeight: "25px",
                                  letterSpacing: "1px",
                                }}
                                className="txt-price1"
                                data-color="Price1"
                                data-size="Price1"
                                data-min="10"
                                data-ax="35"
                              >
                                $25.00
                              </span>
                              <span className="txt-price2">
                                &nbsp;&nbsp;&nbsp;
                              </span>
                              $20.90
                            </div>
                            <div
                              style={{
                                padding: "15px 0px",
                                textTransform: "uppercase",
                                fontSize: "11px",
                                letterSpacing: "1px",
                              }}
                            >
                              <a
                                href="#"
                                style={{
                                  color: "#ffffff",
                                  textDecoration: "none",
                                  background: "#000",
                                  padding: "8px 12px",
                                }}
                              >
                                SHOP NOW
                              </a>
                            </div>
                          </td>
                          <td
                            align="center"
                            style={{ width: "40%", padding: "0" }}
                          >
                            <Media
                              className="img-sec"
                              src={eleven.src}
                              alt=""
                              style={{ width: "225px", marginBottom: "0" }}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </Table>

                    <Table
                      align="center"
                      border="0"
                      className="display-width-inner"
                      cellPadding="0"
                      cellSpacing="0"
                      width="100%"
                      style={{ maxWidth: "450px", marginBottom: "0" }}
                    >
                      <tbody>
                        <tr>
                          <td
                            align="center"
                            style={{ width: "40%", padding: "0" }}
                          >
                            <Media
                              src={twale.src}
                              alt=""
                              style={{ width: "225px", marginBottom: "0" }}
                            />
                          </td>
                          <td
                            align="center"
                            style={{
                              backgroundColor: "#fafafa",
                              width: "60%",
                              padding: "0",
                            }}
                          >
                            <h3
                              style={{
                                margin: "0",
                                fontSize: "18px",
                                color: "black",
                                fontWeight: "600",
                                marginTop: "4px",
                              }}
                            >
                              Product One
                            </h3>
                            <div
                              style={{
                                color: "#E01931",
                                fontSize: "16px",
                                lineHeight: "22px",
                                letterSpacing: "1px",
                                margin: "2px",
                              }}
                            >
                              <span
                                style={{
                                  color: "#666666",
                                  fontSize: "15px",
                                  lineHeight: "25px",
                                  letterSpacing: "1px",
                                }}
                                className="txt-price1"
                                data-color="Price1"
                                data-size="Price1"
                                data-min="10"
                                data-max="35"
                              >
                                $25.00
                              </span>
                              <span className="txt-price2">
                                &nbsp;&nbsp;&nbsp;
                              </span>
                              $20.90
                            </div>
                            <div
                              style={{
                                padding: "15px 0px",
                                textTransform: "uppercase",
                                fontSize: "11px",
                                letterSpacing: "1px",
                              }}
                            >
                              <a
                                href="#"
                                style={{
                                  color: "#ffffff",
                                  textDecoration: "none",
                                  background: "#000",
                                  padding: "8px 12px",
                                }}
                              >
                                SHOP NOW
                              </a>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </td>
                </tr>
              </tbody>
            </Table>
            <SocialEmailTemplate marginClass="0" />
          </td>
        </tr>
      </tbody>
    </Table>
    <style global jsx>
      {`
        body {
          text-align: center;
          margin: 20px auto;
          width: 650px;
          font-family: "Open Sans", sans-serif;
          background-color: #e2e2e2;
          display: block;
        }
        .dark .product-box-sec{
          border: 0 !important;
        }
        .dark .product-box-sec  tr{
          border-bottom: 0 !important;
        }
        .dark .main-logo{
          filter: brightness(0) invert(1);
        }
        .dark .menu li a{
          color: white;
        }
        .dark .email-template-table .headerTable ~ h4{
          color: white !important;
        }
        .dark .email-template-table .display-width-inner img{
          visibility: visible !important;
        }
        .dark .display-width-inner tbody tr td{
          background-color: #2b2b2b !important;
        }
        .dark .display-width-inner tbody tr td h3{
          color: white !important;
        }
        .dark .email-template-table .footer-social-icon img{
          visibility: visible !important;
          filter: brightness(0) invert(1);
        }
        .headerTable {
          text-align: center;
        }
        .email-template-table {
          background-color: #ffffff;
          box-shadow: 0px 0px 14px -4px rgba(0, 0, 0, 0.2705882353);
          border: 0;
          align: center;
          width: 100%;
        }

        .main-logo {
          width: 180px;
          padding: 10px 20px;
        }

        .menu {
          width: 100%;
          align: right;
          display: inline;
          text-decoration: unset;
        }
        .menu a {
          text-transform: capitalize;
          font-size: 16px;
          margin-right: 15px;
          text-decoration: none;
        }
        .menu li a {
          color: #444;
        }
        .title {
          text-align: center;
          color: #444444;
          font-size: 22px;
          font-weight: bold;
          margin-bottom: 0;
          padding-bottom: 0;
          text-transform: capitalize;
          display: inline-block;
          line-height: 1;
        }
        .header li {
          align: left;
          vertical-align: top;
        }

        .table th,
        .table td {
          vertical-align: middle;
        }
        .headerTable tr.header td.menu ul{
          float: right;
        }
        @media (max-width: 767px){
          .email-template-table{
            width: 530px;
            margin-left: 15px;
          }
          .headerTable tr.header td.menu{
            padding: 0;
          }
          .headerTable tr.header td.menu ul li a{
            margin-right: 10px;
          }
          .product-box-sec tbody tr{
            display: flex;
            justify-content: center;
            flex-flow: wrap;
          }
          .slider tr th img {
            display: none;
          }
          .slider tr th:first-child {
            width: 100% !important;
          }
          .slider tr th:first-child table tr td , .slider tr th:first-child .table + .table tr {
            text-align: center !important;
          }
          .slider tr td p{
            text-align: center !important;
          }
          .display-width-inner tbody tr{
            display: flex;
            flex-wrap: wrap;
          }
          .display-width-inner tbody tr td{
            width: 100% !important;
            background-color: white !important;
          }
          .display-width-inner + .display-width-inner{
            margin-top: 10px;
          }
          .display-width-inner:nth-child(2) tr td:first-child{
            order: 1;
          }
          .product-box-sec tr td img{
            width: 170px !important;
          }
        }
        @media (max-width: 575px){
          .email-template-table{
            width: 436px;
          }
          .headerTable tr{
            display: flex;
            align-items: center;
            flex-flow: wrap;
            justify-content: center;
          }
          .headerTable tr.header td.menu ul{
            float: unset;
          }
        }
        @media (max-width: 479px){
          .email-template-table{
            width: 325px;
            margin-left: 10px;
          }
          .product-box-sec tr td img{
            width: 150px !important;
          }
          .footer-social-icon tbody tr{
            flex-flow: wrap;
          }
          .footer-social-icon tbody tr td{
            margin-bottom: 6px !important;
          }
          .headerTable tr.header td.menu ul{
            padding: 12px !important;
          }
        }
        @media (max-width: 359px){
          .email-template-table{
            width: 280px;
          }
          .slider tr:nth-child(2) td{
            font-size: 48px !important;
            padding-bottom: 10px !important;
          }
          .slider table{
            margin-bottom: 0;
          }
        }
      `}
    </style>
  </>
);

export default EmailTemplate2;
