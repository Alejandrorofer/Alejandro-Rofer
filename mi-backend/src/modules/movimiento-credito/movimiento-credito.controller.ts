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
import { MovimientoCreditoService } from './movimiento-credito.service';
import { CreateMovimientoCreditoDto } from './dto/create-movimiento-credito.dto';
import { UpdateMovimientoCreditoDto } from './dto/update-movimiento-credito.dto';

@Controller('movimientos-creditos')
export class MovimientoCreditoController {
  constructor(
    private readonly movimientoCreditoService: MovimientoCreditoService,
  ) {}

  // ✅ Crear movimiento de crédito
  @Post()
  create(@Body() dto: CreateMovimientoCreditoDto) {
    return this.movimientoCreditoService.create(dto);
  }

  // ✅ Listar todos los movimientos
  @Get()
  findAll() {
    return this.movimientoCreditoService.findAll();
  }

  // ✅ Obtener un movimiento por ID
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.movimientoCreditoService.findOne(id);
  }

  // ✅ Actualizar un movimiento (opcional, normalmente no se usa)
  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateMovimientoCreditoDto,
  ) {
    return this.movimientoCreditoService.update(id, dto);
  }

  // ✅ Eliminar un movimiento
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.movimientoCreditoService.remove(id);
  }
}
