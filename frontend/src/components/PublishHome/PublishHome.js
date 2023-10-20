import { DivGeralPublishHome, DivHeader, DivLegend, DivNameLegend, DivTextLegend, FunciotionsDiv, ImgBoyPerfilContainer, ImgComment, ImgLike, ImgSend, JeansBoy, UserName } from "./style"
import ImgBoyPerfil from "../../assets/BoyPerfilPhoto.svg"
import JeansBoyPhoto from "../../assets/JeansBoy.svg"
import ImageLike from "../../assets/like.svg"
import ImageComment from "../../assets/comment.svg"
import ImageSend from "../../assets/send.svg"

function PublishHome(){
    return(
        <DivGeralPublishHome>
            <DivHeader>
                <ImgBoyPerfilContainer src={ImgBoyPerfil} alt="foto homem branco, com cabelo e barba castanho escuro, camiseta cinsa escura e fundo cinza claro " />
                <UserName>joao036</UserName>
            </DivHeader>

            <JeansBoy src={JeansBoyPhoto} alt="Homem Branco usando uma calça rasgada jeans e camiseta branca"/>

            <FunciotionsDiv>
                <ImgLike src={ImageLike} alt="imagem de coração vazado"/>
                <ImgComment src={ImageComment} alt="imagem avião de papel" />
                <ImgSend src={ImageSend} alt="imagem de um balão de fala" />
            </FunciotionsDiv>

            <DivLegend>
                <DivNameLegend>joao036</DivNameLegend>
                <DivTextLegend>Calça masculina, tamanho 38, lavagem clara e com rasgados </DivTextLegend>
            </DivLegend>

        </DivGeralPublishHome>
    )
}

export default PublishHome
