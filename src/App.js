import './styles/main.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub} from '@fortawesome/free-brands-svg-icons'
import {faEnvelopeSquare, faFilePdf} from '@fortawesome/free-solid-svg-icons'
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
      <header>
        <h2>Portfolio</h2>
        <nav>
          <ul>
            <li><a href='/'>About</a></li>
            <li><a href='/'>Projects</a></li>
            <li><a href='/'>Contact Me</a></li>
          </ul>
        </nav>
      </header>
      <div className='aboutMe'>
        <h1>Hi!</h1>
        <div>
          <FontAwesomeIcon icon={faGithub}/>
          <FontAwesomeIcon icon={faEnvelopeSquare}/>
          <FontAwesomeIcon icon={faFilePdf}/>
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
