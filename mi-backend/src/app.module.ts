import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsuarioModule } from './modules/usuario/usuario.module';
import { BilleteraModule } from './modules/billetera/billetera.module';
import { CategoriaModule } from './modules/categoria/categoria.module';
import { PublicacionModule } from './modules/publicacion/publicacion.module';
import { PromocionModule } from './modules/promocion/promocion.module';
import { IntercambioModule } from './modules/intercambio/intercambio.module';
import { MovimientoCreditoModule } from './modules/movimiento-credito/movimiento-credito.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',   // cambia esto
      password: '',  // y esto
      database: 'mydb',
      synchronize: false,
      autoLoadEntities: true,
    }),
    UsuarioModule,
    BilleteraModule,
    CategoriaModule,
    PublicacionModule,
    PromocionModule,
    IntercambioModule,
    MovimientoCreditoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
