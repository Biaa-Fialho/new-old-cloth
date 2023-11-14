import styled from "styled-components";

export const DivClara = styled.div`
    background-color: #deffca;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
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
    align-items: flex-start;
    justify-content: center;
    gap: 2vh;

    width: 100vw;
    /* max-height: 150vh; */
    
    padding-top: 2vh;
`
export const DivImg = styled.img`

`
export const DivTextName = styled.h1`

`

export const GridContainer = styled.div`
    background-color: purple;
    display: grid;
    grid-template-columns: 10.5vh 10.5vh 10.5vh;
    grid-template-rows: 25vw;
    grid-template-areas: 'DivSeguidor DivSeguindo DivPublicação';
`
export const DivSeguidor = styled.div`
    grid-area: DivSeguidor;
    background-color: red;
`
export const DivSeguindo = styled.div`
    grid-area: DivSeguindo;
    background-color: aquamarine;
`
export const DivPublicação = styled.div`
    grid-area: DivPublicação;
    background-color: blue;
`