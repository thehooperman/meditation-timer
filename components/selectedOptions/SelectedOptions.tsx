import styles from "./SelectedOptions.module.scss";
import Slider from "../slider/Slider";

const SelectedOptions = ({ preset }) => {
  return (
    <div className={styles.container}>
      <h3>Adjust the presets if you like</h3>
      <div>{preset.name}</div>
      {/* <div>{JSON.stringify(preset)}</div> */}
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
    </div>
  );
};
export default SelectedOptions;
