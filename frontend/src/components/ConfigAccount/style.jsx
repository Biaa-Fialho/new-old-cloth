import styled from "styled-components";

export const DivAlinhar = styled.div`
    padding-left: 40vw;
    z-index: 4;
    position: relative;

    margin-right: 30vw;
    margin-top: 0vh;
`

export const DivGeralConfig = styled.div`
    background-color: #0f2b00;

    position: absolute;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    width: 36vw;
    height: 17vh;

    border-radius: 20px;

    z-index: 1000;
`
export const DivClaraConfig = styled.div`
    background-color: #ffffff;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 20px;
    width: 32vw;
    height: 15vh;
    margin-left: 1vh;
`
export const DivButton = styled.div`
    padding-top: 1vh;
    padding-bottom: 1vh;
    padding-top: 1vh;
    width: 3.5vw;
    height: 3.5vh;
`
export const ButtonX = styled.button`
    position: absolute;
    top: 1.5vh;
    left: 4vw;
    padding-bottom: 1vh;

    border: none;
    background-color: transparent;

    width: 3.5vw;
    height: 3.5vh;
`
export const ImgButtonX = styled.img`
    width: 100%;
    height: 100%;

    border: none;
    background-color: transparent;

`
export const ButtonConfig = styled.button`
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    height: 10vh;

    border: transparent;
    background-color: transparent;

    /* border-top-right-radius: 20px;
    border-top-left-radius: 20px; */

    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #4e6640b2;
    }

`
export const ButtonExit = styled.button`
    width: 100%;
    height: 10vh;

    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    border: none;
    background-color: transparent;

    padding-bottom: 1vh;
    padding-left: 2vw;

    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #4E6640;
    }
`