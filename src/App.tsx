import { GlobalStyles } from "./styles/globalStyle"
import { ApresentationTitle, ButtonMenu, ContentContainer, HomeContent, MainContainer, MenuContainer, SliderContainer} from "./styles/appStyles"

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
          {/*
            <p>Aos 27 anos, percebo que desenvolver não 
            se resume a programar. É, antes de tudo, 
            sobre impactar vidas. A tecnologia mudou 
            radicalmente nossa existência. 
            E o que virá em seguida?</p>
          */}          

          <SliderContainer>
            <span> </span>
            <span> </span>
            <span> </span>
            <span> </span>
            <span> </span>
            <span>Estudio Pet</span>
            <span>Estudio Pet2</span>
            <span>Estudio Pet3</span>
            <span>Estudio Pet4</span>
            <span>Estudio Pet5</span>
            <span>Estudio Pet6</span>
            <span>Estudio Pet7</span>
            <span>Estudio Pet8</span>
            <span>Estudio Pet9</span>
            <span>Estudio Pet10</span>
            <span>Estudio Pet11</span>
            <span>Estudio Pet12</span>
            <span>Estudio Pet13</span>
            <span>Estudio Pet14</span>
            <span>Estudio Pet15</span>
            <span>Estudio Pet16</span>
            <span>Estudio Pet17</span>
            <span> </span>
            <span> </span>
            <span> </span>
            <span> </span>
            <span> </span>
          </SliderContainer>
          
          </HomeContent>  
        </ContentContainer>
      </MainContainer>
       
    </>
  )
}

export default App
