import { getRepository } from "typeorm";
import Eventos from "../models/Eventos";

interface Request {
    criador_evento_id: string;
    name: string;
    place: string;
    picture_used: string;
    bio: string;
}

class EventosController {
    public async store({
        criador_evento_id,
        name,
        place,
        picture_used,
        bio,
    }: Request): Promise<Eventos> {
        const eventosRespository = getRepository(Eventos);

        // if (encontrarAgendamentoMesmaData) {
        //     throw new Error("Eventos já cadastrado para este horário");
        // }
        const eventos = eventosRespository.create({
            criador_evento_id,
            name,
            place,
            picture_used,
            bio,
            likes: 0,
            dislikes: 0,
        });

        await eventosRespository.save(eventos);

        return eventos;
    }
}

export default EventosController;
