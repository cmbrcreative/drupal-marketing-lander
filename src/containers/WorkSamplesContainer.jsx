import React from "react";
import { constants } from "../constants/textConstants";
import SampleCard from "../components/WorkSamples/SampleCard";

const WorkSamples = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-16 lg:gap-32">
      <div className="text-center flex flex-col gap-[.8rem] lg:gap-[1.6rem]">
        <p className="p-sm-bold lg:p-norm-bold">Work Samples</p>
        <h2 className="py-2 font-medium leading-[4.48rem] max-w-[70.8rem] gradient-text-blue tracking-[-0.048rem]">
          We&apos;ve done some cool stuff with Drupal over the years.
        </h2>
      </div>
      <div className="max-w-[100rem] flex flex-col gap-[12.8rem]">
        {constants.workSamples.samples.map((sample) => {
          return <SampleCard key={sample.title} sample={sample} />;
        })}
      </div>
    </div>
  );
};

export default WorkSamples;
