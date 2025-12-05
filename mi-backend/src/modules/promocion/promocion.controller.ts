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
import { PromocionService } from './promocion.service';
import { CreatePromocionDto } from './dto/create-promocion.dto';
import { UpdatePromocionDto } from './dto/update-promocion.dto';
import { Promocion } from './promocion.entity';

@Controller('promociones')
export class PromocionController {
  constructor(private readonly promocionService: PromocionService) {}

  @Post()
  create(@Body() createPromocionDto: CreatePromocionDto): Promise<Promocion> {
    return this.promocionService.create(createPromocionDto);
  }

  @Get()
  findAll(): Promise<Promocion[]> {
    return this.promocionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Promocion> {
    return this.promocionService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePromocionDto: UpdatePromocionDto,
  ): Promise<Promocion> {
    return this.promocionService.update(id, updatePromocionDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.promocionService.remove(id);
  }
}
