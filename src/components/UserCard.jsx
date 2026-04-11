import { useNavigate } from "react-router-dom";

const UserCard = ({ user }) => {
  const navigate = useNavigate();

  return (
 <div className="card user-card shadow-sm h-100 border-0">
      <div className="card-body text-center">

        {/* Avatar */}
        <div className="mb-3">
          <div className="avatar-circle">
            {user.name.charAt(0)}
          </div>
        </div>

        {/* Name */}
        <h5 className="card-title mb-1">{user.name}</h5>

        {/* Email */}
        <p className="text-muted small">{user.email}</p>

        {/* City */}
        <p className="mb-1">
          📍 {user.address?.city}
        </p>

        {/* Company */}
        <p className="text-muted small mb-3">
          🏢 {user.company?.name}
        </p>

        {/* Buttons */}
        <div className="d-flex justify-content-between gap-2">

          <button
            className="btn btn-primary btn-sm w-100"
            // onClick={() => navigate(`/users/${user.id}`)}
          >
            View
          </button>

          <button
            className="btn btn-warning btn-sm w-100"
            // onClick={() => onEdit(user)}
          >
            Edit
          </button>

          <button
            className="btn btn-danger btn-sm w-100"
            // onClick={() => onDelete(user.id)}
          >
            Delete
          </button>

        </div>
      </div>
    </div>

  );
};

export default UserCard;
