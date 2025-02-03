import HamburgerIcon from "@/assets/icons/hamburgerIcon";
import useClickOutSide from "@/hooks/useClickOutSide";
import { sidebarToggle } from "@/redux/features/sidebar/slidebarSlice";
import Avatar from "@/shared/ui/avatar";
import Button from "@/shared/ui/button";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import AppDrawer from "../appDrawer";
const Header = () => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const [visible, setVisible] = useState(false);
  // ?@_______ sidebar visible _____@
  const dispatch = useDispatch();
  const handleVisibleSidebar = () => {
    dispatch(sidebarToggle({ isToggle: true }));
  };
  // ?@_______ toggle app drawer _____@
  const handleVisible = () => {
    setVisible((prev) => !prev);
  };
  useClickOutSide(dropdownRef, setVisible)


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
      <div className="relative">
        <Avatar name="Akjm Al-Amin" onClick={handleVisible} />
        {visible && (
          <div className="absolute right-0 top-[50px] lg:top-[53px]" ref={dropdownRef}>
            <AppDrawer />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
