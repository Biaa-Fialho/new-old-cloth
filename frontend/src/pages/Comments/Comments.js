import HeaderSeta from '../../components/Header/HeaderSeta'
import FooterB from "../../components/FooterBotton/FooterB"
import Comment from '../../components/Comment/Comment';
import { DivGeralComment } from "./styled"

function CommentsPage(){
    return(
        
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

    )
}

export default CommentsPage
