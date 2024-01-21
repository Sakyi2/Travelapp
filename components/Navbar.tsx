"use client"
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
import { useState } from "react";
import Home from "@/app/page";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flexBetween max-container padding-container relative z-50 py-0">
      <Link href="/">
        
          <Image src="/travelhub.jpg" alt="logo" width={120} height={39} className="rounded-xl"/>
        
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          
            <Link href={link.href} key={link.key} className="text-gray-50 cursor-pointer pb-1.5 transition-all hover:font-bold">
                {link.label}
              
            </Link>
          
        ))}
      </ul>

      <div className="lg:flex lg:items-center hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_blue"
        />
      </div>
   <div className=" absolute top-12 right-5">
      <Image
        src={toggle ? "/close.svg" : "/menu.svg"}
        alt="menu"
        width={32}
        height={32}
        className={ `cursor-pointer lg:hidden ${toggle ? "bg-black" : " "}`}
        onClick={() => setToggle(!toggle)}
      />
</div>
      <div className={`${toggle ? "flex" : "hidden"} p-6 bg-black absolute top-20 right-0 lg:hidden mx-4 my-2 min-w-[140px] rounded-xl 
      cursor-pointer` }>
            

        {/* Content to be displayed when the menu is toggled */}
        <ul className=" list-none  flex  flex-col justify-end items-start flex-1 ">
        {NAV_LINKS.map((link) => (
          
            <Link href={link.href} key={link.key} className="font-popins font-normal text-white cursor-pointer 
            pb-1.5 transition-all hover:font-bold">
                {link.label}
              
            </Link>
          
        ))}
      </ul>
      </div>
    </nav>
  );
};

export default Navbar;
