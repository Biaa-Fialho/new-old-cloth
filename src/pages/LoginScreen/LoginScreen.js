import { MainLogin, DivForm, DivContentForm, LabelPassword, TitleContainer, ButtonLogin, Form01, LabelContainer, DivDontHaveAccount, ButtonCreateAccount} from './style'
// import LoginHeader from '../../components/LoginHeader/LoginHeader'
// import InputLogin from '../../components/InputLogin/InputLogin'

function LoginScreen() {
    return (
        <MainLogin>
            <DivForm>
                {/* <LoginHeader/> */}
                <DivContentForm>
                    <TitleContainer> Faça seu login no New Old Cloth </TitleContainer>
                    <Form01> 
                        <LabelContainer>Insira seu email</LabelContainer>
                        {/* <InputLogin/> */}
                        <LabelPassword>Insira sua senha</LabelPassword>
                        {/* <InputLogin/> */}
                        {/* <ButtonLogin onClick={goToHomePage} type="submit" value="Entrar"/> */}
                    </Form01>
                    <DivDontHaveAccount>
                        <p>Não possui cadastro?</p>
                        {/* <ButtonCreateAccount onClick={goToRegisterPage}>Criar conta</ButtonCreateAccount> */}
                    </DivDontHaveAccount>
                </DivContentForm>
            </DivForm>
        </MainLogin>
    )
}

export default LoginScreen


