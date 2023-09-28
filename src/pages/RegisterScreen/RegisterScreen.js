import HeaderGeneral from '../../components/Header/Header'
import { MainLogin, TitleContainer, ButtonLogin, Form01, LabelContainer, LabelPasswordConfirm, DivForm, DivContentForm } from './style'
import { useNavigate } from "react-router-dom"

function RegisterScreen() {
    const navigate = useNavigate()


    return (
        <>
            <HeaderGeneral/>

            <MainLogin>
                <DivForm>
                <DivContentForm>
                <TitleContainer>Faça seu cadastro no New Old Cloth </TitleContainer>
                
                <Form01>
                    <LabelContainer>Insira seu email</LabelContainer>
                    <input placeholder='' />

                    <LabelContainer>Insira sua senha</LabelContainer>
                    <input placeholder='' />

                    <LabelPasswordConfirm>Confirme sua senha</LabelPasswordConfirm>
                    <input placeholder='' />

                    <ButtonLogin onClick={() => navigate('/select')}>Entrar</ButtonLogin>
                </Form01>

                </DivContentForm>
                </DivForm>
            </MainLogin>
        </>
    )
}

export default RegisterScreen


