import { LOGIN_SCHEMA } from "@/shared/redux/features/auth/auth.schema";
import { LoginData } from "@/shared/redux/features/auth/auth.types";
import { useLoginMutation } from "@/shared/redux/features/auth/authApi";
import Button from "@/shared/ui/button";
import Input from "@/shared/ui/input";
import Text from "@/shared/ui/text";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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
  const [login, { isLoading }] = useLoginMutation();
  const onSubmit: SubmitHandler<LoginData> = async (data) => {
    try {
      const result = await login(data).unwrap();
      toast(result.message);
      navigate("/");
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
          <Input
            {...register("email")}
            type="email"
            className="border-[#D6D6D6]"
            placeholder="Email Address"
          />
          {errors.email && (
            <Text size="sm" className="text-red-500">
              {errors.email.message}
            </Text>
          )}
        </div>
        <div>
          <Input
            {...register("password")}
            className="border-[#D6D6D6]"
            placeholder="Password"
            type="password"
          />
          {errors.password && (
            <Text size="sm" className="text-red-500">
              {errors.password.message}
            </Text>
          )}
        </div>
        <div>
          <Text className="text-md text-[#4E4B66]">
            <Link className="text-[#54525f]" to={"#"}>
              Forgot Password
            </Link>
          </Text>
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
            {isLoading === true ? "Submitting..." : "Login"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
