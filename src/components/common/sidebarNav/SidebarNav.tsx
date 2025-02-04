import { SIDEBAR_MENU_DATA, SidebarMenuProps } from "@/components/common/sidebar/sidebarMenu";
import SidebarNavItem from "../sidebarNavItem";
const SidebarNav = () => {
  return (
    <div className="px-[10px] pt-[15px] ">
      <ul className="flex flex-col gap-y-[8px]">
        {SIDEBAR_MENU_DATA.map((menu: SidebarMenuProps) => (
          <SidebarNavItem key={menu._id} title={menu.title} path={menu.path || ""} icon={menu.icon} />
        ))}
      </ul>
    </div>
  );
};

export default SidebarNav;
