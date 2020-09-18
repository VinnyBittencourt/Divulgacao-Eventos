import { Router } from "express";

import usuariosRouter from "./usuarios.routes";
import eventosRouter from "./eventos.routes";
import sessionRouter from "./sessions.routes";

const routes = Router();

routes.use("/usuarios", usuariosRouter);
routes.use("/eventos", eventosRouter);
routes.use("/sessions", sessionRouter);

export default routes;
