import FooterB from "../../components/FooterBotton/FooterB"
import HeaderGeral from "../../components/Header/HeaderGeral"
import ImgBoyPerfil from "../../assets/BoyPerfilPhoto.svg"
import { DivHeader, ContainerGeralButton, SingleButton, UserName, InputLegend,  ContainerText, DivGeral, ImgBoyPublish, DivClara, DivInput, ButtonPicture } from "./style"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import SelectPicture from "../../components/SelectPicture/SelectPicture"

function Publish() {

    // funcionalidade do modal
    const[openSelectPicture, setOpenSelectPicture] = useState(false)

    return (
        <>
            <HeaderGeral
                titulo = "Publicar"
            />
            <DivGeral>
                <DivClara>
                <DivHeader>
                    <ImgBoyPublish src={ImgBoyPerfil} alt="foto homem branco, com cabelo e barba castanho escuro, camiseta cinsa escura e fundo cinza claro " />
                    <UserName>joao036</UserName>
                </DivHeader>

                <DivInput>
                    <ButtonPicture onClick={()=> setOpenSelectPicture(true)}>Adicionar imagem</ButtonPicture>
                
                    <InputLegend type="text" placeholder="Adicionar legenda"/>

                </DivInput>

                <SelectPicture isOpen={openSelectPicture} setOpenSelectPicture={()=> setOpenSelectPicture(!openSelectPicture)}/>

                <ContainerText>Adicionar descrição</ContainerText>
                
                <ContainerGeralButton>
                
                    <SingleButton>Preto</SingleButton>
                    <SingleButton>Colorido</SingleButton>
                    <SingleButton>Jeans</SingleButton>
                    <SingleButton>Calça</SingleButton>
                    <SingleButton>Verão</SingleButton>
                    <SingleButton>Inverno</SingleButton>
                    <SingleButton>Saias</SingleButton>
                    <SingleButton>Feminino</SingleButton>
                    <SingleButton>Masculino</SingleButton>
                    <SingleButton>Gênero neutro</SingleButton>
                    <SingleButton>Vestidos</SingleButton>
                    <SingleButton>Pijamas</SingleButton>
                    <SingleButton>Camisetas</SingleButton>
                    <SingleButton>Camisas</SingleButton>
                    <SingleButton>Cintos</SingleButton>
                    <SingleButton>Moletom</SingleButton>
                    <SingleButton>Tênis</SingleButton>
                    <SingleButton>Botas</SingleButton>
                    <SingleButton>Sapatos</SingleButton>
                    <SingleButton>Sandálias</SingleButton>
                    <SingleButton>Bolsas</SingleButton>
                    <SingleButton>Mochilas</SingleButton>
                  
                </ContainerGeralButton>

                <FooterB/>

                </DivClara>

            <FooterB/>

            </DivGeral>
        </>
    )
}
export default Publish