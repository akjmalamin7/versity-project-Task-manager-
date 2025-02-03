import AUTH_IMAGE from "@/assets/images/authImage.png";
import SHAPE_IMAGE from "@/assets/images/shape.png";
const AuthBanner = () => {
  return (
    <div className="relative h-full flex flex-col items-center">
      {/* Shape Image */}
      <div className="absolute inset-0  flex items-center">
        <img
          src={SHAPE_IMAGE}
          alt="shape"
          className="h-full w-full object-cover"
        />
      </div>
      {/* left-1/2 transform -translate-x-1/2 */}
      {/* Auth Image */}
      <div className="absolute bottom-0 ">
        <img
          src={AUTH_IMAGE}
          alt="auth banner"
          className="max-w-full object-contain"
        />
      </div>
    </div>
  )
}

export default AuthBanner