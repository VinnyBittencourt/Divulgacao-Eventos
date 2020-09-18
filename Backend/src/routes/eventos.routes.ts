import { Router } from "express";

import EventosController from "../app/controllers/EventosController";

const eventosRouter = Router();

eventosRouter.post("/", async (req, res) => {
    try {
        const { criador_evento_id, name, place, picture_used, bio } = req.body;
        const eventosController = new EventosController();
        const agendamento = await eventosController.store({
            criador_evento_id,
            name,
            place,
            picture_used,
            bio,
        });

        return res.status(200).json(agendamento);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default eventosRouter;
