import { RootState } from "@/shared/redux/store/store";
import { useSelector } from "react-redux";
export default function useAuth(){
  const auth = useSelector((state: RootState) => state.auth);
  if(auth?.token && auth?.user){
    return true
  }
  return false
}