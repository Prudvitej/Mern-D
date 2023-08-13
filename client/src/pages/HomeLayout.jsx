import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
  <div>
    {/* <nav>Bunny Home</nav> */}
    <Outlet />
  </div>
  );
};
export default HomeLayout;
