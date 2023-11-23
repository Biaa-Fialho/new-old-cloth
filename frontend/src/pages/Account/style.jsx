import styled from "styled-components";

export const DivClara = styled.div`
    background-color: #deffca;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2vh;

    width: 100vw;
    /* max-height: 150vh; */
    
    padding-top: 2vh;


    border-top-left-radius: 30px;
    border-top-right-radius: 30px;

    z-index: 2;

    padding-bottom: 12vh;
`

export const DivEscura = styled.div`
    background-color: #0a1d00;
`

export const DivHeaderAccount = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 50vw;
    height: 20vh;
    
    padding-top: -5vh;
`
export const DivImg = styled.img`
    height: 30vh;
    width: 40vw;

    padding-bottom: 0vh;
`
export const DivTextName = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    font-size: 23px;
    font-weight: lighter;

    padding-top: 0vh;
`
export const DivButtonConfig =styled.div`
    padding-left: 80vw;
`
export const ButtonConfig = styled.button`
    background-color: transparent;
    border: none;
    padding-top: 1vh;
`
export const ImgButtonConfig = styled.img`
    width: 2vw;
    height: 4vh;
`
export const GridContainer = styled.div`
    /* background-color: purple; */
    display: grid;
    flex-direction: column;
    grid-template-columns: 10.5vh 11vh 10.5vh;
    grid-template-rows: 25vw;
    grid-template-areas: 'DivSeguidor DivSeguindo DivPublicação';
    gap: 5vw;
`
export const DivSeguidor = styled.div`
    grid-area: DivSeguidor;
    /* background-color: red; */
    font-family: Arial, Helvetica, sans-serif;
    font-size: 22px;

    padding-top: 2vh;
`
export const DivSeguindo = styled.div`
    grid-area: DivSeguindo;
    /* background-color: aquamarine; */
    font-family: Arial, Helvetica, sans-serif;
    font-size: 22px;

    padding-top: 2vh;
    padding-left: 1vw;
`
export const DivPublicação = styled.div`
    grid-area: DivPublicação;
    /* background-color: blue; */
    font-family: Arial, Helvetica, sans-serif;
    font-size: 22px;

    padding-top: 2vh;
`
export const DivNumero = styled.div`
    align-items: center;
    justify-content: center;
    padding-left: 9vw;
    padding-bottom: 1.5vh;
`
export const DivNumeroSeg = styled.div`
    align-items: center;
    justify-content: center;
    padding-left: 8vw;
    padding-bottom: 1.5vh;
`
export const DivNumeroPubli = styled.div`
    align-items: center;
    justify-content: center;
    padding-left: 10.5vw;
    padding-bottom: 1.5vh;
`