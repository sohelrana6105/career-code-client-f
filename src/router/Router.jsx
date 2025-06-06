import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/home/Home";
import Register from "../pages/Register/Register";
import SignIn from "../pages/signIn/SignIn";
import JobDetails from "../pages/JobDetails/JobDetails";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import JobApply from "../pages/jobApply/JobApply";
import MyApplications from "../pages/myapplications/MyApplications";
import AddJob from "../pages/Addjob/AddJob";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <div>Not found</div>,
    children: [
      {
        index: true,
        Component: Home,
      },

      {
        path: "/jobs/:id",
        Component: JobDetails,
      },
      {
        path: "/jobApply/:id",
        element: (
          <PrivateRoutes>
            <JobApply></JobApply>{" "}
          </PrivateRoutes>
        ),
      },
      {
        path: "/myapplications",
        element: (
          <PrivateRoutes>
            <MyApplications></MyApplications>
          </PrivateRoutes>
        ),
      },
      {
        path: "/addjob",
        element: (
          <PrivateRoutes>
            <AddJob></AddJob>
          </PrivateRoutes>
        ),
      },

      {
        path: "register",
        Component: Register,
      },
      {
        path: "signIn",
        Component: SignIn,
      },
    ],
  },
]);
