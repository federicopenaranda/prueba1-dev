import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usuario_tipo_usuario')
export class UsuarioTipoUsuario {
	@PrimaryColumn({ type: 'int', nullable: false })
	fk_id_usuario_tipo: number;

	@PrimaryColumn({ type: 'int', nullable: false })
	fk_id_usuario: number;

}