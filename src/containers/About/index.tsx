import Title from '../../Components/Title'
import Paragraph from '../../Components/Paragraph'
import { GithubSection } from './style'
import React from 'react'

const About = () => (
  <section>
    <Title fontSize={16}>About</Title>
    <Paragraph tipo="secondary">
      A passionate and detail-oriented Full Stack Developer with a robust
      background in software development, education, and leadership. Proficient
      in modern web development technologies and committed to building
      innovative and efficient solutions. Adept at collaborating within teams,
      solving complex problems, and delivering high-quality projects on time.
    </Paragraph>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=AlbertJohnson994&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=AlbertJohnson994&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)

export default About
