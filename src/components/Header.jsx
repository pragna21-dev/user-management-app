import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import ConfirmModal from "./ConfirmModal";
import { toast } from "react-toastify";
const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const onLogout = () => {
    logout();
    setShowModal(false);
    toast.success("Logout successfully ✅");
    //   toast.success("Logged out!", {
    //   style: { background: "#6f42c1", color: "#fff" },
    // });
  };
  return (
    <>
      <nav className="navbar custom-navbar px-3">
        <span className="navbar-brand text-white">User Manage</span>
        {user && (
          <div>
            <span className="text-white">{user.email}</span>
            <button
              className="btn btn-primary btn-sm ms-3"
              onClick={() => setShowModal(true)}
            >
              Logout
            </button>
          </div>
        )}
      </nav>
      <ConfirmModal
        show={showModal}
        title="Logout"
        message={`Are you sure you want to Logout ?`}
        onConfirm={onLogout}
        onCancel={() => setShowModal(false)}
      />
      ;
    </>
  );
};

export default Header;
