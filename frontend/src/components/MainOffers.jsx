import React, { useEffect, useState } from 'react';
import Card from './Card';
import Img01 from "../assets/images/avatar.jpg";
import axios from "axios";

function Main() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null); // Nouvel état pour stocker le projet sélectionné

  const getAllProjects = async () => {
    try {
      const response = await axios.get('http://localhost:8080/projects/overview');
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

  const selectProject = (projectId) => {
    const project = projects.find((prj) => prj._id === projectId);
    setSelectedProject(project);
  };

  return (
    <div className='container offers'>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {projects.length ? (
          <>
            {projects.map((prj) => (
              <Card
                key={prj._id}
                img={Img01}
                text={prj.title}
                id={prj._id}
                onClick={() => selectProject(prj._id)} // Ajout de l'événement onClick pour sélectionner le projet
              />
            ))}
            {newProject && (
              <Card
                key={newProject._id}
                img={Img01}
                text="BACK-END NODEJS"
                id={newProject._id}
                onClick={() => selectProject(newProject._id)} // Ajout de l'événement onClick pour sélectionner le projet
              />
            )}
          </>
        ) : (
          <h1>Pas de projets</h1>
        )}
      </div>
      {/* <button href="./Apply" onClick={addProject}>Ajouter un projet</button> */}

      {/* Affichage des détails du projet sélectionné */}
      {selectedProject && (
        <div>
          <h2>Détails du projet :</h2>
          <p>Nom : {selectedProject.name}</p>
          <p>Description : {selectedProject.description}</p>
          {/* Ajoutez d'autres détails du projet ici */}
        </div>
      )}
    </div>
  );
}

export default Main;
