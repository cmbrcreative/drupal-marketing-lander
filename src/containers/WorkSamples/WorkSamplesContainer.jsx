import React from "react";
import SampleCard from "./SampleCard";
import { workSamplesConstants } from "./_workSamplesConstants";

const WorkSamples = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-16 lg:gap-32">
      <div className="flex flex-col gap-[.8rem] text-center lg:gap-[1.6rem]">
        <p className="p-sm-bold lg:p-norm-bold">Work Samples</p>
        <h2 className="gradient-text-blue max-w-[70.8rem] py-2 font-medium leading-[4.48rem] tracking-[-0.048rem]">
          We&apos;ve done some cool stuff with Drupal over the years.
        </h2>
      </div>
      <div className="flex max-w-[100rem] flex-col gap-[12.8rem]">
        {workSamplesConstants.samples.map((sample) => {
          return <SampleCard key={sample.title} sample={sample} />;
        })}
      </div>
    </div>
  );
};

export default WorkSamples;
