import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Header from "../components/Header";

const Users = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      {/* <Header /> */}
      <p>Hello,{user?.email}</p>
    </>
  );
};
export default Users;
