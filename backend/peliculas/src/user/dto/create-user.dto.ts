import { IsDateString, IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
	@IsString()
	primer_nombre_usuario: string;

	@IsOptional()
	@IsString()
	segundo_nombre_usuario: string;
	
	@IsString()
	apellido_paterno_usuario: string;

	@IsOptional()
	@IsString()
	apellido_materno_usuario: string;

	@IsOptional()
	@IsString()
	codigo_usuario: string;

	@IsString()
	contrasena_usuario: string;

	@IsOptional()
	@IsString()
	login_usuario: string;

	@IsOptional()
	@IsDateString()
	fecha_nacimiento_usuario: Date;

	@IsOptional()
	@IsString()
	telefono_usuario: string;

	@IsOptional()
	@IsString()
	celular_usuario: string;

	@IsEmail()
	correo_usuario: string;

	@IsOptional()
	@IsString()
	direccion_usuario: string;

	@IsOptional()
	@IsString()
	imagen_usuario: number;

	@IsOptional()
	@IsString()
	observaciones_usuario: string;
}
