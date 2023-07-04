/*
  Warnings:

  - You are about to drop the column `Number` on the `Adress` table. All the data in the column will be lost.
  - You are about to drop the column `city` on the `Adress` table. All the data in the column will be lost.
  - You are about to drop the column `destinationId` on the `Adress` table. All the data in the column will be lost.
  - You are about to drop the column `routeId` on the `Adress` table. All the data in the column will be lost.
  - You are about to drop the column `zipCode` on the `Adress` table. All the data in the column will be lost.
  - Added the required column `addresNumber` to the `Destination` table without a default value. This is not possible if the table is not empty.
  - Added the required column `City` to the `Adress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `DestinationId` to the `Adress` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ZipCode` to the `Adress` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Destination" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "addresNumber" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "routeId" INTEGER NOT NULL,
    CONSTRAINT "Destination_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "Route" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Destination" ("code", "id", "name", "routeId") SELECT "code", "id", "name", "routeId" FROM "Destination";
DROP TABLE "Destination";
ALTER TABLE "new_Destination" RENAME TO "Destination";
CREATE TABLE "new_Adress" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "Name" TEXT NOT NULL,
    "ZipCode" INTEGER NOT NULL,
    "Neighbor" TEXT NOT NULL,
    "City" TEXT NOT NULL,
    "State" TEXT NOT NULL,
    "DestinationId" INTEGER NOT NULL,
    CONSTRAINT "Adress_DestinationId_fkey" FOREIGN KEY ("DestinationId") REFERENCES "Destination" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Adress" ("Name", "Neighbor", "State", "id") SELECT "Name", "Neighbor", "State", "id" FROM "Adress";
DROP TABLE "Adress";
ALTER TABLE "new_Adress" RENAME TO "Adress";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
