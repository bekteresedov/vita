import NavList from "@/components/nav/nav-list";
import Button from "@/components/UI/button";
import Input from "@/components/UI/input";
import { socialMediaList } from "@/constants/socail-media";
import Image from "next/image";
import React, { memo } from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer ">
        <div>
          <div className="footer-first">
            <div>
              <h3>Join our newsletter</h3>
              <h4>We’ll send you a nice letter once per week. No spam.</h4>
            </div>
            <div>
              <form>
                <div>
                  <Input
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                    className="input"
                  />
                  <Button type="submit" className="btn-footer">
                    Subscribe
                  </Button>
                </div>
              </form>
            </div>
          </div>
          <div className="footer-second">
            <div className="nav">
              <NavList />
            </div>
            <div>
              <p>Everyone deserves a second chance, so do your phone!</p>
              <ul>
                {socialMediaList.map((soc, index) => (
                  <li key={index + soc.alt}>
                    <Image width={24} height={24} src={soc.src} alt={soc.alt} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="end">
              <p>© 2077 Untitled UI. All rights reserved.</p>
              <ul>
                <li>Terms</li>
                <li>Privacy</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default memo(Footer);
