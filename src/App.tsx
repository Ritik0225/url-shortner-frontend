import "./App.css";
import AnimatedBackground from "./components/common/AnimatedBackground";
import { Input } from "./components/index";
import Topbar from "./components/common/Topbar";
import Login from "./views/Login";
import { Navigate, Route, Routes } from "react-router-dom";
import Register from "./views/Register";
import ProtectedLayout from "./layout/ProtectedLayout";
import GuestLayout from "./layout/GuestLayout";

function App() {
  return (
    <>
      <AnimatedBackground />
      <Topbar />
      <Routes>
        <Route element={<ProtectedLayout />}>
          <Route path="/urlShortner" element={<Input />} />
        </Route>
        <Route element={<GuestLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Default */}
        <Route path="*" element={<Navigate to="/urlShortner" />} />
      </Routes>
    </>
  );
}

export default App;
