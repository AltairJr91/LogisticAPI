/*
  Warnings:

  - The primary key for the `Delivery` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Route` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Admin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Destination` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Delivery" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "vehicle" TEXT NOT NULL
);
INSERT INTO "new_Delivery" ("id", "name", "vehicle") SELECT "id", "name", "vehicle" FROM "Delivery";
DROP TABLE "Delivery";
ALTER TABLE "new_Delivery" RENAME TO "Delivery";
CREATE TABLE "new_Route" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "deliveryId" TEXT NOT NULL,
    CONSTRAINT "Route_deliveryId_fkey" FOREIGN KEY ("deliveryId") REFERENCES "Delivery" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Route" ("deliveryId", "id", "name") SELECT "deliveryId", "id", "name" FROM "Route";
DROP TABLE "Route";
ALTER TABLE "new_Route" RENAME TO "Route";
CREATE TABLE "new_Admin" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL
);
INSERT INTO "new_Admin" ("email", "id", "name", "password") SELECT "email", "id", "name", "password" FROM "Admin";
DROP TABLE "Admin";
ALTER TABLE "new_Admin" RENAME TO "Admin";
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");
CREATE TABLE "new_Destination" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "routeId" TEXT,
    CONSTRAINT "Destination_routeId_fkey" FOREIGN KEY ("routeId") REFERENCES "Route" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Destination" ("address", "id", "name", "routeId") SELECT "address", "id", "name", "routeId" FROM "Destination";
DROP TABLE "Destination";
ALTER TABLE "new_Destination" RENAME TO "Destination";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
