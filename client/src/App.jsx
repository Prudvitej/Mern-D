import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Error from "./pages/Error";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/DashboardLayout";
import Admin from "./pages/Admin";
import { AddJob, AllJobs, Profile , } from "./pages";
import Stats from "./pages/Stats"






const checkDefaultTheme = () => {
  const isDarkTheme = localStorage.getItem("darkTheme") === "true";
  document.body.classList.toggle("dark-theme", isDarkTheme);
  return isDarkTheme;
};
const isDarkThemeEnabled = checkDefaultTheme();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "dashboard",
        element: <Dashboard isDarkThemeEnabled={isDarkThemeEnabled} />,
        children: [
          {
            path: "admin",
            element: <Admin />,
          },
          {
            path: "addjob",
            element: <AddJob />,
          },
          {
            path: "alljobs",
            element: <AllJobs/>,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path:"stats",
            element:<Stats />
          }
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
