import { Request, Response } from "express";
import { prisma } from "../database/prisma";
import Adresses from "../interfaces/AdressInterface";




class Adress {
  public async storeAdress(req: Request, res: Response): Promise<Response> {
    try {
      const { name, zipCode, neighbor, city, state, destination, destinationId } = req.body;
      const storeAdress: Adresses = await prisma.adress.create({
        data: {
          Name: name,
          ZipCode: zipCode,
          Neighbor: neighbor,
          City: city,
          State: state,
          Destination: destination,
          DestinationId: destinationId
        }
      });
      return res.json(storeAdress);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to store address' });
    }


  }

  public async readAdress(req: Request, res: Response): Promise<Response> {

    return res.json();
  }
}

export default new Adress();