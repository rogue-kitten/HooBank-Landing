/* eslint-disable react/prop-types */
import React from "react";

const FeatureCard = ({ feature }) => {
  const { icon, title, content, id } = feature;
  return (
    <div className="flex flex-row justify-center items-start p-6 rounded-[20px] feature-card hover:scale-105 duration-300">
      <div className="w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue">
        <img src={icon} alt={id} className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex-1 flex flex-col ml-3 ">
        <h4 className="text-white font-popins text-lg font-semibold leading-[24px]">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite mt-2 leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
