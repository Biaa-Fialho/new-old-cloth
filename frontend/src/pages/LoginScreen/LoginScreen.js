import { useNavigate } from 'react-router-dom'
import { MainLogin, DivForm, DivContentForm, LabelPassword, TitleContainer, ButtonLogin, Form01, LabelContainer, DivDontHaveAccount, ButtonCreateAccount, InputEmail, InputPassword, Paragrafo} from './style'
import HeaderGeneral from '../../components/Header/HeaderSeta'
import { useState } from 'react'
// import LoginHeader from '../../components/LoginHeader/LoginHeader'
// import InputLogin from '../../components/InputLogin/InputLogin'
import axios from 'axios'
import { baseUrl } from '../../services/api'


function LoginScreen() {
    const navigate = useNavigate()
    
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [confirmSenha, setConfirmSenha] = useState()

    const login = ()=>{
        if(confirmSenha !== senha){
            alert("As senhas não coincidem") 
        }
        else{
            const formData ={
                email : email,
                senha : senha 
            }

            axios.post(`${baseUrl}/auth/login`, formData)
            .then(function (response) {
                localStorage.setItem('user', response.data.data[0].user_id)
                localStorage.setItem('token', response.data.data[0].token)
                alert("Login realizado com sucesso")
                navigate('/home')

                console.log('$$$$$$$$$$$4', response)
            })
            .catch(function (error) {
                alert("Erro")
                console.log(error)
            });
        }
    }

    return (
        <>

            <HeaderGeneral/>

            <MainLogin>
            <DivForm>
                <DivContentForm>
                    <TitleContainer> Faça seu login no New Old Cloth </TitleContainer>
                    <Form01> 
                        <LabelContainer>Insira seu email
                            <InputEmail placeholder='' required onChange={(e)=>setEmail(e.target.value)}/>
                        </LabelContainer>
                        <LabelPassword>Insira sua senha
                            <InputPassword placeholder='' required onChange={(e)=>setSenha(e.target.value)} type='password'/>
                        </LabelPassword>
                        <LabelPassword>Confirme sua senha
                            <InputPassword placeholder='' required onChange={(e)=>setConfirmSenha(e.target.value)} type='password'/>
                        </LabelPassword>

                        <ButtonLogin onClick={login} type="button">Login</ButtonLogin>
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


