

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const navigate = useNavigate();
  const [owners, setOwners] = useState([]);
  const [freelances, setFreelances] = useState([]);
  const [projects, setProjects] = useState([]);

  const fetchOwners = async () => {
    try {
      const response = await axios.get('http://localhost:8080/users?UserType=owner');
      setOwners(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchFreelances = async () => {
    try {
      const response = await axios.get('http://localhost:8080/users?UserType=freelance');
      setFreelances(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchProjects = async () => {
    try {
      const response = await axios.get('http://localhost:8080/projects');
      setProjects(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchOwners();
    fetchFreelances();
    fetchProjects();
  }, []);

  useEffect(() => {
    // Check if the user is admin from localStorage
    const isAdmin = localStorage.getItem('userType') === 'admin';
    if (!isAdmin) {
      navigate('/'); // Redirect to another page if not admin
    }
  }, [navigate]);

  const handleDeleteOwner = async (ownerId) => {
    try {
      await axios.delete(`http://localhost:8080/users/${ownerId}`);
      setOwners((prevOwners) => prevOwners.filter((owner) => owner._id !== ownerId));
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteFreelance = async (freelanceId) => {
    try {
      await axios.delete(`http://localhost:8080/users/${freelanceId}`);
      setFreelances((prevFreelances) => prevFreelances.filter((freelance) => freelance._id !== freelanceId));
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteProject = async (projectId) => {
    try {
      await axios.delete(`http://localhost:8080/projects/${projectId}`);
      setProjects((prevProjects) => prevProjects.filter((project) => project._id !== projectId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Owners:</h2>
      <table className="table">
        <thead>
          <tr>
            <th>nom</th>
            <th>email</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {owners.map((owner) => (
            <tr key={owner._id}>
              <td> {owner.nom}</td>
              <td>{owner.email}</td>
              <td> <button onClick={() => handleDeleteOwner(owner._id)}>Supprimer</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Freelancers:</h2>
      <table className="table">
        <thead>
          <tr>
            <th>nom</th>
            <th>email</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {freelances.map((freelances) => (
            <tr key={freelances._id}>
              <td> {freelances.nom}</td>
              <td>{freelances.email}</td>
              <td><button onClick={() => handleDeleteFreelance(freelances._id)}>Supprimer</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Projects:</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project._id}>
              <td> {project.title}</td>
              <td>{project.description}</td>
              <td><button onClick={() => handleDeleteProject(project._id)}>Supprimer</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;
