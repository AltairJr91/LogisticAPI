import { Request, Response } from "express";
import { prisma } from "../database/prisma";


class Adress {
  public async storeAdress(req: Request, res: Response): Promise<Response> {
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
      return res.status(500).json({ error: 'Failed to store address' });
    }


  }

  public async readAdress(req: Request, res: Response): Promise<Response> {

    return res.json();
  }
}

export default new Adress();