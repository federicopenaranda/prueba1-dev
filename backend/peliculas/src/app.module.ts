import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { environments } from './config/environments';
import { TypeOrmModule } from '@nestjs/typeorm';
import { 
  DATABASE_HOST, 
  DATABASE_NAME, 
  DATABASE_PASSWORD, 
  DATABASE_PORT, 
  DATABASE_USERNAME ,
  STATIC_FILES_FOLDER_PATH
} from './config/constants';
import { PeliculaModule } from './pelicula/pelicula.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env/' + environments[process.env.NODE_ENV] || './env/development.env',
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
				host: config.get<string>(DATABASE_HOST),
				port: parseInt(config.get<string>(DATABASE_PORT)),
				username: config.get<string>(DATABASE_USERNAME), //"postgres", //
				password: config.get<string>(DATABASE_PASSWORD),
				database: config.get<string>(DATABASE_NAME),
				entities: [__dirname + './**/**/*entity{.ts,.js}.ts'],
				autoLoadEntities: true,
				synchronize: true,
				// logging: true 
      }),
      
      
    }),
    PeliculaModule,
    UserModule,
    AuthModule,
  ],
  
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
