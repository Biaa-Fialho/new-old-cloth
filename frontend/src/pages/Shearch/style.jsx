import styled from "styled-components" ;
export const DivClara = styled.div`
    background-color: #efffe6;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2vh;

    width: 100vw;
    height: 90vh;

    padding-top: 2vh;


    border-top-left-radius: 30px;
    border-top-right-radius: 30px;

    z-index: 2;

    /* padding-bottom: 12vh; */
`

export const DivEscura = styled.div`
    background-color: #0a1d00;
`


export const GridContainer = styled.div`
    display: grid;
    flex-direction: column;
    grid-template-columns: 5vh 80vh;
    /* grid-template-rows: 10vw; */
    grid-template-areas: 'ImgLupaSearch InputSearch';
    width: 100vw;
`
export const InputSearch = styled.input`
    grid-area: InputSearch;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #A3D386;
    border: none;
    outline: none;
    border-radius: 30px;
    width: 85vw;
    height: 6vh;
    padding-left: 5vw;

    font-size: large;
`

export const ImgLupaSearch = styled.img`
    grid-area: ImgLupaSearch;
    margin-bottom: 1vh;
    margin-left: 1vw;
    margin-right: 2vw;
    margin-top: 1vh;
`

export const DivAccounts = styled.div`
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */

    margin-left: 16vw;
    margin-right: 2vw;

    width: 74vw;
    padding-bottom: 2vh ;
    background-color: #C8FFA7;

    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
`

export const DivInside = styled.div`
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */

    margin-left: 2vw;
    margin-right: 2vw;
    margin-top: 1vh;

    padding-left: 2vw;
    padding-top: 1.5vh;

    width: 70vw;
    height: 5vh;
    
    background-color: #efffe6;

    border-radius: 30px;
`
