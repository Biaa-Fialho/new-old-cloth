import { DivClara, DivEscura } from "./style"
import PublishHome from "../../components/PublishHome/PublishHome"
import HeaderGeral from "../../components/Header/HeaderGeral"
import FooterB from "../../components/FooterBotton/FooterB"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { baseUrl } from "../../services/api"

function Home() {
    const images = 'http://localhost:3008/uploads/'
    const [userData, setUserData] = useState('');
    
    const navigate = useNavigate()
    
    function goToProfilePage() {
        navigate("/profile");
    }
    
    useEffect(() => {
        const userId = parseInt(localStorage.getItem('user'), 10)
        
        axios.get(`${baseUrl}/user/information/${userId}`) //médotodo get para pegar as informções do banco
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
    console.log('+++++posts :', posts);
    
    
    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await axios.get(`${baseUrl}/post/all`);
                setPosts(response.data);
                console.log('-------------------------------------response :', response);
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
                {posts.map((post) => (
                    <PublishHome
                        key={post.id_post}
                        userPostNameTop={post.user_name}
                        imagePost={images + post.post_image}
                        userPostName={post.post_legend ? post.user_name : ''}
                        legendPost={post.post_legend ? post.post_legend : ''}
                    />
                ))}
                </DivClara>
            </DivEscura>


            <FooterB/>

        </>

    )
}
export default Home