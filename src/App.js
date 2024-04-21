import "./App.css";

import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

import LoginScreen from "./screens/LoginScreen/LoginScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import TarotScreen from "./screens/TarotScreen/TarotScreen";
import SignUpScreen from "./screens/SignUpScreen/SignUpScreen";
import LuckyNumberScreen from "./screens/LuckyNumberScreen/LuckyNumberScreen";
import LuckyShirtScreen from "./screens/LuckyShirtScreen/LuckyShirtScreen";

export const BE_HOST = process.env.REACT_APP_BE_HOST;

// localStorage.setItem("login", false)
// localStorage.setItem("token", "");

function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/signup" element={<SignUpScreen />} />
            <Route path="/tarot" element={<TarotScreen />} />
            <Route path="/luckynumber" element={<LuckyNumberScreen />} />
            <Route path="/luckyshirt" element={<LuckyShirtScreen />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
