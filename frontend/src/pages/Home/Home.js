import { DivClara, DivEscura } from "./style"
import PublishHome from "../../components/PublishHome/PublishHome"
import HeaderGeral from "../../components/Header/HeaderGeral"
import FooterB from "../../components/FooterBotton/FooterB"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function Home() {
    const images = 'http://localhost:8000/uploads/'
    const [userData, setUserData] = useState('');

    const navigate = useNavigate()

    function goToProfilePage() {
        navigate("/profile");
    }

    useEffect(() => {
        const userId = parseInt(localStorage.getItem("@Auth:user_id"), 10);

        axios.get(`${api.defaults.baseURL}/user/information/${userId}`)
            .then(response => {
                const userDataFromServer = response.data;
                setUserData(userDataFromServer.data);
            })
            .catch(error => {
                console.error('Erro ao buscar dados do usuário:', error);
            });
    }, []);

    // Estado para armazenar os posts
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await api.get('/post/all');
                setPosts(response.data);
            } catch (error) {
                console.error('Erro ao recuperar os posts:', error);
            }
        }

        fetchPosts();
    }, []);

    return (
        <>
            <HeaderGeral 
                titulo='Home'
            />
            <DivEscura>
                <DivClara>
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
export default Home