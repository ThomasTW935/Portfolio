import Projects from "./components/Projects"
import Nav from "./components/Nav"
import Contacts from "./components/Contacts"
import Certificates from "./components/Certificates"

function App() {
  return (
    <div className="App">
      {/* <Nav/> */}
      <Contacts />
      <Projects />
      <Certificates />
    </div>
  )
}

export default App