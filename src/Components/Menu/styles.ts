import styled from 'styled-components'

export const Menu = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: #333;
  padding: 10px 0;
`

export const MenuItem = styled.div`
  list-style: none;
  font-size: 1.2rem;
  color: white;
`

export const MenuLink = styled.a`
  text-decoration: none;
  color: white;
  margin: 0 15px;

  &:hover {
    color: #1e90ff;
    text-decoration: underline;
  }
`
