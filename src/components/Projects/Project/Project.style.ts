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
  flex-direction: column;
  gap: 0.5em;
  padding: 1em;
  background: white;
  margin: 1rem 0;
  border-radius: 5px;
  min-height: 400px;
  min-width: 400px;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`

const image = styled.div`
  width: 100%;
  img {
    aspect-ratio: 16/9;
    width: 100%;
    height: 100%;
    object-fit: cover;
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
  align-items: flex-end;
  gap: 0.5em;
  a {
    color: #111;
    border: 2px solid black;
    border-radius: 0.2em;
    font-weight: bold;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 0.3em;
    padding: 0.25em 0.5em;
    transform: scale(1);
    transition: 0.2s ease-in-out;
    &:hover,
    &:active {
      transform: scale(1.08);
    }
  }
`

const skills = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const skill = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  svg:hover ~ span {
    opacity: 1;
    transform: translateX(-50%) translateY(-120%);
  }
  span {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%) translateY(0);
    background: #333;
    color: white;
    font-size: 0.7rem;
    padding: 0.5em 0.75em;
    border-radius: 0.3em;
    opacity: 0;
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    pointer-events: none;
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
