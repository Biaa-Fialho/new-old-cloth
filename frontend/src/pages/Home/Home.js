import { DivClara, DivHomeGeral, DivTextHeader } from "./style"
import PublishHome from "../../components/PublishHome/PublishHome"
import HeaderGeral from "../../components/Header/HeaderGeral"

function Home() {
    return (
        <>
            <HeaderGeral />

            <DivClara>
                <PublishHome />
                <PublishHome />
                <PublishHome />
                {/* <PublishHome/> */}
            </DivClara>

        </>

    )
}
export default Home