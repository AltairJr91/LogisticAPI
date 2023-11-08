import { Request, Response } from "express";
import { prisma } from "../database/prisma";
import { hash, compare } from "bcrypt";

class AdminController {

  public async store(req: Request, res: Response): Promise<Response> {
    try {
      const { name, email, password } = req.body;
      const encryptedPassword = await hash(password, 8);

      const storeAdmin = await prisma.admin.create({
        data: {
          name,
          email,
          password: encryptedPassword
        }
      });

      return res.status(200).json({ Admin: storeAdmin.name })
    } catch (error) {
      return res.status(500).json({ message: "Error: cannot create admin" });
    }

  }

  public async show(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const getAdmin = await prisma.admin.findFirst({ where: { id: id } })

      return res.status(200).json({ message: "Admin Return", Admin: getAdmin })
    } catch (error) {
      return res.status(500).json({ message: "Error: cannot find admin" });
    }

  }

}


export default new AdminController();