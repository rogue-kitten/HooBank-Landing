import React from "react";
import { feedback } from "../constants";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => {
  return (
    <section
      id="#testimonials"
      className="flex flex-col justify-center items-start py-6 sm:py-16"
    >
      <div className="flex flex-col justify-center items-start w-full">
        {/* <div className="absolute z-0 w-[60%] h-[60%] rounded-full -right-[50%] blue__gradient overflow-hidden" /> */}
        <div className="flex flex-col md:flex-row justify-between items-start w-full relative z-[1]">
          <h2 className="flex-1 font-poppins font-semibold xs:text-[48px] text-[40px] leading-[66.8px] xs:leading=[76.8px] text-white md:max-w-[470px]">
            What people are saying about us
          </h2>
          <p className="flex-1 font-poppins font-normal text-dimWhite text-normal text-[18px] leading-[30px] mt-5 max-w-[470px]">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div className="flex flex-row flex-wrap md:flex-nowrap justify-center md:justify-between w-full py-6 md:py-12 relative z-[1]">
          {feedback.map((item) => (
            <FeedbackCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
