import Text from "../text";

interface AvatarProps {
  name?: string;
  size?: "sm" | "md" | "lg";
  url?: string;
  alt?: string;
  onClick?: () => void;
}
const Avatar = ({ name, size = "md", alt, url, onClick }: AvatarProps) => {
  const sizeClasses = {
    sm: "w-[30px] h-[30px] border border-gray-700 rounded-full",
    md: "w-[40px] h-[40px] border border-gray-700 rounded-full",
    lg: "w-[45px] h-[45px] border border-gray-700 rounded-full",
  }[size];
  const sizeFinalClass = `overflow-hidden ${sizeClasses}`;
  return (
    <div className="flex items-center gap-[12px] lg:cursor-pointer" onClick={onClick}>
      <div className={sizeFinalClass}>
        <img src={url || ""} alt={alt || ""} />
      </div>
      <div className="flex items-center gap-[6px]">
        <Text size="md" color="white">
          {name?.split(" ")[0] || ""}
        </Text>
      </div>
    </div>
  );
};

export default Avatar;
