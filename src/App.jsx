import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import MasterLayout from "./layouts/MasterLayout/MasterLayout";
import NotFound from "./components/NotFound/NotFound";
import AllVehicles from "./pages/AllVehicles/AllVehicles";
import CarDetails from "./pages/CarDetails/CarDetails";

function App() {
  let routers = createBrowserRouter([
    {
      path: "/",
      element: <MasterLayout />,
      children: [
        {
          index: true,
          element: <Navigate to="/home" />,
        },
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/home/all-vehicles",
          element: <AllVehicles />,
        },
        {
          path: "/home/all-vehicles/car/:id",
          element: <CarDetails />,
        },

        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routers} />;
}

export default App;
