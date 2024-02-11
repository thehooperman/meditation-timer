import { useContext, useEffect, useState } from "react";
import { PresetContext } from "@/app/page";
import styles from "./Slider.module.scss";

const Slider = ({
  label,
  max = "10",
  presetId,
  presetType,
  presetValue = 0,
}) => {
  const presetContext = useContext(PresetContext);
  const [value, setValue] = useState(presetValue);

  useEffect(() => {
    setValue(presetValue);
  }, [presetValue]);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
    presetContext.presetDispatch({
      type: "UPDATE_ITEM",
      id: presetId,
      action: { type: presetType, payload: event.target.value },
    });
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.input_group}>
          <label htmlFor={`${presetId}-${presetType}`}>{label}</label>
          <input
            type="range"
            min="0"
            max={max}
            value={value}
            className={styles.slider}
            id={`${presetId}-${presetType}`}
            onChange={handleSliderChange}
          />
        </div>
        <p className={styles.value}>
          {value} {value === "1" ? "minute" : "minutes"}
        </p>
      </div>
    </>
  );
};

export default Slider;
