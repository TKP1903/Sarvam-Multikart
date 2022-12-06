import React, { useState, useContext } from "react";
import { Collapse } from "reactstrap";
import FilterContext from "../../../helpers/filter/FilterContext";

const categories = [
  /**
   * hand-protection
   * feet-protection
   * calbration
   * coverall
   * fall-arrest
   * safety-cans-and-carbinates
   * shoe
   * traffic-safety
   */
  {
    name: "Hand Protection",
    url: "hand-protection",
  },
  {
    name: "Feet Protection",
    url: "feet-protection",
  },
  {
    name: "Calibration",
    url: "calibration",
  },
  {
    name: "Coverall",
    url: "coverall",
  },
  {
    name: "Fall Arrest",
    url: "fall-arrest",
  },
  {
    name: "Safety Cans and Carbinates",
    url: "safety-cans-and-carbinates",
  },
  {
    name: "Shoe",
    url: "shoe",
  },
  {
    name: "Traffic Safety",
    url: "traffic-safety",
  },
]
// const categories = [
//   {
//     name: "Head Protection",
//     url: "head-protection",
//   },
//   {
//     name: "Eye Protection",
//     url: "eye-protection",
//   },
//   {
//     name: "Hand Protection",
//     url: "hand-protection",
//   },
//   {
//     name: "Feet Protection",
//     url: "feet-protection",
//   },
//   {
//     name: "Fire Protection",
//     url: "fire-protection",
//   },
//   {
//     name: "Road Safety",
//     url: "road-safety",
//   },
//   {
//     name: "Fall Protection",
//     url: "fall-protection",
//   },
//   {
//     name: "Respiratory Protection",
//     url: "respiratory-protection",
//   },
//   {
//     name: "Hearing Protection",
//     url: "hearing-protection",
//   },
//   {
//     name: "General Safety",
//     url: "general-safety",
//   },
// ];

const Category = () => {
  const context = useContext(FilterContext);
  const [isCategoryOpen, setIsCategoryOpen] = useState(true);
  const toggleCategory = () => setIsCategoryOpen(!isCategoryOpen);
  const setSelectedCategory = context.setSelectedCategory;
  const [url, setUrl] = useState();

  const updateCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="collection-collapse-block open">
        <h3 className="collapse-block-title" onClick={toggleCategory}>
          Category
        </h3>
        <Collapse isOpen={isCategoryOpen}>
          <div className="collection-collapse-block-content">
            <div className="collection-brand-filter">
              <ul className="category-list">
                <li>
                  <a href={null} onClick={() => updateCategory("all")}>
                    all products
                  </a>
                </li>
                {
                  categories.map((category, index) => {
                    return (
                      <li key={index}>
                        <a
                          href={null}
                          onClick={() => updateCategory(category.url)}
                        >
                          {category.name}
                        </a>
                      </li>
                    );
                  })
                }
              </ul>
            </div>
          </div>
        </Collapse>
      </div>
    </>
  );
};

export default Category;
