import ImageClose from "../../assets/ButtonCloseX.svg"
import ImgMediaSelect from "../../assets/media.svg"
import { ButtonX, DivGeralSelect, DivInputSelect, DivTextChose, ImgButtonX, ImgMedia, InputSelectFile, MessageInput } from "./style"

function handleFileChange(event) {
    const selectedFile = event.target.files[0];
    // Faça algo com o arquivo selecionado, como enviar para o servidor ou processar localmente.
    console.log(selectedFile);
}

function SelectPicture({ isOpen, setOpenSelectPicture, setSelectedImage }) {
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setSelectedImage(selectedFile);
    };

    if (isOpen) {
        return (
            <DivGeralSelect>

                <DivTextChose>Escolha sua foto</DivTextChose>

                <DivInputSelect>
                    {/* <input type="file" id="file-input"/> */}
                    {/* <label htmlFor="file-input">
                        <InputSelectFile type="file" id="file-input"/>
                        <ImgMedia src={ImgMediaSelect} alt="Imagem de uma paisagem minimalista" />
                    </label> */}
                  <label htmlFor="file-input">
                      <input type="file" id="file-input" onChange={handleFileChange} style={{ display: 'none' }} />
                      <div style={{ position: 'relative' }}>
                          <img
                              src={ImgMediaSelect}
                              alt="Imagem de uma paisagem minimalista"
                              onClick={() => document.getElementById('file-input').click()}
                              style={{ cursor: 'pointer' }}
                          />
                          <span style={{ position: 'absolute', top: '50%', left: '10vw', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
                              Selecione uma imagem
                          </span>
                      </div>
                  </label>
                    <MessageInput>Media</MessageInput>
                </DivInputSelect>

                <ButtonX onClick={()=>setOpenSelectPicture(false)}><ImgButtonX src={ImageClose} alt="imagem de um X"/></ButtonX>   

            </DivGeralSelect>
        )
    }
}

export default SelectPicture
