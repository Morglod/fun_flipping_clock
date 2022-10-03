import React, { useEffect, useState } from "react";
import { cn } from "../classNames";

import "./number-flip.css";

type NumberFlipProps = {
  digit: number;
};

const fmtInt = (x: number) => (x < 10 ? "0" + x : x);

export const NumberFlip = ({ digit: _digit }: NumberFlipProps) => {
  const digit = fmtInt(_digit);

  const [value, setValue] = useState(digit);
  const [nextValue, setNextValue] = useState(digit);
  const animate = value !== nextValue;

  useEffect(() => {
    if (digit !== value) {
      setNextValue(digit);
      const t = setTimeout(() => setValue(digit), 890);
      return () => {
        setValue(digit);
        clearTimeout(t);
      };
    }
    return () => {};
  }, [digit, value]);

  return (
    <div className="number-flip">
      <div className={cn("nf-digit --top", animate && "anim-flip1")}>
        <div className="nf-number --top">{value}</div>
      </div>
      <div className="nf-digit --bottom">
        <div className="nf-number --bottom">{value}</div>
      </div>
      <div className={cn("nf-digit --bottom-inv", animate && "anim-flip2")}>
        <div className="nf-number --bottom-inv">{nextValue}</div>
      </div>
      <div className="nf-digit --top --top2">
        <div className="nf-number --top">{nextValue}</div>
      </div>
    </div>
  );
};
