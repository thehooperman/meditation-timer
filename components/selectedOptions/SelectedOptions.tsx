import Slider from "../slider/Slider";

const SelectedOptions = ({ preset }) => {
  return (
    <>
      <div>Options</div>
      <div>{JSON.stringify(preset)}</div>
      <Slider label="Prep" max="10" presetValue={preset.time1} />
      <Slider label="Meditation" max="120" presetValue={preset.time2} />
      <Slider label="Rest" max="10" presetValue={preset.time3} />
    </>
  );
};
export default SelectedOptions;
