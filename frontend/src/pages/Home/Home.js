import { DivClara } from "./style"
import PublishHome from "../../components/PublishHome/PublishHome"
import HeaderGeral from "../../components/Header/HeaderGeral"
import FooterB from "../../components/FooterBotton/FooterB"

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

            <FooterB/>

        </>

    )
}
export default Home