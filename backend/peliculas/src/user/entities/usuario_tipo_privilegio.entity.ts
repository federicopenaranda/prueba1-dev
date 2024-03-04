import { Entity, PrimaryColumn } from 'typeorm';

@Entity('usuario_tipo_privilegio')
export class UsuarioTipoPrivilegio {
	@PrimaryColumn( { type: 'int', nullable: false} ) 
	fk_id_usuario_tipo: number;

	@PrimaryColumn( { type: 'int', nullable: false} ) 
	fk_id_usuario_privilegio: number;

}