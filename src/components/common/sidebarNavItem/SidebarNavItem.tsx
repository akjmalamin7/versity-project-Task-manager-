import Text from "@/shared/ui/text";
import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  path?: string;
  title?: string;
  icon?: React.ReactNode;
}
const SidebarNavItem = ({ icon, path, title }: Props) => {
  return (
    <NavLink
    to={path || ""}
    className="py-[8px] flex gap-[10px] px-[20px] hover:bg-gray-700 rounded-[8px] transition-all duration-200 ease-in-out"
  >
    <div className="flex items-center gap-[10px]">
      {icon && (
        <div className="text-gray-700 hover:fill-white transition-all duration-200 ease-in-out">
          {icon}
        </div>
      )}
      <div>
        <Text element="p" fontWeight="medium" color="white">
          {title}
        </Text>
      </div>
    </div>
  </NavLink>
  );
};

export default SidebarNavItem;
