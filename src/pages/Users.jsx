import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Header from "../components/Header";
import UserCard from "../components/UserCard";

const Users = () => {
  const { user } = useContext(AuthContext);
  const userList = [
      {
      id: 1,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      address: { city: "Gwenborough" },
      company: { name: "Romaguera-Crona" }
    },
      {
      id: 2,
      name: "Sam Smith",
      email: "Sincere@april.biz",
      address: { city: "London" },
      company: { name: "Romaguera-Crona" }
    },  {
      id: 1,
      name: "Priya Patel",
      email: "Sincere@april.biz",
      address: { city: "Surat" },
      company: { name: "Romaguera-Crona" }
    }
   
  ];
  return (
    <>
      {/* <p>Hello,{user?.email}</p> */}
      <div className="container mt-4">
        <h3 className="mb-4 fw-bold">Users</h3>

        <div className="row">
          {userList.map((userObj) => (
            <div className="col-md-4 col-sm-6 mb-4" key={user.id}>
              <UserCard user={userObj} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Users;
