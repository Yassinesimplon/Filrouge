
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [applications, setApplications] = useState([]);
  const style = {
    width: "100%",
  }
  
  const fetchApplications = async () => {
    try {
      const response = await axios.get('http://localhost:8080/candidatures',{
        headers:{
          Authorization : 'Bearer ' + localStorage.accessToken
        }});
      console.log({data:response.data});
      const ownerId = localStorage.user; // Remplacez par l'ID de l'owner connecté
      const ownerApplications = response.data.filter((item) => item?.Project?.owner === ownerId);

      setApplications(ownerApplications);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  const handleAcceptApplication = async (applicationId) => {
    try {
      await axios.put(`http://localhost:8080/candidatures/${applicationId}/state`, { state: 'accepted' },{
        headers:{
          Authorization : 'Bearer ' + localStorage.accessToken
        }});
      setApplications(prevApplications =>
        prevApplications.map(application => {
          if (application._id === applicationId) {
            return { ...application, state: 'accepted' };
          }
          return application;
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleRejectApplication = async (applicationId) => {
    try {
      await axios.put(`http://localhost:8080/candidatures/${applicationId}/state`, { state: 'refus' },{
        headers:{
          Authorization : 'Bearer ' + localStorage.accessToken
        }});
      setApplications(prevApplications =>
        prevApplications.map(application => {
          if (application._id === applicationId) {
            return { ...application, state: 'refus' };
          }
          return application;
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <table style={style}>
        <thead>
          <tr>
            <th>Nom du Freelancer</th>
            <th>Email</th>
            <th>CV</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {applications.map(application => (
            <tr key={application._id}>
              <td>{application.freelance.nom}</td>
              <td>{application.freelance.email}</td>
              <td>
                <a href={application.cv} target="_blank" rel="noopener noreferrer">
                  Voir le CV
                </a>
              </td>
              <td>
                {application.state === 'accepted' ? (
                  <span>Accepté</span>
                ) : application.state === 'refus' ? (
                  <span>Refusé</span>
                ) : (
                  <>
                    <button onClick={() => handleAcceptApplication(application._id)}>Accepter</button>
                    <button onClick={() => handleRejectApplication(application._id)}>Refuser</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
