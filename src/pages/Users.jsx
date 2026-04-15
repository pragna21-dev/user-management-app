import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Header from "../components/Header";
import UserCard from "../components/UserCard";
import { getUsers } from "../services/userService";
import ConfirmModal from "../components/ConfirmModal";

const Users = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const getUserList = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
        console.log(data);
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
    console.log("delete call");
    const latestUSers = users.filter((u) => u.id !== selectedUser.id);
    setUsers(latestUSers);
    setShowModal(false);
  };
  return (
    <>
      {/* <p>Hello,{user?.email}</p> */}
      <div className="container mt-4">
        <h3 className="mb-4 fw-bold">Users</h3>

        {users &&
          users.map((userObj) => (
            <UserCard user={userObj} key={userObj.id} onDelete={handleDelete} />
          ))}
        {/* ✅ Reusable Modal */}
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
