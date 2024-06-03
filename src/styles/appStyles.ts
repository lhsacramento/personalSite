import {keyframes, styled} from "styled-components";

export const MainContainer = styled.div`
    position: fixed;
    left: 1rem;
    right: 1rem;
    top: 1rem;
    bottom: 1rem;
    border: 1px solid white;

    display: flex;
    flex-direction: column;  
    gap: 3rem;
`;

export const ApresentationTitle = styled.div`
    h1{
        font-family: 'Roboto', sans-serif;
        font-size: 2rem;
        font-weight: 100;
        color: white;
        margin-top: 1rem;
        margin-left: 1rem;
    }

    h2{
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        color: white;
        margin-left: 1.1rem;
    }

    @media (min-width: 700px) {
        h1{
            font-size: 2.5rem;
        }

        h2{
            font-size: 1.5rem;
        }
    }
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 0 1rem 1rem;
    height: 100%;
    overflow-y: hidden;
`

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
`

export const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    max-height: 100%;
    overflow-y: hidden;
`
const contentApper = keyframes`
    from{
        opacity: 0;
    }to{
        opacity: 1;
    }
`

export const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: end;
    width: 100%;   
    max-height : 80%;

    .homeParagraph{        
        animation: ${contentApper} 1s linear;
        height: 100%;
        color: white;
        font-size: 1rem;
        word-spacing: 0.5rem;
        line-height: 1.5rem;
        text-align: end;
        display: flex;
        flex-direction: column;
        justify-content: end;
        max-width: 13rem;
        width: 100%;
        margin-right: 1rem;
    }

    div{
        color: white;
    }

    @media (min-width: 700px) {
        .homeParagraph{
            max-width: 20rem;
            font-size: 1.2rem;
        }
    }
`
interface ButtonProps{
    selectedButton: boolean;
}

export const ButtonMenu = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: fit-content;
    height: fit-content;
    background-color: transparent;
    color: white;
    border: none;
    cursor: pointer;
    font-family: roboto;
    font-size: 1rem;
    font-weight: ${props => props.selectedButton ? 700 : 100};

    &:hover{
        font-weight: bold;
        scale: 1.1;
    }

    @media (min-width: 700px) {        
        font-size: 1.5rem;
    }
`

const normalApper = keyframes`
    0%,100%{
        opacity: 0;
        translate: 30vw 0;
        font-weight: normal;
    }

    50%{
        opacity: 1;
        translate: -6vw 0;
        font-weight: bold;
    }
`

const sizedApper = keyframes`
    0%,100%{
        opacity: 0;
        translate: 10vw 0;
        font-weight: normal;
    }

    50%{
        opacity: 1;
        translate: -10vw 0;
        font-weight: bold;
    }
`

export const SliderContainer = styled.div`
    height: 18rem;
    display: flex;
    width: 100%;
    flex-direction: column;
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-color: #FFF transparent;
`

interface SlideProjectProps{
    empty? : true;
}

export const SlideProject = styled.a<SlideProjectProps>`
    text-decoration: none;
    color: white;
    cursor: ${props => props.empty ? 'pointer' : null};
    text-align: right;
    width: 100%;
    display: block; 
    margin-top: 1rem;
    

    h3{
        font-size: 1.5rem;
    }

    p{
        width: 100%;
        font-size: 0.5rem;
    }

    @media (max-width: 699px) {        
        animation: ${normalApper} 1s linear;   
        animation-timeline: view();     
    }

    @media (min-width: 700px) {
        animation: ${sizedApper} 1s linear; 
        animation-timeline: view();  

        h3{
            font-size: 2rem;
        }

        p{
            width: 100%;
            font-size: 1rem;
        }
    }
`

export const SelectedButton = styled.span`
    height: 10px;
    width: 10px;
    background-color: white;
    border-radius: 9999px;
`

export const AboutContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
    padding: 0 1rem;
    gap: 1rem;
    width: 100%;
    text-align: right;
    animation: ${contentApper} 1s linear;
    scrollbar-color: #FFF transparent;

    strong{
        font-size: 1.2rem;
    }

    @media (min-width: 700px){
        width: 70%;

        h2{
            font-size: 2rem;
        }
        p{
            font-size: 1.5rem;

            strong{
                font-size: 1.7rem;
            }
        }

        
    }
`

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    animation: ${contentApper} 1s linear;
    padding: 0 0.5rem;

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
    }

    a{
        color: white;
        text-decoration: underline;
    }

    @media (min-width: 700px) {
        span,a{
            font-size: 1.5rem;
        }
    }
`