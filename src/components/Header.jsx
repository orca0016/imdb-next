import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import MenuItem from "./MenuItem";
import Link from "next/link";
export default function Header() {
  return (
    <div className="flex justify-between  items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-4 ">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsInfoCircleFill} />
      </div>
      <Link  href="/"className="flex items-center gap-1">
        <span className="text-2xl font-bold text-amber-500 py-1 px-2 rounded-lg">
          IMDb
        </span>
        <span className="text-xl hodden sm:inline">Clone</span>
      </Link>
    </div>
  );
}
