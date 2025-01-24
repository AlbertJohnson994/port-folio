import React from 'react'
import { Section, ContactItem, Icon } from './styles'
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa' // Import icons from react-icons

const Contact = () => {
  return (
    <Section id="contact">
      <h2>Contact</h2>
      <p>Feel free to reach out via the following:</p>
      <ul>
        <ContactItem>
          <Icon>
            <FaEnvelope />
          </Icon>
          Email: albert.johnson994@gmail.com
        </ContactItem>
        <ContactItem>
          <Icon>
            <FaPhoneAlt />
          </Icon>
          Phone: +55 (31) 97505 - 7303
        </ContactItem>
        <ContactItem>
          GitHub:{' '}
          <a
            href="https://github.com/AlbertJOhnson994"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>@AlbertJohnson994</i>
          </a>
        </ContactItem>
        <ContactItem>
          LinkedIn:{' '}
          <a
            href="https://linkedin.com/in/albertjohnson"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i>@AlbertJohnson994</i>
          </a>
        </ContactItem>
      </ul>
    </Section>
  )
}

export default Contact
