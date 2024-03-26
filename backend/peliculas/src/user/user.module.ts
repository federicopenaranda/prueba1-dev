import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { Usuario } from './entities/usuario.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioPrivilegio } from './entities/usuario_privilegio.entity';
import { UsuarioTipo } from './entities/usuario_tipo.entity';
import { UsuarioTipoPrivilegio } from './entities/usuario_tipo_privilegio.entity';
import { UsuarioTipoUsuario } from './entities/usuario_tipo_usuario.entity';
import { UsuarioProceso } from './entities/usuario_proceso.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      Usuario,
      UsuarioPrivilegio,
      UsuarioTipo,
      UsuarioTipoPrivilegio,
      UsuarioTipoUsuario,
      UsuarioProceso
    ])
    
  ],
  exports: [UserService],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
