import React from "react";
import { card } from "../assets";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section
      id="card"
      className="flex flex-col md:flex-row py:6 sm:py-16 space-y-10 md:space-y-0 space-x-0 md:space-x-12"
    >
      <div className="flex flex-1 flex-col justify-center items-start">
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] leading-[66.8px] xs:leading=[76.8px] w-full text-white ">
          Find a better card deal in a few easy steps.
        </h2>
        <p className="font-poppins font-normal text-dimWhite text-normal text-[18px] leading-[30px] mt-5 max-w-[470px]">
          Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
          aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className="flex flex-1 justify-center items-start">
        <img src={card} />
      </div>
    </section>
  );
};

export default CardDeal;
