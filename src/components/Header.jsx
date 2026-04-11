import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
const Header = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <span className="navbar-brand">User Manage</span>
      {user && (
        <div>
          <span className="text-white">{user.email}</span>
          <button className="btn btn-danger btn-sm ms-3" onClick={logout}>
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
