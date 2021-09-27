// import WindowsCalculator from "../images/Windows Calculator.PNG"
import ToDoList from "../images/Todo List.jpg"
// import fbClone from "../images/fb-clone 1.PNG"
// import ClassSchedulingSystem from "../images/ClassSchedulingSystem.PNG"

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
  REACT: { NAME: "React", COLOR: "#61DAFB", ICON: ReactLogo },
  MYSQL: { NAME: "MySql", COLOR: "#00758F", ICON: Mysql },
  MONGODB: { NAME: "mongo DB", COLOR: "#10AA50", ICON: Mongodb },
  FIREBASE: { NAME: "Firebase", COLOR: "#FFCB2B", ICON: Firebase },
  HEROKU: { NAME: "Heroku", COLOR: "#430098", ICON: Heroku },
  GITHUB: { NAME: "Github", COLOR: "", ICON: Github },
  LINKEDIN: { NAME: "LinkedIn", COLOR: "#0A66C2", ICON: Linkedin },
  LIVE: { NAME: "Live", COLOR: "red", ICON: Live },
}

export const projects = [
  {
    image: ToDoList,
    title: "ToDo List",
    description: "Todo List with authentication using firebase",
    skills: [ICONS.REACT, ICONS.SASS, ICONS.FIREBASE, ICONS.FIREBASE],
    links: {
      github: "https://github.com/ThomasTW935/ToDoList-With-Authentication",
      live: "https://todolist-with-authentication.netlify.app",
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
