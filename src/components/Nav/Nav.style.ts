import styled, { StyledComponentBase,css } from "styled-components"

interface ICon {
  colorChange: boolean,
}

const Con = styled.nav<ICon>`
  display:flex;
  justify-content:space-between;
  padding: 20px 50px;
  position:fixed;
  top: 0;
  left: 0;
  background: ${props=>props.theme.palette.common.white};
  width: 100%;
  z-index: 10;
  transition: .3s ease;
  a {
    color: #141C3A;
    

    transition: 0.25s ease-in-out;
    text-decoration:none;
    transition: .3s ease;
    &:active,
    &:hover {
      transform: scale(1.08);
    }
  }
  ul,div{
    display: flex;
    align-items:center;
    justify-content:space-between;
  }
  ul{
    list-style:none;
    gap: 80px;
    margin: 0;
    padding:0;
  }
  div{
    gap: 45px;
  }
  ${props=> props.colorChange && css`
    background: ${props.theme.palette.secondary.main};
    a {color: ${props.theme.palette.common.white}};
  `};
  
`

export default Con
