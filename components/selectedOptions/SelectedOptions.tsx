import { useState } from "react";
import styles from "./SelectedOptions.module.scss";
import Slider from "../slider/Slider";
import Timer from "../timer/Timer";
import Timer2 from "../timer2/Timer2";

const SelectedOptions = ({ preset }) => {
  const [isStarted, setIsStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [currentTimer, setCurrentTimer] = useState(1);

  const [timer1, setTimer1] = useState(preset.time1 * 60);
  const [timer2, setTimer2] = useState(preset.time2 * 60);
  const [timer3, setTimer3] = useState(preset.time3 * 60);

  const handleStarted = () => {
    setIsStarted((prevState) => !prevState);
  };

  const handleStop = () => {
    setCurrentTimer(0);
    setFinished(true);
    setTimer1(0);
    setTimer2(0);
    setTimer3(0);
  };

  return (
    <div className={styles.container}>
      {isStarted ? (
        <>
          {/* <Timer
            isStarted={isStarted}
            finished={finished}
            currentTimer={currentTimer}
            handleStop={handleStop}
            // time1={preset.time1}
            // time2={preset.time2}
            // time3={preset.time3}
            timer1={timer1}
            timer2={timer2}
            timer3={timer3}
            setTimer1={setTimer1}
            setTimer2={setTimer2}
            setTimer3={setTimer3}
          /> */}
          <Timer2
            presetId={preset.id}
            isStarted={isStarted}
            finished={finished}
            setFinished={setFinished}
            currentTimer={currentTimer}
            setCurrentTimer={setCurrentTimer}
            handleStop={handleStop}
          />
        </>
      ) : (
        <>
          <h3>Adjust the presets if you like</h3>
          <div>{preset.name}</div>
          <Slider
            label="Prep"
            max="10"
            presetId={preset.id}
            presetType="UPDATE_TIME1"
            presetValue={preset.time1}
          />
          <Slider
            label="Meditation"
            max="120"
            presetId={preset.id}
            presetType="UPDATE_TIME2"
            presetValue={preset.time2}
          />
          <Slider
            label="Rest"
            max="10"
            presetId={preset.id}
            presetType="UPDATE_TIME3"
            presetValue={preset.time3}
          />
        </>
      )}

      <button
        id="start-end-btn"
        className={styles.block_link}
        onClick={handleStarted}
      >
        {isStarted ? "End" : "Start"}
      </button>
    </div>
  );
};
export default SelectedOptions;
