import HeaderSeta from '../../components/Header/HeaderSeta'
import { MainLogin, TitleContainer, ButtonLogin, Form01, LabelContainer, LabelPasswordConfirm, DivForm, DivContentForm, Input1 } from './style'
import { useNavigate } from "react-router-dom"

function RegisterScreen() {
    const navigate = useNavigate()


    return (
        <>
            <HeaderSeta/>

            <MainLogin>
                <DivForm>
                <DivContentForm>
                <TitleContainer>Faça seu cadastro no New Old Cloth </TitleContainer>
                
                <Form01>
                    <LabelContainer>Insira seu email</LabelContainer>
                    <Input1 placeholder='' />

                    <LabelContainer>Insira sua senha</LabelContainer>
                    <Input1 placeholder='' />

                    <LabelPasswordConfirm>Confirme sua senha</LabelPasswordConfirm>
                    <Input1 placeholder='' />

                    <ButtonLogin onClick={() => navigate('/select')}>Entrar</ButtonLogin>
                </Form01>

                </DivContentForm>
                </DivForm>
            </MainLogin>
        </>
    )
}

export default RegisterScreen


