import styled from "styled-components" ;

export const DivGeralSelect = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
    position: fixed;
    bottom: 0;
    right: 0;

    width: 100vw;
    height: 28vh;

    background-color: #FFFFFF;
    border-radius: 25px 25px 0px 0px;
`

export const DivTextChose = styled.h2`
    font-family: Arial, Helvetica, sans-serif;
    color: black;
    font-weight: bold;
    font-size: 22px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    padding-bottom: 23vh;
    padding-right: 30vw;
`

export const ButtonX = styled.button`
    position: absolute;
    top: 2.5vh;
    left: 3.5vw;

    border: none;
    background-color: transparent;

    width: 4.5vw;
    height: 4.5vw;
`

export const ImgButtonX = styled.img`
    width: 100%;
    height: 100%;
`
export const DivInputSelect = styled.div`
    width: 15vw;
    height: 15vw;

    position: absolute;
    top: 10vh;
    left: 5vw;

    background-color: #F2F8F7;
    color: transparent;
    border-radius: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

`
export const InputSelectFile = styled.input`
    border-radius: 100%;
    border: none;
    color: transparent;
    opacity: 0;
`
export const ImgMedia = styled.img`
    width: 10vw;
    height: 10vw;

    position: absolute;
    top: 1.2vh;
    left: 2.2vw;
`
export const MessageInput = styled.h1`
    font-family: Arial, Helvetica, sans-serif;
    color: black;
    font-weight: bold;
    font-size: 24px;
    
    position: absolute;
    top: 1.8vh;
    left: 20vw;
`