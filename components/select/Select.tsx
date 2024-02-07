"use client";

import db from "@/utils/db";
import PresetList from "@/components/preset/PresetList";

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
  // const presets = getData();
  return (
    <div>
      <h1>Presets</h1>
      {presets.map((preset) => {
        return <div key={preset.id}>{JSON.stringify(preset)}</div>;
      })}
    </div>
  );
};
export default Select;
