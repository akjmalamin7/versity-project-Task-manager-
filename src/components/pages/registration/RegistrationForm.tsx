import { REGISTRATION_SCHEMA } from "@/redux/features/auth/auth.schema";
import { UserSchema } from "@/redux/features/auth/auth.types";
import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";
import InputFile from "@/shared/ui/inputFile/InputFile";
import Text from "@/shared/ui/text";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<UserSchema>({
    resolver: yupResolver(REGISTRATION_SCHEMA),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      photo: "", 
      password: "",
    },
  });

  const onSubmit: SubmitHandler<UserSchema> = async (data) => {
    console.log(data);
    // try {
    //   await login(data).unwrap();
    //   navigate("/packages");
    // } catch (err) {
    //   console.error("Registration failed:", err);
    // }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-[12px] lg:gap-[16px] mt-[20px]">
        <div>
          <Input {...register("firstName")} className="border-[#D6D6D6]" placeholder="First Name" />
          {errors.firstName && (
            <Text size="sm" className="text-red-500">
              {errors.firstName.message}
            </Text>
          )}
        </div>

        <div>
          <Input {...register("lastName")} className="border-[#D6D6D6]" placeholder="Last Name" />
          {errors.lastName && (
            <Text size="sm" className="text-red-500">
              {errors.lastName.message}
            </Text>
          )}
        </div>

        <div>
          <Input {...register("email")} className="border-[#D6D6D6]" placeholder="Your Email" />
          {errors.email && (
            <Text size="sm" className="text-red-500">
              {errors.email.message}
            </Text>
          )}
        </div>

        <div>
          <Input {...register("mobile")} className="border-[#D6D6D6]" placeholder="Your Mobile" />
          {errors.mobile && (
            <Text size="sm" className="text-red-500">
              {errors.mobile.message}
            </Text>
          )}
        </div>

        <div>
          <InputFile {...register("photo")} className="border-[#D6D6D6]" placeholder="Your Photo" />
          {errors.photo && (
            <Text size="sm" className="text-red-500">
              {errors.photo.message}
            </Text>
          )}
        </div>

        <div>
          <Input {...register("password")} className="border-[#D6D6D6]" placeholder="Your Password" />
          {errors.password && (
            <Text size="sm" className="text-red-500">
              {errors.password.message}
            </Text>
          )}
        </div>

        <div>
          <Button disabled={!isValid} type="submit" size="size-5" variant="fill" width="full">
            Registration
          </Button>
        </div>
      </div>
    </form>
  );
};

export default RegistrationForm;
