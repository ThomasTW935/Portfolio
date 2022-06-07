import Con from "./Hero.style"
import programming from "../../images/programming.gif"

export default function Contacts() {
  return (
    <Con>
      <Con.Text>Hi there,</Con.Text>
      <Con.Text>I'm <b>Daryl P. Thomas</b></Con.Text>
      <Con.Text>I'm a <b>Full Stacked Developer</b></Con.Text>
      <Con.ImgCon>
        <img src={programming} alt='programming'/>
      </Con.ImgCon>
    </Con>
  )
}
