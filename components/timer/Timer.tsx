import { useState, useEffect } from "react";
import styles from "./Timer.module.scss";

const Timer = ({ time1 = 1, time2 = 1, time3 = 1 }) => {
  const [timer1, setTimer1] = useState(time1 * 60);
  const [timer2, setTimer2] = useState(time2 * 60);
  const [timer3, setTimer3] = useState(time3 * 60);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer1 > 0) {
        setTimer1((prevTime) => prevTime - 1);
      }
      if (timer2 > 0 && timer1 === 0) {
        setTimer2((prevTime) => prevTime - 1);
      }
      if (timer3 > 0 && timer1 === 0 && timer2 === 0) {
        setTimer3((prevTime) => prevTime - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timer1, timer2, timer3]);

  useEffect(() => {
    if (timer1 === 0 && timer2 === 0 && timer3 === 0) {
      setFinished(true);
    }
  }, [timer1, timer2, timer3]);

  return (
    <div>
      <div>Timer 1: {timer1}</div>
      <div>Timer 2: {timer2}</div>
      <div>Timer 3: {timer3}</div>
      {finished && <div>Finished</div>}
    </div>
  );
};

export default Timer;
