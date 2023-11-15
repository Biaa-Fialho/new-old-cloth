import FooterB from "../../components/FooterBotton/FooterB"
import HeaderGeral from "../../components/Header/HeaderGeral"
import ImgPerfil from "../../assets/BoyPerfilPhoto.svg"
import { DivClara, DivEscura, DivHeaderAccount, DivImg, DivNumero, DivNumeroPubli, DivNumeroSeg, DivPublicação, DivSeguidor, DivSeguindo, DivTextName, GridContainer } from "./style"
import PublishHome from "../../components/PublishHome/PublishHome"

function Accont(){
    return(
        <>
            <HeaderGeral 
                titulo='Minha conta'
            />
            
            <DivEscura>
                <DivClara>
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