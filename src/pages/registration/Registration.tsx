import AuthBanner from "@/components/common/authBanner/AuthBanner";
import AuthFrame from "@/components/common/authFrame";

const Registration = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
      {/* Left Side with Auth Banner */}
      <div className="h-full bg-blue-600 hidden lg:block">
        <AuthBanner />
      </div>

      {/* Right Side */}
      <AuthFrame formTitle="Login">{/* <LoginForm /> */}</AuthFrame>
    </div>
  );
};

export default Registration;
