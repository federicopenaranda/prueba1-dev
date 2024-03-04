import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RefreshJwt } from './entities/refresh-jwt.entity';
import { UserModule } from 'src/user/user.module';
import { JwtUtilService } from './jwt-util/jwt-util.service';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports:[
    TypeOrmModule.forFeature([RefreshJwt]),
    UserModule
  ],
  exports:[AuthService, JwtUtilService],
  controllers: [AuthController],
  providers: [AuthService, JwtUtilService, JwtStrategy],
})
export class AuthModule {}
