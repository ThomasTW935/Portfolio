import styled, { StyledComponentBase } from "styled-components"

interface ICon extends StyledComponentBase<any, {}> {
  Title?: any
  Image?: any
  Details?: any
  CTA?: any
  Skills?: any
  Skill?: any
  Description?: any
}

const Con: ICon = styled.div`
  display: flex;
  gap: 0.5em;
  padding: 1em 0;
`

const image = styled.div`
  img {
    aspect-ratio: 16/9;
    width: 100%;
    height: auto;
  }
`

const details = styled.div`
  display: grid;
  grid-template: 1fr 2fr 1fr 1fr / 1fr;
  justify-content: start;
  width: 100%;
  gap: 0.3rem;
`

const title = styled.p`
  font-weight: bold;
  font-size: 1.2rem;
`

const cta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  a {
    color: black;
    border: 3px solid black;
    border-radius: 0.2em;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.3em;
    padding: 0.25em 0.5em;
    transition: 0.2s ease-in-out;
    &:hover {
      color: white;
      background: black;
    }
  }
`

const skills = styled.div`
  display: flex;
`

const skill = styled.div`
  position: relative;
  display: grid;
  place-items: center;
  svg:hover ~ span {
    opacity: 1;
    bottom: 100%;
  }
  span {
    position: absolute;
    left: 50%;
    bottom: 80%;
    transform: translateX(-50%);
    background: #333;
    color: white;
    font-size: 0.8rem;
    padding: 0.5em 0.75em;
    border-radius: 0.3em;
    opacity: 0;
    transition: opacity 0.3s ease-in-out, bottom 0.3s ease-in-out;
  }
`

const description = styled.p``

Con.Image = image
Con.Details = details
Con.Title = title
Con.CTA = cta
Con.Skills = skills
Con.Skill = skill
Con.Description = description

export default Con
