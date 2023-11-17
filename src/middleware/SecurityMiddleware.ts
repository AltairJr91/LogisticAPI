import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { prisma } from "../database/prisma";
import { UserInterface } from "../interfaces/UsersInterface";

interface CustomRequest extends Request {
  userId?: String;
}

export async function MiddleWare(req: CustomRequest, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ Error: "Token not provided" });
    }

    const [, token] = authorization!.split(" ");
    const secretKey = process.env.SECRET_KEY;

    if (!secretKey) {
        return console.log("Secret key not provided");
    }

    try {
        const userToken = verify(token, secretKey) as UserInterface;
        const whereCondition = {
            id: userToken.id,
        };

        const decodedUser = await prisma.admin.findUnique({ where: whereCondition });

        if (!decodedUser) {
            return res.status(400).json({ Message: "User not exists" });
        }

        req.userId = decodedUser.id;

        return next();
    } catch (error) {
        return res.status(404).json({ Error: error });
    }
}
