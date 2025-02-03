import HomeIcon from "@/assets/icons/homeIcon/HomeIcon"
import SidebarNavItem from "../sidebarNavItem"

const SidebarNav = () => {
  return (
    <div className="px-[10px] pt-[15px] ">
      <SidebarNavItem title="Nav" icon={<HomeIcon/>}/>
    </div>
  )
}

export default SidebarNav