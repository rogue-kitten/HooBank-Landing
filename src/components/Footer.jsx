import React from "react";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="flex justify-center items center flex-col py-6 sm:py-16">
      <div className="flex justify-center items-start md:flex-row flex-col mb-8 w-full">
        <div className="flex flex-1 flex-col justify-start mr-10">
          <img
            src={logo}
            alt="logo"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] mt-5 max-w-[312px]">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex flex-[1.5] flex-wrap w-full flex-row justify-between items-start md:mt-0 mt-10">
          {footerLinks.map((footerLink, index) => (
            <div
              key={index}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-poppins, font-normal text-white text-[18px] heading-[30.8px]">
                {footerLink.title}
              </h4>
              <ul className="space-y-3 mt-7">
                {footerLink.links.map((link) => (
                  <li
                    key={link.name}
                    className="text-dimWhite font-normal text-[16px]"
                  >
                    <a href={link.link} target="_blank" rel="noreferrer">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col ss:flex-row w-full justify-between items-start">
        <div className="flex flex-1 flex-row space-x-4 text-dimWhite">
          <p className="text-[14px]">Copyright &#169;</p>
          <p className="text-[14px] flex-1">
            2021 HooBank. All Rights Reserved.
          </p>
        </div>
        <div className="flex justify-start items-center space-x-4 mt-3 ss:mt-0">
          {socialMedia.map((social) => (
            <div key={social.id} className="flex justify-center items-center">
              <a href={social.link} target="_blank" rel="noreferrer">
                <img
                  src={social.icon}
                  className="w-[21px] h-[21px] object-contain"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
