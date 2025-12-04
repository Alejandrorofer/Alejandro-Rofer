// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from 'src/modules/usuario/usuario.module';
import { Usuario } from 'src/modules/usuario/usuario.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',        // cambia si corresponde
      port: 3306,               // puerto por defecto MySQL
      username: 'root',   // <-- pon tu usuario de MySQL
      password: 'root',  // <-- pon tu contraseña
      database: 'mydb',         // el schema donde está la tabla "usuario"
      entities: [Usuario],      // o autoLoadEntities: true
      synchronize: false,       // cuidado con esto en producción
    }),
    UsuarioModule,              // <-- IMPORTANTE: aquí conectas tu módulo
  ],
})
export class AppModule {}
