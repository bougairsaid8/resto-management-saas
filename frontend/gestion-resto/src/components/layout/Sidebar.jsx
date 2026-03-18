import React ,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import { RiSidebarUnfoldFill } from "react-icons/ri";
import { RiSidebarFoldFill } from "react-icons/ri";

import { MdOutlineTableRestaurant } from "react-icons/md";
import { HiOutlineUsers } from "react-icons/hi2";
import { RiFileList3Line } from "react-icons/ri";
import { BsGrid } from "react-icons/bs";
import { BsLayers } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";





function Sidebar() {
  // state for sidebar collapse/expand
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { 
      name: 'Overview', 
      path: '/', 
      icon: <BsGrid className='w-5 h-5 hover:text-text' />
    },
    { 
      name: 'Categories', 
      path: '/categories', 
      icon: <BsLayers className='w-5 h-5  hover:text-text' />
    },
    { 
      name: 'Products', 
      path: '/products', 
      icon: <IoFastFoodOutline className='w-5 h-5 hover:text-text' />
    },
    { 
      name: 'Tables', 
      path: '/tables', 
      icon: <MdOutlineTableRestaurant className='w-5 h-5 hover:text-text' />
    },
    { 
      name: 'Staff', 
      path: '/staff', 
      icon: <HiOutlineUsers className='w-5 h-5 hover:text-text' />
    },
    { 
      name: 'Orders', 
      path: '/orders', 
      icon: <RiFileList3Line className='w-5 h-5 hover:text-text' />
    },
  ];

  return (
    <aside className={`${isCollapsed ? 'w-20' : 'w-64'} h-screen bg-surface border-r border-border flex flex-col font-sans shrink-0 transition-all duration-300 ease-in-out`}>
      
      <div className="h-20 flex items-center justify-between px-6 mb-4 ">
       {
        !isCollapsed && <div className="flex items-center gap-3">
          <span className="text-xl font-bold text-text tracking-tight">RestoAdmin</span>
        </div>
       }
        
       {isCollapsed ? <RiSidebarFoldFill className='w-6 h-6  text-primary rotate-180 cursor-pointer' onClick={() => setIsCollapsed(false)}/> 
       : <RiSidebarUnfoldFill  className='w-6 h-6  text-primary rotate-180 cursor-pointer' onClick={() => setIsCollapsed(true)}/>
       }
        
      </div>

      {/*Navigation Menu */}
      {
        isCollapsed?
        <nav className="flex-1 px-3 space-y-1.5 overflow-y-auto overflow-x-hidden">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                isActive
                  ? 'bg-primary/10 text-primary' 
                  : 'text-text-secondary hover:bg-background hover:text-text' 
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-full bg-primary rounded-r-md"></span>
                )}
                
                <span className={`${isActive ? 'text-primary' : 'text-text-secondary'}`}>
                  {item.icon}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
        :
        <nav className="flex-1 px-3 space-y-1.5 overflow-y-auto overflow-x-hidden">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                isActive
                  ? 'bg-primary/10 text-primary' 
                  : 'text-text-secondary hover:bg-background hover:text-text' 
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-full bg-primary rounded-r-md"></span>
                )}
                
                <span className={`${isActive ? 'text-primary' : 'text-text-secondary'}`}>
                  {item.icon}
                </span>
                
                {item.name}
              </>
            )}
          </NavLink>
        ))}
      </nav>
      }

      <div className="p-4 mt-auto border-t border-border  transition-all duration-300 ease-in-out overflow-x-hidden">
        <span className="flex items-center gap-3 px-3 py-3  rounded-lg text-sm font-medium text-danger hover:bg-danger/10  cursor-pointer ">
          <FiLogOut className='w-5 h-5' />
          {!isCollapsed && <span >Logout</span>}
        </span>
      </div>

    </aside>
  );
}

export default Sidebar;