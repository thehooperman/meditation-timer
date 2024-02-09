import { useState } from "react";
import styles from "./SelectedOptions.module.scss";
import Slider from "../slider/Slider";
import Timer from "../timer/Timer";

const SelectedOptions = ({ preset }) => {
  const [isStarted, setIsStarted] = useState(false);

  const handleStarted = () => {
    setIsStarted((prevState) => !prevState);
  };

  return (
    <div className={styles.container}>
      {isStarted ? (
        <Timer
          isStarted={isStarted}
          time1={preset.time1}
          time2={preset.time2}
          time3={preset.time3}
        />
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
