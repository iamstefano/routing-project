import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage/ErrorPage";
import Layout from "./Layout/layout";
import Home from "../routes/Home/home";
import Locations from "../routes/Locations/locations";
import About from "../routes/About/about";
import Root from "../routes/Root/root";
import Location from "../routes/Locations/components/Location/location";
import Contacts from "../routes/Contacts/contacts";
import Login from "../routes/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        element: <Layout />,
        children: [
          { index: true, element: <Home /> },
          { path: "about", element: <About /> },
          { path: "contacts", element: <Contacts /> },
          {
            path: "locations",
            element: <Locations />,
          },
          { path: "locations/:locationId", element: <Location /> },
          { path: "login", element: <Login /> },
        ],
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
