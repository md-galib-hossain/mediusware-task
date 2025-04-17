import React from "react";

const Button = ({ name, icon, ...rest }) => {
  return (
    <button
      className="bg-[#0060AF] py-3 px-6 text-base text-white rounded-xl font-bold"
      {...rest}
    >
      <span className="flex justify-between items-center gap-2">
        {icon}
        {name}
      </span>
    </button>
  );
};

export default Button;
