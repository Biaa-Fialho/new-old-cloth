import styled from "styled-components";

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
export const LabelContainer = styled.label`
    font-family: Arial, Helvetica, sans-serif;
    margin-top: 8vh;
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