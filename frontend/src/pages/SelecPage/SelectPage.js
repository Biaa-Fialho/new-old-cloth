import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeaderSeta from "../../components/Header/HeaderSeta";
import { DivFontTitle, DivGeral, DivTextSelect, SelectButton, SingleButton} from "./style";

function SelectPage() {
  const navigate = useNavigate();

  // State para controlar as opções selecionadas
  const [selectedOptions, setSelectedOptions] = useState([]);

  // Estado para controlar se o botão foi clicado
  const [buttonClicked, setButtonClicked] = useState(false);

  // Função para atualizar as opções selecionadas quando uma checkbox é clicada
  const handleCheckboxChange = (option) => {
    setSelectedOptions((prevOptions) => {
      if (prevOptions.includes(option)) {
        // Remove a opção se já estiver selecionada
        return prevOptions.filter(
          (selectedOption) => selectedOption !== option
        );
      } else {
        // Adiciona a opção se ainda não estiver selecionada
        return [...prevOptions, option];
      }
    });
  };

  // Função para alternar a cor do botão
  const toggleButtonColor = () => {
    setButtonClicked(!buttonClicked);
  };
  return (
    <>
      <DivGeral>
        <HeaderSeta />

        <containerGeralButton>
          <DivTextSelect>
            <DivFontTitle> Selecione suas preferências </DivFontTitle>
          </DivTextSelect>

          <SingleButton>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("Preto")}
              checked={selectedOptions.includes("Preto")}
              style={{ display: "none" }}
            />
            <label>{selectedOptions.includes("Preto") ? "✔" : ""} Preto </label>
          </SingleButton>
          <SingleButton>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("Colorido")}
              checked={selectedOptions.includes("Colorido")}
              style={{ display: "none" }}
            />
            <label>{selectedOptions.includes("Colorido") ? "✔" : ""} Colorido </label>
          </SingleButton>
          <SingleButton>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("Jeans")}
              checked={selectedOptions.includes("Jeans")}
              style={{ display: "none" }}
            />
            <label>{selectedOptions.includes("Jeans") ? "✔" : ""} Jeans </label>
          </SingleButton>
          <SingleButton>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("Calça")}
              checked={selectedOptions.includes("Calça")}
              style={{ display: "none" }}
            />
            Calça
          </SingleButton>
          <SingleButton>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("Verão")}
              checked={selectedOptions.includes("Verão")}
              style={{ display: "none" }}
            />
            Verão
          </SingleButton>
          <SingleButton>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("Inverno")}
              checked={selectedOptions.includes("Inverno")}
              style={{ display: "none" }}
            />
            Inverno
          </SingleButton>
          <SingleButton>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("Saias")}
              checked={selectedOptions.includes("Saias")}
              style={{ display: "none" }}
            />
            Saias
          </SingleButton>
          <SingleButton>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("Feminino")}
              checked={selectedOptions.includes("Feminino")}
              style={{ display: "none" }}
            />
            Feminino
          </SingleButton>
          <SingleButton>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("Masculino")}
              checked={selectedOptions.includes("Masculino")}
              style={{ display: "none" }}
            />
            Masculino
          </SingleButton>
          <SingleButton>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("Gênero neutro")}
              checked={selectedOptions.includes("Gênero neutro")}
              style={{ display: "none" }}
            />
            Gênero neutro
          </SingleButton>
          <SingleButton>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("Vestidos")}
              checked={selectedOptions.includes("Vestidos")}
              style={{ display: "none" }}
            />
            Vestidos
          </SingleButton>
          <SingleButton>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("Pijamas")}
              checked={selectedOptions.includes("Pijamas")}
              style={{ display: "none" }}
            />
            Pijamas
          </SingleButton>
          <SingleButton>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("Camisetas")}
              checked={selectedOptions.includes("Camisetas")}
              style={{ display: "none" }}
            />
            Camisetas
          </SingleButton>
          <SingleButton>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("Camisas")}
              checked={selectedOptions.includes("Camisas")}
              style={{ display: "none" }}
            />
            Camisas
          </SingleButton>
          <SingleButton>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("Cintos")}
              checked={selectedOptions.includes("Cintos")}
              style={{ display: "none" }}
            />
            Cintos
          </SingleButton>
          <SingleButton>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("Moletom")}
              checked={selectedOptions.includes("Moletom")}
              style={{ display: "none" }}
            />
            Moletom
          </SingleButton>
          <SingleButton>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("Tênis")}
              checked={selectedOptions.includes("Tênis")}
              style={{ display: "none" }}
            />
            Tênis
          </SingleButton>
          <SingleButton>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("Botas")}
              checked={selectedOptions.includes("Botas")}
              style={{ display: "none" }}
            />
            Botas
          </SingleButton>
          <SingleButton>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("Sapatos")}
              checked={selectedOptions.includes("Sapatos")}
              style={{ display: "none" }}
            />
            Sapatos
          </SingleButton>
          <SingleButton>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("Sandálias")}
              checked={selectedOptions.includes("Sandálias")}
              style={{ display: "none" }}
            />
            Sandálias
          </SingleButton>
          <SingleButton>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("Bolsas")}
              checked={selectedOptions.includes("Bolsas")}
              style={{ display: "none" }}
            />
            Bolsas
          </SingleButton>
          <SingleButton>
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange("Mochilas")}
              checked={selectedOptions.includes("Mochilas")}
              style={{ display: "none" }}
            />
            Mochilas
          </SingleButton>

          <SelectButton onClick={() => navigate('/home')}>
            Selecionar Itens
          </SelectButton>
        </containerGeralButton>
      </DivGeral>
    </>
  );
}

export default SelectPage;



// import { useNavigate } from "react-router-dom"
// import HeaderSeta from "../../components/Header/HeaderSeta"
// import {DivFontTitle, DivGeral, DivTextSelect, SelectButton, SingleButton} from "./style"


// function SelectPage(){

//     const navigate = useNavigate()

//     return(
//         <>
//             <DivGeral>

//                 <HeaderSeta/>
                
//                 <containerGeralButton> 
                    
//                     <DivTextSelect>
//                         <DivFontTitle> Selecione suas preferências </DivFontTitle>
//                     </DivTextSelect>

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

//                     <SelectButton onClick={() => navigate('/home')}> Selecionar Itens </SelectButton>
                    
//                 </containerGeralButton>

//             </DivGeral>
            
//         </>
       

//     )
// }

// export default SelectPage