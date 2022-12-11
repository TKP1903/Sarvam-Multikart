export const MENUITEMS = [
  {
    path: "/",
    title: "Home",
    type: "link",
  },
  {
    path: "/page/about-us",
    title: "About Us",
    type: "link",
  },
  {
    title: "Products",
    type: "sub",
    children: [
      {
        title: "All",
        type: "link",
        path: "/shop/all",
      },
      /**
       * hand-protection
       * feet-protection
       * calbration
       * coverall
       * fall-arrest
       * safety-cans-and-carbinates
       * shoe
       * traffic-safety
       * respiratory-protection
       */
      {
        title: "Hand Protection",
        type: "link",
        path: "/shop/hand-protection",
      },
      {
        title: "Feet Protection",
        type: "link",
        path: "/shop/feet-protection",
      },
      {
        title: "Calibration",
        type: "link",
        path: "/shop/calibration",
      },
      {
        title: "Coverall",
        type: "link",
        path: "/shop/coverall",
      },
      {
        title: "Fall Arrest",
        type: "link",
        path: "/shop/fall-arrest",
      },
      {
        title: "Safety Cans and Carbinates",
        type: "link",
        path: "/shop/safety-cans-and-carbinates",
      },
      {
        title: "Shoe",
        type: "link",
        path: "/shop/shoe",
      },
      {
        title: "Traffic Safety",
        type: "link",
        path: "/shop/traffic-safety",
      },
      {
        title: "Respiratory Protection",
        type: "link",
        path: "/shop/respiratory-protection",
      },
    ],
  },
  {
    title: "Business Partners",
    path: "/partner/Partner",
    type: "link",
    children: [
      {
        title: "Regional Channel Partners",
        type: "link",
      },
      {
        title: "international Channel Partners",
        type: "link",
      },
    ],
  },
  {
    path: "/page/account/contact",
    title: "Contact",
    type: "link",
  },
];
