import styled from "styled-components"

const Con = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  & > div {
    padding: 1rem 3rem;
    & > * {
      min-width: 300px;
      width: 100%;
      max-width: 80vw;
      margin: 0 auto;
    }
    @media (min-width: 768px) {
      padding: 1rem 5rem;
    }
  }
`

export default Con
