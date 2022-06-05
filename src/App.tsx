import Con from "./App.style"
import { Contacts, Projects, Certificates,Nav } from "./components"

function App() {
  return (
    <Con>
      <Nav/>
      <Contacts />
      <Projects />
      <Certificates />
    </Con>
  )
}

export default App
