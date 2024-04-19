import { FC, useEffect, useState } from "react";

import styles from "./RingTimer.module.scss";

interface RingTimerProps {
  totalTime: number;
}

const RingTimer: FC<RingTimerProps> = ({ totalTime }) => {
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const radius = 50;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset =
    (timeLeft / totalTime) * circumference - circumference;

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((timeleft) => timeleft - 1);
    }, 1000);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) {
      setTimeLeft(totalTime);
    }
  }, [timeLeft, totalTime]);

  return (
    <div>
      <svg
        className={styles.ring}
        width="200"
        height="200"
        viewBox="0 0 200 200"
      >
        <circle
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          r={radius}
          cx="100"
          cy="100"
        />
      </svg>
      <div className={styles.text}>{timeLeft}</div>
    </div>
  );
};
export default RingTimer;
