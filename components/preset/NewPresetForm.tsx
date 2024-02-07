import { NewPreset } from "@/utils/actions";

const NewPresetForm = () => {
  return (
    <div>
      <h3>Add New Preset</h3>
      <form action={NewPreset}>
        <input type="text" name="name" id="preset-name" />
        <input type="number" name="time1" id="preset-time1" />
        <input type="text" name="time2" id="preset-time2" />
        <input type="text" name="time3" id="preset-time3" />
        <button type="submit">Add Preset</button>
      </form>
    </div>
  );
};
export default NewPresetForm;
