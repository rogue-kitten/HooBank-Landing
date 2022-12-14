import React from "react";
import Button from "./Button";

const CTA = () => (
  <section className="flex justify-center items-center my-6 sm:my-16 flex-col sm:flex-row bg-black-gradient-2 rounded-[20px] box-shadow sm:px-16 px-6 sm:py-12 py-4">
    <div className="flex flex-1 flex-col">
      <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
        Lets try our service now!
      </h2>
      <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>
    <div className="flex justify-start items-center ml-10 sm:ml-0 mt-10 sm:mt-0">
      <Button />
    </div>
  </section>
  // <section
  //   id="cta"
  //   className="my-6 sm:my-16 flex justify-center items-center py-6 md:py-16 bg-black-gradient-2 px-6 sm:px-16 md:px-20 rounded-[20px]"
  // >
  //   <div className="w-full flex justify-between items-start md:items-center flex-col md:flex-row">
  //     <div className="flex flex-col">
  //       <h2 className="w-full font-poppins font-semibold xs:text-[48px] text-[40px] leading-[66.8px] xs:leading=[76.8px] text-white">
  //         Let's try our service now!
  //       </h2>
  //       <p className="font-poppins font-normal text-dimWhite text-normal text-[18px] leading-[30px] mt-5 max-w-[470px]">
  //         Everything you need to accept card payments and grow your business
  //         anywhere on the planet.
  //       </p>
  //     </div>
  //     <Button styles="mt-10 md:mt-0" />
  //   </div>
  // </section>
);
export default CTA;
