import Title from '../Components/Title'
import Paragraph from '../Components/Paragraph'
import { GithubSection } from './style'

const About = () => (
  <section>
    <Title fontSize={16}>About</Title>
    <Paragraph tipo="secondary">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste ea, illum
      optio totam maxime necessitatibus magni dolorum repellendus similique hic
      repellat atque quia quae assumenda? Ducimus reiciendis dignissimos id
      harum!
    </Paragraph>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=AlbertJohnson994&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=AlbertJohnson994&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)

export default About
