"use client";

import { FaToggleOff } from "react-icons/fa";

import Image from "next/image";
import { ModeToggle } from "./ui/toggle-mode";

const TopNavBar = () => {
  return (
    <div className="container">
      <ul className="flex items-center justify-between pt-2">
        <li>
          <a href="http://www.nextjs.org">
            <Image
              src="/next.svg"
              alt="vercel logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </li>
        <li>
          {/* <FaToggleOff /> */}
          <ModeToggle />
        </li>
      </ul>
    </div>
  );
};

export default TopNavBar;
