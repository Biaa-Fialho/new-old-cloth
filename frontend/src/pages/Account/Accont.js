import FooterB from "../../components/FooterBotton/FooterB"
import HeaderGeral from "../../components/Header/HeaderGeral"
import ImgPerfil from "../../assets/BoyPerfilPhoto.svg"
import { DivClara, DivEscura, DivHeaderAccount, DivImg, DivPublicação, DivSeguidor, DivSeguindo, DivTextName, GridContainer } from "./style"

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
                        <GridContainer>
                            <DivSeguidor></DivSeguidor>
                            <DivSeguindo></DivSeguindo>
                            <DivPublicação></DivPublicação>
                        </GridContainer>
                    </DivHeaderAccount>
                </DivClara>
            </DivEscura>

            <FooterB/>
        </>
    )
}
export default Accont 