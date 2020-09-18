import { Router } from "express";

import usuariosRouter from "./usuarios.routes";
import agendamentosRouter from "./eventos.routes";
import sessionRouter from "./sessions.routes";

const routes = Router();

routes.use("/usuarios", usuariosRouter);
routes.use("/agendamentos", agendamentosRouter);
routes.use("/sessions", sessionRouter);

export default routes;
