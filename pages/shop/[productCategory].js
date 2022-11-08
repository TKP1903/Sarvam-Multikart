import React, { useState, useEffect, useContext } from "react";
import CommonLayout from "../../components/shop/common-layout";
// import { withApollo } from '../../helpers/apollo/apollo';
import ProductList from "./common/productList";
import { Container, Row } from "reactstrap";
import FilterPage from "./common/filter";

import { useRouter } from "next/router";
import FilterContext from "../../helpers/filter/FilterContext";

const LeftSidebar = () => {
  const router = useRouter();

  // get the product-category from the url
  const { productCategory } = router.query;
  productCategory = productCategory || "all";
  const { setSelectedCategory } = useContext(FilterContext);
  const [sidebarView, setSidebarView] = useState(false);

  const openCloseSidebar = () => {
    setSidebarView(!sidebarView);
  };

  useEffect(() => {
    // convert head-protection like string to Head Protection
    const category =
      productCategory === "all"
        ? "all"
        : productCategory
            .split("-")
            .map((word) => {
              return word.charAt(0).toUpperCase() + word.slice(1);
            })
            .join(" ");
    setSelectedCategory(category);
  }, [productCategory]);

  return (
    <CommonLayout title="collection" parent="home">
      <section className="section-b-space ratio_asos">
        <div className="collection-wrapper">
          <Container>
            <Row>
              <FilterPage
                sm="3"
                sidebarView={sidebarView}
                closeSidebar={() => openCloseSidebar(sidebarView)}
              />
              <ProductList
                colClass="col-xl-3 col-6 col-grid-box"
                layoutList={""}
                productCategory={productCategory}
                openSidebar={() => openCloseSidebar(sidebarView)}
              />
            </Row>
          </Container>
        </div>
      </section>
    </CommonLayout>
  );
};

export default LeftSidebar;
