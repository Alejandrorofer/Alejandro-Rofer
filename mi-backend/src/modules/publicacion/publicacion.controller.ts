import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  ParseIntPipe,
  Query,
} from '@nestjs/common';
import { PublicacionService } from './publicacion.service';
import { CreatePublicacionDto } from './dto/create-publicacion.dto';
import { UpdatePublicacionDto } from './dto/update-publicacion.dto';

@Controller('publicaciones')
export class PublicacionController {
  constructor(private readonly publicacionService: PublicacionService) {}

  @Post()
  create(@Body() createPublicacionDto: CreatePublicacionDto) {
    return this.publicacionService.create(createPublicacionDto);
  }

  @Get()
  findAll(@Query('usuarioId') usuarioId?: string) {
    if (usuarioId) {
      return this.publicacionService.findByUsuario(+usuarioId);
    }
    return this.publicacionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.publicacionService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updatePublicacionDto: UpdatePublicacionDto,
  ) {
    return this.publicacionService.update(id, updatePublicacionDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.publicacionService.remove(id);
  }
}
