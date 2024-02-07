import Preset from "./Preset";

// interface Preset {
//   id: string;
//   name: string;
//   time1: number;
//   time2: number;
//   time3: number;
// }

// export interface PresetListProps {
//   presets: Preset[];
// }

// const PresetList: React.FC<PresetListProps> = ({ presets }) => {
const PresetList = ({ presets }) => {
  return (
    <div>
      {presets.map((preset) => (
        <Preset key={preset.id} preset={preset} />
      ))}
    </div>
  );
};
export default PresetList;
