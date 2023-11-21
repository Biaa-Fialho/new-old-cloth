import ImageClose from "../../assets/ButtonCloseX.svg"
import ImgMediaSelect from "../../assets/media.svg"
import { ButtonX, DivGeralSelect, DivInputSelect, DivTextChose, ImgButtonX, ImgMedia, InputSelectFile, MessageInput } from "./style"
function SelectPicture({ isOpen, setOpenSelectPicture, setSelectedImage }) {
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setSelectedImage(selectedFile);
        setOpenSelectPicture(false); // Fecha o modal após selecionar a imagem
    };

    if (isOpen) {
        return (
            <DivGeralSelect>
                <DivTextChose>Escolha sua foto</DivTextChose>

                <DivInputSelect>
                    <label htmlFor="file-input">
                        <input
                            type="file"
                            id="file-input"
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                        />
                        <div style={{ position: 'relative' }}>
                            <img
                                src={ImgMediaSelect}
                                alt="Imagem de uma paisagem minimalista"
                                onClick={() => document.getElementById('file-input').click()}
                                style={{ cursor: 'pointer' }}
                            />
                            <span style={{ position: 'absolute', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
                                Selecione uma imagem
                            </span>
                        </div>
                    </label>
                    <MessageInput>Media</MessageInput>
                </DivInputSelect>

                <ButtonX onClick={() => setOpenSelectPicture(false)}>
                    <ImgButtonX src={ImageClose} alt="imagem de um X" />
                </ButtonX>
            </DivGeralSelect>
        );
    } else {
        return null; // Retorna null se não estiver aberto
    }
}

export default SelectPicture
