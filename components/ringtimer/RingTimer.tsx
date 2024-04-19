import { FC } from "react";
import { formatTime } from "@/utils/helpers";
import styles from "./RingTimer.module.scss";

interface RingTimerProps {
  currentTime: number;
  startTime: number;
}

const RingTimer: FC<RingTimerProps> = ({ startTime, currentTime }) => {
  const radius = 50;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset =
    (currentTime / startTime) * circumference - circumference;

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
      <div className={styles.text}>{formatTime(currentTime)}</div>
    </div>
  );
};

export default RingTimer;
