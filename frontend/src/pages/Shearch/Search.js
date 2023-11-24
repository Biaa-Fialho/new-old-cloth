import FooterB from "../../components/FooterBotton/FooterB"
import HeaderGeral from "../../components/Header/HeaderGeral"
import { DivAccounts, DivClara, DivEscura, DivInside, GridContainer, ImgLupaSearch, ImgSearch, InputSearch } from "./style"
import SearchPhoto from "../../assets/Search.svg"
import axios from "axios";
import { baseUrl } from "../../services/api";
import { useEffect, useState } from "react";


function Search() {
    const [users, setUsers] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        axios.get(`${baseUrl}/users`)
            .then(function (response) {
                const sortedUser = response.data.data.sort((a, b) => {
                    const dateA = new Date(a.created_at);
                    const dateB = new Date(b.created_at);
                    return dateB - dateA;
                });

                setUsers(sortedUser);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const filteredUsers = users.filter((user) =>
    user.user_name.toLowerCase().includes(inputValue.toLowerCase())
);

    return (
        <>
            <HeaderGeral
                titulo='Pesquisar'
            />
                <DivEscura>
                    <DivClara>
                        <GridContainer>
                            <InputSearch
                            type='text'
                            value={inputValue}
                            onChange={(v) => setInputValue(v.target.value)}
                            />
                            <ImgLupaSearch src={SearchPhoto} alt="Lupa de pesquisa" />
                            {(filteredUsers.length !== 0) ?
                                <DivAccounts>
                                    {filteredUsers.map((user) => ( 
                                        <DivInside>{user.user_name}</DivInside>
                                    ))}
                                </DivAccounts>
                                :
                                <DivAccounts>
                                    Nenhum usuário encontrado
                                </DivAccounts>
                            }
                        </GridContainer>
                    </DivClara>
                </DivEscura>

                <FooterB />
        </>
    );
}

export default Search;
