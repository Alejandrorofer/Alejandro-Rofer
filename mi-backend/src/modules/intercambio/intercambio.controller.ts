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
import { IntercambioService } from './intercambio.service';
import { CreateIntercambioDto } from './dto/create-intercambio.dto';
import { UpdateIntercambioDto } from './dto/update-intercambio.dto';

@Controller('intercambios')
export class IntercambioController {
  constructor(private readonly intercambioService: IntercambioService) {}

  @Post()
  create(@Body() dto: CreateIntercambioDto) {
    return this.intercambioService.create(dto);
  }

  @Get()
  findAll() {
    return this.intercambioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.intercambioService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateIntercambioDto,
  ) {
    return this.intercambioService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.intercambioService.remove(id);
  }
}
