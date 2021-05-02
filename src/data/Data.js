import WindowsCalculator from '../images/Windows Calculator.PNG'
import {faReact, faSass,faPhp, faJs, faHtml5, faGithub} from '@fortawesome/free-brands-svg-icons'
import {faFire, faDatabase, faServer} from '@fortawesome/free-solid-svg-icons'


export const ICONS = {
  HTML:{name:'Html5', color:'#F16524', icon: faHtml5},
  PHP:{name:'PHP', color:'#8993C1', icon: faPhp},
  JAVASCRIPT:{name:'Javascript', color:'#F7E018', icon: faJs},
  REACT:{name:'React', color:'#61DAFB', icon: faReact},
  SASS:{name:'Sass', color: '#CF649A', icon: faSass},
  FIREBASE:{name:'Firebase', color:'#FFCB2B', icon: faFire},
  FIRESTORE:{name:'FireStore', color:'', icon: faDatabase},
  MYSQL:{name:'MySql', color:'', icon: faDatabase},
  HEROKU:{name:'Heroku', color:'', icon: faServer},
  GITHUB:{name:'Github', color:'', icon: faGithub},
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
      image: WindowsCalculator, 
      title: 'ToDo List', 
      description:'Todo List with authentication using firebase', 
      skills: [
          ICONS.REACT,
          ICONS.SASS,
          ICONS.FIREBASE,
          ICONS.FIRESTORE
      ],
      links: {
          github:'https://github.com/ThomasTW935/Windows-Calculator',
          live: 'https://thomastw935-windows-calculator.netlify.app/'
      }
  },
  {
      image: WindowsCalculator, 
      title: 'Class Scheduling System', 
      description:'', 
      skills: [
          ICONS.HTML,
          ICONS.JAVASCRIPT,
          ICONS.PHP,
          ICONS.SASS,
          ICONS.MYSQL,
          ICONS.HEROKU,
      ],
      links: {
          github:'https://github.com/ThomasTW935/Windows-Calculator',
          live: 'https://thomastw935-windows-calculator.netlify.app/'
      }
  },
]