import Text from "../text";

interface AvatarProps {
  name?: string;
  size?: "sm" | "md" | "lg";
  url?: string;
}
const Avatar = ({ name, size = "md", url }: AvatarProps) => {
  const sizeClasses = {
    sm: "w-[30px] h-[30px] border border-gray-700 rounded-full",
    md: "w-[40px] h-[40px] border border-gray-700 rounded-full",
    lg: "w-[45px] h-[45px] border border-gray-700 rounded-full",
  }[size];
  const sizeFinalClass = `${sizeClasses}`
  return (
    <div className="">
      <div className="flex items-center gap-[12px] lg:cursor-pointer">
        <div className={sizeFinalClass}>
          <img src={url} alt={name} />
        </div>
        <div className="flex items-center gap-[6px]">
          <Text>{name || ""}</Text>
        </div>
      </div>
    </div>
  );
};

export default Avatar;
