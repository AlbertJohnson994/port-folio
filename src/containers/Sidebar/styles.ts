import styled from 'styled-components'
import { P } from '../../Components/Paragraph/styles'

export const Description = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`
export const ButtonTheme = styled.button`
  font-size: 10px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.corPrincipal};
  font-weight: bold;
  color: ${(props) => props.theme.corDeFundo};
  padding: 8px;
  cursor: pointer;
  justify-content: center;
  padding: 12px;
  margin: 5px;
`
export const SidebarContainer = styled.div`
  position: sticky:
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
