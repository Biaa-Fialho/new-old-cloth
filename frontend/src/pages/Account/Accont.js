import FooterB from "../../components/FooterBotton/FooterB"
import HeaderGeral from "../../components/Header/HeaderGeral"
import ImgPerfil from "../../assets/BoyPerfilPhoto.svg"
import PublishHome from "../../components/PublishHome/PublishHome"
import ImgConfig from "../../assets/buttonConfig.svg"
import { ButtonConfig, DivButtonConfig, DivClara, DivEscura, DivHeaderAccount, DivImg, DivNumero, DivNumeroPubli, DivNumeroSeg, DivPublicação, DivSeguidor, DivSeguindo, DivTextName, GridContainer, ImgButtonConfig } from "./style"
import { useState } from "react"
import ConfigAccount from "../../components/ConfigAccount/Configaccount"

function Accont(){

    // funcionalidade do modal
    const[openConfigAccount, setOpenConfigAccount] = useState(false)

    return(
        <>
            <HeaderGeral 
                titulo='Minha conta'
            />
            
            <DivEscura>
                <DivClara>
                    <DivButtonConfig>
                        <ButtonConfig onClick={()=> setOpenConfigAccount(true)}><ImgButtonConfig src={ImgConfig} alt="imagem de três pontos organizados orizontalmente"/></ButtonConfig>
                    </DivButtonConfig>

                    <ConfigAccount isOpen={openConfigAccount} setOpenConfigAccount={()=> setOpenConfigAccount(!openConfigAccount)}/>
                    
                    <DivHeaderAccount>
                        <DivImg src={ImgPerfil} alt="imagem de um homem branco"/>
                        <DivTextName>Joao036</DivTextName>
                    </DivHeaderAccount>
                    <GridContainer>
                        <DivSeguidor>
                            <DivNumero>11</DivNumero>
                            seguidores
                            </DivSeguidor>
                        <DivSeguindo>
                            <DivNumeroSeg>46</DivNumeroSeg>
                            seguindo
                        </DivSeguindo>
                        <DivPublicação>
                            <DivNumeroPubli>5</DivNumeroPubli> 
                            publicações
                        </DivPublicação>
                    </GridContainer>
                    <PublishHome/>
                    <PublishHome/>
                    <PublishHome/>
                    <PublishHome/>
                    <PublishHome/>
                </DivClara>
            </DivEscura>

            <FooterB/>
        </>
    )
}
export default Accont 