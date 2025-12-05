import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovimientoCredito } from './movimiento-credito.entity';
import { MovimientoCreditoService } from './movimiento-credito.service';
import { MovimientoCreditoController } from './movimiento-credito.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([MovimientoCredito]),
  ],
  controllers: [MovimientoCreditoController],
  providers: [MovimientoCreditoService],
})
export class MovimientoCreditoModule {}
