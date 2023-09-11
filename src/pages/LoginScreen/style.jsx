import styled from "styled-components" ;

export const MainLogin = styled.div`
    display: flex;
    // grid-template-columns: 50vw 50vw;
    // grid-template-rows: 100vh;
    // grid-template-areas: "DivForm ";
    font-family: 'Bona Nova', serif, 100vh;
    background-color: #faf9f6;
`

export const Form01 = styled.form`
    width: 40vw;
    height: 40vh;
    display: flex;
    flex-direction: column;
    gap: 2vh;
`

export const LabelPassword = styled.label`
    margin-top: 1vh;
    margin-left: 20px;
    padding-bottom: 10vh;

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
    border-radius: 8px;

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
    color: #faf9f6;
    border: 10px;
    border-color: #797c7b;
    border-radius: 8px;
    border-bottom: 5px;

    margin-top: 2vh;
    margin-bottom: 10vh;
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

    font-size: 25px;
    margin-top: 20px;
    margin-left: 20px;
    margin-bottom: 10px;
`

export const ButtonLogin = styled.button`
    color: white;
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
    margin-left: 50px;
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
    font-weight: bolder;

    margin-bottom: 1vh; 
    margin-top: 0;
    width: 10vw;
    height: 10vh;
`
