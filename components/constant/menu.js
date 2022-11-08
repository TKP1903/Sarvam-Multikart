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
        title: "Head Protection",
        type: "sub",
      },
      {
        title: "Eye Protection",
        type: "sub",
      },
      {
        title: "Hand Protection",
        type: "sub",
      },
      {
        title: "Feet Protection",
        type: "sub",
      },
      {
        title: "Fire Protection",
        type: "sub",
      },
      {
        title: "Road safety",
        type: "sub",
      },
    ],
  },
  {
    title: "Business Partners",
    type: "sub",
    children: [
      {
        title: "Regional Channel Partners",
        type: "sub",
      },
      {
        title: "international Channel Partners",
        type: "sub",
      },
    ],
  },
  { 
    path: "/page/account/contact",
    title: "Contact",
    type: "link",
  },
];
