import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Users from "./pages/Users";
import MainLayout from "./Layout/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import UserPosts from "./pages/UserPosts";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public */}
          <Route path="/" element={<Login />} />
          {/* {Layout}  */}
          <Route element={<ProtectedRoute />}>
            <Route element={<MainLayout />}>
              <Route path="/users" element={<Users />} />
              <Route path="/users/:id" element={<UserPosts />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
       <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
}

export default App;
