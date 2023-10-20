import styled from "styled-components" ;

export const MainLogin = styled.div`
    display: flex;
    /* flex-direction: column;
    align-items: left;
    justify-content:left; */
    // grid-template-columns: 50vw 50vw;
    // grid-template-rows: 100vh;
    // grid-template-areas: "DivForm ";
    font-family: 'Bona Nova', serif;
    background-color: #faf9f6;
    margin-top: -6vh;
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
    margin-top: 4vh;
    margin-left: 20px;

    color: #797c7b;
`
export const InputPasswordRegister = styled.input`
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

export const LabelPasswordConfirm = styled.label`
    margin-top: 1vh;
    margin-left: 20px;
    padding-top: 2vh;

    color: #797c7b;
`

export const Input1 = styled.input`
    font-size: large;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #faf9f6;
    border: 1px solid #797c7b;
    border-color: #797c7b;
    /* border-radius: 8px; */
    outline: none;
    border: none;
    border-bottom: 1px solid #797c7b;

    margin-top: 0vh;
    margin-left: 5vw;
    margin-bottom: 0vh;
    padding-top: 2vh;
    width: 60vw;
    height: 100vh;
`


export const LabelContainer = styled.label`
    margin-top: 1vh;
    margin-bottom: 1;
    padding-top: 2vh;

    color: #797c7b;

    margin-left: 20px;
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

// export const SubTitleContainer = styled.p`
//     margin-bottom: 9vh;
//     line-height: 5vh;
// `

export const TitleContainer = styled.h1`
    color: #000e08;
    width: 55vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-size: 25px;
    margin-top: -180px;
    margin-left: 30px;
    margin-bottom: 30px;
`

export const ButtonLogin = styled.button`
    color: white;
    font-size: large;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding-bottom: 20px;

    background-color: #8ac06a;
    border: none;
    border-radius: 8px;

    width: 60vw;
    height: 8vh;
    margin-top: 10vh;
    margin-left: 80px;
    padding-top: 2vh;

    /* &: focus{
        border-color: #000000;
        outline: 2px solid #000000 ;
    } */
`
