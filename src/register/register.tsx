import { useState } from "react";
import Header from "../header/header";
import { useQuery, gql, useMutation } from "@apollo/client";
import { ADD_USER } from "../querys";

function Register() {
  const [name, setName] = useState("");
  const [addUser, { data, loading, error }] = useMutation(ADD_USER);
  let input: any;

  return (
    <div className="login">
      <Header />
      <p>Register</p>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();            
            addUser({ variables: { type: {email: "messi", password:"ddd", lastname:"ddd",nickName:"dkdkd",firstName:"ekke",roles:"Admin",createdAt:"Now"} } });
            input.value = "";
          }}
        >
          <label>Username</label><br/>
          <input
            ref={(node) => {
              input = node;
            }}
          />
          <div>
            <label>email</label>
            <br />
            <input type="email" name="email" 
            ref={(node) => {
              input = node;
            }}/>
          </div>
          <div>
            <label>Password</label>
            <br />
            <input type="password" name="password" 
            ref={(node) => {
              input = node;
            }}/>
          </div>
          <button type="submit">Add user</button>
        </form>
      </div>
    </div>
  );
}

export default Register;
