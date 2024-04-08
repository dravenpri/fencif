import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = async (props: Props) => {
  return (
    <header className="right-0 left-0 top-0 py-4 px-4 bg-white/40 backdrop-blur-lg z-[100] flex items-center border-b-[1px] border-neutral-100 justify-between">
      <aside className="flex items-center gap-[2px]">
        <p className="text-3xl font-bold px-40 text-black">Fencify.</p>
      </aside>
      <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
        <ul className="flex items-center gap-4 list-none text-black">
          <li>
            <Link href="#">Product</Link>
          </li>
          <li>
            <Link href="#">Pricing</Link>
          </li>
          <li>
            <Link href="#">Resources</Link>
          </li>
          <li>
            <Link href="#">Documentation</Link>
          </li>
        </ul>
      </nav>
      <aside className="flex items-center gap-4 px-40">
        <Link href="/dashboard">
        <button className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
          <div className="px-5 py-1.5  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
            {// WIP: wire up user  
            true ? "Get started" : 'Dashboard'}
          </div>
        </button>
        </Link>
        {// WIP: wire up user 
        }
        <MenuIcon className="md:hidden"/>
      </aside>
    </header>
  );
};

export default Navbar;
