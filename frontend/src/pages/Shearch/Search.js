import FooterB from "../../components/FooterBotton/FooterB"
import HeaderGeral from "../../components/Header/HeaderGeral"
import { DivClara, DivEscura, GridContainer, ImgLupaSearch, ImgSearch, InputSearch } from "./style"
import SearchPhoto from "../../assets/Search.svg"


function Search() {
    return (
        <>
            <HeaderGeral
                titulo='Pesquisar'
            />
                <DivEscura>
                    <DivClara>
                        <GridContainer>
                            <InputSearch/>
                            <ImgLupaSearch src={SearchPhoto} alt="Lupa de pesquisa" />
                        </GridContainer>
                    </DivClara>
                </DivEscura>

                <FooterB />
        </>
    );
}

export default Search;
