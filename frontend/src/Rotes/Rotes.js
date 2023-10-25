import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "../pages/HangerPage/HangerPage";
import LoginScreen from "../pages/LoginScreen/LoginScreen";
import RegisterScreen from "../pages/RegisterScreen/RegisterScreen"
import SelectPage from "../pages/SelecPage/SelectPage";
import Home from "../pages/Home/Home";

function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<FirstPage/>}/>
                <Route path='login' element={<LoginScreen/>}/>
                <Route path="cadastro" element={<RegisterScreen/>}/>
                <Route path='select' element={<SelectPage/>}/>
                <Route path="home" element={<Home/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default Rotas