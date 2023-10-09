import { UserInterface } from "./interfaces/UsersInterface"

declare global{
    namespace Express{
        interface Request{
            admin?= UserInterface;
        }
    }
}