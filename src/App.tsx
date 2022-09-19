import './App.css';
import Login from './login/login';
import { BrowserRouter, Route, Routes, Link, Navigate} from "react-router-dom";


function App() {
  return (
    <div className="App">
          <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
