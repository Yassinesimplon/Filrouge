


// // import React, { useState, useEffect, useContext } from 'react';
// // import axios from 'axios';
// // import { useNavigate } from 'react-router-dom';
// // import { AuthContext } from './AuthContext';

// // const Login = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //     const { setAuthHeaders } = useContext(AuthContext);

// //   const [user, setUser] = useState()

// //   const nav = useNavigate();

// //   const handleEmailChange = (event) => setEmail(event.target.value);
// //   const handlePasswordChange = (event) => setPassword(event.target.value);


// // const handleLogin = async (event) => {
// //   event.preventDefault();

// //   try {

// //     const response = await axios.post('http://localhost:8080/login', { email, password });
// //       setUser(response.data)
// //        const accessToken  =  response.data.accessToken;

// // localStorage.setItem('accessToken', accessToken); // Set the access token in local storage

// //        localStorage.setItem('user', response.data)
// //   console.log(response.data)

// //   axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
// //   setAuthHeaders({ Authorization: `Bearer ${accessToken}` });
 
// //     alert('Login successful!');
// //     nav('/Dashboard');
// //   } catch (error) {
// //     console.error(error);
// //     alert('Login failed!');
// //   }
// // };



// //   return (
// //     <div className="form-comp cfb">
// //       <h1>Login!</h1>
// //       <form className="sign-up-form cfb" onSubmit={handleLogin}>
// //         <label>
// //           Email:
// //           <br />
// //           <input type="email" value={email} onChange={handleEmailChange} />
// //         </label>
// //         <label>
// //           Password:
// //           <br />
// //           <input type="password" value={password} onChange={handlePasswordChange} />
// //         </label>
// //         <br />
// //         <button>Login!</button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default Login;









// import  { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from 'axios'
// const Login = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const navigate = useNavigate();
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // console.log({ email, password });
//         signInUser(email,password)
        
//     };
    
//     const signInUser = (email, password) => {
//         axios
//             .post("http://localhost:8080/api/user/login", { email, password })
//             .then(response => {
//                 console.log(response.data); // Traiter la réponse du backend
                
//                 navigate('/dashboard');
//             })
//             .catch(error => {
//                 console.error(error);
//             });
//     };
//     return (
//         <main className='login'>
//             <h1 className='loginTitle'>Log into your account</h1>
//             <form className='loginForm' onSubmit={handleSubmit}>
//                 <label htmlFor='email'>Email Address</label>
//                 <input
//                     type='text'
//                     name='email'
//                     id='email'
//                     required
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <label htmlFor='password'>Password</label>
//                 <input
//                     type='password'
//                     name='password'
//                     id='password'
//                     required
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button className='loginBtn'>SIGN IN</button>
//                 <p>
//                     Don't have an account? <Link to='/register'>Create one</Link>
//                 </p>
//             </form>
//         </main>
//     );
// };
// export default Login;




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
