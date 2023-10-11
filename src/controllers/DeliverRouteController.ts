import { Request, Response } from "express";
import { prisma } from "../database/prisma";


class Route {
  public async storeRoute(req: Request, res: Response): Promise<Response> {
    try {
      const { name, destination, delivery, deliveryId } = req.body;
      const storeRoute = await prisma.route.create({
        data: {
          name,
          destination: {
            create: [
              destination
            ]
          },
          delivery,
          deliveryId
        }
      })

      return res.status(201).json(storeRoute);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to store Route' });
    }
  }

  public async ReadRoute(req: Request, res: Response): Promise<Response> {
    const readRoutes = await prisma.route.findMany()
    return res.json(readRoutes);
  }

  public async editRoute(req: Request, res: Response): Promise<Response> {
    try {
      const { id, name, destination, delivery, deliveryId } = req.body;
      const storeRoute = await prisma.route.update({
        where: {
          id,
        },
        data: {
          name,
          destination: {
            create: [
              destination
            ]
          },
          delivery,
          deliveryId
        },
      })

      return res.status(201).json(storeRoute);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to update Route' });
    }


  }


  public async Deleteroute(req: Request, res: Response): Promise<Response> {
    const { clientID } = req.body;
    const delRoute = await prisma.destination.delete({ where: clientID })
    return res.json(delRoute);
  }
}

export default new Route();