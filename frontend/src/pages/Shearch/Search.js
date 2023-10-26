import FooterB from "../../components/FooterBotton/FooterB"
import HeaderGeral from "../../components/Header/HeaderGeral"
import { DivClara, DivGeral, ImgSearch, InputSearch } from "./style"
import SearchPhoto from "../../assets/Search.svg"


function Search() {
    return (

        <>
            <HeaderGeral/>

            <DivGeral>
                <DivClara>
                    <InputSearch>
                        <ImgSearch img={SearchPhoto} alt='imagem de uma lupa'/>
                    </InputSearch>
                </DivClara>
            </DivGeral>

            <FooterB/>
        </>
    )
}
export default Search 
