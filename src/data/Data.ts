import WindowsCalculator from "../images/WindowsCalculator.png"
import ToDoList from "../images/Todo List.jpg"
import fbClone from "../images/fb-clone.png"
import ClassSchedulingSystem from "../images/ClassSchedulingSystem - Copy.png"

import {
  Html5,
  Php,
  Css3,
  Javascript,
  ReactLogo,
  Sass,
  Firebase,
  Github,
  Linkedin,
} from "styled-icons/boxicons-logos"
import {
  Heroku,
  Mongodb,
  Mysql,
  Styledcomponents,
  Typescript,
} from "@styled-icons/simple-icons"
import { Live } from "@styled-icons/fluentui-system-filled"

export const ICONS = {
  HTML: { NAME: "Html5", COLOR: "#F16524", ICON: Html5 },
  PHP: { NAME: "PHP", COLOR: "#8993C1", ICON: Php },
  CSS: { NAME: "CSS", COLOR: "#2965F1", ICON: Css3 },
  SASS: { NAME: "Sass", COLOR: "#CF649A", ICON: Sass },
  STYLED_COMPONENTS: {
    NAME: "Styled Components",
    COLOR: "#CF649A",
    ICON: Styledcomponents,
  },
  JAVASCRIPT: { NAME: "Javascript", COLOR: "#F7E018", ICON: Javascript },
  TYPESCRIPT: { NAME: "Typescript", COLOR: "#F7E018", ICON: Typescript },
  REACT: { NAME: "React", COLOR: "#61DAFB", ICON: ReactLogo },
  MYSQL: { NAME: "MySql", COLOR: "#00758F", ICON: Mysql },
  MONGODB: { NAME: "MongoDB", COLOR: "#10AA50", ICON: Mongodb },
  FIREBASE: { NAME: "Firebase", COLOR: "#FFCB2B", ICON: Firebase },
  HEROKU: { NAME: "Heroku", COLOR: "#430098", ICON: Heroku },
  GITHUB: { NAME: "Github", COLOR: "", ICON: Github },
  LINKEDIN: { NAME: "LinkedIn", COLOR: "#0A66C2", ICON: Linkedin },
  LIVE: { NAME: "Live", COLOR: "red", ICON: Live },
}
export const projects = [
  {
    image: WindowsCalculator,
    title: "Windows Calculator Clone",
    description: "Windows Calculator Clone using React with SASS",
    skills: [ICONS.REACT, ICONS.TYPESCRIPT, ICONS.SASS],
    links: {
      github: "https://github.com/ThomasTW935/Windows-Calculator",
      live: "https://thomastw935-windows-calculator.netlify.app/",
    },
  },
  {
    image: ClassSchedulingSystem,
    title: "Class Scheduling System",
    description:
      "This system was created for our thesis. It is a system for the dean to assist in scheduling classes for the whole campus.",
    skills: [
      ICONS.HTML,
      ICONS.JAVASCRIPT,
      ICONS.PHP,
      ICONS.SASS,
      ICONS.MYSQL,
      ICONS.HEROKU,
    ],
    links: {
      github: "https://github.com/ThomasTW935/Class-Scheduling-System",
      live: "https://aqueous-waters-36043.herokuapp.com/",
    },
  },
  {
    image: fbClone,
    title: "Facebook Clone(In Progress)",
    description:
      "A Facebook clone built using the MERN Stack with Firebase as authentication. ",
    skills: [
      ICONS.REACT,
      ICONS.TYPESCRIPT,
      ICONS.CSS,
      ICONS.FIREBASE,
      ICONS.MONGODB,
      ICONS.HEROKU,
    ],
    links: {
      github: "https://github.com/ThomasTW935/fb-clone",
      live: "https://fb-clone-thomas.netlify.app/",
    },
  },
]

export const certificates = [
  {
    title: "Responsive Web Design",
    company: "freeCodeCamp.org",
    date: "09/2020",
    link: "https://www.freecodecamp.org/certification/fcc87390ae7-8350-41ae-b8df-a9c18ace8fa9/responsive-web-design",
  },
  {
    title: "Javascript Algorithms and Data Structures",
    company: "freeCodeCamp.org",
    date: "10/2020",
    link: "https://www.freecodecamp.org/certification/fcc87390ae7-8350-41ae-b8df-a9c18ace8fa9/javascript-algorithms-and-data-structures",
  },
  {
    title: "Back End Development and APIs",
    company: "freeCodeCamp.org",
    date: "5/2021",
    link: "https://www.freecodecamp.org/certification/fcc87390ae7-8350-41ae-b8df-a9c18ace8fa9/back-end-development-and-apis",
  },
]
