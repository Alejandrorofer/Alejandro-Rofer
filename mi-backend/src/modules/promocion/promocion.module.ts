// src/promocion/promocion.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Promocion } from './promocion.entity';
import { PromocionService } from './promocion.service';
import { PromocionController } from './promocion.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Promocion])],
  controllers: [PromocionController],
  providers: [PromocionService],
  exports: [PromocionService],
})
export class PromocionModule {}
