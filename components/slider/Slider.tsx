import { useState } from "react";
import styles from "./Slider.module.scss";

const Slider = () => {
  const [value, setValue] = useState(0);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  };

  return (
    <>
      <div className={styles.container}>
        <input
          type="range"
          min="1"
          max="100"
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
