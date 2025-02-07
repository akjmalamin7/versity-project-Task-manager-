import Layout from "@/components/common/layout";
import Loader from "@/shared/ui/loader";
import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
const LazyLogin = lazy(() => import("@/pages/login/Login"));
const LazyRegistration = lazy(() => import("@/pages/registration/Registration"));
const LazyNotFound = lazy(() => import("@/pages/notFound/NotFound"));
const LazyDashboard = lazy(() => import("@/pages/dashboard/Dashboard"));
const LazyProfile = lazy(() => import("@/pages/profile/Profile"));
const LazyCreateTask = lazy(() => import("@/pages/createTask/CreateTask"));
const LazyAllTask = lazy(() => import("@/pages/allTask/AllTask"));
const LazyNewTask = lazy(() => import("@/pages/newTask/NewTask"));
const LazyInProgressTask = lazy(() => import("@/pages/inProgressTask/InProgressTask"));
const LazyCompletedTask = lazy(() => import("@/pages/completedTask/CompletedTask"));
const LazyCanceledTask = lazy(() => import("@/pages/canceledTask/CanceledTask"));
const LazyUpdateTask = lazy(() => import("@/pages/updateTask/UpdateTask"));

const ErrorFallback = () => <div>Something went wrong. Page not found.</div>;
export const router = createBrowserRouter([
  // !@_______ public route ______@
  {
    element: (
      <Suspense fallback={<Loader />}>
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
    element: <Layout />,
    errorElement: <ErrorFallback />,
    children: [
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: "/",
            element: (
              <Suspense fallback={<Loader type="full_width" />}>
                <LazyDashboard />
              </Suspense>
            ),
            errorElement: <ErrorFallback />,
          },
          {
            path: "/profile",
            element: (
              <Suspense fallback={<Loader type="full_width" />}>
                <LazyProfile />
              </Suspense>
            ),
            errorElement: <ErrorFallback />,
          },
          {
            path: "/create",
            element: (
              <Suspense fallback={<Loader type="full_width" />}>
                <LazyCreateTask />
              </Suspense>
            ),
            errorElement: <ErrorFallback />,
          },
          {
            path: "/all",
            element: (
              <Suspense fallback={<Loader type="full_width" />}>
                <LazyAllTask />
              </Suspense>
            ),
            errorElement: <ErrorFallback />,
          },
          {
            path: "/new",
            element: (
              <Suspense fallback={<Loader type="full_width" />}>
                <LazyNewTask />
              </Suspense>
            ),
            errorElement: <ErrorFallback />,
          },
          {
            path: "/progress",
            element: (
              <Suspense fallback={<Loader type="full_width" />}>
                <LazyInProgressTask />
              </Suspense>
            ),
            errorElement: <ErrorFallback />,
          },
          {
            path: "/completed",
            element: (
              <Suspense fallback={<Loader type="full_width" />}>
                <LazyCompletedTask />
              </Suspense>
            ),
            errorElement: <ErrorFallback />,
          },
          {
            path: "/canceled",
            element: (
              <Suspense fallback={<Loader type="full_width" />}>
                <LazyCanceledTask />
              </Suspense>
            ),
            errorElement: <ErrorFallback />,
          },
          {
            path: "/tasks/:_id",
            element: (
              <Suspense fallback={<Loader type="full_width" />}>
                <LazyUpdateTask />
              </Suspense>
            ),
            errorElement: <ErrorFallback />,
          },
          {
            path: "*",
            element: (
              <Suspense fallback={<Loader type="full_width" />}>
                <LazyNotFound />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);
