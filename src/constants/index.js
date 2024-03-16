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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  Microsoft,
  Leo,
  LMG,
  DP900,
  AZ900,
  SC900,
  AI900
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
    id: "Certifications",
    title: "Certifications",
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
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "MERN Developer",
    icon: backend,
  },
  {
    title: "Cloud Computing",
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Microsoft Future Ready Talent",
    icon: Microsoft,
    iconBg: "#383E56",
    date: "Jan 2022 - March 2022",
    points: [
      "During internship I have completed AI900, AZ900 and many more modules.",
      "I worked on a Food Delivery website (Mymeal) using Html, CSS, and JavaScript and host these project using Microsoft Azure static web app service.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "React Native Developer",
  //   company_name: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   company_name: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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

const projects = [
  {
    name: "React Admin DashBoard",
    description:
      "Web-based platform that allows admin to manage employees, orders, and customers. Here admin also use Calendar, Kanban, Editor, and Color Picker Service.  ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "syncfusion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Leo,
    source_code_link: "https://leo-dashboard-552cb5.netlify.app/",
  },
  {
    name: "Banking Website",
    description:
      "Web application that enables users to see Banking Services, Products, Statics and Revenue. Customes can also contact to Bank and book the Products.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: LMG,
    source_code_link: "https://bankingapp.laksh02.repl.co/",
  },
  /*{
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },*/
];

const certification = [
 {
    name1: "AI 900",
    description:
      "I have cleared Microsoft Certified: Azure AI Fundamentals and learn foundational knowledge of machine learning (ML) and artificial intelligence (AI) concepts and related Microsoft Azure services. ",
    tags: [
      {
        name: "cognitive services",
        color: "blue-text-gradient",
      },
      {
        name: "azure",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
      {
        name: "ml",
        color: "text-gradient",
      }
    ],
    image: AI900,
    source_code_link: "https://www.credly.com/badges/58d9dfe9-ce08-430c-a523-a446534cecb7",
  },
  {
    name1: "SC 900",
    description:
      "I have cleared Microsoft Certified: Security, Compliance, and Identity Fundamentals and learn functional understanding of security, compliance, and identity (SCI) across cloud-based and related Microsoft services.",
    tags: [
      {
        name: "azure ",
        color: "blue-text-gradient",
      },
      {
        name: "cloud security",
        color: "green-text-gradient",
      },
      {
        name: "compliance",
        color: "pink-text-gradient",
      },
    ],
    image: SC900,
    source_code_link: "https://www.credly.com/badges/e59fcdbc-4e18-4bbc-8db4-b071ef2b15b3",
  },
  {
    name1: "AZ 900",
    description:
      "I have cleared Microsoft Azure Certification -Azure Fundamentals and learn foundational level knowledge of cloud services and how those services are provided with Microsoft Azure.",
    tags: [
      {
        name: "azure",
        color: "blue-text-gradient", 
      },
      {
        name: "cloud",
        color: "green-text-gradient",
      },
      {
        name: "Cloud Services",
        color: "pink-text-gradient",
      },
    ],
    image: AZ900,
    source_code_link: "https://www.credly.com/badges/8549958a-a755-482f-bc2f-ff7a32cc4665/public_url",
  },
  {
    name1: "DP 900",
    description:
      "I have cleared Microsoft Certified: Azure Data Fundamentals and learn foundational knowledge of core data concepts and how they are implemented using Microsoft Azure data services.",
    tags: [
      {
        name: "azure",
        color: "blue-text-gradient",
      },
      {
        name: "cloud",
        color: "green-text-gradient",
      },
      {
        name: "cloud data",
        color: "pink-text-gradient",
      },
    ],
    image: DP900,
    source_code_link: "https://www.credly.com/badges/e26a6d87-dc75-458b-af08-056cad8c7a7c/public_url",
  },
  
  
];

export { services, technologies, experiences, testimonials, projects, certification, };