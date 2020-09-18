import { Router } from "express";

import usuariosRouter from "./usuarios.routes";
import eventosRouter from "./eventos.routes";
import sessionRouter from "./sessions.routes";
import likeRouter from "./like.routes";
import dislikeRouter from "./dislikes.routes";

const routes = Router();

routes.use("/usuarios", usuariosRouter);
routes.use("/eventos", eventosRouter);
routes.use("/sessions", sessionRouter);
routes.use("/likes", likeRouter);
routes.use("/dislikes", dislikeRouter);

export default routes;
