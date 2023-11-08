import { useNavigate } from "react-router-dom"
import HeaderSeta from "../../components/Header/HeaderSeta"
import {DivFontTitle, DivGeral, DivTextSelect, SelectButton, SingleButton} from "./style"


function SelectPage(){

    const navigate = useNavigate()

    return(
        <>
            <DivGeral>

                <HeaderSeta/>

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

                    <SelectButton onClick={() => navigate('/home')}> Selecionar Itens </SelectButton>
                    
                </containerGeralButton>

            </DivGeral>
            
        </>
       

    )
}

export default SelectPage