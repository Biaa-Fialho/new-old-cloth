import styled from "styled-components" ;

export const DivGeral = styled.div`
    background-color: #faf9f6; 
    width: 100vw;
    height: 100vh;
`

export const DivTextSelect = styled.div`
    background-color: #faf9f6; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 2vh;
    margin-bottom: 3vh;
`
export const DivFontTitle = styled.div`
    font-family: 'Bona Nova', serif, 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: #0d2600;
    font-size: 20px;
    margin-top: 1px;

    background-color: #faf9f6;

`

export const containerGeralButton = styled.button`
    background-color: #faf9f6;

    display: grid;
    grid-template-columns: 300px 300px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;

    padding-left: 20vw;
`

export const SingleButton = styled.button`    
    background-color: #d3fabc;
    color: #0a1d00 ;

    width: 40vw;
    height: 5vh;

    margin-left: 28px;
    margin-bottom: 8px;
    margin-top: 8px;

    border-radius: 20px;
    border: none;

    cursor: pointer;
    transition: background-color 0.3s ease;

    /* &:hover {
        background-color: #A3D386;
    } */
`

export const SelectButton = styled.button`
    color: #0a1d00 ;
    background-color: #a3d386;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border: none;
    width: 60vw;
    height: 5vh;
    border-radius: 8px;
    // font-weight: bolder;

    margin-top: 4vh;
    margin-left: 80px;
`