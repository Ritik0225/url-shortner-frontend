import "./App.css";
import AnimatedBackground from "./components/common/AnimatedBackground";
// import { Input } from "./components/index";
import Topbar from "./components/common/Topbar";
import Login from "./views/Login";
// import { Route, Routes } from "react-router-dom";
// import Register from "./views/Register";

function App() {
  return (
    <>
    <AnimatedBackground/>
      <Topbar />
      {/* <Routes>
        <Route></Route>
        <Input />
      </Routes> */}
      {/* <Register/> */}
      <Login/>
    </>
  );
}

export default App;
