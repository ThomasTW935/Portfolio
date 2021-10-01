import { certificates } from "../../data/Data"
import Con from "./Certificates.style"
import { LinkExternal } from "@styled-icons/boxicons-regular"

export default function Certificates() {
  return (
    <Con>
      <Con.Title>Certificates</Con.Title>
      <Con.Certificates>
        {certificates.map(({ title, company, date, link }) => (
          <Con.Certificate key={title}>
            <li>{title}</li>
            <li>{date}</li>
            <li>{company}</li>
            <li>
              <a href={link} target="_blank" rel="noreferrer">
                <LinkExternal size={25} />
              </a>
            </li>
          </Con.Certificate>
        ))}
      </Con.Certificates>
    </Con>
  )
}
