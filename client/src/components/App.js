import Header from "./Header";
import {Route, Routes} from "react-router-dom";
import Welcome from "./Welcome";
import Signup from "./auth/Signup";
import Feature from "./Feature";
import Signout from "./auth/Signout";
import Signin from "./auth/Signin";

const App = () => {
  return (
    <div>
        <Header/>
        <Routes>
            <Route path={"/"} exact element={<Welcome />}/>
            <Route path={"/signup"} element={<Signup />}/>
            <Route path={"/feature"} element={<Feature />}/>
            <Route path={"/signout"} element={<Signout />}/>
            <Route path={"/signin"} element={<Signin />}/>
        </Routes>
    </div>
  )
}

export default App;