import React from "react";
import { quotes } from "../assets";

// eslint-disable-next-line react/prop-types
const FeedbackCard = ({ id, content, name, title, img }) => {
  return (
    <div
      className={`flex flex-col justify-between px-10 py-12 rounded-[20px] max-w-[370px] ${
        id === "feedback-3" ? "mr-0" : "md:mr-10 sm:mr-5 mr-0"
      } my-5 feedback-card hover:scale-105 duration-300`}
    >
      <div>
        <img
          src={quotes}
          alt="quotes"
          className="w-[42px] h-[27px] object-contain"
        />
      </div>
      <p className="text-white font-poppins leading-[32px] my-5 max-w-[270px]">
        {content}
      </p>
      <div className="flex justify-start items-center my-2">
        <img
          src={img}
          alt={name}
          className="w-[48px] h-[48px] object-contain"
        />
        <p className="ml-3 font-poppins flex flex-col space-y-0">
          <span className="text-white text-lg leading-[32px]">{name}</span>
          <span className="text-dimWhite text-[16px] leading-[24px]">
            {title}
          </span>
        </p>
      </div>
    </div>
  );
};
export default FeedbackCard;
