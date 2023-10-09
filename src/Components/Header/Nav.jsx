import React from "react";
import logo from "../../images/img01.png";
import {
  HiSearch,
  HiAnnotation,
  HiOutlineShoppingCart,
  HiHome,
  HiOutlineBookOpen,
} from "react-icons/hi";
const links = [
  {
    name: "Home",
    link: "#",
  },
  {
    name: "Blog",
    link: "#",
  },
  {
    name: "Shop",
    link: "#",
  },
  {
    name: "Cart",
    link: "#",
  },
  {
    name: "About",
    link: "#",
  },
];
const Nav = () => {
  return (
    <div className="mx-6 p-1 mt-4 ">
      <div className="flex justify-center lg:hidden gap-5 md:gap-16">
        <a className=" ">
          <HiHome className="text-4xl" />
        </a>
        <a className=" ">
          <HiOutlineBookOpen className="text-4xl" />
        </a>
        <a className=" ">
          <HiAnnotation className="text-4xl" />
        </a>
        <a className=" ">
          <HiSearch className="text-4xl" />
        </a>
        <a className=" ">
          <HiOutlineShoppingCart className="text-4xl" />
        </a>
      </div>
      <div className="navbar hidden lg:flex  ">
        <div className="navbar-start">
          <a href="#" className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links.map((link, index) => (
              <li key={index} className="text-xl font-bold">
                <a href={link.link}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <a href="#" className="border-l px-2">
            <HiSearch className="text-4xl" />
          </a>
          <a href="#" className="border-l px-2">
            <HiOutlineShoppingCart className="text-4xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
