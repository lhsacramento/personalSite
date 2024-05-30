import {styled} from "styled-components";

export const MainContainer = styled.div`
    position: fixed;
    left: 2rem;
    right: 2rem;
    top: 2rem;
    bottom: 2rem;
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
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 1rem;
    gap: 1rem;
    height: 100%;
    justify-content: space-between;
`

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.7rem;

    button{
        width: fit-content;
        height: fit-content;
        background-color: transparent;
        color: white;
        border: none;
        cursor: pointer;
        font-family: roboto;
        font-size: 1rem;
    }
`

export const HomeContent = styled.div`

    p{
        height: 100%;
        color: white;
        font-size: 1rem;
        word-spacing: 0.5rem;
        line-height: 1.5rem;
        text-align: end;
        display: flex;
        flex-direction: column;
        justify-content: end;
        max-width: 16rem;
    }
`

export const ButtonMenu = styled.button`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover{
        font-weight: bold;
        scale: 1.1;
    }
`

export const SelectedIndicator = styled.div`
   height : 0.8rem;
   width: 0.8rem;
   background-color: white;
   border-radius: 9999px;
`