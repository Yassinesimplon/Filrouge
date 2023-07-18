import { useNavigate, useParams } from "react-router-dom";

import { fetcher } from "./fetcher";
import useSWR from "swr";

import "./Profil.css"

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
    <div className="containerr">
      {user && (
        <div className="details-containerr">
          <div className="details-cardd">
            <div className="card-imgg">
              <img src="/entv_dz.png" alt="" />
            </div>
            <div className="card-bodyy">
              <h3 className="card-titlee">{user.nom}</h3>
              <p className="card-textt">About how to get the book</p>
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
          <div className="details-descriptionn">
            <div className="description-cardd">
              <h2 className="description-headingg">About the Book</h2>
              <p className="description-textt">
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