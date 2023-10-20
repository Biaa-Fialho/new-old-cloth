import HangerPage from "./pages/HangerPage/HangerPage"
import LoginScreen from "./pages/LoginScreen/LoginScreen";
import SelectPage from "./pages/SelecPage/SelectPage";
import RegisterPage from "./pages/RegisterScreen/RegisterScreen"
import EnterPage from "./pages/EnterPage/EnterPage"

import Rotas from "./Rotes/Rotes";
import {StyleGlobal} from "./styleGlobal";
import Home from "./pages/Home/Home";
import PublishHome from "./components/PublishHome/PublishHome";

function App() {
  return (
    <>
      <StyleGlobal/>
      {/* <Rotas/>  */}
      <Home/>
    </>
  );
}

export default App;
