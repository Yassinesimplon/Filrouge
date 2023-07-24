import React, { useEffect, useState } from 'react'
import { useParams ,useNavigate } from 'react-router-dom'
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

   

    e.preventDefault();
    const storageRef = ref(storage, `images/${file.name}`);
    try {
      const uploadTask = await uploadBytes(storageRef, file, { contentType: file.type });
      const url = await getDownloadURL(uploadTask?.ref);
      
      console.log(url);
      await axios.post('http://localhost:8080/Candidatures',

      {freelance:localStorage.user, projectId, downloadURL:url },{
        headers:{
          Authorization : 'Bearer ' + localStorage.accessToken
        }

      });



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
        <p>{detailProject?.endDate?.toString().split('T')[0]}</p>
      </div>
      <div>
        <h2>Owner</h2>
        <p>{detailProject?.owner.email}</p>
        <p>{detailProject?.owner.UserType}</p>
        <p>{detailProject?.owner.nom}</p>
        <p>{detailProject?.owner.phone}</p>
      </div>
      <label className="form-label" htmlFor="customFile">INPUT FILE</label>
      <form onSubmit={handleUpload}>

        <input type="file" className="form-control" id="customFile" onChange={(e) => setFile(e.target.files[0])} />
        <button>Postuler!</button>
      </form>

    </div>
  )
}
export default Apply

