// import { useNavigate, useParams } from "react-router-dom";

// import { fetcher } from "./fetcher";
// import useSWR from "swr";

// // import "./Profil.css"

// const Profile = () => {
//   const { id } = useParams();
//   console.log(id)
//   const navigate = useNavigate();
//   const { data: user, error } = useSWR(
//     `http://localhost:8080/users/${id}`,
//     fetcher
//   );
//  console.log(user)
//   const handleUpdate = () => {
//     navigate(`/users/update/${user._id}`);
//   };


//   return (
//     <div className="containerr">
//       {user && (
//         <div className="details-containerr">
//           <div className="details-cardd">
//             <div className="card-imgg">
//               <img src="/R.png"  width="50" height="50" alt="" />
//             </div>
//             <div className="card-bodyy">
//               <h3 className="card-titlee">{user.nom}</h3>
//               <p className="card-textt">Mon Profile :</p>
//               {/* <p>{user.nom}</p> */}
//               <p>{user.UserType}</p>
//               <p>{user.phone}</p>
//               <p>{user.email}</p>
//               {/* <div className="buttons">
//                 <button className="button" onClick={handleUpdate}>
//                   Update
//                 </button>
//                 <button className="button" onClick={handleSupprimer}>
//                   Supprimer
//                 </button>
//               </div> */}
//             </div>
//           </div>
//           <div className="details-descriptionn">
//             <div className="description-cardd">
//               <h2 className="description-headingg">A</h2>
//               <p className="description-textt">
//               </p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile


// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import useSWR from 'swr';
// import axios from 'axios';

// const fetcher = (url) => axios.get(url).then((res) => res.data);

// const fetchProjectsByOwner = async (ownerId) => {
//   try {
//     const response = await axios.get(`http://localhost:8080/projects?owner=${ownerId}`);
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     return [];
//   }
// };

// const Profile = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const { data: user, error } = useSWR(`http://localhost:8080/users/${id}`, fetcher);

//   // State to hold the projects published by the owner
//   const [projects, setProjects] = useState([]);

//   // Function to fetch projects published by the owner
//   const fetchProjects = async () => {
//     if (user && user.UserType === 'owner') {
//       try {
//         const ownerProjects = await fetchProjectsByOwner(user._id);
//         setProjects(ownerProjects);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };

//   useEffect(() => {
//     fetchProjects();
//   }, [user]);

//   const handleUpdate = () => {
//     navigate(`/users/update/${user._id}`);
//   };

//   return (
//     <div className="containerr">
//       {user && (
//         <div className="details-containerr">
//           <div className="details-cardd">
//             <div className="card-imgg">
//               <img src="/R.png" width="50" height="50" alt="" />
//             </div>
//             <div className="card-bodyy">
//               <h3 className="card-titlee">{user.nom}</h3>
//               <p className="card-textt">Mon Profile :</p>
//               <p>{user.UserType}</p>
//               <p>{user.phone}</p>
//               <p>{user.email}</p>
//             </div>
//           </div>
//           <div className="details-descriptionn">
//             <div className="description-cardd">
//               <h2 className="description-headingg">My Projects:</h2>
//               <ul>
//                 {projects.map((project) => (
//                   <li key={project._id}>
//                     {project.title} - {project.description}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Profile;


import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useSWR from 'swr';
import axios from 'axios';

const fetcher = (url) => axios.get(url).then((res) => res.data);

const fetchProjectsByOwner = async (ownerId) => {
  try {
    const response = await axios.get(`http://localhost:8080/projects/owner/${ownerId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const SupprimerProject = async (projectId) => {
  try {
    await axios.Supprimer(`http://localhost:8080/projects/${projectId}`);
  } catch (error) {
    console.error(error);
  }
};

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: user, error } = useSWR(`http://localhost:8080/users/${id}`, fetcher);

  // State to hold the projects published by the owner
  const [projects, setProjects] = useState([]);

  // Function to fetch projects published by the owner
  const fetchProjects = async () => {
    if (user && user.UserType === 'owner') {
      try {
        const ownerProjects = await fetchProjectsByOwner(user._id);
        setProjects(ownerProjects);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [user]);

  const handleUpdate = () => {
    navigate(`/users/update/${user._id}`);
  };

  const handleSupprimerProject = async (projectId) => {
    try {
      // Supprimer the project
      await SupprimerProject(projectId);

      // After successful deletion, update the state to remove the Supprimerd project
      setProjects((prevProjects) => prevProjects.filter((project) => project._id !== projectId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="containerr">
      {user && (
        <div className="details-containerr">
          <div className="details-cardd">
            <div className="card-imgg">
              <img src="/R.png" width="50" height="50" alt="" />
            </div>
            <div className="card-bodyy">
              <h3 className="card-titlee">{user.nom}</h3>
              <p className="card-textt">Mon Profile :</p>
              <p>{user.UserType}</p>
              <p>{user.phone}</p>
              <p>{user.email}</p>
            </div>
          </div>
          <div className="details-descriptionn">
            <div className="description-cardd">
              <h2 className="description-headingg">My Projects:</h2>
              <ul>
                {projects.map((project) => (
                  <li key={project._id}>
                    {project.title} - {project.description}
                    {user.UserType === 'owner' && (
                      <button onClick={() => handleSupprimerProject(project._id)}>Supprimer</button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
