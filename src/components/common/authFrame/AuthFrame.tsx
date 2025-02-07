import Button from "@/shared/ui/button";
import Text from "@/shared/ui/text";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
type ActiveFormType = "login" | "registration";
interface AuthFrameProps {
  formTitle?: string;
  children?: React.ReactNode;
}
const AuthFrame = ({ formTitle, children }: AuthFrameProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeForm, setActiveForm] = useState<ActiveFormType>("login");

  // Update activeForm based on the route
  useEffect(() => {
    if (location.pathname === "/login") {
      setActiveForm("login");
    } else if (location.pathname === "/registration") {
      setActiveForm("registration");
    }
  }, [location.pathname]); // Runs whenever the route changes

  const handleActiveForm = (value: ActiveFormType) => {
    setActiveForm(value);
    if (value === "login") {
      navigate("/login");
    } else if (value === "registration") {
      navigate("/registration");
    }
  };
  return (
    <div className="flex w-full pt-[40px] items-center">
      <div className="max-w-[448px] w-full mx-auto px-[20px]">
        {/* Logo */}
        <div>
          <div className="flex justify-center  mb-[30px]">
            <Text element="h1" size="2xl" fontWeight="medium" textAlign="center" >Task Manager</Text>
          </div>

          {/* Buttons */}
          <div className="flex">
            {/* Login Button */}
            <Button
              className="rounded-tr-none  justify-center rounded-br-none"
              width="full"
              variant={activeForm === "login" ? "fill" : "outline"}
              onClick={() => handleActiveForm("login")}
              size="size-5"
            >
              Login
            </Button>

            {/* Registration Button */}
            <Button
              className="rounded-tl-none rounded-bl-none"
              size="size-5"
              width="full"
              variant={activeForm === "registration" ? "fill" : "outline"}
              onClick={() => handleActiveForm("registration")}
            >
              Registration
            </Button>
          </div>
        </div>
        <div>
          {/* title */}
          <div className="mt-[20px] lg:mt-[30px]">
            <Text size="xl" element="h2" fontWeight="semiBold">
              {formTitle}
            </Text>
          </div>
          {/* Children */}
          {children}
        </div>
        <div>
          <div className="flex flex-col items-center mt-[16px] lg:mt-[20px] mb-[16px] lg:mb-[16px] gap-[8px]">
            <Text color="secondary" size="md" fontWeight="regular">
            Login to your account and access your dashboard.
            New user? Register and enjoy our services.
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthFrame;
