import React from "react";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className="flex flex-col md:flex-row py-6 sm:py-16">
    <div className="flex justify-center items-start flex-col xl:px-0">
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient-2 rounded-xl md-2">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className=" uppercase font-normal text-dimWhite text-[13px] xs:text-[14px] sm:text-[18px] leading-[30.8px] ml-2">
          <span className="text-white">20% </span>
          discount for <span className="text-white">1 month </span>
          account
        </p>
      </div>
      <div className="flex flex-row justify-center items-start w-full">
        <h1 className="font-poppins font-semibold flex-1 ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          The Next <br className="hidden sm:block" />
          <span className="text-gradient">Generation </span>
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
      <h1 className="font-poppins font-semibold ss:text-[60px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
        Payment Method.
      </h1>{" "}
      <p className="text-dimWhite font-poppins font-normal text-lg max-w-[470px] mt-5 leading-[30.8px]">
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>
    <div className="flex justify-center items-center md:my-0 my-10 relative">
      <img src={robot} alt="card_image" className="w-[100%] h-[100%] z-[5]" />
      <div className="pink__gradient absolute w-[40%] h-[35%] z-[0] top-0" />
      <div className="white__gradient absolute w-[80%] h-[80%] rounded-full z-[1] bottom-40" />
      <div className="blue__gradient absolute w-[50%] h-[50%] z-[0] right-20 bottom-20" />
    </div>
    <div className="flex justify-center items-start ss:hidden">
      <GetStarted />
    </div>
  </section>
);
export default Hero;
