/* eslint-disable no-unused-vars */
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  logo,
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
    title: "Content Creator",
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
    title: "Student",
    company_name: "Fullstack Academy",
    icon: starbucks,
    iconBg: "#383E56",
    date: "JAN 2023 - Current",
    points: [
      "Learning basic computer science and widely use infrastructure",
      "Particapate in both Dev, QA, TL to hold and work with different real world responsibilites",
      "Learn and utilize languages such as JS React.js SQL, w/ Insomnia and Redux",
      "Participating in code reviews and providing constructive feedback to other future developers.",
    ],
  },
  {
    title: "Bartender",
    company_name: "Marriot Hotels",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "JUL 2021 - Feb 2022",
    points: [
      "Communicate with both back and front of house staff",
      "Beverage and Food Service",
      "Off time spent learning and practicing Python about an hour a day",
    ],
  },
  {
    title: "Senior Line Medic",
    company_name: "Army 10th MTN 2-22 INF",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jul 2017 - Jul 2021",
    points: [
      "Provided Company wide with active recover plans aswell as up to date medical records all green for 140 personnel ",
      "Provided emeregency medicine both in and out of country",
      "Brigade Soldier of the Month Oct 2019",
      "Utilize both Excel and SQL to organize and orchestrate personel treatment plans as needed",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to have a medic Be as efficient as our best RECCE infantryman, but Roe proved me wrong.",
    name: "SSG Baxter",
    designation: "Sniper Section",
    company: "HHC 2-22",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Anonymous",
    designation: "",
    company: "CLASSIFIED",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const projects = [
  {
    name: "This Website",
    description:
      "Web-based platform that allows users to learn and discover a bit about me.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: logo,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
