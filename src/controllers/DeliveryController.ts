import { Request, Response } from "express";
import { prisma } from "../database/prisma";
import Delivery from "../interfaces/DeliveryInterface";

class DeliveryController {

  public async store(req: Request, res: Response): Promise<Response> {
    try {
      const { name, vehicle, route } = req.body;

      const storeDelivery: Delivery = await prisma.delivery.create({
        data: {
          name,
          vehicle,
          route
        }
      });

      return res.status(200).json(storeDelivery)
    } catch (error) {
      return res.status(500).json({ error: "Error creating delivery" });
    }

  }

  public async show(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const deliver = await prisma.delivery.findFirst({ where: { id: id } });

      return res.status(200).json({ message: "Result Delivery", delivery: deliver });
    } catch (error) {
      return res.status(500).json({ error: "Error creating delivery" });
    }

  }

  public async index(req: Request, res: Response): Promise<Response> {
    try {
      const getDeliverys = await prisma.delivery.findMany()

      return res.status(200).json(getDeliverys)
    } catch (error) {
      return res.status(500).json({ error: "Error getting delivery" });
    }

  }

  public async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const delDelivery = await prisma.delivery.delete({ where: { id: id } })

      return res.status(200).json(delDelivery)
    } catch (error) {
      return res.status(500).json({ error: "Error deleting delivery" });
    }

  }

  public async update(req: Request, res: Response): Promise<Response> {
    try {
      const { name, vehicle, route } = req.body;
      const { id } = req.params;
      const updateDelivery: Delivery = await prisma.delivery.update({
        where: { id },
        data: {
          name,
          vehicle,
          route
        }
      });
      return res.status(200).json(updateDelivery)
    } catch (error) {
      return res.status(500).json({ error: "Error updating delivery" });
    }

  }

}
export default new DeliveryController();