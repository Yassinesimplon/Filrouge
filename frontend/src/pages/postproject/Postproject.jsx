import React, { useState } from 'react'
import axios from 'axios';




const Postproject = () => {
    const owner = localStorage.user
    console.log({owner});
    const [newPost, setNewPost] = useState({

        title: "",
        description: "",
        startDate: "",
        endDate: "",
        status: "created",
        owner: owner,
    }) 

    const handlePost = (e) => {

        e.preventDefault() ;
        console.log(newPost);
        axios.post('http://localhost:8080/projects', newPost)
        .then(response => {
          console.log(response.data); // Réponse du backend en cas de succès
        })
        .catch(error => {
          console.log(error.response.data); // Erreur renvoyée par le backend en cas d'échec
        });
    };

    return (<>
        <form>

            <div className="form-group">
                <label for="exampleFormControlInput1">Titre de projet</label>
                <input type="Titre" className="form-control" id="exampleFormControlInput1" placeholder="Titre" onChange={(e) => setNewPost({...newPost, title:e.target.value })} />

                <div>
                    <label for="Date debut">Date debut:</label>
                    <input type="date" id="Date debut:" name="Date debut:" onChange={(e) => setNewPost({ ...newPost, startDate:e.target.value })} />

                    <label for="Date limite">Date limite:</label>
                    <input type="date" id="Date limite:" name="Date limite:" onChange={(e) => setNewPost({ ...newPost, endDate:e.target.value})} />
                </div>
            </div>
       
            <div>

            </div>

            <div className="form-group">
                <label for="exampleFormControlTextarea1">Description</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={(e) => setNewPost({ ...newPost, description:e.target.value})}></textarea>
            </div>
            <input onClick={handlePost}type="submit" value="POSTER LE PROJET" />

        </form>
    </>)
}
export default Postproject