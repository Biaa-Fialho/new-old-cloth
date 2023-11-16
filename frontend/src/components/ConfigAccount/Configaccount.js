import { useNavigate } from "react-router-dom";
import ImageClose from "../../assets/ButtonCloseX.svg"
import { ButtonConfig, ButtonExit, ButtonX, DivAlinhar, DivButton, DivClaraConfig, DivGeralConfig, ImgButtonX } from "./style";


function ConfigAccount({isOpen, setOpenConfigAccount}){
    const navigate = useNavigate()

    if(isOpen) {
        return(

            <DivAlinhar>
                <DivGeralConfig>
                    <DivClaraConfig>
                        <DivButton>
                            <ButtonX onClick={()=>setOpenConfigAccount(false)}><ImgButtonX src={ImageClose} alt="imagem de um X"/></ButtonX>
                        </DivButton>
                        <ButtonConfig onClick={()=>navigate('/confgAccount')}>configuração</ButtonConfig>
                        <ButtonExit onClick={()=>navigate('/hangerPage')}>sair</ButtonExit>
                    </DivClaraConfig>
                </DivGeralConfig>
            </DivAlinhar>

        )
    }
}

export default ConfigAccount

// import React, { useState } from 'react';
// import { DivClaraConfig, DivGeralConfig } from "./style";

// function ConfigAccount({ isOpen, onClose }) {
//     // Adiciona um estado local para controlar se o modal está aberto ou fechado
//     const [modalOpen, setModalOpen] = useState(isOpen);
  
//     // Função para fechar o modal
//     const closeModal = () => {
//       setModalOpen(false);
//       // Executa a função de fechamento fornecida (onClose) se existir
//       if (onClose) {
//         onClose();
//       }
//     };
  
//     // Adiciona um evento de clique à DivGeralConfig para fechar o modal ao clicar fora dele
//     const handleClickOutsideModal = (event) => {
//       if (event.target === event.currentTarget) {
//         closeModal();
//       }
//     };
  
//     if (modalOpen) {
//       return (
//         <DivGeralConfig onClick={handleClickOutsideModal}>
//           <DivClaraConfig>
//             {/* Conteúdo do seu modal */}
//           </DivClaraConfig>
//         </DivGeralConfig>
//       );
//     } else {
//       // Se o modal estiver fechado, retorna nulo (não renderiza nada)
//       return null;
//     }
//   }
  
//   export default ConfigAccount;



            // <>

            //     <DivGeralSelect>

            //         <ButtonX onClick={()=>setOpenConfigAccount(false)}><ImgButtonX src={ImageClose} alt="imagem de um X"/></ButtonX>   

            //     </DivGeralSelect>

                    // setOpenConfigAccount
            // </>
