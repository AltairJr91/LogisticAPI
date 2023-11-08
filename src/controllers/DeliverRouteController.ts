import { Request, Response } from "express";
import { prisma } from "../database/prisma";


class Route {
  public async store(req: Request, res: Response): Promise<Response> {
    try {
      const { name, destinationIds, driverId } = req.body;

      const storeRoute = await prisma.route.create({
        data: {
          name,
          driver: { connect: { id: driverId } },
          destination: {
            connect: destinationIds.map((id: string) => ({ id })),
          },
        },
        include: {
          destination: true,
          driver: true,
        },
      });

      return res.status(201).json({ message: "Route created", storeRoute: storeRoute });

    } catch (error) {
      return res.status(500).json({ error: 'Failed to store Route' });
    }
  }

  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const readRoutes = await prisma.route.findMany()
      return res.status(200).json(readRoutes);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to index Route' });
    }

  }

  public async show(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const route = await prisma.route.findFirst({ where: { id: id } })
      return res.status(200).json({ message: "Return route ", route: route });
    } catch (err) {
      return res.status(500).json({ error: "Failed to find route" });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const { name, driverId, destinations } = req.body;

      const updatedRoute = await prisma.route.update({
        where: {
          id,
        },
        data: {
          name,
          driver: { connect: { id: driverId } },
          destination: {
            create: destinations.map((destination: any) => ({
              name: destination.name,
              address: destination.address,
            })),
          },
        },
        include: {
          destination: true,
          driver: true, 
        },
      });

      return res.status(200).json(updatedRoute);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to update Route' });
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const delRoute = await prisma.route.delete({ where: { id: id } })
      return res.json(delRoute);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to delete Route' });
    }

  }
}

export default new Route();