import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Billetera } from './billetera.entity';
import { BilleteraService } from './billetera.service';
import { BilleteraController } from './billetera.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Billetera])],
  controllers: [BilleteraController],
  providers: [BilleteraService],
  exports: [BilleteraService],
})
export class BilleteraModule {}
