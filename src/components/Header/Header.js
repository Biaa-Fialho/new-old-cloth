import { DivImageBack, ImgBackContainer } from "./style"
import ImgBack from "../../assets/Back.svg"

function HeaderGeneral(){
    return(
        <>
            <DivImageBack>
                    <ImgBackContainer src={ImgBack} alt='Imagem de uma flecha de voltar'/>
            </DivImageBack>
        </>
    )
}

export default HeaderGeneral