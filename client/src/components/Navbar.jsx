import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt4 } from "react-icons/hi";
import { Link } from "react-router-dom";

import LoginModal from "./LoginModal";
import logo from "../../images/logo.png";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);
// const navbarItems = ["Үйлчилгээ", "Мэдээлэл", "Зөвөлгөө", "Холбоо барих"];

const navbarItems = [
  {
    path: "/service",
    name: "Үйлчилгээ",
  },
  {
    path: "/service",
    name: "Мэдээлэл",
  },
  {
    path: "/service",
    name: "Зөвөлгөө",
  },
  {
    path: "/service",
    name: "Холбоо барих",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <Link to="/">
          <img src={logo} alt="logo" className="w-32 cursor-pointer" />
        </Link>
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {navbarItems.map((item, index) => (
          <Link to={item.path} key={item.name + index}>
            <NavBarItem title={item.name} />
          </Link>
        ))}
        <button
          onClick={openModal}
          className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]"
        >
          Нэвтрэх
        </button>
      </ul>
      <div className="flex relative">
        {!toggleMenu && (
          <HiMenuAlt4
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <AiOutlineClose
            fontSize={28}
            className="text-white md:hidden cursor-pointer"
            onClick={() => setToggleMenu(false)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="text-xl w-full my-2">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {navbarItems.map((item, index) => (
              <Link key={`mobileNav-${index}`} to={item.path}>
                <NavBarItem title={item.name} classprops="my-2 text-lg" />
              </Link>
            ))}
          </ul>
        )}
      </div>
      {isOpen && (
        <LoginModal
          isOpen={isOpen}
          closeModal={closeModal}
          openModal={openModal}
        />
      )}
    </nav>
  );
};

export default Navbar;
