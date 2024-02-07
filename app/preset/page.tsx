import NewPresetForm from "@/components/preset/NewPresetForm";
import PresetList from "@/components/preset/PresetList";
import db from "@/utils/db";
import { resolve } from "path";

const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!db) {
    throw new Error("Database is not initialized");
  }
  const presets = await db.preset.findMany({});
  console.log("presets", presets);
  return presets;
};

const Setting = async () => {
  const presets = await getData();
  return (
    <div>
      <h1>Presets</h1>
      <PresetList presets={presets} />
      <NewPresetForm />
    </div>
  );
};
export default Setting;
