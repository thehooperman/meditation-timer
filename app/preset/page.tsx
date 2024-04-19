import NavStatic from "@/components/nav/NavStatic";
import PresetForm from "@/components/preset/PresetForm";
import PresetList from "@/components/preset/PresetList";
import db from "@/utils/db";
import { resolve } from "path";
import styles from "./preset.module.scss";

const getData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  if (!db) {
    throw new Error("Database is not initialized");
  }
  const presets = await db.preset.findMany({});
  console.log("presets", presets);
  return presets;
};

const Presets = async () => {
  const presets = await getData();
  return (
    <>
      <NavStatic />
      <div className={styles.container}>
        <h1>Presets</h1>
        <PresetList presets={presets} />
        <PresetForm />
      </div>
    </>
  );
};
export default Presets;
