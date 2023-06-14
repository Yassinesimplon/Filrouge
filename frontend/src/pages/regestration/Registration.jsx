import React, { useState } from 'react'
import axios from 'axios';

// import "./index.css"
const Registration = () => {
    const [newUser, setNewUser] = useState({
        UserType: "freelance",
        email: "",
        nom: "",
        phone: "",
        password: ""
    }) 

    const handleRegister = (e) => {

        e.preventDefault() ;
        console.log(newUser);
        axios.post('http://localhost:8080/users/register', newUser)
        .then(response => {
          console.log(response.data); // Réponse du backend en cas de succès
        })
        .catch(error => {
          console.log(error.response.data); // Erreur renvoyée par le backend en cas d'échec
        });
    };

    return (<>
    <div className="testbox">
            <h1>Registration</h1>

            <form >
                <hr/>
                    <div className="accounttype">
                        <input type="radio" value="freelance" id="radioOne" name="account" defaultChecked onChange={(e)=>setNewUser({...newUser, UserType: e.target.value})} />
                        <label htmlFor="radioOne" className="radio"  >FREELANCER</label>
                        <input type="radio" value="owner" id="radioTwo" name="account" onChange={(e)=>setNewUser({...newUser, UserType: e.target.value})}/>
                        <label htmlFor="radioTwo" className="radio" >OWNER</label>
                    </div>
                    <hr/>
                        <label id="icon" htmlFor="name"><i className="icon-envelope "></i></label>
                        <input type="email"  onChange={(e)=>setNewUser({...newUser, email: e.target.value})} name="name" id="name" placeholder="Email" required />
                        <label id="icon" htmlFor="name"><i className="icon-user"></i></label>
                        <input type="text" onChange={(e)=>setNewUser({...newUser, nom: e.target.value})} name="name" id="name" placeholder="Name" required />
                        <label id="icon" htmlFor="name"><i className="icon-user"></i></label>
                        <input type="text" onChange={(e)=>setNewUser({...newUser, phone: e.target.value})} name="name" id="name" placeholder="Phone" required />
                        <label id="icon" htmlFor="name"><i className="icon-shield"></i></label>
                        <input type="password" onChange={(e)=>setNewUser({...newUser, password: e.target.value})} name="name" id="name" placeholder="Password" required />
                      
                       
                        <button onClick={handleRegister} className="button">Register</button>
                    </form>
                </div>
    </>)
    }


export default Registration