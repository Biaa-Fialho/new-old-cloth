import styled from "styled-components" ;

export const DivGeralFooter = styled.div`
    /* flex-direction: row;
    align-items: end;
    align-self: center;
    display: block; */

    position: fixed;
    bottom: 0;

    height: 9vh;
    width: 100vw;
    z-index: 1;

    display: grid;
    grid-template-columns: 40vw 20vw 40vw;
    grid-template-rows: 9vh;
    grid-template-areas: 'DivOtherButtons1 DivPubishButton DivOtherButtons2';
`

export const DivOtherButtons1 = styled.div`
    grid-area: DivOtherButtons1;
    background-color:#C8FFA7;
    height: 7vh;
    bottom: 0;
    margin-top: 2.1vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 3vw;
`

export const DivOtherButtons2 = styled.div`
    grid-area: DivOtherButtons2;
    background-color:#C8FFA7;
    height: 7vh;
    bottom: 0;
    margin-top: 2.1vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 3vw;
`

export const DivPubishButton = styled.div`
    grid-area: DivPubishButton;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const ImgHome = styled.button`
    border: none;
    background-color: transparent;
`
export const ImgSearch = styled.button`
    border: none;
    background-color: transparent;
`
export const ImgPublish = styled.button`
    border: none;
    background-color: transparent;
`
export const ImgChatHome = styled.button`
    border: none;
    background-color: transparent;
`
export const ImgUser = styled.button`
    border: none;
    background-color: transparent;
`

export const ImgButtonsGeneral = styled.img`
    height: 5vh;
    /* width: 4vw; */
`

export const ImgButtonSearch = styled.img`
    height: 4.5vh;
`

export const  ImgButtonHome = styled.img`
    height: 6.5vh;
`

export const ImgButtonsPublish = styled.img`
    height: 11vh;
`

export const DivColored = styled.div`
    height: 10vh;
    background-color: #C8FFA7;
    z-index: 3;
    border-radius: 100px 100px 0px 0px;
`