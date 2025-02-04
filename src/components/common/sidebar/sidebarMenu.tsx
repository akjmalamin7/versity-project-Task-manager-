import HomeIcon from "@/assets/icons/homeIcon/HomeIcon";
import React from "react";

export interface SidebarMenuProps {
  _id: string;
  title?: string;
  icon?: React.ReactNode;
  path: string;
}

export const SIDEBAR_MENU_DATA: SidebarMenuProps[] = [
  {
    _id: "1",
    title: "Dashboard",
    icon: <HomeIcon />,
    path: "/",
  },
  {
    _id: "2",
    title: "Create New",
    icon: <HomeIcon />,
    path: "/create",
  },
  {
    _id: "3",
    title: "All Task",
    icon: <HomeIcon />,
    path: "/all",
  },
  {
    _id: "4",
    title: "New Task",
    icon: <HomeIcon />,
    path: "/new",
  },
  {
    _id: "5",
    title: "In Progress",
    icon: <HomeIcon />,
    path: "/progress",
  },
  {
    _id: "6",
    title: "Completed",
    icon: <HomeIcon />,
    path: "/completed",
  },
  {
    _id: "7",
    title: "Canceled",
    icon: <HomeIcon />,
    path: "/canceled",
  },
];
