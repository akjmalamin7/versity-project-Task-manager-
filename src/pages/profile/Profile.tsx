import Container from "@/components/common/container/Container";
import { userLoggedIn } from "@/shared/redux/features/auth/authSlice";
import { ProfileModels } from "@/shared/redux/features/profile/profile.models";
import {
  useGetProfileQuery,
  useProfileUpdateMutation,
} from "@/shared/redux/features/profile/profileApi";
import { userUpdate } from "@/shared/redux/features/profile/profileSlice";
import Button from "@/shared/ui/button";
import Card from "@/shared/ui/card";
import Input from "@/shared/ui/input";
import InputFile from "@/shared/ui/inputFile";
import Loader from "@/shared/ui/loader";
import Message from "@/shared/ui/message";
import { ChangeEvent, useEffect, useRef } from "react";
import { Controller, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const Profile = () => {
  const userImgView = useRef<HTMLImageElement | null>(null);
  const userImgRef = useRef<HTMLInputElement | null>(null);
  const dispatch = useDispatch();
  const authDispatch = useDispatch();

  //?@_______ Fetch profile data ______@
  const { data, error, isLoading: getProfileLoading, refetch } = useGetProfileQuery();
  const user = data?.data[0];

  // ?@________ update profile ______@
  const [profileUpdate, { isLoading }] = useProfileUpdateMutation();
  // Initialize React Hook Form
  const { register, handleSubmit, control, setValue } = useForm<ProfileModels>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      photo: "",
    },
  });

  // ?@_______ Set initial form values when user data is loaded ______@
  useEffect(() => {
    const localUser = localStorage.getItem("auth");
    const parseLocalUser = JSON.parse(localUser || "{}");
    if (user) {
      setValue("firstName", user.firstName || "");
      setValue("lastName", user.lastName || "");
      setValue("email", user.email || "");
      setValue("mobile", user.mobile || "");
      setValue("photo", user.photo || "");
    }
    dispatch(userUpdate(user!));
    localStorage.setItem(
      "auth",
      JSON.stringify({
        token: parseLocalUser.token,
        user: user,
      })
    );

    if (user && parseLocalUser.token) {
      authDispatch(
        userLoggedIn({
          token: parseLocalUser.token,
          user: user,
        })
      );
    }
  }, [user, setValue, dispatch, authDispatch]);

  // ?@__________ Image upload handler __________@
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = reader.result as string;
        setValue("photo", imageUrl); // ?@______ Update form value ____@
        if (userImgView.current) userImgView.current.src = imageUrl; // ?@____ Update preview _____@
      };
      reader.readAsDataURL(file);
    }
  };

  // ?@_____ Handle form submission _______@
  const onSubmit = async (data: ProfileModels) => {
    try {
      const updatedProfile = await profileUpdate(data).unwrap();
      toast(updatedProfile.message);
      dispatch(userUpdate(user!));
      refetch();
      // reset(updatedProfile.data[0]);
    } catch (err) {
      console.error("Registration failed:", err);
    }
  };

  if (getProfileLoading) return <Loader />;
  if (error) return <Message />;

  return (
    <Container width="sm">
      <Card radius="sm">
        <Card.CardBody padding="lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 gap-y-[20px] md:gap-y-[50px] py-[20px] px-[16px]">
              {/* Profile Picture */}
              <div className="flex justify-center">
                <div className="w-[150px] h-[150px] rounded-[5px] overflow-hidden">
                  <img
                    ref={userImgView}
                    src={user?.photo || ""}
                    alt={user?.firstName || "Profile Picture"}
                    className="w-full h-full"
                  />
                </div>
              </div>

              {/* File Upload */}
              <div className="col-span-2">
                <Controller
                  name="photo"
                  control={control}
                  render={() => (
                    <InputFile
                      ref={userImgRef}
                      color="light"
                      size="md"
                      type="file"
                      className="w-full"
                      onChange={handleImageUpload}
                    />
                  )}
                />
              </div>

              {/* Form Fields */}
              <div className="grid grid-cols-2 gap-[12px] lg:gap-[20px]">
                <div>
                  <Input
                    color="light"
                    size="md"
                    type="text"
                    className=""
                    placeholder="First Name"
                    {...register("firstName")}
                  />
                </div>
                <div>
                  <Input
                    color="light"
                    size="md"
                    type="text"
                    className=""
                    placeholder="Last Name"
                    {...register("lastName")}
                  />
                </div>
                <div>
                  <Input
                    color="light"
                    size="md"
                    type="email"
                    className=""
                    placeholder="Your Email"
                    {...register("email")}
                  />
                </div>
                <div>
                  <Input
                    color="light"
                    size="md"
                    type="text"
                    className=""
                    placeholder="Your Phone"
                    {...register("mobile")}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="col-span-2 flex justify-end">
                <Button color="white" type="submit" className="cursor-pointer" disabled={isLoading}>
                  {isLoading === true ? "Updating..." : " Update"}
                </Button>
              </div>
            </div>
          </form>
        </Card.CardBody>
      </Card>
    </Container>
  );
};

export default Profile;
