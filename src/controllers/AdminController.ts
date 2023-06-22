import { Request, Response } from "express";
import { prisma } from "../database/prisma";
import { LoginResponse } from "../interfaces/LoginResponseInterface";
import { hash } from "bcrypt";

class AdminController {

  public async createNewAdmin(req: Request, res: Response): Promise<Response> {
    const { name, email, password } = req.body;
    const encryptedPassword = await hash(password, 8);

    const storeAdmin = await prisma.admin.create({
      data: {
        name,
        email,
        password:encryptedPassword
      }
    });
  
    return res.json(storeAdmin)
  }

  public async adminAuthorization(req: Request, res: Response): Promise<LoginResponse> {
    const { email } = req.body;
    const adminAuth = await prisma.admin.findUnique({ where: { email } });

    const loginResponse = {
      login: adminAuth?.email,
      password: adminAuth?.password,
    };

    return loginResponse;
  }

  

}


export default new AdminController();