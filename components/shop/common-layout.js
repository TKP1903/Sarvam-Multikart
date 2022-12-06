import React from "react";
import HeaderOne from "../headers/header-one";
import Breadcrubs from "../common/widgets/breadcrubs";
import Helmet from "react-helmet";
import MasterFooter from "../footers/common/MasterFooter";
import favicon from "../../public/assets/images/favicon/favicon.ico";

import Head from "next/head";

const CommonLayout = ({ children, title, parent, subTitle }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HeaderOne
        topClass="top-header"
        logoName="logo.png"
        brandName={
          <span
            style={{
              fontSize: "1.5rem",
              fontWeight: "300rem",
              marginLeft: "1rem",
            }}
          >
            <span
              id="logo-sarvam-text"
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
              }}
            >
              SARVAM{" "}
            </span>
            <span
              id="logo-safety-text"
              style={{
                fontSize: "1.5rem",
                fontWeight: "700",
              }}
            >
              {" "}
              SAFETY{" "}
            </span>
            <span
              id="logo-registred-text"
              style={{
                fontSize: "1.1rem",
                fontWeight: "400",
                verticalAlign: "super",
              }}
            >
              {" "}
              &#174;{" "}
            </span>
          </span>
        }
      />
      <Breadcrubs title={title} parent={parent} subTitle={subTitle} />
      <>{children}</>
      <MasterFooter
        footerClass={`footer-light `}
        footerLayOut={"light-layout upper-footer"}
        footerSection={"small-section border-section border-top-0"}
        belowSection={"section-b-space light-layout"}
        newLatter={true}
      />
    </>
  );
};

export default CommonLayout;
