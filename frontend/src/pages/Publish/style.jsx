import styled from "styled-components" ;

export const DivHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
`

export const ImgBoyPerfilContainer = styled.img`
    padding-bottom: 1vh;
    padding-left: 3vw;
    padding-top: 1.5vh;
    padding-right: 1vw;
`

export const UserName = styled.div`
    color: black;
    font-size: 25px;

    padding-left: 2vw;
    padding-top: 2vh;
`

export const ContainerGeralButton = styled.button`
    background-color: #faf9f6;

    display: grid;
    grid-template-columns: 300px 300px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;
`

export const SingleButton = styled.button`    
    background-color: #d3fabc;
    color: #0a1d00 ;

    width: 40vw;
    height: 5vh;

    margin-left: 13px;
    margin-bottom: 8px;
    margin-top: 8px;

    border-radius: 20px;
    border-color: transparent;
`