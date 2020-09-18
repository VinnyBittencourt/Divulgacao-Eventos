import { getRepository } from "typeorm";
import { Router } from "express";
import Eventos from "../app/models/Eventos";

const eventosRouter = Router();

eventosRouter.post("/", async (req, res) => {
    const eventosRespository = getRepository(Eventos);
    try {
        const { evento_id } = req.body;
        const evento_used = await eventosRespository.findOne({
            where: { id: evento_id },
        });

        if (evento_used) {
            evento_used.likes = evento_used.likes + 1;
            await eventosRespository.save(evento_used);

            return res.status(200).json(evento_used);
        }

        if (!evento_used) {
            throw new Error("No event found!");
        }

        return res.json({ Message: "Error" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default eventosRouter;
