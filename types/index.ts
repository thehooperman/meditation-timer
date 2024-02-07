export interface Preset {
  id: string;
  name: string;
  time1: number;
  time2: number;
  time3: number;
}

export interface PresetListProps {
  presets: Preset[];
}
