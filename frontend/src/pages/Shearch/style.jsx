import styled from "styled-components" ;

export const DivGeral = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
`

export const DivClara = styled.div`
    background-color: #deffca;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2vh;

    width: 100vw;
    /* height: 150vh; */
    
    padding-top: 2vh;

    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
`

export const InputSearch = styled.input`
    background-color: #a3d386;
    width: 90vw;
    height: 6vh;
`

export const ImgSearch = styled.img`
    margin-bottom: 1vh;
    margin-left: 1vw;
`