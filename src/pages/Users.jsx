import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";



const Users = ()=>{
      const { user,logout } = useContext(AuthContext);

    return(
        
        <>
        <h1>Hello,{user?.email}</h1>
        <button className="btn btn-danger" onClick={logout}>
          Logout
        </button>
       
        </>
    )
}
export default Users;