import React from 'react';
import { FiHome, FiUser, FiMessageSquare, FiSettings } from 'react-icons/fi';
import { AiOutlineCalendar, AiOutlineFolder, AiOutlineFile } from 'react-icons/ai';


export const SidebarData = [
  {
    path: '/home',
    icon: <FiHome />,
    cName: 'nav-text home-icon'
  },
  {
    path: '/userAccount',
    icon: <FiUser />,
    cName: 'nav-text'
  },
  {
    path: '/calender',
    icon: <AiOutlineCalendar />,
    cName: 'nav-text'
  },
  {
    path: '/documents',
    icon: <AiOutlineFile />,
    cName: 'nav-text'
  },
  {
    path: '/files',
    icon: <AiOutlineFolder />,
    cName: 'nav-text'
  },
  {
    path: '/message',
    icon: <FiMessageSquare />,
    cName: 'nav-text'
  },
  {
    path: '/setting',
    icon: <FiSettings />,
    cName: 'nav-text setting-spacing'
  }
];
