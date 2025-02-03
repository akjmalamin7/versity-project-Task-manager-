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
            <button
              // variant={activeForm === "login" ? "primary" : "tertiary"}
              // size="size-5"
              // width="full"
              // customClass="font-regular"
              onClick={() => handleActiveForm("login")}
            >
              {/* <GenericText
                size="xlg"
                fontWeight="regular"
                color={activeForm === "login" ? "text-1" : "text-5"}
              >
                Login
              </GenericText> */}
              Login
            </button>

            {/* Registration Button */}
            <button
              // variant={activeForm === "registration" ? "primary" : "tertiary"}
              // size="size-5"
              // width="full"
              // customClass="font-regular"
              onClick={() => handleActiveForm("registration")}
            >
              {/* <GenericText
                size="xlg"
                fontWeight="regular"
                color={activeForm === "registration" ? "text-1" : "text-5"}
              >
                Registration
              </GenericText> */}
              Registration
            </button>
          </div>
        </div>
        <div>
          {/* title */}
          <div className="mt-[20px] lg:mt-[30px]">
            {/* <GenericText elementType="h1" size="9xl" color="text-5" fontWeight="bold">
              {formTitle}
            </GenericText> */}
            <h3>{formTitle}</h3>
          </div>
          {/* Children */}
          {children}
        </div>
        <div>
        <div className="flex flex-col items-center mt-[16px] lg:mt-[30px] mb-[16px] lg:mb-[20px] gap-[8px]">
          <p >
          Need to create a account? <Link className="text-customcolor-750" to={activeForm === "login" ?"/registration":"/login"}>{activeForm === 'login'?"Sign Up":"Sign in"}</Link>
          </p>
        <p  >Or</p>
        </div>
        </div>
        <div className="flex flex-col md:flex-row  gap-[12px] md:gap-[28px]">
      
        </div>
      </div>
    </div>
  );
};

export default AuthFrame;
