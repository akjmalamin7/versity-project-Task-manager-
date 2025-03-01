import useAuthCheck from "@/shared/hooks/useAtuhChecked";
import Loader from "@/shared/ui/loader";
import { RouterProvider } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import { router } from "./router/routes";
const App = () => {
  const authChecked = useAuthCheck();
  if (!authChecked) {
    return <Loader type="full_width" />;
  }
  return (
    <>
      <ToastContainer
        position="top-center"
        transition={Slide}
        autoClose={1500}
        toastStyle={{ background: "#ffffff" }}
      />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
