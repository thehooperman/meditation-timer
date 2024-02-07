-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Preset" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "time1" TEXT NOT NULL,
    "time2" TEXT NOT NULL,
    "time3" TEXT NOT NULL
);
INSERT INTO "new_Preset" ("id", "name", "time1", "time2", "time3") SELECT "id", "name", "time1", "time2", "time3" FROM "Preset";
DROP TABLE "Preset";
ALTER TABLE "new_Preset" RENAME TO "Preset";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
