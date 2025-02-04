import { AllTaskIcon } from "@/assets/icons/allTaskIcon";
import CanceledIcon from "@/assets/icons/canceledIcon";
import CompletedIcon from "@/assets/icons/completedIcon";
import CreateIcon from "@/assets/icons/createIcon";
import HomeIcon from "@/assets/icons/homeIcon/HomeIcon";
import NewTaskIcon from "@/assets/icons/newTaskIcon";
import ProgressIcon from "@/assets/icons/progresIcon";
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
    icon: <CreateIcon />,
    path: "/create",
  },
  {
    _id: "3",
    title: "All Task",
    icon: <AllTaskIcon />,
    path: "/all",
  },
  {
    _id: "4",
    title: "New Task",
    icon: <NewTaskIcon />,
    path: "/new",
  },
  {
    _id: "5",
    title: "In Progress",
    icon: <ProgressIcon />,
    path: "/progress",
  },
  {
    _id: "6",
    title: "Completed",
    icon: <CompletedIcon />,
    path: "/completed",
  },
  {
    _id: "7",
    title: "Canceled",
    icon: <CanceledIcon />,
    path: "/canceled",
  },
];
