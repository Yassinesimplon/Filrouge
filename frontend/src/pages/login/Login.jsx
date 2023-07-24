




import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import  AuthContext  from '../../AuthContext.js';
import { UserStateContext } from '../../context/UserStateProvider.jsx';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
    const  setAuthHeaders  = useContext(AuthContext);

  const [user, setUser] = useState()


  const {setIsLoggedIn, setUserType} = useContext(UserStateContext)

  const nav = useNavigate();

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);


const handleLogin = async (event) => {
  event.preventDefault();

  try {

    const response = await axios.post('http://localhost:8080/users/login', { email, password });
      setUser(response.data)
       const accessToken  =  response.data.token;
       const isLoggedIn  = true;


// localStorage.setItem('accessToken', accessToken); // Set the access token in local storage
localStorage.accessToken = accessToken
localStorage.isLoggedIn = isLoggedIn


      //  localStorage.setItem('user', response.data)
  console.log(response.data)
  localStorage.user = response.data.user
  localStorage.userType = response.data.userType
  setIsLoggedIn(true)
  setUserType(response.data.userType)

    alert('Login successful!');
    nav('/');
  } catch (error) {
    console.error(error);
    alert('Login failed!');
  }
};



  return (
    <div className="form-comp cfb">
      <h1>Login!</h1>
      <form className="sign-up-form cfb" onSubmit={handleLogin}>
        <label>
          Email:
          <br />
          <input type="email" value={email} onChange={handleEmailChange} />
        </label>
        <label>
          Password:
          <br />
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button>Login!</button>
      </form>
    </div>
  );
};

export default Login;
