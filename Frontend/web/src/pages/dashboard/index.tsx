import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiMapPin, FiTrash2 } from "react-icons/fi";

import api from "../../services/api";

import imgfestival from "../../assets/download.jpg";

import "./styles.css";
import swal from "sweetalert";

interface evento {
    name: string;
    id: string;
    criador_evento_id: string;
    place: string;
    likes: number;
    dislikes: number;
    picture_used: string;
    bio: string;
    created_at: string;
    updated_at: string;
}

const Dashboard: React.FC = () => {
    const [eventos, setEventos] = useState<evento[]>([]);

    const history = useHistory();

    useEffect(() => {
        async function loadData(): Promise<void> {
            const response = await api.get("/eventos");
            setEventos(response.data);
            console.log(response.data);
        }
        loadData();
    }, []);

    async function handleDeleteEvent(id: string, criador: any) {
        try {
            const user = localStorage.getItem("IdUser");
            console.log("user", user);
            console.log(criador);
            if (user == criador) {
                const config = {
                    data: {
                        usuario_logged: criador,
                    },
                };

                const usuario_logged = criador;
                console.log(config);
                const respoon = await api.delete(`/eventos/${id}`, config);
                setEventos(eventos.filter((even) => even.id !== id));
            }
            // const respoon = await api.delete(`usuarios/${id}`, criador);
            // console.log(respoon);
            if (user != criador) {
                swal(
                    "Ops!",
                    "Only the creator of the event can delete it",
                    "error"
                );
            }
        } catch (err) {
            alert("Erro ao deletar o evento");
            console.log(err);
        }
    }

    function handleLogout() {
        localStorage.clear();
        history.push("/");
    }

    return (
        <div className="center dashboard_container">
            <header>
                <h1>All Events</h1>
                <Link className="Link_event" to="/newevent">
                    New event
                </Link>
            </header>
            <div className="card_container">
                {eventos.map((evento) => (
                    <div className="card" key={evento.id}>
                        <img src={imgfestival} alt={evento.name} />
                        <h2>{evento.name}</h2>
                        <p className="card_text">{evento.bio}</p>
                        <div className="box-card">
                            <FiMapPin></FiMapPin>
                            <p>{evento.place}</p>
                        </div>
                        <button
                            className="trash-ico"
                            type="button"
                            onClick={() =>
                                handleDeleteEvent(
                                    evento.id,
                                    evento.criador_evento_id
                                )
                            }
                        >
                            <FiTrash2></FiTrash2>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
