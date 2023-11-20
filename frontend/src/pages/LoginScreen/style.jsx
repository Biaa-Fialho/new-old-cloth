import styled from "styled-components" ;

export const MainLogin = styled.div`
    display: flex;
    // grid-template-columns: 50vw 50vw;
    // grid-template-rows: 100vh;
    // grid-template-areas: "DivForm ";
    font-family: Arial, Helvetica, sans-serif;
    background-color: #faf9f6;
    margin-top: -7vh;
    width: 100vw;
    height: 100vh;
`

export const Form01 = styled.form`
    width: 40vw;
    height: 40vh;
    display: flex;
    flex-direction: column;
    gap: 1vh;

`

export const LabelPassword = styled.label`
    margin-top: 1vh;
    margin-left: 20px;
    /* padding-bottom: 10vh; */

    color: #797c7b;
`

export const LabelContainer = styled.label`
    margin-top: 8vh;
    color: #797c7b;

    margin-left: 20px;
`
export const InputEmail = styled.input`
    font-size: large;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #faf9f6;
    border: 10px;
    border-color: #797c7b;
    /* border-radius: 8px; */
    outline: none;
    border: none;
    border-bottom: 1px solid #797c7b;

    margin-top: 2vh;
    width: 80vw;
    height: 5vh;
`
export const InputPassword = styled.input`
    font-size: large;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #faf9f6;
    border: 10px;
    border-color: #797c7b;
    /* border-radius: 8px; */
    outline: none;
    border: none;
    border-bottom: 1px solid #797c7b;

    /* margin-top: 2vh; */
    width: 80vw;
    height: 5vh;
`
export const DivForm = styled.div`
    grid-area: "DivForm";
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const DivContentForm = styled.div`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const TitleContainer = styled.div`
    color: #000e08;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-size: 20px;
    margin-top: 80px;
    margin-left: 45px;
    margin-bottom: 10px;
    font-weight: bold;
`

export const ButtonLogin = styled.button`
    /* color: white;
    font-size: large;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #8ac06a;
    border: none;
    border-radius: 8px;

    width: 60vw;
    height: 50vh;
    margin-top: 0vh;
    margin-left: 50px; */

    color: #f0ffe7;
    font-weight: bold;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-bottom: 20px;

    background-color: #8ac06a;
    border: none;
    border-radius: 15px;
    font-size: 18px;

    width: 60vw;
    height: 8vh;
    margin-top: 10vh;
    margin-left: 80px;
    padding-top: 2vh;
`

export const DivDontHaveAccount = styled.div `
    margin-top: 25vh;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: #000e08;
`

export const Paragrafo = styled.p`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding-left: 10vw;
`

export const ButtonCreateAccount = styled.button`
    border: none;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    color: #507937;
    background-color: #faf9f6;;
    font-weight: bolder;

    width: 10vw;
    height: 10vh;
    padding-left: 10vw;
`
