
import React from "react";

export interface SidebarMenuProps {
  _id: string;
  title?: string;
  icon?: React.ReactNode;
  path:string;
}

export const SIDEBAR_MENU_DATA: SidebarMenuProps[] = [
  {
    _id: "1",
    title: "Dashboard",
    icon: <HomeIcon />,
    isParent: false,
    path: "/",
  },
  
];
