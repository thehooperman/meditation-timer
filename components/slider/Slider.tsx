import { useState } from "react";
import styles from "./Slider.module.scss";

const Slider = ({ label, max = "0", presetValue = 0 }) => {
  const [value, setValue] = useState(presetValue);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return (
    <>
      <div className={styles.container}>
        <label htmlFor="myRange">{label}</label>
        <input
          type="range"
          min="0"
          max={max}
          value={value}
          className={styles.slider}
          id="myRange"
          onChange={handleSliderChange}
        />
        <p>
          Value: <span id="demo">{value}</span>
        </p>
      </div>
    </>
  );
};

export default Slider;
