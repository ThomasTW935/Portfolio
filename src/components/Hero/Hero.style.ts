import styled, { StyledComponentBase }from "styled-components"

interface ICon extends StyledComponentBase<any, {}> {
  ImgCon?: any,
  Text?:any
}
const Con : ICon = styled.div`
  font-size: 40px;
  display:grid;
  grid-template: repeat(3,50px) 1fr / 1fr 1fr;
  gap: 15px;
  padding: 120px 0;
`

const imgCon = styled.div`
  grid-column: 2/3;
  grid-row: 2/5;
  display:flex;
  justify-content:flex-end;
  img{
     width: 450px;
    height: auto;
  }
`

const text = styled.div`
  grid-column: 1/2;
`

Con.ImgCon = imgCon
Con.Text = text

export default Con
