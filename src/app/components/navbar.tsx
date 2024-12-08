import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch, CiHeart } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";

import { IoCartOutline } from "react-icons/io5";


export default function Navbar() {
  return (
    <header >
      {/* Top Bar */}
      <div className="bg-white text-black py-2 text-sm flex justify-between items-center px-8 w-full">
        {/* Search Icon */}
        <CiSearch className="text-black text-xl" />

        {/* Center Text */}
        <div className="text-center flex-1 text-lg font-semibold">
          Avion
        </div>

        {/* Cart and Account Icons */}
        <div className="flex items-center gap-4 text-xl">
          <IoCartOutline className="text-black" />
          <VscAccount className="text-black" />
        </div>
      </div>
   
      <div className="bg-white shadow-sm border-b-2 border-gray-200 mx-auto flex flex-col w-full">
</div>
<header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a className="mr-5 hover:text-gray-100">Plant pots</a>
      <a className="mr-5 hover:text-gray-100">Ceramics</a>
      <a className="mr-5 hover:text-gray-100">Tables</a>
      <a className="mr-5 hover:text-gray-100">Chairs</a>
      <a className="mr-5 hover:text-gray-100">Crockery</a>
      <a className="mr-5 hover:text-gray-100">Tableware</a>
      <a className="mr-5 hover:text-gray-100">Cutlery</a>

    </nav>
    
  </div>
</header>

  
    </header>
  );
}

