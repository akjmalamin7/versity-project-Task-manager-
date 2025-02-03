import HamburgerIcon from "@/assets/icons/hamburgerIcon";
import useClickOutSide from "@/hooks/useClickOutSide";
import { sidebarToggle } from "@/redux/features/sidebar/slidebarSlice";
import { RootState } from "@/redux/store/store";
import Avatar from "@/shared/ui/avatar";
import Button from "@/shared/ui/button";
import Text from "@/shared/ui/text";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AppDrawer from "../appDrawer";
const Header = () => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  // ?@_______ get user@
  const userAvatar = useSelector((state:RootState) => state?.auth?.user?.photo);
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
  useClickOutSide(dropdownRef, setVisible);
  return (
    <div className="flex justify-between w-full px-[20px]">
      <div className="flex items-center gap-[10px]">
        <div className="flex items-center lg:hidden">
          <Button variant="text" className="flex items-center" onClick={handleVisibleSidebar}>
            <HamburgerIcon />
          </Button>
        </div>
        <div className="xl:w-[235px] flex xl:justify-center">
          <Text color="white" fontWeight="bold" size="lg" >
            <Link to={"/"} className="bg-gray-900 py-[8px] px-[10px] rounded-[5px] ">MY TASK</Link>
          </Text>
        </div>
      </div>
      <div className="relative">
        <Avatar url={userAvatar || ""} name="Akjm Al-Amin" onClick={handleVisible} />
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
