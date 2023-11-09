import { ButtonCreateAccount, ButtonEnter, Cadastro, DivDontHaveAccount, DivGeral, DivTextPage, DivTitlePage } from "./style";
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
                    <DivTitlePage>Encontre sua roupa ideal</DivTitlePage>
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
                        <Cadastro>Não possui uma conta?</Cadastro>
                        <ButtonCreateAccount onClick={()=>navigate('/cadastro')}>Entre aqui</ButtonCreateAccount>
                </DivDontHaveAccount>
            </DivGeral>
        
        </>
    )
}

export default EnterPage