import { useNavigate } from "react-router-dom"
import { DivGeralFooter, ImgChatHome, ImgHome, ImgPublish, ImgSearch, ImgUser } from "./style"
import Home from "../../assets/home.svg"
import Search from "../../assets/Search.svg"
import publish from "../../assets/publish.svg"
import chatHome from "../../assets/chatHome.svg"
import user from "../../assets/user.svg"


function FooterB(){
    const navigate = useNavigate()

    return(
        <DivGeralFooter>
            <ImgHome src={Home} alt='imagem de uma casinha' onClick={()=>navigate('/home')}/>
            <ImgSearch src={Search} alt='imagem de uma lupa' onClick={()=>navigate('/search')}/>
            <ImgPublish src={publish} alt='Imagem de um sinal de mais' onClick={()=>navigate('/publish')}/>
            <ImgChatHome src={chatHome} alt='Imagem de uma flecha de voltar' onClick={()=>navigate('/chatHome')}/>
            <ImgUser src={user} alt='Imagem de perfil' onClick={()=>navigate('/account')}/>
        </DivGeralFooter>
    )
}

export default FooterB