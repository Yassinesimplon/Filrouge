// import React from "react";

// import { Link, NavLink } from "react-router-dom"

// import logo from '../assets/images/entv_dz.png'

// function Heading() {
//     return (
//         <nav className="navbar navbar-default">

//             <div className="container-fluid">

//                 <div className="navbar-header">
//                     <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
//                         <span className="icon-bar"></span>
//                         <span className="icon-bar"></span>
//                         <span className="icon-bar"></span>
//                     </button>
//                     <a className="navbar-brand" href="">
//                         <img src={logo} width="30" height="30" alt="logo" />
//                     </a>
//                     <NavLink className="navbar-brand" to="/">MAIN-DEV-ELDJAZAIR
//                     </NavLink>
//                 </div>

//                 <div className="collapse navbar-collapse" id="myNavbar">

//                     <ul className="nav navbar-nav navbar-right">
//                         <li className=" filter-btn"><NavLink to="/">Home</NavLink></li>
//                         <li className=" filter-btn"><NavLink to="/Postproject">Ajouter un Projet</NavLink></li>
//                         <li className=" filter-btn"><NavLink to="/login">Se connecter</NavLink></li>

//                         {/* <li className="dropdown filter-btn">
//                             <NavLink className="dropdown-toggle" data-toggle="dropdown" to="/offers">Projet<span className="caret"></span></NavLink>
//                             <ul className="dropdown-menu">
//                                 <li><Link to="/notfound" target="_blank">Backend</Link></li>
//                                 <li><Link to="/notfound" target="_blank">Frontend</Link></li> */}
//                                 {/* <li><Link to="/notfound" target="_blank">Drame – Comédie dramatique</Link></li>
//                                 <li><Link to="/notfound" target="_blank">Fiction jeunesse (film ou animation)</Link></li>
//                                 <li><Link to="/notfound" target="_blank">Film musical</Link></li>
//                                 <li><Link to="/notfound" target="_blank">Histoire </Link></li>
//                                 <li><Link to="/notfound" target="_blank">Aventure </Link></li> */}
//                             {/* </ul>
//                         </li> */}
//                         {/* <li className="filter-btn"><Link to="/calander" target="_blank">Calendar</Link></li> */}

//                         {/* <li className="dropdown filter-btn">
//                             <NavLink className="dropdown-toggle" data-toggle="dropdown" to="/events">Events<span className="caret"></span></NavLink>

//                         </li> */}

//                         <li className="filter-btn"><Link to="/careers">Careers</Link></li>
//                         <li className="filter-btn"><Link to="/register">S'inscrire</Link></li>

//                         <li className="filter-btn"><a href="#contact">Contact</a></li>
//                     </ul>
//                 </div>
//             </div>

//         </nav>
//     );

// }

// export default Heading;

// import React, { useContext, useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import logo from '../assets/images/entv_dz.png';
// import { UserStateContext } from "../context/UserStateProvider";

// function Heading() {


// const {isLoggedIn, userType} = useContext(UserStateContext)

//   return (
//     <nav className="navbar navbar-default">
//       <div className="container-fluid">
//         <div className="navbar-header">
//           <button
//             type="button"
//             className="navbar-toggle"
//             data-toggle="collapse"
//             data-target="#myNavbar"
//           >
//             <span className="icon-bar"></span>
//             <span className="icon-bar"></span>
//             <span className="icon-bar"></span>
//           </button>
//           <a className="navbar-brand" href="">
//             <img src={logo} width="30" height="30" alt="logo" />
//           </a>
//           <NavLink className="navbar-brand" to="/">
//             MAIN-DEV-ELDJAZAIR
//           </NavLink>
//         </div>

//         <div className="collapse navbar-collapse" id="myNavbar">
//           <ul className="nav navbar-nav navbar-right">
//             <li className="filter-btn">
//               <NavLink to="/">Home</NavLink>
//             </li>
//             <li className="filter-btn">
//               <a href="#contact">Contact</a>
//             </li>
//             <li className="filter-btn">
//               <Link to="/careers">Careers</Link>
//             </li>
//             {userType === "owner"? (
//               <li className="filter-btn">
//                 <NavLink to="/Postproject">Ajouter un Projet</NavLink>
//               </li>
//             ) : <></>}
//             {!isLoggedIn ? (
//               <>
//                 <li className="filter-btn">
//                   <NavLink to="/login">Se connecter</NavLink>
//                 </li>
//                 <li className="filter-btn">
//                   <Link to="/register">S'inscrire</Link>
//                 </li>
//               </>
//             ) : (
//               <li className="filter-btn">
//                 <NavLink to="/">logout</NavLink>
//               </li>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Heading;
// Fichier Heading.jsx
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/images/maindev-logo.png';
import { UserStateContext } from '../context/UserStateProvider';

function Heading() {
  const { isLoggedIn, userType, setIsLoggedIn, setUserType } = useContext(UserStateContext);


  const user = localStorage.getItem('accessToken');
  const userId = localStorage.getItem('user')
  const handleLogout = async () => {
    try {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('user');
      localStorage.removeItem('userType');
      localStorage.setItem('isLoggedIn', 'false');
      setIsLoggedIn(false);
      setUserType(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#myNavbar"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="">
            <img src={logo} width="30" height="30" alt="logo" />
          </a>
          <NavLink className="navbar-brand" to="/">
            MAIN-DEV-ELDJAZAIR
          </NavLink>
        </div>

        <div className="collapse navbar-collapse" id="myNavbar">
          <ul className="nav navbar-nav navbar-right">
            <li className="filter-btn">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="filter-btn">
              <a href="#contact">Contact</a>
            </li>
            <li className="filter-btn">
              <Link to="/careers">Careers</Link>
            </li>
            {userType === 'owner' && (
              <>
                <li className="filter-btn">
                  <NavLink to="/Postproject">Ajouter un Projet</NavLink>
                </li>
                <li className="filter-btn">
                  <NavLink to="/DashBoard">DashBoard</NavLink>
                </li>
              </>
            )}
            {userType === 'admin' && (
              <li className="filter-btn">
                <NavLink to="/dashboardAdmin">DashBoard</NavLink>

              </li>
            )}
            {!isLoggedIn ? (
              <>
                <li className="filter-btn">
                  <NavLink to="/login">Se connecter</NavLink>
                </li>
                <li className="filter-btn">
                  <Link to="/register">S'inscrire</Link>
                </li>
              </>
            ) : (
              <>
 <li className="filter-btn">
                <NavLink to={`/Profile/${userId}`}>
                  Profil
                </NavLink>

              </li>
              <li className="filter-btn">
                <NavLink to="/" onClick={handleLogout}>
                  Logout
                </NavLink>
                
              </li>
               
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Heading;
