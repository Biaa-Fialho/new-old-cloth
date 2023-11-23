import React, { useEffect, useState } from "react";
import FooterB from "../../components/FooterBotton/FooterB";
import HeaderGeral from "../../components/Header/HeaderGeral";
import ImgBoyPerfil from "../../assets/BoyPerfilPhoto.svg";
import { DivHeader, ContainerGeralButton, SingleButton, UserName, InputLegend, ContainerText, DivGeral, ImgBoyPublish, DivClara, DivInput, ButtonPicture, TextImg, ButtonSave } from "./style";
// import { useNavigate } from "react-router-dom";
import SelectPicture from "../../components/SelectPicture/SelectPicture";
import ConfirmPost from "../../components/ConfirmPost/ConfirmPost";
import { baseUrl } from "../../services/api";
import axios from "axios";

function Publish() {
    // funcionalidade do modal
    const [openSelectPicture, setOpenSelectPicture] = useState(false);
    const[openConfirmPost, setOpenConfirmPost] = useState(false);
    const [image, setImage] = useState('');
    const [preview, setPreview] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const images = 'http://localhost:3008/uploads/'
    const [userData, setUserData] = useState('');

    const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
      setSelectedImage(selectedFile);
      setImage(selectedFile); // Adicione esta linha para definir o estado image
    }

    useEffect(() => {
      console.log('image', image);
    }, [image]);
    
    useEffect(() => {
      console.log('-------------preview', preview);
    }, [preview]);
  
    const handleSubmit = async () => {
      try {
        let formData = new FormData();
        formData.append('userId', parseInt(localStorage.getItem('user'), 10));
        formData.append('file', image);
    
        axios.post(`${baseUrl}/post/create`, formData)
        .then(function (response) {
        console.log('Post criado com sucesso:', response.data);
        })
        .catch(function (error) {
          alert("Erro")
          console.log(error)
      });
      } catch (error) {
        console.error('Erro ao criar o post:', error);
      }
    };
    
    const handleButtonClick = () => {
      setOpenConfirmPost(true, image, InputLegend);
    };
    
    const handleImageClick = () => {
      // Ativar click no input que está oculto.
      const inputElement = document.getElementById('imageInput');
      if (inputElement) {
        inputElement.click();
      }
    };
  
    return (
      <>
        <HeaderGeral titulo="Publicar" />
        <DivGeral>
          <DivClara>
            <DivHeader>
              <ImgBoyPublish src={ImgBoyPerfil} alt="foto homem branco, com cabelo e barba castanho escuro, camiseta cinsa escura e fundo cinza claro " />
              <UserName>{userData.user_name}</UserName>
              <ButtonSave onClick={handleButtonClick}>Salvar</ButtonSave>
            </DivHeader>

            <ConfirmPost 
                isOpen={openConfirmPost}
                setOpenConfirmPost={() => setOpenConfirmPost(false)}
                publishFunction={handleSubmit}
                image={image}
                inputLegend={InputLegend}/>

            <DivInput onClick={handleImageClick}>
              <label htmlFor="file-input">
                <input
                  type="file"
                  id="file-input"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
                <div style={{ position: 'relative' }}>
                  {selectedImage ? (
                    <ButtonPicture onClick={() => setOpenSelectPicture(true)}>
                      <img
                        src={URL.createObjectURL(selectedImage)}
                        alt="Imagem selecionada"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '10px',
                        }}
                      />
                    </ButtonPicture>
                  ) : (
                    <>
                      <ButtonPicture onClick={() => setOpenSelectPicture(true)}>
                        <span style={{ position: 'absolute', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
                          <TextImg> Adicionar imagem</TextImg>
                        </span>
                      </ButtonPicture>
                    </>
                  )}
                </div>
              </label>
              <InputLegend type="text" placeholder="Adicionar legenda" />
            </DivInput>
  
            <SelectPicture
              isOpen={openSelectPicture}
              setOpenSelectPicture={setOpenSelectPicture}
              setSelectedImage={setSelectedImage}
            />

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

          <FooterB />
        </DivClara>

        <FooterB />
      </DivGeral>
    </>
  );
}

export default Publish;






                
// import FooterB from "../../components/FooterBotton/FooterB"
// import HeaderGeral from "../../components/Header/HeaderGeral"
// import ImgBoyPerfil from "../../assets/BoyPerfilPhoto.svg"
// import { DivHeader, ContainerGeralButton, SingleButton, UserName, InputLegend,  ContainerText, DivGeral, ImgBoyPublish, DivClara, DivInput, ButtonPicture } from "./style"
// import { useNavigate } from "react-router-dom"
// import { useState } from "react"
// import SelectPicture from "../../components/SelectPicture/SelectPicture"

// function Publish() {

//     // funcionalidade do modal
//     const[openSelectPicture, setOpenSelectPicture] = useState(false)

//     return (
//         <>
//             <HeaderGeral
//                 titulo = "Publicar"
//             />
//             <DivGeral>
//                 <DivClara>
//                 <DivHeader>
//                     <ImgBoyPublish src={ImgBoyPerfil} alt="foto homem branco, com cabelo e barba castanho escuro, camiseta cinsa escura e fundo cinza claro " />
//                     <UserName>joao036</UserName>
//                 </DivHeader>

//                 <DivInput>
//                     <ButtonPicture onClick={()=> setOpenSelectPicture(true)}>Adicionar imagem</ButtonPicture>
                
//                     <InputLegend type="text" placeholder="Adicionar legenda"/>

//                 </DivInput>

//                 <SelectPicture isOpen={openSelectPicture} setOpenSelectPicture={()=> setOpenSelectPicture(!openSelectPicture)}/>

//                 <ContainerText>Adicionar descrição</ContainerText>
                
//                 <ContainerGeralButton>
                
//                     <SingleButton>Preto</SingleButton>
//                     <SingleButton>Colorido</SingleButton>
//                     <SingleButton>Jeans</SingleButton>
//                     <SingleButton>Calça</SingleButton>
//                     <SingleButton>Verão</SingleButton>
//                     <SingleButton>Inverno</SingleButton>
//                     <SingleButton>Saias</SingleButton>
//                     <SingleButton>Feminino</SingleButton>
//                     <SingleButton>Masculino</SingleButton>
//                     <SingleButton>Gênero neutro</SingleButton>
//                     <SingleButton>Vestidos</SingleButton>
//                     <SingleButton>Pijamas</SingleButton>
//                     <SingleButton>Camisetas</SingleButton>
//                     <SingleButton>Camisas</SingleButton>
//                     <SingleButton>Cintos</SingleButton>
//                     <SingleButton>Moletom</SingleButton>
//                     <SingleButton>Tênis</SingleButton>
//                     <SingleButton>Botas</SingleButton>
//                     <SingleButton>Sapatos</SingleButton>
//                     <SingleButton>Sandálias</SingleButton>
//                     <SingleButton>Bolsas</SingleButton>
//                     <SingleButton>Mochilas</SingleButton>
                  
//                 </ContainerGeralButton>

//                 <FooterB/>

//                 </DivClara>

//             <FooterB/>

//             </DivGeral>
//         </>
//     )
// }
// export default Publish
