import { DivGeral, DivImageHanger, ImgHangerContainer } from "./style"
import ImgHanger from '../../assets/hanger.svg'
// import { buttonCreateAccount, DivDontHaveAccount } from "../LoginScreen/style"

function FirstPage(){
    return(
        <>
            <DivGeral>
                <DivImageHanger>
                    <ImgHangerContainer src={ImgHanger} alt='Imagem de um cabide'/>
                </DivImageHanger>

                {/* <DivDontHaveAccount>
                    <buttonCreateAccount onClick={goToRegisterPage}>Criar conta</buttonCreateAccount>
                </DivDontHaveAccount> */}
            </DivGeral>
        </>
    )
}

export default FirstPage