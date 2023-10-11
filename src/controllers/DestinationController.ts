import { Request, Response } from "express";
import { prisma } from "../database/prisma";


class destination {
  public async storeDestination(req: Request, res: Response): Promise<Response> {
    try {
      const { name, address} = req.body;
      const storeClient = await prisma.destination.create({
        data: {
          name,
          address,
        }
      })

      return res.status(201).json(storeClient);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to store client' });
    }


  }

  public async ReadClient(req: Request, res: Response): Promise<Response> {
    const readClients = await prisma.destination.findMany()
    return res.json(readClients);
  }

  public async DeleteClient(req: Request, res: Response): Promise<Response> {
    const {clientID} = req.body;
    const delClient = await prisma.destination.delete({where:clientID})
    return res.json(delClient);
  }
}

export default new destination();