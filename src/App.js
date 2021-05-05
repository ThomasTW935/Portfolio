import './styles/main.css'

import Projects from './components/Projects'
import Nav from './components/Nav'
import Contacts from './components/Contacts';

function App() {
  return (
    <div className="App">
      {/* <Nav/> */}
      <Contacts/>
      <Projects/>
    </div>
  );
}

export default App;
