import {
  frontend,
  backend,
  ux,
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
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
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
    icon: ux,
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
      "Tailwind",
    ],
  },
  {
    title: "Frameworks",
    list: ["NodeJs", "Flutter", ".Net Framework", "Spring Boot", "Flask"],
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
    title: "Front-End Developer",
    company_name: "Cover Hunt",
    icon: coverhunt,
    iconBg: "#333333",
    date: "Aug 2021 - Feb 2022",
  },
  {
    title: "Mentor (Volunteer)",
    company_name: "Microverse",
    icon: microverse,
    iconBg: "#333333",
    date: "Mar 2022 - May 2022",
  },
  {
    title: "Junior Software Engineer",
    company_name: "Kelhel",
    icon: kelhel,
    iconBg: "#333333",
    date: "May 2022 - Oct 2022",
  },
  {
    title: "Full Stack Developer",
    company_name: "Diversity Cyber Council",
    icon: dcc,
    iconBg: "#333333",
    date: "Sep 2022 - Present",
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
    image: komikult,
    repo: "https://github.com/natitedros/Car-Accident-Management",
    demo: "https://drive.google.com/file/d/1w-Nh51HnTc-zfUFYV0To3ou6D8O7LDki/view?usp=sharing",
  },
  {
    id: "project-2",
    name: "RateEat",
    description:
      "A leaderboard list app that displays scores submitted by different players.",
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
    image: leaderboard,
    repo: "#",
    demo: "https://play.google.com/store/apps/details?id=org.a2sv.rateeat_mobile",
  },
  {
    id: "project-3",
    name: "Vocabtype",
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
    image: math,
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
    image: movie,
    repo: "https://github.com/NathanZK/Mekdim",
    demo: "#",
  },
];

export { services, technologies, experiences, projects, skills };
