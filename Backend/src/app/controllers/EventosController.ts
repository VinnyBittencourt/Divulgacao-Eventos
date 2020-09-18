import { getRepository } from "typeorm";
import { startOfHour, parseISO } from "date-fns"; //ParseISO converte string para date, StartOfHour pega a hora do date e zera os min e segs
import Eventos from "../models/Eventos";

interface Request {
    prestador_servico_id: string;
    data: string;
}

class AgendamentosController {
    public async store({
        prestador_servico_id,
        data,
    }: Request): Promise<Eventos> {
        const dataPassada = startOfHour(parseISO(data));
        const eventosRespository = getRepository(Eventos);
        const encontrarAgendamentoMesmaData = await eventosRespository.findOne({
            where: { data: dataPassada },
        });
        if (encontrarAgendamentoMesmaData) {
            throw new Error("Eventos já cadastrado para este horário");
        }
        const eventos = eventosRespository.create({});

        await eventosRespository.save(eventos);

        return eventos;
    }
}

export default AgendamentosController;
