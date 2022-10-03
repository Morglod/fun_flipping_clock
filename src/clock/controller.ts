import { useEffect, useState } from "react";

export function useClock(initialDate: () => Date = () => new Date()) {
  const [date, setDate] = useState(initialDate);

  useEffect(() => {
    const int = setInterval(() => {
      setDate((prevDate) => new Date(prevDate.getTime() + 1000));
    }, 1000);
    return () => clearInterval(int);
  }, []);

  return {
    date,
  };
}
