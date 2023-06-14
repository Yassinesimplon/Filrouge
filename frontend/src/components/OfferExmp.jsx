import React, { useEffect, useState } from 'react';
import Card from './Card';
import Img01 from "../assets/images/avatar.jpg";
import axios from "axios";

function Main() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState(null);

  const getAllProjects = async () => {
    try {
      const response = await axios.get('http://localhost:8080/projects');
      if (response.data) {
        setProjects(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllProjects();
  }, [newProject]);

  const addProject = async () => {
    try {
      // Effectuer une requête POST pour ajouter le projet à l'API
      const response = await axios.post('http://localhost:8080/projects', { /* Données du projet */ });
      if (response.data) {
        setNewProject(response.data); // Mettre à jour l'état newProject avec le projet ajouté
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='container offers'>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {projects.length ? (
          <>
            {projects.map((prj) => (
              <Card key={prj._id} img={Img01} text="BACK-END NODEJS" id={prj._id} />
            ))}
            {newProject && (
              <Card key={newProject._id} img={Img01} text="BACK-END NODEJS" id={newProject._id} />
            )}
          </>
        ) : (
          <h1>Pas de projets</h1>
        )}
      </div>
      <button href="./Apply" onClick={addProject}>Ajouter un projet</button>
    </div>
  );
}

export default Main;
