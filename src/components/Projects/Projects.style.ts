import styled, { StyledComponentBase } from "styled-components"

interface ICon extends StyledComponentBase<any, {}> {
  Title?: any
  Projects?: any
}

const Con: ICon = styled.div`
  background: #eee;
`

const title = styled.h3``

const projects = styled.section``

Con.Title = title
Con.Projects = projects

export default Con
