import React from "react";
import { behance_logo } from "../Data";
import { adobe_cloude } from "../Data";
import { adobeLogo } from "../Data";
import { IoSearchSharp } from "react-icons/io5";
import { searchType } from "../Data";
import { RiArrowDropDownFill } from "react-icons/ri";
import { tagName } from "../Data";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { RiCloseLargeFill } from "react-icons/ri";

const openMenu = () =>{
    const main_header = document.getElementById('header');
    main_header.classList.toggle('menuopen')
}
const closeMenu = () =>{
   openMenu();
}

const Header = () => {
  return (
    <>
      <header className="header" id="header">
        <div id="menu" className="menu duration-400  bg-white lg:hidden shadow-lg w-[70%] h-[100%] absolute left-0 top-0 z-20 p-5">
            <div className="text-3xl absolute right-3 cursor-pointer text-[#333]  " onClick={()=>closeMenu()}>
            <RiCloseLargeFill />
            </div>
        <ul className="">
                    <li className="m-3 font-medium text-md">
                      <a
                        href="http://"
                        target="blank"
                        rel="noopener noreference"
                      >
                        Explore
                      </a>
                    </li>
                    <li className="m-3 font-medium text-md">
                      <a
                        href="http://"
                        target="blank"
                        rel="noopener noreference"
                      >
                        Assets
                      </a>
                    </li>
                    <li className="m-3 font-medium text-md">
                      <a
                        href="http://"
                        target="blank"
                        rel="noopener noreference"
                      >
                        Livestream
                      </a>
                    </li>
                    <li className="m-3 font-medium text-md">
                      <a
                        href="http://"
                        target="blank"
                        rel="noopener noreference"
                      >
                        Hire
                      </a>
                    </li>
                    <li className="m-3 font-medium text-md">
                      <a
                        href="http://"
                        target="blank"
                        rel="noopener noreference"
                      >
                        Jobs
                      </a>
                    </li>
                  </ul>
        </div>


        <div className="border-b  top-0 bg-white z-10">
        <div className="container-fluid">
          <div className="top-header py-4 lg:py-3 px-5 border-b border ">
            <div className="navbar flex items-center justify-between">
              <div className="brand-logo flex items-center">
                <div className="phone-menu pr-3 text-2xl cursor-pointer block lg:hidden" onClick={()=>openMenu()}>
                <HiOutlineMenuAlt2 />
                </div>
                <img
                  src={behance_logo}
                  alt={behance_logo}
                  className="w-auto h-4"
                />
                <div className="page-links  lg:ml-8 hidden lg:block">
                  <ul className="flex items-center">
                    <li className="mx-3 font-medium active text-md">
                      <a
                        href="http://"
                        target="blank"
                        rel="noopener noreference"
                      >
                        Explore
                      </a>
                    </li>
                    <li className="mx-3 font-medium active text-md">
                      <a
                        href="http://"
                        target="blank"
                        rel="noopener noreference"
                      >
                        Assets
                      </a>
                    </li>
                    <li className="mx-3 font-medium active text-md">
                      <a
                        href="http://"
                        target="blank"
                        rel="noopener noreference"
                      >
                        Livestream
                      </a>
                    </li>
                    <li className="mx-3 font-medium active text-md">
                      <a
                        href="http://"
                        target="blank"
                        rel="noopener noreference"
                      >
                        Hire
                      </a>
                    </li>
                    <li className="mx-3 font-medium active text-md">
                      <a
                        href="http://"
                        target="blank"
                        rel="noopener noreference"
                      >
                        Jobs
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

             <div className="hidden lg:block">
             <div className="action-area flex items-center">
                <div className="login-btn rounded-full border px-4 py-1 border-[#dee8ff]">
                  <a href="#/" className="text-[#0057ff] font-medium text-md">
                    login
                  </a>
                </div>
                <div className="login-btn mx-4 rounded-full border px-4 py-1 border-[#dee8ff] bg-[#0057ff]">
                  <a href="#/" className="text-white font-medium text-md">
                    Sign Up
                  </a>
                </div>
                <span className="text-gray-300">|</span>
                <div className="free-btn mx-4 flex items-center border rounded-full px-4 py-1">
                  <div className="cloud-icon pr-2">
                    <img
                      src={adobe_cloude}
                      alt={adobe_cloude}
                      className="w-5 h-5"
                    />
                  </div>
                  <a href="#/">Free Trial</a>
                </div>
                <div className="adobe-btn mx-4 flex items-center hover:opacity-70">
                  <img src={adobeLogo} alt={adobeLogo} className="w-5 h-5" />
                  <a href="#/" className="pl-1 font-bold text-black text-sm">
                    Adobe
                  </a>
                </div>
              </div>
             </div>
              <div className="phone-search cursor-pointer block lg:hidden pr-3 text-2xl">
              <IoSearchSharp />
                </div>
            </div>
          </div>
          <div className="search-area p-5">
            <div className="search-area flex items-center">
              <div className="search-box w-full  border-2 rounded-full bg-[#f9f9f9] overflow-hidden flex items-center justify-between">
                <div className="input-box relative">
                  <input
                    type="text"
                    placeholder="Search the creative world at work"
                    className="bg-transparent pl-20 lg:w-[30rem] outline-none text-ellipsis w-[90%] text-md lg:text-xl font-bold text-[#222] placeholder:text-[#777]"
                  />
                  <div className="search-icon text-2xl text-[#777] absolute top-[2px] left-4">
                    <IoSearchSharp />
                  </div>
                </div>
                <div className="tags-search bg-white px-4 py-3 border-l-2">
                  <ul className="flex items-center">
                    <li className="text-black lg:bg-black mx-1 py-1 lg:text-white px-2 rounded-full font-medium text-sm">
                      <a href="#/">Projects</a>
                    </li>
                    <div className="dt-arrow block lg:hidden ">
                   <RiArrowDropDownFill />
                 </div>
                    {searchType.map((tags,index) => (
                      <li className="mx-1 font-medium hidden lg:block text-sm py-1 px-3 rounded-full hover:bg-[#d8d0d0]">
                        <a href="#/">{tags.sItems}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
          <div className="behance-tools flex items-center justify-between pb-5 px-5 ">
           <div className="flex items-center p5-5 pl-5">
           {tagName.map((tools,index)=>(
                 <div className="tools-items flex items-center border rounded-md px-3 py-2 mx-3 justify-between">
                 <div className="t-icon">
                    {tools.tagsIcon}
                 </div>
                 <div className="tname px-2">
                   <p className="text-sm font-bold">{tools.tags}</p>
                 </div>
                 <div className="dt-arrow">
                   <RiArrowDropDownFill />
                 </div>
               </div>
            ))}
           </div>
           <div className="recm-item">
            <spam className="text-xsm font-bold text-[#626161]">sort</spam>
            <div className="flex">
            <p className="text-sm font-medium pr-1">Recommended</p>
            <RiArrowDropDownFill />
            </div>
           </div>
           
          </div>
          </div>
        </div>
        </div>
      </header>
    </>
  );
};

export default Header;
