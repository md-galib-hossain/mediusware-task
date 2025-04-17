
import React from "react";
import NavItem from "./components/NavItem";
import Button from "../Ui/Button/Button";
import { FiPhoneCall } from "react-icons/fi";

export default function NavBar() {
  return (
    <header className="bg-white sticky top-0 z-[999]">
        <>
          <nav
            className="  sm:px-[30px] xl:px-[50px] 3xl:px-[120px] px-5 flex items-center justify-between xl:py-6 lg:py-4 py-3"
            aria-label="Global"
          >
            <div className=" lg:block xl:pr-8 pr-4 flex  w-[120px] xl:w-[160px] ">
              <a href="https://mediusware.com" className="">
                <span className="sr-only">Mediusware</span>
                <img 
                  className="flex  justify-center items-center "
                  src="/src/assets/brand.svg"
                  alt="Logo"
                  width={160}
                  height={160}
                  style={{ width: "auto", height: "auto" }}
                />
              </a >
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
              <div className="hidden lg:flex xl:gap-x-8 lg:gap-x-6  lg:justify-center items-center me-12">
                {
                  navItems.map((navItem)=> {
                    return <NavItem key={navItem.name} name={navItem.name} route={navItem.href} withDropDown={navItem.withDropDown}/>
                  })
                }
              
              </div>
              <Button name={"Book a Call"}  icon={<FiPhoneCall size={22}/>} onClick={()=>console.log("first")}/>
            </div>
          </nav>
        </>
    </header>
  );
}


const navItems = [
  {
    name: "Home",
    href: `/blogs`,
  },
  {
    name: "Why Mediusware",
    href: `/blogs`,
  },
  {
    name: "Services",
    href: `/blogs`,
    withDropDown:true
  },
  {
    name: "Projects",
    href: `/blogs`,
  },

  {
    name: "Blog",
    href: `/blogs`,
  },
  {
    name: "Our Team",
    href: `/blogs`,
  },
  {
    name: "Academy",
    href: `/blogs`,
  },
  {
    name: "Careers",
    href: "https://job.mediusware.com/",
  },

];
