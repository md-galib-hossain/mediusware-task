import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const NavItem = ({name,className="",route,withDropDown}) => {
  return (
    <div className={`${className} hover:text-[#00A88E] flex justify-between items-center gap-1 text-sm 2xl:text-xl font-medium uppercase relative after:content-[''] after:bg-[#00A88E] after:h-[3px] after:w-[0%] after:left-0 after:-bottom-[5px] after:rounded-xl after:absolute hover:after:w-[100%] after:duration-300 `}>
      <a href={route}>
        <span
          
        >
          {name}
        </span>
      </a>
      {
        withDropDown && <MdOutlineKeyboardArrowDown size={25}/>

      }
    </div>
  );
};

export default NavItem;
