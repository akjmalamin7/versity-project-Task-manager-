import Layout from "@/components/common/layout";
import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
const LazyLogin = lazy(() => import("@/pages/login/Login"));
const LazyRegistration = lazy(() => import("@/pages/registration/Registration"));
const LazyNotFound = lazy(() => import("@/pages/notFound/NotFound"));
const LazyDashboard = lazy(() => import("@/pages/dashboard/Dashboard"));

const ErrorFallback = () => <div>Something went wrong. Page not found.</div>;
export const router = createBrowserRouter([
  // !@_______ public route ______@
  {
    element: (
      <Suspense fallback="Loading...">
        <PublicRoutes />
      </Suspense>
    ),
    children: [
      {
        path: "/login",
        element: <LazyLogin />,
      },
      {
        path: "/registration",
        element: <LazyRegistration />,
      },
      {
        path: "*",
        element: <LazyNotFound />,
      },
    ],
  },
  // !@_______ Private route ______@
  {
    path: "/",
    element: (
      <Suspense fallback="Loading...">
        <Layout />
      </Suspense>
    ),
    errorElement: <ErrorFallback />,
    children: [
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: "/",
            element: <LazyDashboard />,
          },
        ],
      },
    ],
  },
]);
