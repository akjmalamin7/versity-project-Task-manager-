import { REGISTRATION_SCHEMA } from "@/shared/redux/features/auth/auth.schema";
import { UserSchema } from "@/shared/redux/features/auth/auth.types";
import { useRegistrationMutation } from "@/shared/redux/features/auth/authApi";
import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";
import InputFile from "@/shared/ui/inputFile/InputFile";
import Text from "@/shared/ui/text";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
  const [registration, { isLoading }] = useRegistrationMutation();
  const onSubmit: SubmitHandler<UserSchema> = async (data) => {
    try {
      const result = await registration(data).unwrap();
      toast(result.message);
      navigate("/login");
    } catch (error) {
      if (error instanceof Error) {
        toast(error.message);
      } else if (typeof error === "object" && error !== null && "data" in error) {
        const err = error as { data: { message: string } };
        toast(err.data.message);
      } else {
        toast("Something went wrong!");
      }
    }
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

        <div className="hidden">
          <InputFile {...register("photo")} className="border-[#D6D6D6]" placeholder="Your Photo" />
          {errors.photo && (
            <Text size="sm" className="text-red-500">
              {errors.photo.message}
            </Text>
          )}
        </div>

        <div>
          <Input
            {...register("password")}
            className="border-[#D6D6D6]"
            placeholder="Your Password"
          />
          {errors.password && (
            <Text size="sm" className="text-red-500">
              {errors.password.message}
            </Text>
          )}
        </div>

        <div>
          <Button
            loading={isLoading}
            disabled={!isValid}
            type="submit"
            size="size-5"
            variant="fill"
            width="full"
          >
            {isLoading === true ? "Submitting..." : "Registration"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default RegistrationForm;
