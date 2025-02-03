import { LOGIN_SCHEMA } from "@/redux/features/auth/auth.schema";
import { LoginData } from "@/redux/features/auth/auth.types";
import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";
import Text from "@/shared/ui/text";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
const LoginForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginData>({
    resolver: yupResolver(LOGIN_SCHEMA),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit: SubmitHandler<LoginData> = async (data) => {
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
          <Input {...register("email")} className="border-[#D6D6D6]" placeholder="Email Address" />
          {errors.email && (
            <Text size="sm" className="text-red-500">
              {errors.email.message}
            </Text>
          )}
        </div>
        <div>
          <Input {...register("password")} className="border-[#D6D6D6]" placeholder="Password" />
          {errors.password && (
            <Text size="sm" className="text-red-500">
              {errors.password.message}
            </Text>
          )}
        </div>
        <div>
          <Text className="text-md text-[#4E4B66]">
            <Link to={"#"}>Forgot Password</Link>
          </Text>
        </div>
        <div>
          <Button disabled={!isValid} type="submit" size="size-5" variant="fill" width="full">
            Login In
          </Button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
