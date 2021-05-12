import WindowsCalculator from '../images/Windows Calculator.PNG'
import ToDoList from '../images/Todo List.jpg'
import ClassSchedulingSystem from '../images/ClassSchedulingSystem.PNG'
import {faReact, faSass,faPhp, faJs, faHtml5, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faFire, faDatabase, faServer} from '@fortawesome/free-solid-svg-icons'


export const ICONS = {
  HTML:{name:'Html5', color:'#F16524', icon: faHtml5},
  PHP:{name:'PHP', color:'#8993C1', icon: faPhp},
  JAVASCRIPT:{name:'Javascript', color:'#F7E018', icon: faJs},
  REACT:{name:'React', color:'#61DAFB', icon: faReact},
  SASS:{name:'Sass', color: '#CF649A', icon: faSass},
  FIREBASE:{name:'Firebase', color:'#FFCB2B', icon: faFire},
  FIRESTORE:{name:'FireStore', color:'#FFCB2B', icon: faDatabase},
  MYSQL:{name:'MySql', color:'#00758F', icon: faDatabase},
  HEROKU:{name:'Heroku', color:'#430098', icon: faServer},
  GITHUB:{name:'Github', color:'', icon: faGithub},
  LINKEDIN:{name:'LinkedIn', color:'#0A66C2', icon: faLinkedin},
}

export const projects = [
  {
      image: WindowsCalculator, 
      title: 'Windows Calculator Clone', 
      description:'Windows Calculator Clone using React with SASS', 
      skills: [
          ICONS.REACT,
          ICONS.SASS,
      ],
      links: {
          github:'https://github.com/ThomasTW935/Windows-Calculator',
          live: 'https://thomastw935-windows-calculator.netlify.app/'
      }
  },
  {
      image: ToDoList, 
      title: 'ToDo List', 
      description:'Todo List with authentication using firebase', 
      skills: [
          ICONS.REACT,
          ICONS.SASS,
          ICONS.FIREBASE,
          ICONS.FIRESTORE
      ],
      links: {
          github:'https://github.com/ThomasTW935/ToDoList-With-Authentication',
          live:"https://todolist-with-authentication.netlify.app" 
      }
  },
  {
      image: ClassSchedulingSystem, 
      title: 'Class Scheduling System', 
      description:'Class Sche', 
      skills: [
          ICONS.HTML,
          ICONS.JAVASCRIPT,
          ICONS.PHP,
          ICONS.SASS,
          ICONS.MYSQL,
          ICONS.HEROKU,
      ],
      links: {
          github:'https://github.com/ThomasTW935/Class-Scheduling-System',
          live: 'https://aqueous-waters-36043.herokuapp.com/'
      }
  },
]

export const certificates = [
    {
        title: "Responsive Web Design",
        company: "freeCodeCamp.org",
        date: "09/2020",
        link: "https://www.freecodecamp.org/certification/fcc87390ae7-8350-41ae-b8df-a9c18ace8fa9/responsive-web-design"
    },
    {
        title: "Javascript Algorithms and Data Structures",
        company: "freeCodeCamp.org",
        date: "10/2020",
        link: "https://www.freecodecamp.org/certification/fcc87390ae7-8350-41ae-b8df-a9c18ace8fa9/javascript-algorithms-and-data-structures"
    },
]