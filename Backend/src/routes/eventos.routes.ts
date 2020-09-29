import { Router } from "express";
import { getRepository } from "typeorm";
import multer from "multer";

import EventosController from "../app/controllers/EventosController";
import events from "../app/models/Eventos";
import uploadConfig from "../config/upload";

const eventosRouter = Router();

const upload = multer(uploadConfig);

eventosRouter.post("/", upload.single("picture_used"), async (req, res) => {
    try {
        const { criador_evento_id, name, place, picture_used, bio } = req.body;
        const eventosController = new EventosController();
        const evento = await eventosController.store({
            criador_evento_id,
            name,
            place,
            picture_used: req.file.filename,
            bio,
        });

        return res.status(200).json(evento);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

eventosRouter.get("/:id", async (req, res) => {
    try {
        const eventosRepositorio = getRepository(events);
        const { id } = req.params;
        const evento = await eventosRepositorio.findOne(id);
        return res.status(200).json(evento);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

eventosRouter.get("/", async (req, res) => {
    try {
        const eventosRepositorio = getRepository(events);
        const evento = await eventosRepositorio.find();
        return res.status(200).json(evento);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

eventosRouter.delete("/:id", async (req, res) => {
    const usuariosRepositorio = getRepository(events);
    const { id } = req.params;
    const { usuario_logged } = req.body;

    const repo = await usuariosRepositorio.findOne(id);

    if (repo) {
        if (repo.criador_evento_id == usuario_logged) {
            await usuariosRepositorio.delete(id);

            return res.status(200).json(id);
        } else {
            return res.status(400).json({
                Error: "Only the creator of the event can delete the event",
            });
        }
    } else {
        return res.status(400).json({
            Error: "Event not found",
        });
    }
});

export default eventosRouter;
