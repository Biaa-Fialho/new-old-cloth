import styled from "styled-components";

export const DivHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;

    height: 5vh;
    padding-bottom: 3vh;
    padding-left: 3vw;
`

export const DivPerfil = styled.img`

`

export const UserName = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    color: black;
    font-size: 25px;
    font-weight: bold;

    padding-left: 2vw;
    padding-top: 0vh;
    padding-bottom: 1vh;
`

export const DivColunm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    /* background-color: red; */

    width: 60vw;
`

export const MessageChat = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    color: #797C7B;
    font-size: 15px;

    padding-left: 8vw;
    padding-top: -10vh;
`

export const TimeMessage = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    color: #797C7B;
    font-size: 15px;

    padding-left: 3vw;
    padding-top: 0vh;
    width: 20vw;

    /* background-color: aquamarine; */
`

export const DivContent = styled.button`
    display: flex;
    flex-direction: row;

    padding-bottom: 1vh;

    background-color: transparent;
    border: none;
`