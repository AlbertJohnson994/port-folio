import { P } from './styles'
import React from 'react'

export type Props = {
  children: string
  tipo?: 'principal' | 'secondary'
  fontSize?: number
}

const Paragraph = ({ children, tipo = 'principal', fontSize }: Props) => (
  <P fontSize={fontSize} tipo={tipo}>
    {children}
  </P>
)

export default Paragraph
