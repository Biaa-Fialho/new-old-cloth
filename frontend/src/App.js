import HangerPage from "./pages/HangerPage/HangerPage"
import LoginScreen from "./pages/LoginScreen/LoginScreen";
import SelectPage from "./pages/SelecPage/SelectPage";
import RegisterPage from "./pages/RegisterScreen/RegisterScreen"
import EnterPage from "./pages/EnterPage/EnterPage"


import {StyleGlobal} from "./styleGlobal";
import Home from "./pages/Home/Home";
import PublishHome from "./components/PublishHome/PublishHome";
import FooterB from "./components/FooterBotton/FooterB";
import RoutesFunction from "./Routes/RoutesFunction";


function App() {
  return (
    <>
      <StyleGlobal/>
      <RoutesFunction/> 
    </>
  );
}

export default App;
