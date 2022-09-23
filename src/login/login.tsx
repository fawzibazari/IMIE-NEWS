import { useState } from "react";
import Header from "../header/header";
import "./login.css";
import axios, { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setError] = useState<string | undefined>("");
  const navigate = useNavigate();


  async function onSubmit() {
    try {
      const res = await axios.post("http://localhost:8000/api/login_check", {
        email: email,
        password: password,
      });
      console.log(res.config);
      console.log(res.data);
      localStorage.setItem('token', res.data.token)
      navigate("/articles");
    } catch (error) {
      const err = error as AxiosError;
      console.log(err);
      setError(err.code);
    }
  }

  return (
    <div className="login">
      <Header />
      <p>login</p>
      <div>
        <label>Username</label>
        <br />
        <input
          type="text"
          name="name"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <br />
        <input
          type="password"
          name="name"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={() => onSubmit()}>Login</button>
      <p> {err}</p>
    </div>
  );
}

export default Login;
