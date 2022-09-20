import { useState } from "react";
import Header from "../header/header";
import { useQuery, gql, useMutation } from "@apollo/client";
import { ADD_USER } from "../querys";

function Register() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [nickName, setNickName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [addUser, { data, loading, error }] = useMutation(ADD_USER);
  let input: any;

  return (
    <div className="login">
      <Header />
      <p>Register</p>
      <div>
        <form
          onSubmit={(e: any) => {
            e.preventDefault();  
            console.log(email);
            console.log(password);
            console.log(lastname);
            
                      
            addUser({ variables: { type: {email: email, password:password, lastname:lastname,nickName:nickName,firstName:firstName,roles:"User",createdAt:"Now"} } });
            e.target.value = "";
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
            onChange={(e) => setLastname(e.target.value)}/>
          </div>
          <div>
            <label>firstName</label>
            <br />
            <input type="text" name="firstName" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}/>
          </div>
          <button type="submit">Add user</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
