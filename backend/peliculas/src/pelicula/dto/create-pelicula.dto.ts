import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsIn, IsInt, IsPositive, IsString } from "class-validator";


export class CreatePeliculaDto {

    @ApiProperty({
        description: 'Nombre de Pelicula (unique)',
        nullable: false,
        minLength: 1
    })
    @IsString()
    nombre_pelicula: string;

    @ApiProperty({
        description: 'Director Pelicula',
        nullable: false,
        minLength: 1
    })
    @IsString()
    director_pelicula: string;

    @ApiProperty({
        description: 'Año Pelicula',
        nullable: false,
        minLength: 1
    })
    @IsInt()
    @IsPositive()
    anio_pelicula: number;

    @ApiProperty({
        description: 'Poster de pelicula',
        nullable: false,
        minLength: 1
    })
    @IsString()
    poster_pelicula: string;
    
    @ApiProperty({
        description: 'Genero Pelicula existen : drama, comedia, terror ficcion, accion',
        nullable: false,
        minLength: 1
    })
    @ApiProperty()
    @IsIn(['comedia','drama','terror','ficcion ', 'accion'])
    genero_pelicula: string;

    @ApiProperty({
        description: 'Activo Pelicula',
        nullable: false,
        minLength: 1
    })
    @IsBoolean()
    activo_pelicula: boolean;
}
