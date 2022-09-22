import Header from '../header/header';
import './login.css'

function Login() {
  return (
    <div className='login'>
      <Header />
      <p>login</p>
      <div>
        <label>Username</label><br/>
        <input type="text" name="name" />
      </div>
      <div>
        <label>Password</label><br/>
        <input type="password" name="name" />
      </div>
    </div>
  );
}

export default Login;
