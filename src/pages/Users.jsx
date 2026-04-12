import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Header from "../components/Header";
import UserCard from "../components/UserCard";
import { getUsers } from "../services/userService";

const Users = () => {
  const { user } = useContext(AuthContext);
  const [users, setUsers] = useState([]);

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
  return (
    <>
      {/* <p>Hello,{user?.email}</p> */}
      <div className="container mt-4">
        <h3 className="mb-4 fw-bold">Users</h3>

        <div className="row">
          { users && users.map((userObj) => (
            <div className="col-md-4 col-sm-6 mb-4" key={userObj.id}>
              <UserCard user={userObj} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Users;
