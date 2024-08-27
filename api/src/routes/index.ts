import { Router } from "express";
import { paths } from "./path";
import userRoutes from "./user.routes";

const route = Router();

route.use(paths.Base, userRoutes);

export default route;
