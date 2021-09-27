import styled, { StyledComponentBase } from "styled-components"

interface ICon extends StyledComponentBase<any, {}> {
  Title?: any
  Projects?: any
}

const Con: ICon = styled.section``

const title = styled.p``

const projects = styled.section``

Con.Title = title
Con.Projects = projects

export default Con
