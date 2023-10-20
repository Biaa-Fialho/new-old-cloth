import { DivClara, DivHomeGeral, DivTextHeader } from "./style"
import PublishHome from "../../components/PublishHome/PublishHome"

function Home(){
    return(
        <DivHomeGeral>
            <DivTextHeader>Home</DivTextHeader>
            <DivClara>
                <PublishHome/>
                {/* <PublishHome/> */}
                {/* <PublishHome/> */}
                {/* <PublishHome/> */}
            </DivClara>
        </DivHomeGeral>
    )
}
export default Home