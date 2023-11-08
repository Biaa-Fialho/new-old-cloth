import { useNavigate } from "react-router-dom"
import { DivGeralFooter, DivColored, DivOtherButtons1, DivOtherButtons2, DivPubishButton, ImgChatHome, ImgHome, ImgPublish, ImgButtonHome, ImgButtonSearch, ImgSearch, ImgUser, ImgButtonsGeneral, ImgButtonsPublish } from "./style"
import Home from "../../assets/home.svg"
import Search from "../../assets/Search.svg"
import publish from "../../assets/publish.svg"
import chatHome from "../../assets/chatHome.svg"
import user from "../../assets/user.svg"


function FooterB(){
    const navigate = useNavigate()

    return(
            <DivGeralFooter>
                    <DivOtherButtons1>
                        <ImgHome onClick={()=>navigate('/home')}><ImgButtonHome src={Home} alt='imagem de uma casinha'/></ImgHome>
                        <ImgSearch src={Search} alt='imagem de uma lupa' onClick={()=>navigate('/search')}><ImgButtonSearch src={Search} alt='imagem de uma lupa'/> </ImgSearch>
                    </DivOtherButtons1>
                    <DivPubishButton>
                        <DivColored>
                            <ImgPublish onClick={()=>navigate('/publish')}><ImgButtonsPublish src={publish} alt='Imagem de um sinal de mais'/></ImgPublish>
                        </DivColored>
                    </DivPubishButton>
                    <DivOtherButtons2>
                        <ImgChatHome onClick={()=>navigate('/chatHome')}><ImgButtonsGeneral src={chatHome} alt='Imagem de uma flecha de voltar'/></ImgChatHome>
                        <ImgUser onClick={()=>navigate('/account')}><ImgButtonsGeneral src={user} alt='Imagem de perfil'/></ImgUser>
                    </DivOtherButtons2>
            </DivGeralFooter>
    )
}

export default FooterB