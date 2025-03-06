import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  orbit,
  ops,
  itc,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  postgreSql,
  boostrap,
  jQuery,
  threejs,
  swap,
  notNull,
  babyLife,
  backItc,
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
    title: "Full-stack Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
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
  }, {
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
    deploy: "https://swapitem.netlify.app/Home",
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
    deploy: "https://main--notnullsocailspace.netlify.app",
    source_code_link: "https://github.com/not6null/MERAKI_Academy_Project_5",
  },
  {
    name: "ITC-Web",
    description:
      "A preliminary demo study was prepared for the owner to showcase all the data collected for his business",
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
          name: "Animations",
          color: "text-emerald-800",
        },
        {
          name: "Socket io",
          color: "text-teal-950",
        }
      ],
    image: backItc,
    deploy: "https://databank.netlify.app/",
    source_code_link: "",
  },
];

const experiences = [
  {
    title: "Full-Stack Developer",
    company_name: "Orbit IT Solution",
    icon: orbit, // Update with the appropriate icon reference
    iconBg: "#383E56",
    date: "Dec 2024 - Present",
    points: [
      "Developing and maintaining scalable web applications using React and Node.js.",
      "Implementing responsive UI designs to ensure seamless user experience across devices.",
      "Deploying applications on cloud servers, managing hosting environments, and optimizing server performance.",
      "Integrating and customizing CMS systems for dynamic content management and scalability.",
      "Collaborating with cross-functional teams to enhance system functionality and security.",
      "Optimizing API performance and ensuring efficient data processing using caching strategies.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company_name: "ITC-International",
    icon: itc, // Update with the appropriate icon reference
    iconBg: "#383E56",
    date: "Jun 2024 - Nov 2024",
    points: [
      "Led the full lifecycle of web application development using React, NestJS, and Express, ensuring front-end and back-end systems were fully optimized and scalable.",
      "Developed robust backend services with NestJS and Express, implementing RESTful APIs and ensuring security best practices.",
      "Integrated caching strategies using Redis, significantly improving data retrieval speed and enhancing real-time data processing.",
      "Designed and managed databases using PostgreSQL, MySQL, and MongoDB, ensuring data consistency, scalability, and performance.",
      "Implemented search functionality using Elasticsearch, allowing for fast and flexible search capabilities across large datasets.",
      "Built and maintained unit and integration tests using Jest, ensuring high-quality and bug-free code.",
      "Contributed to architecture decisions to ensure future scalability and maintainability of the project.",
      "Worked in an Agile environment, participating in sprint planning, daily standups, and code reviews to ensure timely and high-quality project delivery.",
    ],
  },
  {
    title: "Full-Stack Developer (Contract)",
    company_name: "OpsHeaven Technologies",
    icon: ops, // Update with the appropriate icon reference
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Dec 2024",
    points: [
      "Architected and developed backend systems to support AI-powered features, leveraging Python and Node.js frameworks.",
      "Integrated AI/ML models into the application workflow, enabling predictive analytics and intelligent automation.",
      "Designed and maintained WebSocket connections for real-time data exchange and low-latency communication.",
      "Deployed and managed scalable infrastructure on AWS, utilizing services such as EC2, Lambda, S3, RDS, and API Gateway to ensure high availability and performance.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

export { services, technologies, projects, experiences };