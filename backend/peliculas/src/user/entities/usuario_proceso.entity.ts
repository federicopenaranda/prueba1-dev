import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuario_proceso')
export class UsuarioProceso {
	@PrimaryColumn( { type: 'int', nullable: false} ) 
	fk_id_proceso: number;

	@PrimaryColumn( { type: 'int', nullable: false} ) 
	fk_id_usuario: number;

}