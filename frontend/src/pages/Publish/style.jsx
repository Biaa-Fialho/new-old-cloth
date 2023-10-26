import styled from "styled-components" ;

export const DivHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
`
export const DivClaraPublish = styled.di`
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

export const InputPicture = styled.input`
    width: 30vw;
    height: 10vh;

    background-color: #faf9f6;
`

export const InputLegend = styled.input`
    width: 30vw;
    height: 3vh;

    background-color: #faf9f6;
`

export default Texto = styled.p`
    color: #797c7b;
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