import HeaderGeneral from "../../components/Header/Header"
import {DivFontTitle, DivTextSelect, SelectButton, SingleButton} from "./style"


function SelectPage(){
    return(
        <>
            <HeaderGeneral/>

            <containerGeralButton> 
                
                <DivTextSelect>
                    <DivFontTitle> Selecione suas preferências </DivFontTitle>
                </DivTextSelect>

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

                <SelectButton>Selecionar Itens</SelectButton>
                
            </containerGeralButton>
        </>
       

    )
}

export default SelectPage