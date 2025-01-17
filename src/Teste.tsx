import React from 'react'
import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? `green` : `blue`)};
  font-size: ${(props) => props.fontSize || `16px`};
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: white;

  span {
    text-decoration: line-through;
  }
`

const Teste = () => {
  return (
    <>
      <Botao principal>Send</Botao>
      <Botao fontSize="14px" principal={false}>
        Cancel
      </Botao>
      <BotaoPerigo as="a" principal>
        <span>Dont Click HERE</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste // Correct the syntax here
