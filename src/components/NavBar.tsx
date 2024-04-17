"use client";

import { FaToggleOff } from "react-icons/fa";
import { navItems } from "@/constants/index";
import { PiHamburgerBold } from "react-icons/pi";
import { useState } from "react";

import Image from "next/image";
import { ModeToggle } from "./ui/toggle-mode";

const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <a href="/">
            <div className="flex items-center flex-shrink-0">
              <div className="mx-4">
                <Image
                  src="assets/Logo.svg"
                  alt="Logo image"
                  className="dark:invert"
                  width={24}
                  height={24}
                  priority
                />
              </div>
              <span className="text-xl tracking-tight">Logo Text</span>
            </div>
          </a>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index} className="py-4">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-8 items-center">
            <a href="#" className="py-0 px-0 border rounded-md">
              Sign In
            </a>
            <a href="#" className="py-0 px-0 border rounded-md">
              Sign Out
            </a>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
