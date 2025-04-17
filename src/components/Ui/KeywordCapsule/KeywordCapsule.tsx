import React from "react";

const KeywordCapsule = ({ name, count, ...rest }) => {
  return (
    <button
      className={` sm:py-[11px] py-1 focus:text-white focus:bg-[#0060AF] sm:px-6 px-4 border rounded-3xl bg-white`}
      {...rest}
    >
      {name}
    {count &&   <span className={`px-[6px] py-1  rounded-[21px] ms-1 bg-[#EAECF0] focus:text-[#EAECF0] h-[20px]`}>
        {count}
      </span>}
    </button>
  );
};

export default KeywordCapsule;
