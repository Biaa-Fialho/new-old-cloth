import HeaderSeta from '../../components/Header/HeaderSeta'
import FooterB from "../../components/FooterBotton/FooterB"
import Comment from '../../components/Comment/Comment';
import { DivGeral, DivGeralComment } from "./styled"

function CommentsPage(){
    return(
        <DivGeral>
            <DivGeralComment>
                <HeaderSeta/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <Comment/>
                <FooterB/>
            </DivGeralComment>
        </DivGeral>

    )
}

export default CommentsPage
