import FooterB from "../../components/FooterBotton/FooterB"
import HeaderGeral from "../../components/Header/HeaderGeral"
import HeaderSeta from "../../components/Header/HeaderSeta"
import { DivClara, DivEscura, InputName, LabelContainer } from "./style"


function  ConfAccont(){
    return(
        <>
            <HeaderGeral 
                titulo='Configurações'
            />
            <DivEscura>
                <DivClara>
                    <HeaderSeta/>

                    <LabelContainer>Nome
                        <InputName placeholder='Alterar nome de usuário' required/>
                    </LabelContainer>
                </DivClara>
            </DivEscura>


            <FooterB/>

        </>
    )
}
export default ConfAccont