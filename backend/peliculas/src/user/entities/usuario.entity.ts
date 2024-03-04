import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuario')
export class Usuario {
	@PrimaryGeneratedColumn() 
	id_usuario: number;

	@Column( { type: 'varchar', length: 145 , nullable: false} ) 
	primer_nombre_usuario: string;

	@Column( { type: 'varchar', length: 145 , nullable: true} ) 
	segundo_nombre_usuario: string;

	@Column( { type: 'varchar', length: 145 , nullable: false} ) 
	apellido_paterno_usuario: string;

	@Column( { type: 'varchar', length: 145 , nullable: true} ) 
	apellido_materno_usuario: string;

	@Column( { type: 'varchar', length: 45 , nullable: true} ) 
	codigo_usuario: string;

	@Column( { type: 'varchar', length: 45 , nullable: true} ) 
	login_usuario: string;

	@Column( { type: 'varchar', length: 255 , nullable: true, select: false } ) 
	contrasena_usuario: string;

	@Column( { type: 'date', nullable: true} ) 
	fecha_nacimiento_usuario: Date;

	@Column( { type: 'varchar', length: 45 , nullable: true} ) 
	telefono_usuario: string;

	@Column( { type: 'varchar', length: 45 , nullable: true} ) 
	celular_usuario: string;

	@Column( { type: 'varchar', length: 245 , nullable: false} ) 
	correo_usuario: string;

	@Column( { type: 'varchar', length: 45 , nullable: true} ) 
	direccion_usuario: string;

	@Column( { type: 'text', nullable: true} ) 
	imagen_usuario: number;

	@Column( { type: 'varchar', length: 45 , nullable: true} ) 
	observaciones_usuario: string;

	@Column( { type: 'varchar', length: 15 , nullable: true} ) 
	acceso_ip_usuario: string;

	@Column( { type: 'text', nullable: true} ) 
	empresa_usuario: number;
	
	@CreateDateColumn()
	fecha_creacion_usuario: Date;

}
