import { certificates } from "../../data/Data"

export default function Certificates() {
  return (
    <div className="certificates">
      <big>Certificates</big>
      {certificates.map(({ title, company, date, link }) => (
        <div className="certificate" key={title}>
          <strong>{title}</strong>
          <p>
            {company} {date}
          </p>
          <a href={link} target="_blank" rel="noreferrer">
            Certificate Link
          </a>
        </div>
      ))}
    </div>
  )
}
