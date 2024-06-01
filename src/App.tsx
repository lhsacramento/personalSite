import { GlobalStyles } from "./styles/globalStyle"
import { ApresentationTitle, ButtonMenu, ContactContainer, 
         ContentContainer, HomeContainer, HomeContent, 
         MainContainer, MenuContainer, SelectedButton, 
         SlideProject, SliderContainer} from "./styles/appStyles"
import { useState } from "react";
import { LinkedinLogo, GithubLogo, At } from "@phosphor-icons/react";


function App() {  

  const [page, setPage] = useState("home");;
  function handleChangePage(nextPage: string){
    setPage(nextPage);
  }

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
            <ButtonMenu onClick={() => {handleChangePage('home')}}>
              {page === 'home' && 
              <SelectedButton />
              }
              Início
            </ButtonMenu>

            <ButtonMenu onClick={() => {handleChangePage('projects')}}>
              {page === 'projects' &&
                <SelectedButton/>
              }
              Projetos
            </ButtonMenu>
            <ButtonMenu onClick={() => {handleChangePage('about')}}>
              {page === 'about' &&
                <SelectedButton/>
              }
              Sobre
            </ButtonMenu>
            <ButtonMenu onClick={() => {handleChangePage('contact')}}>
              {page === 'contact' &&
                <SelectedButton/>
              }
              Contato
            </ButtonMenu>
          </MenuContainer>

          <HomeContainer>
            <HomeContent>
              {page === 'home' &&
                <p className="homeParagraph">Aos 27 anos, percebo que desenvolver não 
                se resume a programar. É, antes de tudo, 
                sobre impactar vidas. A tecnologia mudou 
                radicalmente nossa existência. 
                E o que virá em seguida?</p>
              }          

              {page === 'projects' &&
                <SliderContainer>     
                  <SlideProject> </SlideProject>
                  <SlideProject> </SlideProject>
                  <SlideProject> </SlideProject>
                  <SlideProject href="#">
                    <h3>Estúdio Pet - Site</h3>
                    <p>React + Typescript + Vite + Leaflet (mapas) + Styledcomponent</p>
                  </SlideProject>
                  <SlideProject href="#">
                    <h3>Meu Site</h3>
                    <p>React + Typescript + Vite + Styledcomponent + Animations</p>
                  </SlideProject>
                  <SlideProject href="#">
                    <h3>Coffee Delivery</h3>
                    <p>React + Typescript + React-router-dom + React-hook-form + Imask</p>
                  </SlideProject>
                  <SlideProject href="#">
                    <h3>DT-Money</h3>
                    <p>React + Typescript + Radix + Zod + React-hook-form + Axios + Imask</p>
                  </SlideProject>
                  <SlideProject href="#">
                    <h3>Pomo-Timer</h3>
                    <p>React + Vite + Typescript + React-router-dom + Date-fns</p>
                  </SlideProject>
                  <SlideProject href="#">
                    <h3>Keys Controller</h3>
                    <p>Flutter + Dart</p>
                  </SlideProject>
                  <SlideProject> </SlideProject>
                  <SlideProject> </SlideProject>
                  <SlideProject> </SlideProject>    
                  <SlideProject> </SlideProject>    
                </SliderContainer>
              }

              {page === 'about' &&
              
                <p>
                </p>
              }

              {page === 'contact' &&
                
                <ContactContainer>
                  <div>
                    <a href="https://www.linkedin.com/in/lhsacramento/" target="_blanc">Linkedin/Lhsacramento</a>
                    <LinkedinLogo size={25}/>                    
                  </div>

                  <div>
                    <a href="https://github.com/lhsacramento" target="_blanc">Github/Lhsacramento</a>
                    <GithubLogo size={25}/>                    
                  </div>

                  <div>
                    <span id='email' onClick={() => {}}>LuizSacramento.tds@gmail.com</span>
                    <At size={25}/>                    
                  </div>
                </ContactContainer>
              }
            
            </HomeContent>  
          </HomeContainer>
        </ContentContainer>
      </MainContainer>
       
    </>
  )
}

export default App
