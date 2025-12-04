// src/categoria/categoria.service.ts
import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from './categoria.entity';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>,
  ) {}

  async create(createCategoriaDto: CreateCategoriaDto): Promise<Categoria> {
    const categoria = this.categoriaRepository.create({
      ...createCategoriaDto,
      cantidadUnidad:
        createCategoriaDto.cantidadUnidad !== undefined
          ? createCategoriaDto.cantidadUnidad
          : null,
    });

    try {
      return await this.categoriaRepository.save(categoria);
    } catch (error: any) {
      // Manejo simple para la UNIQUE uq_categoria_pub_cat_eq
      if (error.code === 'ER_DUP_ENTRY' || error.errno === 1062) {
        throw new ConflictException(
          'Ya existe una categoría con la misma combinación de publicacion_id, catalogo_id y tablaEquivalencia_id',
        );
      }
      throw error;
    }
  }

  async findAll(): Promise<Categoria[]> {
    return this.categoriaRepository.find();
  }

  async findOne(id: number): Promise<Categoria> {
    const categoria = await this.categoriaRepository.findOne({
      where: { idcategoria: id },
    });

    if (!categoria) {
      throw new NotFoundException(`Categoria con id ${id} no encontrada`);
    }

    return categoria;
  }

  async update(
    id: number,
    updateCategoriaDto: UpdateCategoriaDto,
  ): Promise<Categoria> {
    const categoria = await this.findOne(id);

    if (updateCategoriaDto.publicacion_id !== undefined) {
      categoria.publicacion_id = updateCategoriaDto.publicacion_id;
    }
    if (updateCategoriaDto.tablaEquivalencia_id !== undefined) {
      categoria.tablaEquivalencia_id = updateCategoriaDto.tablaEquivalencia_id;
    }
    if (updateCategoriaDto.catalogo_id !== undefined) {
      categoria.catalogo_id = updateCategoriaDto.catalogo_id;
    }
    if (updateCategoriaDto.cantidadUnidad !== undefined) {
      categoria.cantidadUnidad = updateCategoriaDto.cantidadUnidad ?? null;
    }

    try {
      return await this.categoriaRepository.save(categoria);
    } catch (error: any) {
      if (error.code === 'ER_DUP_ENTRY' || error.errno === 1062) {
        throw new ConflictException(
          'Ya existe una categoría con la misma combinación de publicacion_id, catalogo_id y tablaEquivalencia_id',
        );
      }
      throw error;
    }
  }

  async remove(id: number): Promise<void> {
    const categoria = await this.findOne(id);
    await this.categoriaRepository.remove(categoria);
  }
}
