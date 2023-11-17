import FooterB from "../../components/FooterBotton/FooterB"
import HeaderGeral from "../../components/Header/HeaderGeral"
import HeaderSeta from "../../components/Header/HeaderSeta"
import ImgCamera from "../../assets/ImgCamera2.svg"
// import ImgBoyPerfil from "../../assets/BoyPerfilPhoto.svg"
import { ButtonSave, DivClara, DivEscura, DivHeader, DivImagens, DivInputSelect, GridContainer, ImgMedia, InputName, InputSelectFile, LabelContainer } from "./style"
import { useState } from "react"
import SaveConfig from "../../components/SaveConfig/SaveConfig"

function  ConfAccont(){
    // funcionalidade do modal
    const[openSaveConfig, setOpenSaveConfig] = useState(false)

    return(
        <>
            <HeaderGeral 
                titulo='Configurações'
            />
            <DivEscura>
                <DivClara>
                    <DivHeader>
                        <HeaderSeta/>
                        <ButtonSave onClick={()=> setOpenSaveConfig(true)}>Salvar</ButtonSave>
                    </DivHeader>

                    <SaveConfig isOpen={openSaveConfig} setOpenSaveConfig={()=> setOpenSaveConfig(!openSaveConfig)}/>
                    
                    <DivInputSelect>
                        <label htmlFor="file-input">
                            <InputSelectFile type="file" id="file-input"/>
                            <DivImagens>
                                <ImgMedia src={ImgCamera} alt="Imagem de uma camera minimalista" />
                                {/* <ImgBoyPerfilContainer src={ImgBoyPerfil} alt="foto homem branco, com cabelo e barba castanho escuro, camiseta cinsa escura e fundo cinza claro " /> */}
                            </DivImagens>
                        </label>
                    </DivInputSelect>
                    <LabelContainer>Nome
                        <InputName placeholder='Alterar nome de usuário' required/>
                    </LabelContainer>
                </DivClara>
            </DivEscura>


            <FooterB/>

        </>
    )
}
export default ConfAccont