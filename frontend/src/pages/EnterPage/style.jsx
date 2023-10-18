import styled from "styled-components";

export const DivGeral = styled.div`
    background-color: #153b01;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 87vw;
    height: 85vh;
`
export const DivTitlePage = styled.div`
    font-family: 'Bona Nova', serif;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: #0d2600;
    font-size: 35px;
    margin-top: 1px;

`
export const DivTextPage = styled.div`
    font-family: 'Bona Nova', serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
export const ButtonEnter = styled.button`
    color: #faf9f6;
    background-color: #8ac06a;

    border: none;
    width: 60vw;
    height: 5vh;
    border-radius: 8px;
    // font-weight: bolder;
    margin-top: 10vh;
    margin-bottom: 0vh;

    // pseudo-selector: active, #507937;
`

export const DivDontHaveAccount = styled.div `
    margin-top: 25vh;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: #000e08;
`

export const ButtonCreateAccount = styled.button`
    border: none;

    color: #507937;
    background-color: #faf9f6;;
    font-weight: bolder;

    margin-bottom: 1vh; 
    margin-top: 0;
    width: 10vw;
    height: 10vh;
`
