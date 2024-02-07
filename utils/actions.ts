"use server";
import { revalidatePath } from "next/cache";
import db from "./db";

interface FormData {
  name: string;
  time1: string;
  time2: string;
  time3: string;
  get: (key: string) => any;
  // other properties...
}

export const NewPreset = async (formData: FormData) => {
  if (!db) {
    throw new Error("Database is not initialized");
  }
  const preset = await db.preset.create({
    data: {
      name: formData.get("name"),
      time1: formData.get("time1"),
      time2: formData.get("time2"),
      time3: formData.get("time3"),
    },
  });

  revalidatePath("/preset");
};
