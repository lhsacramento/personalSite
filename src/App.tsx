import { GlobalStyles } from "./styles/globalStyle"
import { ApresentationTitle, ButtonMenu, ContentContainer, HomeContent, MainContainer, MenuContainer, SlideProject, SliderContainer} from "./styles/appStyles"

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

          {/*<SliderContainer>
            <a> </a>
            <a> </a>
            <a> </a>
            <a> </a>
            <a>
              <h3>Estúdio Pet - Site</h3>
              <span>Typescript + Vite + Styled aaaaaaaa aaaaaaaaaa Components + Html + Css</span>
            </a>
            <a>{innerWidth}</a>
            <a>Estudio Pet3</a>
            <a>Estudio Pet4</a>
            <a>Estudio Pet5</a>
            <a>Estudio Pet6</a>
            <a> </a>
            <a> </a>
            <a> </a>
            <a> </a>
        </SliderContainer>*/}


        <SliderContainer>
          <SlideProject> </SlideProject>
          <SlideProject> </SlideProject>
          <SlideProject> </SlideProject>          
          <SlideProject> </SlideProject>
          <SlideProject> </SlideProject>
          <SlideProject> </SlideProject>
          <SlideProject>
            <h3>Estúdio Pet - Site</h3>
            <p>React + Typescript + Vite + Leaflet (mapas) + Styledcomponent + Html5 + Css</p>
          </SlideProject>
          <SlideProject>
            <h3>Meu Portifólio</h3>
            <p>React + Typescript + Vite + Styledcomponent + Animations + Html5 + Css</p>
          </SlideProject>
          <SlideProject>
            <h3>Coffee Delivery</h3>
            <p>React + Typescript + React-router-dom + React-hook-form + Imask</p>
          </SlideProject>
          <SlideProject>
            <h3>DT-Money</h3>
            <p>React + Typescript + Radix + Zod + React-hook-form + Axios + Imask</p>
          </SlideProject>
          <SlideProject>
            <h3>Pomo-Timer</h3>
            <p>React + Vite + Typescript + React-router-dom + Date-fns + React-hook-form</p>
          </SlideProject>
          <SlideProject>
            <h3>Keys Controller</h3>
            <p>Flutter + Dart</p>
          </SlideProject>
          <SlideProject> </SlideProject>
          <SlideProject> </SlideProject>
          <SlideProject> </SlideProject>          
          <SlideProject> </SlideProject>
          <SlideProject> </SlideProject>
          <SlideProject> </SlideProject>
        </SliderContainer>
          
          </HomeContent>  
        </ContentContainer>
      </MainContainer>
       
    </>
  )
}

export default App
