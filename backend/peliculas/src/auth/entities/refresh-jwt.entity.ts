import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('refresh-jwt')
export class RefreshJwt {

    @PrimaryGeneratedColumn()
    id_refresh_token?: number;

    @Column({ type: 'varchar', length: 255, nullable: false })
    refresh_token: string;

    @Column({ type: 'integer', nullable: false })
	id_usuario?: number;

	@CreateDateColumn()
	created_at?: Date;

	@UpdateDateColumn()
	updated_at?: Date;

}
