import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pelicula')
export class Pelicula {
	@ApiProperty({
		example: '3',
		description: 'id de pelicula',
		uniqueItems: true
	})
	@PrimaryGeneratedColumn() 
	id_pelicula: number;

	@ApiProperty({
		example: 'Locuras del Emperador',
		description: 'Nombre comerciald e la pelicula',
		uniqueItems: true
	})
	
	@Column( { type: 'varchar', length: 300 , nullable: false, unique: true} ) 
	nombre_pelicula: string;

	@ApiProperty({
		example: 'Tarantino',
		description: 'Nombre del director',
	})
	@Column( { type: 'varchar', length: 350 , nullable: false} ) 
	director_pelicula: string;

	@ApiProperty({
		example: '2023',
		description: 'Año estreno pelicula',
	})
	@Column( { type: 'int', nullable: false} ) 
	anio_pelicula: number;

	@ApiProperty({
		example: 'url del poster',
		description: 'link de la imagen del poster',
		uniqueItems: true
	})
	@Column( { type: 'varchar', length: 350 , nullable: true} ) 
	poster_pelicula: string;

	@ApiProperty({
		example: 'terror',
		description: 'Genero puede tener valores:  comedia, drama, terror, ficcion y accion',
	})
	@Column( { type: 'varchar', length: 45 , nullable: false} ) 
	genero_pelicula: string;

	@ApiProperty({
		example: 'true',
		description: 'Valor booleano para saber si esta activa la pelicula',
	})
    @Column({ type: 'boolean', nullable: false})
    activo_pelicula: boolean;


}