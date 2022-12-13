import React from "react";
import { card } from "../assets";
import Button from "./Button";

const CardDeal = () => (
  <section id="cardDeal" className="flex flex-col md:flex-row py-6 sm:py-10">
    <div className="flex flex-1 flex-col justify-center items-start">
      <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] leading-[66.8px] xs:leading=[76.8px] w-full text-white">
        Find a better card deal in a few easy steps
      </h2>
      <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className="flex justify-center items-center flex-1 md:ml-12 ml-0 mt-6 md:mt-0">
      <img src={card} alt="cardDeals" className="object-contain" />
    </div>
  </section>
);
export default CardDeal;
