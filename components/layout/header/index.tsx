import React, { memo } from "react";
// import "./assets/styles/style.scss";
import NavList from "@/components/nav/nav-list";
import Button from "@/components/UI/button";
import Image from "next/image";
import call from "./assets/icons/call.svg";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <nav>
            <NavList />
          </nav>
          <div className="btn-container">
            <Button className="btn-start">Start a Repair</Button>
            <Button className="btn-call">
              <Image width={20} height={20} src={call} alt="call" />
              <p>+1 (877) 966 4349</p>
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default memo(Header);
