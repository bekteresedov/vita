import { navList } from "@/constants/nav";
import React, { memo } from "react";
import NavItem from "../nav-item";
import "../assets/styles/style.scss";

const NavList = () => {
  return (
    <>
      <ul className="nav-list">
        {navList.map((nav, index) => (
          <li key={index}>
            <NavItem href={nav.href}>{nav.title}</NavItem>
          </li>
        ))}
      </ul>
    </>
  );
};

export default memo(NavList);
