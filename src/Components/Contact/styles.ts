import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  margin: 100px auto;
  max-width: 1200px;
  text-align: center;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
    color: #333;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
    color: #555;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      font-size: 1rem;
      margin: 10px 0;
    }
  }
`

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 16px;

  a {
    color: blue;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`

export const Icon = styled.span`
  margin-right: 10px;
  color: #000;
  font-size: 18px;
`
