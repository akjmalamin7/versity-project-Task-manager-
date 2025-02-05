import { UserSchema } from "@/shared/redux/features/profile/profile.models";
import { userUpdate } from "@/shared/redux/features/profile/profileSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function useProfileUpdate(user: UserSchema) {
  const profileDispatch = useDispatch();
  useEffect(() => {
    const localUser = localStorage.getItem("auth");
    const parseLocalUser = JSON.parse(localUser || "{}");
    /* profile distpach */
    profileDispatch(userUpdate(user));
    localStorage.setItem(
      "auth",
      JSON.stringify({
        token: parseLocalUser.token,
        user: user,
      })
    );
  },[profileDispatch,user]);
  /* auth dispatch */
}
