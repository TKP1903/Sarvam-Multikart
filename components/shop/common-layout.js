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
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
      </Head>
      <HeaderOne topClass="top-header" logoName="logo.png" />
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
