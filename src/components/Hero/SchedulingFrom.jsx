import React from "react";
import { constants } from "../../constants/textConstants";
import SchedulingLight from "./SchedulingLight";

const SchedulingFrom = () => {
  return (
    <div className="text-green mono-text flex items-baseline gap-[.8rem] ml-[.8rem]">
      <SchedulingLight />{" "}
      <span>Scheduling from {constants.scheduling.from}</span>
    </div>
  );
};

export default SchedulingFrom;
