import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import UserCard from "../components/UserCard";
import { getUsers } from "../services/userService";
import ConfirmModal from "../components/ConfirmModal";
import { toast } from "react-toastify";

const Users = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loadingUsers, setLoadingUsers] = useState(false);

  useEffect(() => {
    const getUserList = async () => {
      try {
        setLoadingUsers(true);
        const data = await getUsers();
        setUsers(data);
        setLoadingUsers(false);
        console.log(data, loadingUsers);
      } catch (err) {
        console.log(err.message);
      } finally {
      }
    };
    getUserList();
  }, []);

  const handleDelete = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };
  const confirmDelete = () => {
    const latestUSers = users.filter((u) => u.id !== selectedUser.id);
    setUsers(latestUSers);
    toast.success(`${selectedUser.name} removed ✅`);
    setShowModal(false);
  };
  return (
    <>
      <div className="container mt-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="mb-0 fw-bold">Users</h3>
          <button className="btn btn-primary px-4" disabled={loadingUsers}>
            {" "}
            + Add User
          </button>
        </div>
        {loadingUsers ? (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: "120px" }}
          >
            <div className="spinner-border text-primary"></div>
          </div>
        ) : (
          users.map((userObj) => (
            <UserCard user={userObj} key={userObj.id} onDelete={handleDelete} />
          ))
        )}

        <ConfirmModal
          show={showModal}
          title="Delete User"
          message={`Are you sure you want to delete ${selectedUser?.name}?`}
          onConfirm={confirmDelete}
          onCancel={() => setShowModal(false)}
        />
      </div>
    </>
  );
};
export default Users;
