import React from "react";
import MasterServiceContent from "../../../components/common/Service/MasterServiceConternt";
import {
  svgFreeShipping,
  svgservice,
  svgoffer,
  svgpayment,
  svgLowCost
} from "../../../services/script";

const Data = [
  {
    link: svgFreeShipping,
    title: "shipping worldwide",
    service: "Delivery all around the world",
  },
  {
    link: svgservice,
    title: "24 X 7 service",
    service: "online support 8/6",
  },
  {
    link: svgpayment,
    title: "Money Back Guarantee",
    service: "Get 100% money back if the product fails",
  },
  {
    link: svgLowCost,
    title: "Lowest Price Guarantee",
    service: "You won't find lower price anywhere else",
  },
];

const Service = () => {
  return (
    <div className="collection-filter-block">
      <div className="product-service">
        {Data.map((data, index) => {
          return (
            <MasterServiceContent
              key={index}
              link={data.link}
              title={data.title}
              service={data.service}
              lastChild={data.lastChild}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Service;
