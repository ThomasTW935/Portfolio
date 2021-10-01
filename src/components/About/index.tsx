import { ICONS } from "../../data/Data"

export default function About() {
  return (
    <div className="aboutMe">
      <h1>Hi!</h1>
      <div className="contact">
        <p>
          {/* <FontAwesomeIcon icon={faEnvelopeSquare} /> */}
          <span>thomastw935@gmail.com</span>
        </p>
        <p>{/* <FontAwesomeIcon icon={faFilePdf} /> */}</p>
        <div className="links">
          <a
            href="https://github.com/ThomasTW935"
            target="_blank"
            rel="noreferrer"
          >
            {/* <FontAwesomeIcon icon={ICONS.GITHUB} /> */}
          </a>
          <a
            href="https://github.com/ThomasTW935"
            target="_blank"
            rel="noreferrer"
          >
            {/* <FontAwesomeIcon icon={ICONS.LINKEDIN} /> */}
          </a>
        </div>
      </div>
    </div>
  )
}
