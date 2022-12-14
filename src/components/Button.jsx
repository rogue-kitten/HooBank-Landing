import React from "react";

// eslint-disable-next-line react/prop-types
const Button = ({ styles }) => {
  return (
    <div>
      <button
        className={`${styles} bg-blue-gradient rounded-xl font-poppins font-medium text-lg text-primary px-8 py-4 hover:scale-105 duration-300`}
      >
        Get Started
      </button>
    </div>
  );
};
export default Button;
