import { InputPassword } from '../LoginScreen/style'
import { MainLogin, DivForm, DivContentForm, LabelPassword, TitleContainer, ButtonLogin, Form01, LabelContainer, LabelPasswordConfirm, InputLabelContainer, InputPasswordRegister, InputPasswordConfirm} from './style'
import  { useNavigate } from "react-router-dom"

function LoginScreen() {
    const navigate = useNavigate()

    const goToSelect = () =>{
        navigate('/Select')
    }

    return (
        <MainLogin>
            <DivForm>
                <DivContentForm>
                    <TitleContainer>Faça seu cadastro no New Old Cloth </TitleContainer>
                    <Form01> 
                        <LabelContainer>Insira seu email
                            <InputLabelContainer placeholder='' required/>
                        </LabelContainer>

                        <LabelPassword>Insira sua senha
                            <InputPasswordRegister placeholder='' required/>
                        </LabelPassword>

                        <LabelPasswordConfirm>Confirme sua senha
                            <InputPasswordConfirm placeholder='' required/>
                        </LabelPasswordConfirm>

                        <ButtonLogin onClick={goToSelect}>Entrar</ButtonLogin>
                    </Form01>
                </DivContentForm>
            </DivForm>
        </MainLogin>
    )
}

export default LoginScreen


