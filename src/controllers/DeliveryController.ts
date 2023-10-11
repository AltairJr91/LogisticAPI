import { Request, Response } from "express";
import { prisma } from "../database/prisma";
import Delivery from "../interfaces/DeliveryInterface";

class DeliveryController {

  public async storeDelivery(req: Request, res: Response): Promise<Response> {
    const { name, vehicle, route } = req.body;

    const storeDelivery: Delivery = await prisma.delivery.create({
      data: {
        name,
        vehicle,
        route
      }
    });
    
    return res.status(200).json(storeDelivery)
  }

  public async getDelivery(req: Request, res: Response): Promise<Response>{
   
    const getDeliverys = await prisma.delivery.findMany()

    return res.status(200).json(getDeliverys)
  }

  public async deleteDelivery(req: Request, res: Response): Promise<Response>{
    const {deliveryid} = req.body 
    const delDelivery = await prisma.delivery.delete({where: deliveryid})

    return res.status(200).json(delDelivery)
  }

}


export default new DeliveryController();