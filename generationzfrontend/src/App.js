import React,{useState} from "react";
import Form from "./Form";
import FlowerData from "./FlowerData";
import Navbar from "./components/Navbar";
import { BrowserRouter ,Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import ControlRobot from "./components/ControlRobot";
const App = () => {
  return (
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/form" element={<Form />} />
            <Route path="/flowerdata" element={<FlowerData />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/controlrobot" element={<ControlRobot />} />
          </Routes>
        </div>
      </BrowserRouter>
  );
};

export default App;
