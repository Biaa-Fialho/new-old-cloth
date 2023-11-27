import FooterB from "../../components/FooterBotton/FooterB"
import HeaderGeral from "../../components/Header/HeaderGeral"
import HeaderSeta from "../../components/Header/HeaderSeta"
import ImgCamera from "../../assets/ImgCamera2.svg"
import { ButtonSave, DivClara, DivEscura, DivHeader, DivImagens, DivInputSelect, ImgBoyPerfilContainer, ImgMedia, InputName, InputSelectFile, LabelContainer } from "./style"
import { useEffect, useState } from "react"
import SaveConfig from "../../components/SaveConfig/SaveConfig"
import axios from "axios"
import { baseUrl } from "../../services/api"
import ImgPerfil from "../../assets/perfilUsuario.png"
import { useNavigate } from "react-router-dom"

function  ConfAccont(){
    const userId = parseInt(localStorage.getItem("user"), 10)

    const navigate = useNavigate()

    // funcionalidade/hook do modal
    const[openSaveConfig, setOpenSaveConfig] = useState(false)

    const [image, setImage] = useState('');
    const [preview, setPreview] = useState('');
    const [userEditName, setEditUserName] = useState('');

    const handleInputChange = (e) => {
        setEditUserName(e.target.value);
      };

    useEffect(() => {
        // Define a imagem inicial.
        const initialImageUrl = ImgPerfil;
        setPreview(initialImageUrl);
    }, []); 

    function handleImageChange(e) {
        setImage(e.target.files[0]);
        setPreview(URL.createObjectURL(e.target.files[0]));
    }

    useEffect(() => {
        console.log('image', image);
    }, [image]);
    
    useEffect(() => {
        console.log('preview', preview);
    }, [preview]);

    const handleImageClick = () => {
        // Ativar click no input que está oculto.
        document.getElementById('imageInput').click();        
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
                            
        const userId = parseInt(localStorage.getItem("user"), 10)
                      
        let formData = new FormData();
        formData.append('userId', userId)
        formData.append('userEditName', userEditName)
        formData.append('file', image)

        axios.post(`${baseUrl}/user/update`, formData)
        .then(function (response) {
            console.log('Usuário editado com sucesso:', response.data);
            navigate('/account')
        })
        .catch(function (error) {
            console.error('Erro ao criar o post:', error);
        });
    };

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

                    <SaveConfig 
                        isOpen={openSaveConfig} 
                        setOpenSaveConfig={()=> setOpenSaveConfig(!openSaveConfig)}
                        saveEdit={handleSubmit}/>
                    
                    <DivInputSelect onClick={handleImageClick}>
                        <label htmlFor="imageInput">
                            <InputSelectFile 
                                type="file" 
                                name="image"
                                accept="image/*"
                                id="imageInput"
                                multiple={false}
                                onChange={handleImageChange}
                                />
                            <DivImagens>
                                <ImgMedia src={ImgCamera} alt="Imagem de uma camera minimalista" />
                                <ImgBoyPerfilContainer src={preview} alt="foto homem branco, com cabelo e barba castanho escuro, camiseta cinsa escura e fundo cinza claro " />
                            </DivImagens>
                        </label>
                    </DivInputSelect>
                    <LabelContainer>Nome
                        <InputName 
                            placeholder='Alterar nome de usuário' 
                            value={userEditName}
                            onChange={handleInputChange}
                            required/>
                    </LabelContainer>
                </DivClara>
            </DivEscura>


            <FooterB/>

        </>
    )
}
export default ConfAccont