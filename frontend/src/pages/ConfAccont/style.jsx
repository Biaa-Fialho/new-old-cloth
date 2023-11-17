import styled from "styled-components";

import ImgBoyPerfil from "../../assets/BoyPerfilPhoto.svg"

export const DivClara = styled.div`
    background-color: #deffca;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2vh;

    width: 100vw;
    height: 90vh;
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
export const DivHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`
export const ButtonSave = styled.button`
    grid-area: ButtonSave;
    background-color: #A3D386;
    color: #ffffff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #507937;
    }

    width: 20vw;
    height: 4vh;
    margin-left: 60vw;
    margin-top: 0vh;
    margin-bottom: 0vh;
    border-radius: 20px;
`
export const DivInputSelect = styled.div`
    background-image: url(${ImgBoyPerfil});
    background-size: cover;
    opacity: 0.6;
    width: 25vw;
    height: 25vw;
    background-color: #797c7b7e;

    color: transparent;
    border-radius: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 25vw;
    max-height: 25vw;
    /* position: relative; */

    margin-left: 37vw;
`

export const InputSelectFile = styled.input`
    border-radius: 100%;
    border: none;
    color: transparent;
    opacity: 0;

    /* Alteração: Remova estas linhas */
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center; 
`

export const DivImagens = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const ImgMedia = styled.img`
    width: 12vw;
    height: 12vw;

    background-color: transparent;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
`
// export const ImgBoyPerfilContainer = styled.img`
//     width: 25vw;
//     height: 25vw;
//     max-width: 25vw;
//     max-height: 25vw;
//     position: relative;

//     z-index: 0;
// `
export const LabelContainer = styled.label`
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 3vh;
    color: #797c7b;
    font-weight: bold;
    font-size: large;

    margin-left: 20px;
`
export const InputName = styled.input`
    font-family: Arial, Helvetica, sans-serif;
    font-size: large;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: transparent;
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