import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuario_privilegio')
export class UsuarioPrivilegio {
	@PrimaryGeneratedColumn() 
	id_usuario_privilegio: number;

	@Column( { type: 'varchar', length: 145 , nullable: false} ) 
	nombre_privilegio_usuario_privilegio: string;

	@Column( { type: 'varchar', length: 145 , nullable: false} ) 
	accion_usuario_privilegio: string;

	@Column( { type: 'varchar', length: 145 , nullable: true} ) 
	opciones_usuario_privilegio: string;

	@Column( { type: 'varchar', length: 145 , nullable: true} ) 
	funcion_usuario_privilegio: string;

	@Column( { type: 'varchar', length: 145 , nullable: true} ) 
	descripcion_usuario_privilegio: string;

}