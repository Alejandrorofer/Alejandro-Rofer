import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Intercambio } from './intercambio.entity';
import { IntercambioService } from './intercambio.service';
import { IntercambioController } from './intercambio.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Intercambio])],
  controllers: [IntercambioController],
  providers: [IntercambioService],
  exports: [IntercambioService, TypeOrmModule],
})
export class IntercambioModule {}
