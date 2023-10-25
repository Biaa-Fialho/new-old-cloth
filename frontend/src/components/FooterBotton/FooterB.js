import { DivGeralFooter, ImgChatHome, ImgHome, ImgPublish, ImgSearch, ImgUser } from "./style"
import Home from "../../assets/home"
import Search from "../../assets/Search"
import publish from "../../assets/publish"
import chatHome from "../../assets/chatHome"
import user from "../../assets/user"

function FooterB(){
    return(
        <DivGeralFooter>
            <ImgHome src={Home} alt='imagem de uma casinha'/>
            <ImgSearch src={Search} alt='imagem de uma lupa'/>
            <ImgPublish src={publish} alt='Imagem de um sinal de mais'/>
            <ImgChatHome src={chatHome} alt='Imagem de uma flecha de voltar'/>
            <ImgUser src={user} alt='Imagem de perfil'/>
        </DivGeralFooter>
    )
}

export default FooterB