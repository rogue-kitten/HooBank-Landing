import React from "react";
import { stats } from "../constants";

const Stats = () => {
  return (
    <section
      id="stats"
      className="flex justify-center items-center flex-row flex-wrap mb-6 sm:mb-20"
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className="flex-1 flex justify-start items-center flex-row m-3"
        >
          <h4 className="text-white text-[30px] xs:leading-[53px] leading-[43px] xs:text-[40px] font-poppins font-semibold">
            {stat.value}
          </h4>
          <p className="text-gradient text-[15px] xs:leading-[26px] leading-[21px] xs:text-[20px] font-poppins font-normal uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};
export default Stats;
