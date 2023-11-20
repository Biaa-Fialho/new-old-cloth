import styled from "styled-components" ;

export const DivFormatar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    /* position: absolute; */
`

export const DivGeralSelect = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;

    width: 70vw;
    height: 28vh;
    margin-left: 16vw;

    background-color: #c7f5a9;
    border-radius: 25px;

    z-index: 100;
`

export const DivTextChose = styled.h2`
    font-family: Arial, Helvetica, sans-serif;
    color: black;
    font-size: 18px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    padding-left: 13vw;
    padding-right: 4vw;
    padding-top: 8vh;
`

export const ButtonX = styled.button`
    position: absolute;
    top: 2.5vh;
    left: 2.5vw;

    border: none;
    background-color: transparent;

    width: 4.5vw;
    height: 4.5vw;
`

export const ImgButtonX = styled.img`
    width: 100%;
    height: 100%;
`

export const GridContainer = styled.div`
    /* background-color: purple; */
    display: grid;
    flex-direction: column;
    grid-template-columns: 12vh 12vh;
    grid-template-rows: 10vw;
    grid-template-areas: 'ButtonSave ButtonCancel';
    gap: 5vw;

    padding-top: 12vh;
    padding-bottom: 6vh;
`

export const ButtonSave = styled.button`
    grid-area: ButtonSave;
    background-color: #507937;
    color: #ffffff;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;

    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #648b4b;
    }
`

export const ButtonCancel = styled.button`
    grid-area: ButtonCancel;
    background-color: #507937;
    color: #ffffff;
    padding: 10px 20px;
    border: none;
    border-radius: 20px;

    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #648b4b;
    }
`