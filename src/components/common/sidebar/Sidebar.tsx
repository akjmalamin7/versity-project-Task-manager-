import CrossIcon from "@/assets/icons/crossIcon"
import { sidebarToggle } from "@/shared/redux/features/sidebar/slidebarSlice"
import Button from "@/shared/ui/button"
import { useDispatch } from "react-redux"
import SidebarNav from "../sidebarNav"

const Sidebar = () => {
  const dispatch = useDispatch()
  const handleHideSidebar = ()=>{
    dispatch(sidebarToggle({isToggle:false}))
  }
  return (
    <div className="h-full">
      <div className="px-[16px] h-[55px] lg:h-[63px] border-b lg:border-b-none border-b-gray-700 flex justify-end items-center">  
        <Button variant="text" onClick={handleHideSidebar} className="lg:hidden">
          <CrossIcon color="light" />
        </Button>
      </div>
      <SidebarNav/>
    </div>
  )
}

export default Sidebar