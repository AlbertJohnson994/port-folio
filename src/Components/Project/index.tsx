import Paragraph from '../Paragraph'
import Title from '../Title'
import React from 'react'

import { Card, LinkButton } from './style'

const Project = () => {
  return (
    <Card>
      <Title>Project List</Title>
      <Paragraph tipo="secondary">
        List of projects completed with VueJS
      </Paragraph>
      <LinkButton>View</LinkButton>
    </Card>
  )
}

export default Project
