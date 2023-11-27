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

    useEffect(() => { //pega todos os usuários e envia para user
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
    user.user_name.toLowerCase().includes(inputValue.toLowerCase()) // filtra, passa o valor de user , transforma o nome em letraminuscula e filtra o valor incluso no input que tu digitou
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
                                </DivAccounts> //se o filteredUsers.length for diferente de 0 ele vai devolver um map com os nomes dos usuários
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
