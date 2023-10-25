import { useNavigate } from "react-router-dom"
import { DivImageBack, ImgBackContainer } from "./style"
import ImgBack from "../../assets/Back.svg"

function HeaderSeta(){

    const navigate = useNavigate()

    return(
        <header>
            <DivImageBack onClick={()=>navigate(-1)}>
                    <ImgBackContainer src={ImgBack} alt='Imagem de uma flecha de voltar'/>
            </DivImageBack>
        </header>
    )
}

export default HeaderSeta