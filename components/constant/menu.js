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
      {
        title: "Head Protection",
        type: "link",
        path: "/shop/head-protection",
      },
      {
        title: "Eye Protection",
        type: "link",
        path: "/shop/eye-protection",
      },
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
        title: "Fire Protection",
        type: "link",
        path: "/shop/fire-protection",
      },
      {
        title: "Road safety",
        type: "link",
        path: "/shop/road-safety",
      },
    ],
  },
  {
    title: "Business Partners",
    type: "sub",
    children: [
      {
        path: "/partner/Partner",
        title: "Regional Channel Partners",
        type: "link",
      },
      {
        path: "/partner/Partner",
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
