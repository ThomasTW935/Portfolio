import './styles/main.css'

import Projects from './components/Projects'
import Nav from './components/Nav'
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Nav/>
      <About/>
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
