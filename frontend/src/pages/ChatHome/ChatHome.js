import ChatAccont from "../../components/ChatAccont/ChatAccont"
import FooterB from "../../components/FooterBotton/FooterB"
import HeaderGeral from "../../components/Header/HeaderGeral"
import { DivClara, DivEscura } from "./style"


function ChatHome(){
    return(
        <>
        <HeaderGeral
            titulo='Chat'
        />
        <DivEscura>
            <DivClara>
                <ChatAccont/>
                <ChatAccont/>
                <ChatAccont/>
                <ChatAccont/>
                <ChatAccont/>
                <ChatAccont/>
                <ChatAccont/>
                <ChatAccont/>
                <ChatAccont/>
                <ChatAccont/>
                <ChatAccont/>
                <ChatAccont/>
                <ChatAccont/>
                <ChatAccont/>
            </DivClara>
        </DivEscura>

        <FooterB/>
        </>
        
    )
}
export default ChatHome