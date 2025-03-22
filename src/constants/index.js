import {
  frontend,
  backend,
  ux,
  mobile,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  adega,
  mekdim,
  rateeat,
  vocabtype,
  korenti,
  empire,
  nerd,
  a2sv,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Cloud Engineer",
    icon: prototyping,
  },
];

const skills = [
  {
    title: "Languages",
    list: [
      "Java",
      "C++",
      "C#",
      "Python",
      "Javascript(ES6)",
      "Typescript",
      "Dart",
      "HTML5 & CSS",
      "SQL",
    ],
  },
  {
    title: "Frameworks",
    list: ["NodeJs", "Flutter", ".Net Core", "Spring Boot", "Flask", "Tailwind"],
  },
  {
    title: "Tools",
    list: ["Git", "AWS", "Postman", "Figma"],
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
    name: "Rails",
    icon: rubyrails,
  },
  {
    name: "graphql",
    icon: graphql,
  },
  {
    name: "postgresql",
    icon: postgresql,
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
    title: "Embedded Systems Engineering Intern",
    company_name: "New Era Research and Development",
    icon: nerd,
    iconBg: "#FFFFFF",
    date: "Mar 2022 - Jun 2022",
  },
  {
    title: "Software Engineering Mentor",
    company_name: "Africa to Silicon Valley",
    icon: a2sv,
    iconBg: "#333333",
    date: "Oct 2022 - May 2023",
  },
  {
    title: "Mobile App Developer",
    company_name: "Africa to Silicon Valley",
    icon: a2sv,
    iconBg: "#333333",
    date: "Sep 2023 - Feb 2024",
  },
  {
    title: "Software Engineer",
    company_name: "Korenti Craft Technologies",
    icon: korenti,
    iconBg: "#eaeaec",
    date: "Mar 2022 - Oct 2024",
  },
  {
    title: "Software Engineer",
    company_name: "Empire Transportation Provider Inc",
    icon: empire,
    iconBg: "#333333",
    date: "Aug 2024 - present",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Adega",
    description:
      "My BSc final year project prototype for a car accident management system.",
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "microcontrollers",
        color: "pink-text-gradient",
      },
    ],
    image: adega,
    repo: "https://github.com/natitedros/Car-Accident-Management",
    demo: "https://drive.google.com/file/d/1w-Nh51HnTc-zfUFYV0To3ou6D8O7LDki/view?usp=sharing",
  },
  {
    id: "project-2",
    name: "RateEat",
    description:
      "A food and restaurant rating and reviewing application for Ethiopia.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: rateeat,
    repo: "#",
    demo: "https://play.google.com/store/apps/details?id=org.a2sv.rateeat_mobile",
  },
  {
    id: "project-3",
    name: "Vocab-type",
    description:
      "Speed typing game with word definitions to improve vocabulary.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: vocabtype,
    repo: "https://github.com/natitedros/Typing-Test",
    demo: "https://typingtest-natnaeldesta.netlify.app/",
  },
  {
    id: "project-4",
    name: "Mekdim",
    description: `An enterprise-level school portal web application made by a team of 26 students I led.`,
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "ejs",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: mekdim,
    repo: "https://github.com/NathanZK/Mekdim",
    demo: "#",
  },
];

export { services, technologies, experiences, projects, skills };
