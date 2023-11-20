import { useNavigate } from "react-router-dom"
import ImageClose from "../../assets/ButtonCloseX.svg"
import { ButtonCancel, ButtonSave, ButtonX, DivFormatar, DivGeralSelect, DivTextChose, GridContainer, ImgButtonX, ImgMedia, InputSelectFile, MessageInput } from "./style"


function ConfirmPost({isOpen, setOpenConfirmPost}){

    const navigate = useNavigate()

    if(isOpen) {
        return(
            <DivFormatar>
                <DivGeralSelect>
                    <ButtonX onClick={()=>setOpenConfirmPost(false)}><ImgButtonX src={ImageClose} alt="imagem de um X"/></ButtonX>   
                    <DivTextChose>Deseja realizar a postagem?</DivTextChose>
                    <GridContainer>
                        <ButtonSave onClick={()=>navigate('/home')}> Salvar </ButtonSave>
                        <ButtonCancel onClick={()=>navigate('/publish')}> Cancelar </ButtonCancel>
                    </GridContainer>
                </DivGeralSelect>
            </DivFormatar>
            
        )
    }
}

export default ConfirmPost