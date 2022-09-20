import "./App.css";
import Login from "./login/login";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import Home from "./Home/home";
import Register from './register/register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;