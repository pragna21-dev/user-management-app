import { useNavigate } from "react-router-dom";

const UserCard = ({ user,onDelete }) => {
  const navigate = useNavigate();
 

  return (
    <div className="card mb-3 shadow-sm p-3">
      <div className="row">
        {/* Avatar */}
        <div className="col-12 col-lg-2  d-flex justify-content-center align-items-center">
          <div className="avatar-circle">
            <img
              src={`https://i.pravatar.cc/100?img=${user.id}`}
              alt="avatar"
              className="avatar-img"
            />
          </div>
        </div>

        {/* Details */}
        <div className="col-12 col-lg-6 text-center text-lg-start">
          <h5 className="mb-1">{user.name}</h5>
          <p className="mb-1 text-muted">@{user.username}</p>

          <p className="mb-1">📧 {user.email}</p>
          <p className="mb-1">
            📍 {user.address.city}, {user.address.street}
          </p>
          <p className="mb-1">🏢 {user.company.name}</p>

          <small className="text-secondary">
            📞 {user.phone} | 🌐 {user.website}
          </small>
        </div>
        <div className="col-12 col-lg-4 d-flex justify-content-lg-end justify-content-center align-items-end mt-3 mt-lg-0">
          <button
            className="btn btn-primary btn-sm px-2 mx-2"
            onClick={() => navigate(`/users/${user.id}`,{state:{name:user.name}})}
          >
            <i className="bi bi-eye me-2"></i>
            View
          </button>

          <button
            className="btn btn-warning btn-sm px-2 mx-2"
            // onClick={() => onEdit(user)}
          >
            <i className="bi bi-pencil me-2"></i>
            Edit
          </button>

          <button
            className="btn btn-outline-danger btn-sm px-2 mx-2 "
            onClick={() => onDelete(user)}
          >
            <i className="bi bi-trash me-2"></i>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
