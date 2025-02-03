import Button from "@/shared/ui/button";
import Text from "@/shared/ui/text";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
    <div className="flex w-full pt-[40px]">
      <div className="max-w-[448px] w-full mx-auto px-[20px]">
        {/* Logo */}
        <div>
          <div className="flex justify-center lg:justify-end mb-6">
            <h2>Task Manager</h2>
          </div>

          {/* Buttons */}
          <div className="flex">
            {/* Login Button */}
            <Button
              className="rounded-tr-none rounded-br-none"
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
            <Text size="2xl" element="h1" fontWeight="semiBold">
              {formTitle}
            </Text>
          </div>
          {/* Children */}
          {children}
        </div>
        <div>
          <div className="flex flex-col items-center mt-[16px] lg:mt-[30px] mb-[16px] lg:mb-[20px] gap-[8px]">
            <p>
              Need to create a account?{" "}
              <Link
                className="text-customcolor-750"
                to={activeForm === "login" ? "/registration" : "/login"}
              >
                {activeForm === "login" ? "Sign Up" : "Sign in"}
              </Link>
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row  gap-[12px] md:gap-[28px]"></div>
      </div>
    </div>
  );
};

export default AuthFrame;
