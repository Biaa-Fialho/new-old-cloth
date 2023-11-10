import { DivClara, DivEscura } from "./style"
import PublishHome from "../../components/PublishHome/PublishHome"
import HeaderGeral from "../../components/Header/HeaderGeral"
import FooterB from "../../components/FooterBotton/FooterB"

function Home() {
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