import { useState } from "react";
import Header from "../header/header";
import { useQuery, gql, useMutation } from "@apollo/client";
import { Routes, Route, Navigate, BrowserRouter, useNavigate } from "react-router-dom";
import { ADD_USER } from "../querys";

function Register() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [nickName, setNickName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [addUser] = useMutation(ADD_USER);
  const navigate = useNavigate();


  return (
    <div className="login">
      <Header />
      <p>Register</p>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();  
            console.log(email);
            console.log(password);
            console.log(lastname);
            addUser({ variables: { type: {email: email, password:password, lastName:lastname,userName:nickName,firstName:firstName,roles:["ROLE_USER"],createdAt:"Now"} } });
            navigate("/login");
          }}
        >
          <label>Username</label><br/>
          <input
          value={nickName}
          onChange={(e) => setNickName(e.target.value)}
          />
          <div>
            <label>email</label>
            <br />
            <input type="email" name="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <br />
            <input type="password" name="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label>LastName</label>
            <br />
            <input type="text" name="lastname" 
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div>
            <label>firstName</label>
            <br />
            <input type="text" name="firstName" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <button type="submit" >Add user</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
