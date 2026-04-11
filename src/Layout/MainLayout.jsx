import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
