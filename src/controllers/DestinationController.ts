import { Request, Response } from "express";
import { prisma } from "../database/prisma";


class destination {
  public async store(req: Request, res: Response): Promise<Response> {
    try {
      const { name, address } = req.body;
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

  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const readClients = await prisma.destination.findMany()
      return res.status(200).json(readClients);
    } catch (error) {
      return res.status(500).json({ error: "Failed to index clients" });
    }

  }

  public async show(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const destination = await prisma.destination.findFirst({ where: { id: id } })
      return res.status(200).json({ message: "Return client ", destination: destination });
    } catch (error) {
      return res.status(500).json({ error: "Failed to show client" });
    }

  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const { name, address } = req.body;
      const storeRoute = await prisma.destination.update({
        where: {
          id: id,
        },
        data: {
          name,
          address,
        }
      })

      return res.status(201).json(storeRoute);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to update Route' });
    }
  }


  public async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const delClient = await prisma.destination.delete({ where: { id: id } })
      return res.json(delClient);
    } catch (error) {
      return res.status(500).json({ error: "Failed to delete Route" });
    }

  }
}

export default new destination();