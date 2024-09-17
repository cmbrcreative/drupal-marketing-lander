import React from "react";

const SampleCard = ({ sample }) => {
  return (
    <div className="flex flex-col items-center gap-[3.2rem] px-[1.6rem] lg:flex-row lg:gap-[6.4rem]">
      <img src={sample.image} alt={sample.title} className="max-w-full" />
      <div className="flex  flex-col gap-[2.4rem]">
        <h3 className="font-rebond text-[2.4rem] font-medium leading-[2.592rem] tracking-[-0.024rem] lg:text-[3.2rem] lg:leading-[108%] lg:tracking-[-0.032rem]">
          {sample.title}
        </h3>
        <p className="p-sm-reg">{sample.description}</p>
        <sample.logo />
      </div>
    </div>
  );
};

export default SampleCard;
