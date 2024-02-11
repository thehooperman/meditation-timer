"use client";

import styles from "./Select.module.scss";

import db from "@/utils/db";
import PresetList from "@/components/preset/PresetList";
import SelectedOptions from "../selectedOptions/SelectedOptions";
import { useState } from "react";

interface PresetProps {
  id: string;
  name: string;
  time1: number;
  time2: number;
  time3: number;
}

export interface PresetSelectionProps {
  presets: PresetProps[];
}

const Select: React.FC<PresetSelectionProps> = ({ presets }) => {
  const [selectedData, setSelectedData] = useState(null);

  // const sortedPresets = [...presets].sort((a, b) =>
  //   a.name.localeCompare(b.name)
  // );

  const handleSelectChange = (event) => {
    const selectedId = event.target.value;
    const selected = presets.find((preset) => preset.id === selectedId);
    setSelectedData(selected);
  };

  return (
    <div>
      {/* <h1>Presets</h1> */}
      <select className={styles.select_block} onChange={handleSelectChange}>
        <option value="">Select Your Meditation</option>
        {presets.map((preset) => (
          <option key={preset.id} value={preset.id}>
            {preset.name}
          </option>
        ))}
      </select>
      {selectedData && <SelectedOptions preset={selectedData} />}

      {/* <hr />

      {presets.map((preset) => {
        return <div key={preset.id}>{JSON.stringify(preset)}</div>;
      })} */}
    </div>
  );
};
export default Select;
