import { useNavigate, useParams } from "react-router-dom";

import { fetcher } from "./fetcher";
import useSWR from "swr";


const Profile = () => {
  const { id } = useParams();
  console.log(id)
  const navigate = useNavigate();
  const { data: user, error } = useSWR(
    `http://localhost:8080/users/${id}`,
    fetcher
  );

  const handleUpdate = () => {
    navigate(`/users/update/${user._id}`);
  };

//   const handleDelete = () => {
//     fetch(`http://localhost:8080/api/books/delete/${id}`, {
//       method: "DELETE",
//     }).then(() => {
//       navigate("/users");
//     });
//   };

  return (
    <div className="container">
      {user && (
        <div className="details-container">
          <div className="details-card">
            <div className="card-img">
              <img src="/entv_dz.png" alt="" />
            </div>
            <div className="card-body">
              <h3 className="card-title">{user.nom}</h3>
              <p className="card-text">About how to get the book</p>
              {/* <p>{user.nom}</p> */}
              <p>{user.UserType}</p>
              <p>{user.phone}</p>
              <p>{user.email}</p>
              {/* <div className="buttons">
                <button className="button" onClick={handleUpdate}>
                  Update
                </button>
                <button className="button" onClick={handleDelete}>
                  Delete
                </button>
              </div> */}
            </div>
          </div>
          <div className="details-description">
            <div className="description-card">
              <h2 className="description-heading">About the Book</h2>
              <p className="description-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile