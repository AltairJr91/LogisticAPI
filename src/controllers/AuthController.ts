import { Request, Response } from "express";
import { prisma } from "../database/prisma";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";



class Authenticate {
  public async Login(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body;
      const userAuth = await prisma.admin.findUnique({ where: { email } });

      if (!userAuth) {
        return res.status(401).json({ Error: "User not found!" })
      }

      const matchPassword = await compare(password, userAuth!.password);

      if (!matchPassword) {
        return res.status(401).json({ Error: "Wrong Password!" })
      }

      const secretKey = process.env.SECRET_KEY;

      if (!secretKey) {
        console.error('Secret key not found in environment variables.');
        process.exit(1);
      }

      const authToken = sign({ id: userAuth.id }, secretKey, { expiresIn: "1d" })

      return res.status(200).json({ id:userAuth.id, user: userAuth.name, authToken });

    } catch (error) {
      return res.status(500).json({ message: "Login failed" });
    }
  }
};

export default new Authenticate();