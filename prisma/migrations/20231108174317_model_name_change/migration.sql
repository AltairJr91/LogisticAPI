/*
  Warnings:

  - You are about to drop the `Delivery` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `deliveryId` on the `Route` table. All the data in the column will be lost.
  - Added the required column `driverId` to the `Route` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Delivery";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Driver" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "vehicle" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Route" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "driverId" TEXT NOT NULL,
    CONSTRAINT "Route_driverId_fkey" FOREIGN KEY ("driverId") REFERENCES "Driver" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Route" ("id", "name") SELECT "id", "name" FROM "Route";
DROP TABLE "Route";
ALTER TABLE "new_Route" RENAME TO "Route";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
