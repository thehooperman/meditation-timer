import { useState, useEffect } from "react";
import styles from "./Timer.module.scss";

// const Timer = ({ isStarted, time1 = 0, time2 = 0, time3 = 0 }) => {
const Timer = ({
  isStarted,
  finished,
  currentTimer,
  handleStop,
  timer1,
  timer2,
  timer3,
  setTimer1,
  setTimer2,
  setTimer3,
}) => {
  // const [timer1, setTimer1] = useState(time1 * 60);
  // const [timer2, setTimer2] = useState(time2 * 60);
  // const [timer3, setTimer3] = useState(time3 * 60);
  // const [finished, setFinished] = useState(false);
  // const [currentTimer, setCurrentTimer] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (!isPaused && isStarted) {
      interval = setInterval(() => {
        if (currentTimer === 1) {
          if (timer1 > 0) {
            setTimer1((prevTime) => prevTime - 1);
          } else {
            setCurrentTimer(2);
          }
        } else if (currentTimer === 2) {
          if (timer2 > 0) {
            setTimer2((prevTime) => prevTime - 1);
          } else {
            setCurrentTimer(3);
          }
        } else if (currentTimer === 3) {
          if (timer3 > 0) {
            setTimer3((prevTime) => prevTime - 1);
          } else {
            setCurrentTimer(0);
            setFinished(true);
          }
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [currentTimer, timer1, timer2, timer3, isPaused, isStarted]);

  useEffect(() => {
    if (!isStarted) {
      handleStop;
    }
  }, [isStarted, handleStop]);

  const handlePause = () => {
    setIsPaused((prevState) => !prevState);
  };

  // const handleStop = () => {
  //   setCurrentTimer(0);
  //   setFinished(true);
  //   setTimer1(0);
  //   setTimer2(0);
  //   setTimer3(0);
  // };

  return (
    <div>
      {currentTimer === 1 && <div>Timer 1: {timer1}</div>}
      {currentTimer === 2 && <div>Timer 2: {timer2}</div>}
      {currentTimer === 3 && <div>Timer 3: {timer3}</div>}
      {currentTimer === 0 && finished && <div>Finished</div>}
      <button onClick={handlePause}>{isPaused ? "Resume" : "Pause"}</button>
      {/* <button onClick={handleStop}>Stop</button> */}
    </div>
  );
};

export default Timer;
