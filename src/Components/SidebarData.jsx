
import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import { FaVideo } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { PiUsersThreeFill } from "react-icons/pi";
import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlineHelp } from "react-icons/md";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";




export const SidebarData = [
	
	{
		title: "Home",
		path: "/home",
		icon: <AiIcons.AiFillHome />,
		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

	},
	// {
	// 	title: "Files",
	// 	path: "/files",
	// 	icon: <IoIcons.IoIosPaper />,
	// 	iconClosed: <RiIcons.RiArrowDownSFill />,
	// 	iconOpened: <RiIcons.RiArrowUpSFill />,

	// 	subNav: [
	// 		{
	// 			title: "Recordings",
	// 			path: "/files/files1",
	// 			icon: <IoIcons.IoIosPaper />,
	// 			cName: "sub-nav",
	// 		},
	// 		{
	// 			title: "Files",
	// 			path: "/files/files2",
	// 			icon: <IoIcons.IoIosPaper />,
	// 			cName: "sub-nav",
	// 		},
			
	// 	],
	// },
	{
		title: "Meetings",
		path: "/appointmentslist",
		icon: <FaVideo /> ,
	},
	{
		title: "Webinars",
		path: "/webinars",
		icon: <FaIcons.FaEnvelopeOpenText />,

		iconClosed: <RiIcons.RiArrowDownSFill />,
		iconOpened: <RiIcons.RiArrowUpSFill />,

		
	},
	{
		title: "Calender",
		path: "/calender",
		icon: <SlCalender />,
	},
    {
        title:"Chat",
        path:"/user",
        icon:<IoChatbubbleEllipsesSharp />,

    },
    {
        title:"Settings",
        path:"/settings",
        icon:<IoSettingsSharp />,
    },
	{
		title:"Help",
		path:"/help",
		icon:<MdOutlineHelp />,

	}

];
