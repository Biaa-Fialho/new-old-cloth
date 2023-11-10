import { DivColunm, DivHeader, DivContent, DivPerfil, MessageChat, TimeMessage, UserName } from "./style"
import ImgPerfil from "../../assets/ChatPerfil.svg"
import { useNavigate } from "react-router-dom"

function ChatAccont(){
    const navigate = useNavigate()
    return(
        <DivContent onClick={() => navigate('/Chat')}>
        <DivHeader>
            <DivPerfil src={ImgPerfil} alt="imagem de um homem"/>
        </DivHeader>
        <DivColunm>
            <UserName>Cleiton876</UserName>
            <MessageChat>Oii, aquela calça ainda...</MessageChat>
        </DivColunm>
        <TimeMessage>2 min ago</TimeMessage>
        </DivContent>
    )
}

export default ChatAccont