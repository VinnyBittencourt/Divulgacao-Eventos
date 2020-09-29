import { Router } from "express";
const bcrypt = require("bcryptjs");
import { sign } from "jsonwebtoken";
import authConfig from "../config/auth";
import { getRepository } from "typeorm";

import Usuarios from "../app/models/Usuarios";

const sessionRouter = Router();

sessionRouter.post("/", async (req, res) => {
    try {
        const { email, password } = req.body;
        const usuariosRepository = getRepository(Usuarios);

        const user = await usuariosRepository.findOne({
            where: { email },
        });
        if (!user) {
            return res
                .status(400)
                .json({ Error: "No user found with this email." });
        }

        if (!(await bcrypt.compare(password, user.password))) {
            return res.status(400).send({ error: "Invalid Password" });
        }
        const token = sign({}, authConfig.jwt.secret, {
            subject: user.id,
            expiresIn: authConfig.jwt.expiresIn,
        });

        user.password = "";

        return res.status(200).json({ user, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

export default sessionRouter;
