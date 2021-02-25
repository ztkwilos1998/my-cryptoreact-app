import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "Home",
    path: "/overview",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Portfolio",
        path: "/overview/portfolio",
        icon: <FaIcons.FaBitcoin />
      },
      {
        title: "Price Tracker",
        path: "/overview/prices",
        icon: <FaIcons.FaDollarSign />
      }
    ]
  },

  /*
  {
    title: "Reports",
    path: "/reports",
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Reports",
        path: "/reports/reports1",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav"
      },
      {
        title: "Reports 2",
        path: "/reports/reports2",
        icon: <IoIcons.IoIosPaper />,
        cName: "sub-nav"
      },
      {
        title: "Reports 3",
        path: "/reports/reports3",
        icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  */

  {
    title: "Browse",
    path: "/browse",
    icon: <FaIcons.FaSearch />
  },

  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />
  }
];
