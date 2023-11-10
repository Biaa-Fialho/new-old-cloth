
import { DivHomeGeral, TextHeader } from "./style"


function HeaderGeral(props){

    return(
        <DivHomeGeral>
            <TextHeader>{props.titulo}</TextHeader>
        </DivHomeGeral>
    )
}

export default HeaderGeral