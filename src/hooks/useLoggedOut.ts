import { userLoggedOut } from "@/redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function useLoggedOut() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userLoggedOut());
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return { handleLogout };
}
