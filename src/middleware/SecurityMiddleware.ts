import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import { prisma } from "../database/prisma";
import { UserInterface } from "../interfaces/UsersInterface";

//type for where clause
type AdminWhereInput = {
    id: number;
};


export function MiddleWare(req: Request, res: Response, next: NextFunction) {

    const { authorization } = req.headers;
    if (!authorization) {
        res.status(401).json({ Error: "Token not provided" })
    }

    const [, token] = authorization!.split(" ")
    const secretKey = process.env.SECRET_KEY;

    if (!secretKey) {
        return console.log("not token provided");

    }

    try {
        const userToken = verify(token, secretKey) as UserInterface;
        const whereCondition: AdminWhereInput = {
            id: userToken.id,
        };
        const decodedUser = prisma.admin.findUnique({ where: whereCondition })

        if (!decodedUser) {
            return res.status(400).json({ Message: "User not exists" })
        }

        req.admin = decodedUser;

        return next();

    } catch (error) {
        res.status(404).json({ Error: error })
    }


}




