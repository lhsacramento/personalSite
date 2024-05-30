import { GlobalStyles } from "./styles/globalStyle"
import { ApresentationTitle, ButtonMenu, ContentContainer, HomeContent, MainContainer, MenuContainer} from "./styles/appStyles"

function App() {
  return (    
    <>
      <GlobalStyles />

      <MainContainer>
        <ApresentationTitle>
          <h1>Luiz Henrique S.</h1>
          <h2>Software Developer</h2>
        </ApresentationTitle>

        <ContentContainer>
          <MenuContainer>
            <ButtonMenu>Início</ButtonMenu>
            <ButtonMenu>Projetos</ButtonMenu>
            <ButtonMenu>Sobre</ButtonMenu>
            <ButtonMenu>Contato</ButtonMenu>
          </MenuContainer>

          <HomeContent>
            <p>Aos 27 anos, percebo que desenvolver não 
            se resume a programar. É, antes de tudo, 
            sobre impactar vidas. A tecnologia mudou 
            radicalmente nossa existência. 
            E o que virá em seguida?</p>
          </HomeContent>          
        </ContentContainer>
      </MainContainer>
       
    </>
  )
}

export default App
