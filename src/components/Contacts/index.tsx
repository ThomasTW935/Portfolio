import { ICONS } from "../../data/Data"
import { Con, Icons } from "./Contacts.style"

export default function Contacts() {
  return (
    <Con>
      {/* <span>
          <FontAwesomeIcon icon={faEnvelopeSquare}/>
          <span>thomastw935@gmail.com</span>
        </span>
        <span>
          <FontAwesomeIcon icon={faFilePdf}/>
        </span> */}
      <h1>Daryl P. Thomas</h1>
      <h2>Web Developer</h2>
      <Icons>
        <a
          href="https://github.com/ThomasTW935"
          target="_blank"
          rel="noreferrer"
        >
          <ICONS.GITHUB.ICON size={40} />
        </a>
        <a
          href="https://linkedin.com/in/daryl-p-thomas"
          target="_blank"
          rel="noreferrer"
        >
          <ICONS.LINKEDIN.ICON size={40} />
        </a>
      </Icons>
    </Con>
  )
}
