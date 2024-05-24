import { INavItemProps } from "@/interfaces/INav";
import React from "react";
import Link from "next/link";

const NavItem: React.FC<INavItemProps> = ({ children, href }) => {
  return (
    <>
      <Link className="nav-item" href={href}>
        {children}
      </Link>
    </>
  );
};

export default NavItem;
