import React from "react";
import { features } from "../constants";
import Button from "./Button";
import FeatureCard from "./FeatureCard";

const Business = () => {
  return (
    <section id="features" className="flex flex-col md:flex-row py-6 sm:py-16">
      <div className="flex-1 flex justify-center items-start flex-col">
        <h1 className="font-poppins font-semibold xs:text-[48px] text-[40px] leading-[66.8px] xs:leading=[76.8px] w-full text-white">
          You do the Business,
          <br className="hidden md:block" />
          we'll handle the money.
        </h1>
        <p className="font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px] max-w-[470px] mt-5">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles="mt-10" />
      </div>
      <div className="flex flex-1 justify-center items-center ml-0 md:ml-10 mt-10 md:mt-0 relative flex-col space-y-6">
        {features.map((feature) => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default Business;
