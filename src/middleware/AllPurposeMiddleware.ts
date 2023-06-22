import { Request, Response, NextFunction } from "express";
import UserInterface from "../interfaces/UsersInterface";



export class MiddleWare implements UserInterface {
	constructor(public name: String, public login: String, public password: String) { }

	autorizathion(req: Request, res: Response, next: NextFunction): void {
		if ("password" && "login") {
			next();
		}

	}
}