import { GlobalStyles } from "./styles/globalStyle"
import { AboutContainer, ApresentationTitle, ButtonMenu, ContactContainer, 
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
              
              <AboutContainer>
                <h2>Sobre Mim</h2>
                <p>Olá, meu nome é Luiz Henrique. 
                  Sou um entusiasta da tecnologia 
                  residente no Rio de Janeiro, 
                  com 27 anos de idade. Minha jornada 
                  na programação começou aos 15 anos, 
                  quando ingressei no ensino médio 
                  técnico em programação de jogos digitais. 
                  Durante esse período, tive o privilégio 
                  de aprender com pessoas incríveis e desenvolver 
                  habilidades fundamentais.</p>

                <p>Minha experiência inicial incluiu a programação 
                  com JavaScript para web e Unity, C# para 
                  desktop e Unity, além de Java (POO) para mobile (utilizando 
                  Eclipse e Android Studio). Após anos dedicados
                  a projetos pessoais, ingressei no setor 
                  militar através de um concurso, mas nunca 
                  deixei de lado minha paixão pela tecnologia. 
                  Mesmo na carreira militar, continuei meus estudos e iniciei a faculdade de Análise e 
                  Desenvolvimento de Sistemas.</p>

                <p>Hoje, estou determinado a me dedicar integralmente 
                  à área de tecnologia, a qual reconheço como minha 
                  verdadeira vocação. Tenho especialização em 
                  desenvolvimento web, utilizando JavaScript e 
                  TypeScript com foco em React, além de trabalhar 
                  com outras tecnologias como React Native e Flutter 
                  (Dart). Meu objetivo atual é me tornar um desenvolvedor 
                  Fullstack completo, aprofundando meus conhecimentos em Java.</p>
                    
                <h2>Minhas Soft Skills</h2>
                <ul>
                  <li>
                    <p>
                      <strong>Aprendizado Autodidata:</strong> Tenho facilidade em 
                      aprender sozinho e busco constantemente entender
                      e aprender mais sobre as tecnologias com as quais trabalho.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Disciplina:</strong> Minha experiência na vida militar me 
                      proporcionou uma forte disciplina, tanto pessoal 
                      quanto profissional.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Trabalho em Equipe:</strong> Valorizo o trabalho em equipe e 
                      aprecio discutir e ouvir diferentes opiniões sobre o 
                      mesmo assunto, pois acredito que isso enriquece o 
                      desenvolvimento de soluções.
                    </p>
                  </li>
                </ul>
              </AboutContainer>
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
