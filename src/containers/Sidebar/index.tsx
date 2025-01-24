import Avatar from '../../Components/Avatar'
import Paragraph from '../../Components/Paragraph'
import Title from '../../Components/Title'
import React from 'react'

import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

import { Description, ButtonTheme, SidebarContainer } from './styles'

type Props = {
  changeTheme: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={17}>Albert Johnson</Title>
      <Paragraph tipo="secondary" fontSize={16}>
        AlbertJohnson994
      </Paragraph>
      <Description tipo="principal" fontSize={12}>
        Front-end Engineer
      </Description>

      <a
        href="https://twitter.com/@AlbertJohn12221"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ButtonTheme>
          <FaTwitter style={{ marginRight: '8px' }} />
          Twitter
        </ButtonTheme>
      </a>

      <a
        href="https://linkedin.com/in/AlbertJohnsonOfori"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ButtonTheme>
          <FaLinkedin style={{ marginRight: '8px' }} />
          LinkedIn
        </ButtonTheme>
      </a>

      <a
        href="https://facebook.com/albert.o.johnson.12"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ButtonTheme>
          <FaFacebook style={{ marginRight: '8px' }} />
          Facebook
        </ButtonTheme>
      </a>

      <a
        href="https://instagram.com/Albert__Johnson_"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ButtonTheme>
          <FaInstagram style={{ marginRight: '8px' }} />
          Instagram
        </ButtonTheme>
      </a>

      <ButtonTheme onClick={props.changeTheme}>Change Theme</ButtonTheme>
    </SidebarContainer>
  </aside>
)

export default Sidebar
