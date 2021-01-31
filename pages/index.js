import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

export function Head({ title, description, bg }) {
  return (
    <head>

      <link rel="icon" href={bg} />
      
      <meta property="og:locale" content="pt_BR" />

      <meta property="og:title" content={title} />
      <meta property="og:site_name" content="PatoQuiz" />

      <meta property="og:description" content={description} />
      <meta property="og:image" content={bg} />
      <meta property="og:image:type" content="image/jpg" />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />
      <meta property="og:type" content="website" />
    </head>
  ); 
}



//const BackgroundImage = styled.div`
//  background-image: url(${db.bg});
//  flex: 1;
//  background-size: cover;
//  background-position: center;
//`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;



export default function Home() {
  return (
    <>
    <Head />
    
    <QuizBackground backgroundImage ={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
              <h1>The Legent of Zelda</h1>
          </Widget.Header>

          <Widget.Content>
           
            
            <p>lorem lorem lorem </p>
          </Widget.Content>


        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quiz da galera</h1>

            <p>lorem lorem lorem </p>
          </Widget.Content>

        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/nicolasestanislau"/>
    </QuizBackground>
    </>

  )
}
