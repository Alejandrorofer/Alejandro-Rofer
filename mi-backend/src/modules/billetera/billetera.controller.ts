import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { BilleteraService } from './billetera.service';
import { CreateBilleteraDto } from './dto/create-billetera.dto';
import { UpdateBilleteraDto } from './dto/update-billetera.dto';
import { Billetera } from './billetera.entity';

@Controller('billeteras')
export class BilleteraController {
  constructor(private readonly billeteraService: BilleteraService) {}

  @Post()
  create(@Body() createBilleteraDto: CreateBilleteraDto): Promise<Billetera> {
    return this.billeteraService.create(createBilleteraDto);
  }

  @Get()
  findAll(): Promise<Billetera[]> {
    return this.billeteraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Billetera> {
    return this.billeteraService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBilleteraDto: UpdateBilleteraDto,
  ): Promise<Billetera> {
    return this.billeteraService.update(id, updateBilleteraDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.billeteraService.remove(id);
  }
}
