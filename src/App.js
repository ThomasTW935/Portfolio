import './styles/main.css'
import testImg from './images/test.png'

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
      </div>
      <div className='projects'>
       
        <div className='project'>
          <div className='project__image'><img src={testImg} alt='test'/></div>
          <h2 className='project__name'>Test</h2>
          <p>File edit selection View go run Terminal Help App.js-React-Visual Studio Code</p>
          <section className='project__buttons'>
            <a href='/' className='github'>Github</a>
            <a href='/' className='live'>Live Demo</a>
          </section>
        </div>
        <div className='project'>
          <div className='project__image'><img src={testImg} alt='test'/></div>
          <h2 className='project__name'>Test</h2>
          <p>File edit selection View go run Terminal Help App.js-React-Visual Studio Code</p>
          <section className='project__buttons'>
            <a href='/' className='github'>Github</a>
            <a href='/' className='live'>Live Demo</a>
          </section>
        </div>
        <div className='project'>
          <div className='project__image'><img src={testImg} alt='test'/></div>
          <h2 className='project__name'>Test</h2>
          <p>File edit selection View go run Terminal Help App.js-React-Visual Studio Code</p>
          <section className='project__buttons'>
            <a href='/' className='github'>Github</a>
            <a href='/' className='live'>Live Demo</a>
          </section>
        </div>
      </div>
      <div className='contactMe'>
        <form>
          <input type='text' placeholder='message'></input>
        </form>
      </div>
    </div>
  );
}

export default App;
