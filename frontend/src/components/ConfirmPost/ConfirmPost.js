import { useNavigate } from "react-router-dom"
import ImageClose from "../../assets/ButtonCloseX.svg"
import { ButtonCancel, ButtonSave, ButtonX, DivFormatar, DivGeralSelect, DivTextChose, GridContainer, ImgButtonX, ImgMedia, InputSelectFile, MessageInput } from "./style"


function ConfirmPost({ isOpen, setOpenConfirmPost, publishFunction, image, inputLegend }){

    const navigate = useNavigate()

    const handleButtonClick = () => {
        setOpenConfirmPost(true, image, inputLegend);
    };

    if(isOpen) {
        return(
            <DivFormatar>
                <DivGeralSelect>
                    <ButtonX onClick={()=>setOpenConfirmPost(false)}><ImgButtonX src={ImageClose} alt="imagem de um X"/></ButtonX>   
                    <DivTextChose>Deseja realizar a postagem?</DivTextChose>
                    <GridContainer>
                        <ButtonSave onClick={() => publishFunction(image, inputLegend)}>Salvar</ButtonSave>
                        <ButtonCancel onClick={()=>navigate('/publish')}> Cancelar </ButtonCancel>
                    </GridContainer>
                </DivGeralSelect>
            </DivFormatar>
            
        )
    }
}

export default ConfirmPost