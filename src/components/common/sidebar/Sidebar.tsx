import CrossIcon from "@/assets/icons/crossIcon"
import { sidebarToggle } from "@/redux/features/sidebar/slidebarSlice"
import Button from "@/shared/ui/button"
import { useDispatch } from "react-redux"

const Sidebar = () => {
  const dispatch = useDispatch()
  const handleHideSidebar = ()=>{
    dispatch(sidebarToggle({isToggle:false}))
  }
  return (
    <div className="h-full">
      <div className="px-[16px] h-[55px] lg:h-[63px] border-b lg:border-b-none border-b-gray-700 flex justify-end">  
        <Button variant="text" onClick={handleHideSidebar} className="lg:hidden">
          <CrossIcon color="light" />
        </Button>
      </div>
    </div>
  )
}

export default Sidebar