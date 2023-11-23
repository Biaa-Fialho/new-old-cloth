import FooterB from "../../components/FooterBotton/FooterB"
import HeaderGeral from "../../components/Header/HeaderGeral"
import ImgPerfil from "../../assets/perfilUsuario.png"
import PublishHome from "../../components/PublishHome/PublishHome"
import ImgConfig from "../../assets/buttonConfig.svg"
import { ButtonConfig, DivButtonConfig, DivClara, DivEscura, DivHeaderAccount, DivImg, DivNumero, DivNumeroPubli, DivNumeroSeg, DivPublicação, DivSeguidor, DivSeguindo, DivTextName, GridContainer, ImgButtonConfig } from "./style"
import { useEffect, useState } from "react"
import ConfigAccount from "../../components/ConfigAccount/Configaccount"
import axios from "axios"
import { baseUrl } from "../../services/api"

function Accont(){
    const images = 'http://localhost:3008/uploads/'
    const [userData, setUserData] = useState('');
    // const [posts, setPosts] = useState([]);
    
    const [posts, setPostUserInfos] = useState([]); // hook 

    // funcionalidade do modal
    const[openConfigAccount, setOpenConfigAccount] = useState(false)

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


    useEffect(() => {
        const userIdLogin = parseInt(localStorage.getItem('user'), 10)
        axios.get(`${baseUrl}/post/user/${userIdLogin}`) //método get para pegar as informções do banco
            .then(response => {
                const postDataFromServer = response.data;
                console.log('postDataFromServer :', postDataFromServer);
                postDataFromServer.map(f => {
                    console.log('f', f)
                    posts.push(f);
                })
            })
            .catch(error => {
                console.log('Erro ao buscar dados do post:', error);
            });
        }, []);
        
    console.log('aaaaaaaaaaa', posts)
    return(
        <>
            <HeaderGeral 
                titulo='Minha conta'
            />
            
            <DivEscura>
                <DivClara>
                    <DivButtonConfig>
                        <ButtonConfig onClick={()=> setOpenConfigAccount(true)}><ImgButtonConfig src={ImgConfig} alt="imagem de três pontos organizados orizontalmente"/></ButtonConfig>
                    </DivButtonConfig>

                    <ConfigAccount isOpen={openConfigAccount} setOpenConfigAccount={()=> setOpenConfigAccount(!openConfigAccount)}/>
                    
                    <DivHeaderAccount>
                        <DivImg src={ImgPerfil} />
                        <DivTextName>{userData.user_name}</DivTextName>
                    </DivHeaderAccount>
                    <GridContainer>
                        <DivSeguidor>
                            <DivNumero>00</DivNumero>
                            seguidores
                            </DivSeguidor>
                        <DivSeguindo>
                            <DivNumeroSeg>00</DivNumeroSeg>
                            seguindo
                        </DivSeguindo>
                        <DivPublicação>
                            <DivNumeroPubli>00</DivNumeroPubli> 
                            publicações
                        </DivPublicação>
                    </GridContainer>
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
export default Accont 