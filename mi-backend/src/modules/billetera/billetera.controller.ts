// src/billetera/billetera.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { BilleteraService } from './billetera.service';
import { CreateBilleteraDto } from './dto/create-billetera.dto';
import { UpdateBilleteraDto } from './dto/update-billetera.dto';

@Controller('billetera')
export class BilleteraController {
  constructor(private readonly billeteraService: BilleteraService) {}

  @Post()
  create(@Body() createBilleteraDto: CreateBilleteraDto) {
    return this.billeteraService.create(createBilleteraDto);
  }

  @Get()
  findAll() {
    return this.billeteraService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.billeteraService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateBilleteraDto: UpdateBilleteraDto,
  ) {
    return this.billeteraService.update(id, updateBilleteraDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.billeteraService.remove(id);
  }
}
