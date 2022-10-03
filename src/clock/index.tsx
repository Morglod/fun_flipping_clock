import React from "react";
import { useClock } from "./controller";

import "./clock.css";
import { NumberFlip } from "./number-flip";

type ClockProps = {};

export const Clock = (props: ClockProps) => {
  const { date } = useClock();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  return (
    <div className="clock">
      <div className="clock-timebox">
        <NumberFlip digit={hours} />
        <NumberFlip digit={minutes} />
        <NumberFlip digit={seconds} />
      </div>
    </div>
  );
};
