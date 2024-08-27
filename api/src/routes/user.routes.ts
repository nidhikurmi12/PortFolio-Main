import { Router } from "express";
import { paths } from "./path";
import { loginController } from "../controller/usercontroller";
const route = Router();

route.post(paths.Login.Post[0],loginController)

export default route;
