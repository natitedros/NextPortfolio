import {
  frontend,
  backend,
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
  adega1,
  adega2,
  mekdim,
  mekdim1,
  mekdim2,
  mekdim3,
  rateeat1,
  rateeat2,
  typing1,
  typing2,
  typing3,
  schedulingAlgo1,
  schedulingAlgo2,
  brickbreaker1,
  brickbreaker2,
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
    title: "Mobile Engineer",
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
    list: [
      "NodeJs",
      "Flutter",
      ".Net Core",
      "Spring Boot",
      "Flask",
      "Tailwind",
    ],
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
    title: "Full Stack Developer",
    company_name: "Empire Transportation Provider Inc",
    icon: empire,
    iconBg: "#eaeaec",
    date: "Aug 2024 - present",
    description: [
      "Worked on an employee management system that automates employee invoice generation and distribution.",
      "Used Python Flask framework with PostgreSQL and hosted the service on AWS infrastructure, utilizing EC2 and Amazon S3 to implement efficient feature hosting and access to employee data.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "Korenti Craft Technologies",
    icon: korenti,
    iconBg: "#eaeaec",
    date: "Mar 2022 - Oct 2024",
    description: [
      "Developed a .Net Core Interop system to integrate a hematology analyzer (hospital lab equipment) into a web-based hospital management system with over 85,000 patient records across clinics in Addis Ababa, Ethiopia.",
      "Practiced Agile Methodologies and conducted interviews with doctors, lab technicians and medical receptionists to meet client needs with each Agile iteration.",
      "Designed and implemented customized user interfaces for multiple clinics that resulted in an increase in daily patient data processing productivity by 30%.",
      "Worked on a React and Spring-Boot-based inventory management system with generative AI features for decision making to reduce stock discrepancies by 15% for a growing retail client.",
    ],
  },
  {
    title: "Mobile Engineer",
    company_name: "Africa to Silicon Valley",
    icon: a2sv,
    iconBg: "#333333",
    date: "Sep 2023 - Feb 2024",
    description: [
      "Worked on a food and restaurant rating mobile app called RateEat deployed in Ethiopia.",
      "Focused on overseeing clean architecture, test-driven development, and state management of the project using BLoC pattern that increased code reusability and performance by 40%.",
      "Collaborated with frontend and product teams to optimize the app’s UI/UX, improving user engagement.",
      "Contributed to monetization strategies that helped secure Google funding by enhancing app features and performance.",
    ],
  },
  {
    title: "Software Engineering Mentor",
    company_name: "Africa to Silicon Valley",
    icon: a2sv,
    iconBg: "#333333",
    date: "Oct 2022 - May 2023",
    description: [
      "Mentored 15+ students on Data Structures & Algorithms, guiding 5 trainees to secure internships at A2SV and top tech companies in Ethiopia, focusing on competitive programming and coding interview preparation.",
    ],
  },
  {
    title: "Embedded Systems Engineering Intern",
    company_name: "New Era Research and Development",
    icon: nerd,
    iconBg: "#FFFFFF",
    date: "Mar 2022 - Jun 2022",
    description: [
      "Led a team of 5 and researched building a Smart home system using a distributed systems design for security improvement.",
    ],
  },
];

const projects = [
  {
    id: "project-1",
    name: "Car Accident Management",
    description: [
      "Project: Developed a multi-sided mobile app integrated with vehicle hardware to detect and report car accidents in Addis Ababa, aiming to reduce emergency response times and traffic congestion.",
      "My Roles: Designed the UI, developed the mobile app and backend, and integrated hardware components for prototype testing.",
      "Result: Enabled automatic/manual accident reporting to nearby traffic police for faster assistance, improving road safety and traffic flow.",
    ],
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
    images: [adega1, adega2],
    repo: "https://github.com/natitedros/Car-Accident-Management",
    demo: "https://drive.google.com/file/d/1w-Nh51HnTc-zfUFYV0To3ou6D8O7LDki/view?usp=sharing",
    duration: "9 months",
    category: "Full Stack Development",
    team: "2",
    technologies: ["React", "Tailwind", "Typescript"],
  },
  {
    id: "project-2",
    name: "RateEat",
    description: [
      "Project: Developed RateEat, a food and restaurant rating mobile app deployed and actively used in Ethiopia. Famous among college freshemen.",
      "My Roles: Led mobile development, UI design, clean architecture implementation, test-driven development (TDD), and state management.",
      "Result: Successfully launched a functional app that helps users discover and rate restaurants, improving dining experiences.",
    ],
    tags: [
      {
        name: "flutter",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "bloc",
        color: "pink-text-gradient",
      },
    ],
    images: [rateeat1, rateeat2],
    repo: "#",
    demo: "https://play.google.com/store/apps/details?id=org.a2sv.rateeat_mobile",
    duration: "6 months",
    category: "Mobile Development",
    team: "7",
    technologies: ["React", "Tailwind", "Typescript"],
  },
  {
    id: "project-3",
    name: "Mekdim School Portal",
    description: [
      "Project: Developed a web-based school management application as a semester project for a Software Engineering course, aimed at streamlining administrative and academic processes.",
      "My Roles: Served as lead manager for a 26-member team during the design phase and contributed to frontend implementation.",
      "Result: Delivered a functional prototype demonstrating structured teamwork and software engineering principles in a real-world educational context.",
    ],
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
    images: [mekdim, mekdim1, mekdim2, mekdim3],
    repo: "https://github.com/NathanZK/Mekdim",
    demo: "#",
    duration: "3 months",
    category: "Frontend Development",
    team: "27",
    technologies: ["React", "Tailwind", "Typescript"],
  },
  {
    id: "project-4",
    name: "CPU Scheduling Visualizer",
    description: [
      "Project: A web tool to visualize CPU scheduling algorithms like FCFS and Round Robin, built with HTML, CSS, and TypeScript.",
      "My Roles: Developed the entire application, including UI design, algorithm implementation, and interactive features like timeline visualization and process customization.",
      "Result: An easy-to-use simulator with real-time visuals and customizable settings, plus a live demo.",
    ],
    tags: [
      {
        name: "Typescript",
        color: "blue-text-gradient",
      },
      {
        name: "OOP",
        color: "green-text-gradient",
      },
      {
        name: "HTML/CSS",
        color: "pink-text-gradient",
      },
    ],
    images: [schedulingAlgo1, schedulingAlgo2],
    repo: "https://github.com/natitedros/OS-scheduling-visualization/",
    demo: "https://natitedros.github.io/OS-scheduling-visualization/",
    duration: "2 weeks",
    category: "Frontend Development",
    team: "1",
    technologies: ["React", "Tailwind", "Typescript"],
  },
  {
    id: "project-5",
    name: "Typing-Test",
    description: [
      "Project: Built a typing speed test game that measures WPM (words per minute) while teaching users new vocabulary through definitions fetched from a free API.",
      "My Roles: Developed the frontend application, implemented word fetching logic, and designed a responsive UI with light/dark mode toggle.",
      "Result: Created an engaging, educational tool that helps users improve typing speed and learn new words in a customizable interface.",
    ],
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
    images: [typing2, typing1, typing3],
    repo: "https://github.com/natitedros/Typing-Test",
    demo: "https://typingtest-natnaeldesta.netlify.app/",
    duration: "15 days",
    category: "Frontend Development",
    team: "1",
    technologies: ["React", "Tailwind", "Typescript"],
  },
  {
    id: "project-6",
    name: "Brick Breaker",
    description: [
      "Project: Developed Brick Breaker, a classic arcade-style game where players break bricks by bouncing a ball off a paddle, featuring single-player and multiplayer modes with background music.",
      "My Roles: Designed and implemented the game using OOP principles (6 classes) and built the GUI with NetBeans IDE, ensuring smooth gameplay mechanics and interactive features.",
      "Result: Created an engaging, user-friendly game with dynamic gameplay options and immersive audio, demonstrating strong programming and design skills.",
    ],
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "OOP",
        color: "green-text-gradient",
      },
      {
        name: "NetBeans GUI",
        color: "pink-text-gradient",
      },
    ],
    images: [brickbreaker1, brickbreaker2],
    repo: "https://github.com/natitedros/brickBreaker",
    demo: "#",
    duration: "2 months",
    category: "Frontend Development",
    team: "1",
    technologies: ["React", "Tailwind", "Typescript"],
  },
];

export { services, technologies, experiences, projects, skills };
