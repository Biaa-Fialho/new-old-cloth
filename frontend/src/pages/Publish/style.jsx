import styled from "styled-components" ;

export const DivHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    padding-left: 3vw;
`

export const DivGeral = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    background-color: #0a1d00;
`

export const DivClara = styled.div`
    background-color: #deffca;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2vh;

    width: 100vw;
    /* max-height: 150vh; */
    
    padding-top: 2vh;


    border-top-left-radius: 30px;
    border-top-right-radius: 30px;

    z-index: 2;

    padding-bottom: 12vh;
`

export const DivClaraPublish = styled.div`
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

export const ImgBoyPublish = styled.img`
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

export const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const InputPicture = styled.input`
    width: 80vw;
    height: 40vh;

    background-color: #FFFFFF;

`

export const InputLegend = styled.input`
    width: 30vw;
    height: 3vh;

    background-color: #FFFFFF;
`

export const ContainerText = styled.p`
    color: #797c7b;
    font-size: medium;
    background-color: red;
`

export const ContainerGeralButton = styled.div`
    display: grid;
    grid-template-columns: 200px 200px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;
`

export const SingleButton = styled.button`    
    background-color: #A3D386;
    color: #0a1d00 ;

    width: 40vw;
    height: 5vh;

    margin-left: 13px;
    margin-bottom: 8px;
    margin-top: 8px;

    border-radius: 20px;
    border-color: transparent;
`