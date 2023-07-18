import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
// import "./Apply.css"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCxgaIPlUv3BPSPZglnG-WV14aXplgfOk",
  authDomain: "main-dev-eldjazair.firebaseapp.com",
  projectId: "main-dev-eldjazair",
  storageBucket: "main-dev-eldjazair.appspot.com",
  messagingSenderId: "755381939029",
  appId: "1:755381939029:web:7ac37f81e6ad35734cdddc"
};

// Initialize Firebase
const Apply = () => {
  const [file, setFile] = useState(null);
  // console.log(params)
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);
  const [loading, setLoading] = useState(true)

  const handleUpload = async (e) => {
    // const handleUpload = async (e) => {
    //   e.preventDefault();
    //   const storageRef = ref(storage, `images/${file.name}`);
    //   try {
    //     const uploadTask = await uploadBytes(storageRef, file, { contentType: file.type });
    //     const url = await getDownloadURL(uploadTask?.ref);

    //     // Envoyer l'URL de téléchargement au backend
    //     await axios.post('http://localhost:8080/upload', { url });

    //     console.log(url);
    //     console.log('done');
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };


    e.preventDefault();
    const storageRef = ref(storage, `images/${file.name}`);
    try {
      const uploadTask = await uploadBytes(storageRef, file, { contentType: file.type });
      const url = await getDownloadURL(uploadTask?.ref);
      
      console.log(url);
      await axios.post('http://localhost:8080/Candidatures', {freelance:localStorage.user, projectId, downloadURL:url },{
        headers:{
          Authorization : 'Bearer ' + localStorage.accessToken
        }
      });


      // const handleUpload = async (e) => {
      //   e.preventDefault();

      //   if (file) {
      //     const storageRef = ref(storage, `cv/${file.name}`);
      //     try {
      //       await uploadBytes(storageRef, file, { contentType: file.type });
      //       const downloadURL = await getDownloadURL(storageRef);

      //       // Envoyer l'URL de téléchargement au backend
      //       await axios.post('http://localhost:8080/Candidatures', {freelance:localStorage.user, projectId, downloadURL });

      //       console.log(downloadURL);
      //       console.log('done');
      //     } catch (error) {
      //       console.error(error);
      //     }
      //   }
      // };








      console.log('done');
    } catch (error) {
      console.log(error)
    }


  }
  const { projectId } = useParams()

  const [detailProject, setDetailProject] = useState([])
  useEffect(() => {
    const afficherDetails = async (id) => {
      try {
        const result = await axios.get('http://localhost:8080/projects/' + id)
        if (result.data) setDetailProject(result.data)
      } catch (error) {
        console.log(error)
      } finally { setLoading(false) }
    }
    afficherDetails(projectId)
  }, [])
  console.log(detailProject)
  if (loading) return <h1>Loading...</h1>
  return (
    <div className="formbold-main-wrapper">
      {/* <h1>{projectId}</h1> */}
      <div>
        <h2>Description</h2>
        <p>{detailProject?.description}</p>
      </div>
      <div>
        <h2>Start date</h2>
        <p>{detailProject?.startDate?.toString().split('T')[0]}</p>
      </div>
      <div>
        <h2>End date</h2>
        <p>{detailProject?.endDate.toString().split('T')[0]}</p>
      </div>
      <div>
        <h2>Owner</h2>
        <p>{detailProject?.owner.email}</p>
        <p>{detailProject?.owner.UserType}</p>
        <p>{detailProject?.owner.nom}</p>
        <p>{detailProject?.owner.phone}</p>
      </div>
      <label className="form-label" htmlFor="customFile">Default file input example</label>
      <form onSubmit={handleUpload}>

        <input type="file" className="form-control" id="customFile" onChange={(e) => setFile(e.target.files[0])} />
        <button>Postuler!</button>
      </form>

    </div>
  )
}
export default Apply


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { initializeApp } from 'firebase/app';
// import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const storage = getStorage(app);

// const Apply = () => {
//   const { projectId } = useParams();
//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [detailProject, setDetailProject] = useState([]);

//   useEffect(() => {
//     const fetchProjectDetails = async (id) => {
//       try {
//         const result = await axios.get(`http://localhost:8080/projects/${id}`);
//         if (result.data) {
//           setDetailProject(result.data);
//         }
//       } catch (error) {
//         console.log(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProjectDetails(projectId);
//   }, [projectId]);

// const handleUpload = async (e) => {
//   e.preventDefault();

//   if (file) {
//     const storageRef = ref(storage, `cv/${file.name}`);
//     try {
//       await uploadBytes(storageRef, file, { contentType: file.type });
//       const downloadURL = await getDownloadURL(storageRef);

//       // Envoyer l'URL de téléchargement au backend
//       // await axios.post('http://localhost:8080/candidatures', { projectId, downloadURL });

//       console.log(downloadURL);
//       console.log('done');
//     } catch (error) {
//       console.error(error);
//     }
//   }
// };

//   if (loading) return <h1>Loading...</h1>;

//   return (
//     <div className="formbold-main-wrapper">
//       <div>
//         <h2>Description</h2>
//         <p>{detailProject?.description}</p>
//       </div>
//       <div>
//         <h2>Start date</h2>
//         <p>{detailProject?.startDate?.toString().split('T')[0]}</p>
//       </div>
//       <div>
//         <h2>End date</h2>
//         <p>{detailProject?.endDate?.toString().split('T')[0]}</p>
//       </div>
//       <div>
//         <h2>Owner</h2>
//         <p>{detailProject?.owner?.email}</p>
//         <p>{detailProject?.owner?.UserType}</p>
//         <p>{detailProject?.owner?.nom}</p>
//         <p>{detailProject?.owner?.phone}</p>
//       </div>
//       <label className="form-label" htmlFor="customFile">Upload CV</label>
//       <form onSubmit={handleUpload}>
//         <input type="file" className="form-control" id="customFile" onChange={(e) => setFile(e.target.files[0])} />
//         <button>Postuler!</button>
//       </form>
//     </div>
//   );
// };

// export default Apply;
