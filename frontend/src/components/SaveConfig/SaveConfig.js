import { useNavigate } from "react-router-dom"
import ImageClose from "../../assets/ButtonCloseX.svg"
import { ButtonCancel, ButtonSave, ButtonX, DivGeralSelect, DivTextChose, GridContainer, ImgButtonX, ImgMedia, InputSelectFile, MessageInput } from "./style"


function SaveConfig({isOpen, setOpenSaveConfig, saveEdit}){

    const navigate = useNavigate()

    if(isOpen) {
        return(
            <DivGeralSelect>
                <ButtonX onClick={()=>setOpenSaveConfig(false)}><ImgButtonX src={ImageClose} alt="imagem de um X"/></ButtonX>   
                <DivTextChose>Deseja salvar suas alterações?</DivTextChose>
                <GridContainer>
                    <ButtonSave onClick={saveEdit}> Salvar </ButtonSave>
                    <ButtonCancel onClick={()=>navigate('/account')}> Cancelar </ButtonCancel>
                </GridContainer>
            </DivGeralSelect>
        )
    }
}

export default SaveConfig