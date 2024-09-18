import React from "react";
import { globalConstants } from "../../_GlobalConstants/globalConstants";
import SchedulingLight from "./SchedulingLight";

const SchedulingFrom = () => {
  return (
    <div className="mono-text ml-[.8rem] flex items-baseline gap-[.8rem] text-green">
      <SchedulingLight />{" "}
      <span>Scheduling from {globalConstants.scheduling.from}</span>
    </div>
  );
};

export default SchedulingFrom;
