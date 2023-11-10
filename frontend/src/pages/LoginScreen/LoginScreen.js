import { useNavigate } from 'react-router-dom'
import { MainLogin, DivForm, DivContentForm, LabelPassword, TitleContainer, ButtonLogin, Form01, LabelContainer, DivDontHaveAccount, ButtonCreateAccount, InputEmail, InputPassword, Paragrafo} from './style'
import HeaderGeneral from '../../components/Header/HeaderSeta'
// import LoginHeader from '../../components/LoginHeader/LoginHeader'
// import InputLogin from '../../components/InputLogin/InputLogin'


function LoginScreen() {
    const navigate = useNavigate()

    return (
        <>

            <HeaderGeneral/>

            <MainLogin>
            <DivForm>
                <DivContentForm>
                    <TitleContainer> Faça seu login no New Old Cloth </TitleContainer>
                    <Form01> 
                        <LabelContainer>Insira seu email
                            <InputEmail placeholder='' required/>
                        </LabelContainer>
                        <LabelPassword>Insira sua senha
                            <InputPassword placeholder='' required/>
                        </LabelPassword>
                        <LabelPassword>Confirme sua senha
                            <InputPassword placeholder='' required/>
                        </LabelPassword>

                        <ButtonLogin onClick={()=>navigate('/home')}>Login</ButtonLogin>
                    </Form01>
                    <DivDontHaveAccount>
                        <Paragrafo>Não possui cadastro?</Paragrafo>
                        <ButtonCreateAccount onClick={()=>navigate('/cadastro')}>Criar conta</ButtonCreateAccount>
                    </DivDontHaveAccount>
                </DivContentForm>
            </DivForm>
        </MainLogin>
        </>
        
    )
}

export default LoginScreen


