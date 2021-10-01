import styled, { StyledComponentBase } from "styled-components"

interface ICon extends StyledComponentBase<any, {}> {
  Title?: any
  Certificates?: any
  Certificate?: any
}

const Con: ICon = styled.div``

const title = styled.h3``

const certificates = styled.div`
  padding: 1rem 0;
`

const certificate = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 3fr repeat(3, 1fr);
  gap: 1rem;
  padding: 0.5rem 0;
  margin: 0;
  position: relative;
  li:last-child {
    justify-self: center;
    transform: scale(1);
    transition: 0.25s ease-in-out;
    &:hover,
    &:active {
      transform: scale(1.08);
    }
  }
  a {
    color: black;
  }
`

Con.Title = title
Con.Certificates = certificates
Con.Certificate = certificate

export default Con
