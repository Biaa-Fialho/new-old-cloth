import { ButtonCreateAccount, ButtonEnter, DivDontHaveAccount, DivGeral, DivTextPage, DivTitlePage } from "./style";
import { useNavigate } from "react-router-dom"


function EnterPage(){

    const navigate = useNavigate()

    const goToLogin = () =>{
        navigate('/login')
    }

    return(
        <>
        
            <DivGeral>
                <DivTitlePage>
                    <h1>Encontre sua roupa ideal</h1>
                </DivTitlePage>
                <DivTextPage>
                    <p>O app certo para você encontrar
                     roupas incríveis  e ajudar ao 
                     meio ambiente </p>
                </DivTextPage>
                <DivDontHaveAccount>
                    <ButtonEnter onClick={goToLogin}>Entrar</ButtonEnter>
                </DivDontHaveAccount>
                <DivDontHaveAccount>
                        <p>Não possui cadastro?</p>
                        <ButtonCreateAccount onClick={()=>navigate('/cadastro')}>Criar conta</ButtonCreateAccount>
                </DivDontHaveAccount>
            </DivGeral>
        
        </>
    )
}

export default EnterPage