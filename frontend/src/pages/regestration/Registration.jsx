import React from 'react'
import "./index.css"
const Registration = () => {
    return <>
    <div className="testbox">
            <h1>Registration</h1>

            <form action="/">
                <hr/>
                    <div className="accounttype">
                        <input type="radio" value="None" id="radioOne" name="account"  />
                        <label htmlFor="radioOne" className="radio" >Personal</label>
                        <input type="radio" value="None" id="radioTwo" name="account" />
                        <label htmlFor="radioTwo" className="radio">Company</label>
                    </div>
                    <hr/>
                        <label id="icon" htmlFor="name"><i className="icon-envelope "></i></label>
                        <input type="text" name="name" id="name" placeholder="Email" required />
                        <label id="icon" htmlFor="name"><i className="icon-user"></i></label>
                        <input type="text" name="name" id="name" placeholder="Name" required />
                        <label id="icon" htmlFor="name"><i className="icon-shield"></i></label>
                        <input type="password" name="name" id="name" placeholder="Password" required />
                      
                       
                        <a href="#" className="button">Register</a>
                    </form>
                </div>
    </>
}

export default Registration