import { Request, Response } from "express";
import { prisma } from "../database/prisma";
import { hash, compare } from "bcrypt";

class AdminController {

  public async createNewAdmin(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;
    const encryptedPassword = await hash(password, 8);

    const storeAdmin = await prisma.admin.create({
      data: {
        name,
        email,
        password: encryptedPassword
      }
    });
    
    return res.status(200).json({Admin:storeAdmin.name})
  }

  public async getAdmin(req: Request, res: Response): Promise<Response>{
   
    const getAdmin = await prisma.admin.findMany()

    return res.status(200).json(getAdmin)
  }

}


export default new AdminController();