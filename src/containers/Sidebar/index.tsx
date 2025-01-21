import Avatar from '../../Components/Avatar'
import Paragraph from '../../Components/Paragraph'
import Title from '../../Components/Title'
import React from 'react'

import { Description, ButtonTheme, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Albert Johnson</Title>
      <Paragraph tipo="secondary" fontSize={16}>
        AlbertJohnson994
      </Paragraph>
      <Description tipo="principal" fontSize={12}>
        Front-end Engineer
      </Description>
      <ButtonTheme>Change Theme</ButtonTheme>
    </SidebarContainer>
  </aside>
)

export default Sidebar
