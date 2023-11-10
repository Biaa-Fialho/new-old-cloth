import { useNavigate } from "react-router-dom"
import { DivGeralHeaderChat, DivHeader, DivImageBack, DivPerfil, ImgBackContainer, UserName } from "./style"
import ImgBack from "../../assets/Back.svg"
import ImgPerfil from "../../assets/ChatPerfil.svg"

function HeaderSeta(){

    const navigate = useNavigate()

    return(
        <DivGeralHeaderChat>
            <DivImageBack onClick={()=>navigate(-1)}>
                <ImgBackContainer src={ImgBack} alt='Imagem de uma flecha de voltar'/>
                <DivHeader>
                    <DivPerfil src={ImgPerfil} alt="imagem de um homem"/>
                    <UserName>Cleiton876</UserName>
                </DivHeader>
            </DivImageBack>
        </DivGeralHeaderChat>
        
    )
}

export default HeaderSeta