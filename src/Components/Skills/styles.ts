import styled from 'styled-components'

export const Section = styled.section`
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

    li {
      font-size: 1rem;
      margin: 10px 0;
    }
  }

  a {
    color: #1e90ff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`
