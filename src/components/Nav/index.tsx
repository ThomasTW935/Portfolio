import {useState} from 'react'
import { ICONS } from "../../data/Data"
import Con from "./Nav.style"

export default function Nav() {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
      setColorchange(window.scrollY >= 100);
    };
    window.addEventListener('scroll', changeNavbarColor);
  return (
    <Con colorChange={colorChange}>
      <ul>
        <li><a href='#about'>About</a></li>
        <li><a href='#work'>Work</a></li>
        <li><a href='#certificates'>Certificates</a></li>
      </ul>
      <div>
        <a
          href="https://github.com/ThomasTW935"
          target="_blank"
          rel="noreferrer"
        >
          <ICONS.GITHUB.ICON size={28} />
        </a>
        <a
          href="https://linkedin.com/in/daryl-p-thomas"
          target="_blank"
          rel="noreferrer"
        >
          <ICONS.LINKEDIN.ICON size={28} />
        </a>
      </div>
    </Con>
  )
}
