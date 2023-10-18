import { ButtonEnter, DivGeral, DivImageHanger, DivTitlePage, ImgHangerContainer } from "./style"
import ImgHanger from '../../assets/hanger.svg'
import { DivDontHaveAccount } from "../LoginScreen/style"
import { useNavigate } from "react-router-dom"

function FirstPage(){
    const navigate = useNavigate()

    const goToLogin = () =>{
        navigate('/login')
    }

    return(
        <>
            <DivGeral>
                <DivImageHanger>
                    <ImgHangerContainer src={ImgHanger} alt='Imagem de um cabide'/>
                </DivImageHanger>
                <DivTitlePage>
                    <p> New Old Cloth </p>
                </DivTitlePage>

                <DivDontHaveAccount>
                    <ButtonEnter onClick={goToLogin}>Entrar</ButtonEnter>
                </DivDontHaveAccount>
            </DivGeral>
        </>
    )
}

export default FirstPage