import { ThemeProvider } from 'styled-components'

import About from './containers/About'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'
import EstiloGlobal, { Container } from './style'
import React, { useState } from 'react'
import themeLight from './Themes/light'
import themeDark from './Themes/dark'
import NavigationMenu from './Components/Menu'
import Contact from './Components/Contact'
import Experience from './Components/Experience'
import Skills from './Components/Skills'

function App() {
  const [usingDarkTheme, setUsingDarkTheme] = useState(false)

  function changeTheme() {
    setUsingDarkTheme(!usingDarkTheme)
  }

  return (
    <ThemeProvider theme={usingDarkTheme ? themeDark : themeLight}>
      <EstiloGlobal />
      <NavigationMenu />
      <Container>
        <Sidebar changeTheme={changeTheme} />
        <main>
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
