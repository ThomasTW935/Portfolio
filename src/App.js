import './styles/main.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faEnvelopeSquare, faFilePdf} from '@fortawesome/free-solid-svg-icons'
import Projects from './components/Projects'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
        <Nav/>
      <div className='aboutMe'>
        <h1>Hi!</h1>
        <div className='contact'>
          <p>
            <FontAwesomeIcon icon={faEnvelopeSquare}/>
            <span>thomastw935@gmail.com</span>
          </p>
          <p>
            <FontAwesomeIcon icon={faFilePdf}/>
          </p>
          <div className='links'>
            <a href='https://github.com/ThomasTW935' target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub}/></a>
          </div>
        </div>
      </div>
      <Projects/>
      <div className='contactMe'>
        <form>
          <input type='text' placeholder='message'></input>
        </form>
      </div>
    </div>
  );
}

export default App;
