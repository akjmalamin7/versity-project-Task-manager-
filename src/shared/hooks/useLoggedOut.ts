import { userLoggedOut } from "@/shared/redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function useLoggedOut() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLoggedOut());
    localStorage.removeItem("auth");
    toast("Logged out")
    navigate("/login");
  };

  return { handleLogout };
}
