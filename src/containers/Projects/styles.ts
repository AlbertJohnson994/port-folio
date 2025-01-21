import styled from 'styled-components'

export const List = styled.ul`
  display: grid;
  grid-templated-columns: 1fr 1fr;
  column-gap: 36px;
  row-gap: 40px;

  @media (max-width: 768px) {
    display: grid;
    grid-templated-columns: 1fr;
    column-gap: 0;
    row-gap: 16px;
  }
`
