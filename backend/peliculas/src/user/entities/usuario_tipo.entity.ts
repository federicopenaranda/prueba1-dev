import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuario_tipo')
export class UsuarioTipo {
	@PrimaryGeneratedColumn() 
	id_usuario_tipo: number;

	@Column( { type: 'varchar', length: 145 , nullable: false} ) 
	nombre_usuario_tipo: string;

	@Column( { type: 'text', nullable: true} ) 
	descripcion_usuario_tipo: number;

}