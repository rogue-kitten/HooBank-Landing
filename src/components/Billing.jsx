import React from "react";
import { apple, bill, google } from "../assets";

const Billing = () => (
  <section
    id="product"
    className="flex flex-col-reverse md:flex-row py-6 sm:py-16 space-y-10 md:space-y-0"
  >
    <div className="flex flex-1 justify-center items-center mr-0 md:mr-10 relative">
      <img src={bill} alt="billing" className="object-contain" />
    </div>
    <div className="flex flex-1 flex-col justify-center items-start">
      <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] leading-[66.8px] xs:leading=[76.8px] w-full  text-white ">
        Easily control your billing & invoicing.
      </h2>
      <p className="font-poppins text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
      <div className="flex flex-row mt-10 space-x-10">
        <img src={apple} alt="app-store" />
        <img src={google} alt="play-store" />
      </div>
    </div>
  </section>
);
export default Billing;
