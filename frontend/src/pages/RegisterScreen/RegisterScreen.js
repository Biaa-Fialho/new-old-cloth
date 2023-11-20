import { useState } from 'react'
import HeaderSeta from '../../components/Header/HeaderSeta'
import { MainLogin, TitleContainer, ButtonLogin, Form01, LabelContainer, LabelPasswordConfirm, DivForm, DivContentForm, Input1 } from './style'
import { useNavigate } from "react-router-dom"
import { baseUrl } from '../../services/api'
import axios from 'axios'

function RegisterScreen() {
    const navigate = useNavigate()

    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [confirmSenha, setConfirmSenha] = useState()

    const cadastro = ()=>{
        if(confirmSenha !== senha){
            alert("As senhas não coincidem") 
        }
        else{
            const formData ={
                nome : nome, 
                email : email,
                senha : senha 
            }

            axios.post(`${baseUrl}/user/create`, formData)
                .then(function (response) {
                    alert("Cadastro realizado com sucesso")
                    navigate('/login')
                })
                .catch(function (error) {
                    alert("Erro")
                    console.log(error)
                });
        }
    }



    return (
        <>
            <HeaderSeta/>

            <MainLogin>
                <DivForm>
                <DivContentForm>
                <TitleContainer>Faça seu cadastro no New Old Cloth </TitleContainer>
                
                <Form01>
                    <LabelContainer>Insira seu nome </LabelContainer>
                    <Input1 placeholder='' onChange={(e)=>setNome(e.target.value)}/>

                    <LabelContainer>Insira seu email</LabelContainer>
                    <Input1 placeholder=''  onChange={(e)=>setEmail(e.target.value)}/>

                    <LabelContainer>Insira sua senha</LabelContainer>
                    <Input1 placeholder=''  onChange={(e)=>setSenha(e.target.value)} type='password'/>

                    <LabelPasswordConfirm>Confirme sua senha</LabelPasswordConfirm>
                    <Input1 placeholder=''  onChange={(e)=>setConfirmSenha(e.target.value)} type='password'/>

                    <ButtonLogin onClick={cadastro} type="button" >Entrar</ButtonLogin>
                </Form01>

                </DivContentForm>
                </DivForm>
            </MainLogin>
        </>
    )
}

export default RegisterScreen


