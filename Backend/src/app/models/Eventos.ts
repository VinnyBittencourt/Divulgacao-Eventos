import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from "typeorm";

import Usuarios from "./Usuarios";

@Entity("events")
class events {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() => Usuarios)
    @JoinColumn({ name: "criador_evento_id" })
    criador_evento: Usuarios;

    @Column()
    criador_evento_id: string;

    @Column()
    name: string;

    @Column()
    place: string;

    @Column()
    likes: number;

    @Column()
    dislikes: number;

    @Column()
    picture_used: string;

    @Column()
    bio: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default events;
