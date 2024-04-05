import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    postgreSql,
    boostrap,
    jQuery,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    swap,
    notNull,
    babyLife,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Front_End Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "JQuery",
      icon: jQuery,
    },
    {
      name: "bootstrap",
      icon: boostrap,
    },{
      name: "postgreSql",
      icon: postgreSql,
    },
  ];
  

  const projects = [
    {
      name: "SWAP",
      description:
        "Through it, the user can sell his items or the products he wants to trade. He can set the price, product details, location, and contact details. You can also purchase products offered by other merchants.",
      tags: [
        {
          name: "Node.js",
          color: "blue-text-gradient",
        },
        {
          name: "Mongodb",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "text-sky-500",
        },
      ],
      image: swap,
      deploy:"https://swapitem.netlify.app/Home",
      source_code_link: "https://github.com/C9-Malekqandeel/MERAKI_Academy_Project_4",
    },
    {
      name: "NotNull, Social Space",
      description:
        "Through it, you can create an account, log in, see posts, communicate with friends via comments and private messaging, create your own area, and follow other users to view content. Make your own story. A special space for games.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Redux",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "Node.js",
          color: "text-amber-700",
        },
        {
          name: "PostgreSQL",
          color: "text-yellow-400",
        },
        {
          name: "Firebase",
          color: "text-emerald-800",
        },
        {
          name: "Socket io",
          color: "text-teal-950",
        }
      ],
      image: notNull,
      deploy:"https://main--notnullsocailspace.netlify.app",
      source_code_link: "https://github.com/not6null/MERAKI_Academy_Project_5",
    },
    {
      name: "BabyLife",
      description:
        "E-commerce Store, you can create your account and add any items that's available to your cart to place your order, user can check any items and search using category feature",
      tags: [
        {
          name: "JQuery",
          color: "blue-text-gradient",
        },
        {
          name: "CSS3",
          color: "green-text-gradient",
        },
        {
          name: "HTML5",
          color: "pink-text-gradient",
        },
      ],
      image: babyLife,
      deploy:"",
      source_code_link: "https://github.com/C9-Malekqandeel/MERAKI_Academy_Project_2",
    },
  ];
  
  export { services, technologies, projects };