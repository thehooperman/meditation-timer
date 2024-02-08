import { useContext, useState } from "react";
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

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log("handleSliderChange event.target.value", event.target.value);
    // console.log("handleSliderChange presetId", presetId);
    // console.log("handleSliderChange presetType", presetType);
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
        <p>
          Value: <span id="demo">{value}</span>
        </p>
      </div>
    </>
  );
};

export default Slider;
