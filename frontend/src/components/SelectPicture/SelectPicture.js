import ImageClose from "../../assets/ButtonCloseX.svg"
import ImgMediaSelect from "../../assets/media.svg"
import { ButtonX, DivGeralSelect, DivInputSelect, DivTextChose, ImgButtonX, ImgMedia, InputSelectFile, MessageInput } from "./style"


function SelectPicture({isOpen, setOpenSelectPicture}){

    if(isOpen) {
        return(
            <DivGeralSelect>

                <DivTextChose>Escolha sua foto</DivTextChose>

                <DivInputSelect>
                    <label htmlFor="file-input">
                        <InputSelectFile type="file" id="file-input"/>
                        <ImgMedia src={ImgMediaSelect} alt="Imagem de uma paisagem minimalista" />
                    </label>
                    <MessageInput>Media</MessageInput>
                </DivInputSelect>

                <ButtonX onClick={()=>setOpenSelectPicture(false)}><ImgButtonX src={ImageClose} alt="imagem de um X"/></ButtonX>   

            </DivGeralSelect>
        )
    }
}

export default SelectPicture
