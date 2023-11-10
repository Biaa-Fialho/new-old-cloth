import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "../pages/HangerPage/HangerPage";
import LoginScreen from "../pages/LoginScreen/LoginScreen";
import RegisterScreen from "../pages/RegisterScreen/RegisterScreen"
import SelectPage from "../pages/SelecPage/SelectPage";
import Home from "../pages/Home/Home";
import Search from "../pages/Shearch/Search";
import Publish from "../pages/Publish/Publish"
import ChatHome from "../pages/ChatHome/ChatHome";
import Chat from "../pages/Chat/Chat";
import Account from "../pages/Account/Accont";
import Comments from "../pages/Comments/Comments";
import EnterPage from "../pages/EnterPage/EnterPage";

function RoutesFunction(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<FirstPage/>}/>
                <Route path="enter" element={<EnterPage/>}/>
                <Route path='login' element={<LoginScreen/>}/>
                <Route path="cadastro" element={<RegisterScreen/>}/>
                <Route path='select' element={<SelectPage/>}/>
                <Route path="home" element={<Home/>}/>
                <Route path="search" element={<Search/>}/>
                <Route path="publish" element={<Publish/>}/>
                <Route path="chatHome" element={<ChatHome/>}/>
                <Route path="chat" element={<Chat/>}/>
                <Route path="account" element={<Account/>}/>
                <Route path="comments" element={<Comments/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesFunction