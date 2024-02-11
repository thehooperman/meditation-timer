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

  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedId = event.target.value;
    const selected: PresetProps | undefined = presets.find(
      (preset) => preset.id === selectedId
    );
    setSelectedData(selected);
  };

  return (
    <div>
      <select className={styles.select_block} onChange={handleSelectChange}>
        <option value="">Select Meditation</option>
        {presets.map((preset) => (
          <option key={preset.id} value={preset.id}>
            {preset.name}
          </option>
        ))}
      </select>
      {selectedData && <SelectedOptions preset={selectedData} />}
    </div>
  );
};
export default Select;
