import HamburgerIcon from "@/assets/icons/hamburgerIcon";
import { sidebarToggle } from "@/redux/features/sidebar/slidebarSlice";
import Avatar from "@/shared/ui/avatar";
import Button from "@/shared/ui/button";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const handleVisibleSidebar = () => {
    dispatch(sidebarToggle({ isToggle: true }));
  };
  return (
    <div className="flex justify-between w-full px-[20px]">
      <div className="flex items-center">
        <div className="flex items-center lg:hidden">
          <Button variant="text" className="flex items-center" onClick={handleVisibleSidebar}>
            <HamburgerIcon />
          </Button>
        </div>
        asd
      </div>
      <div>
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
