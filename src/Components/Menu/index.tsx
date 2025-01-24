import React from 'react'
import { Menu, MenuItem, MenuLink } from './styles' // Add appropriate styling here

const NavigationMenu = () => {
  return (
    <Menu>
      <MenuItem>
        <MenuLink href="#projects">Projects</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink href="#skills">Skills</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink href="#experience">Experience</MenuLink>
      </MenuItem>
      <MenuItem>
        <MenuLink href="#contact">Contact</MenuLink>
      </MenuItem>
    </Menu>
  )
}

export default NavigationMenu
