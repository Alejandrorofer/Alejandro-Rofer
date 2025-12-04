// src/modules/publicacion/publicacion.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Publicacion } from './publicacion.entity';
import { CreatePublicacionDto } from './dto/create-publicacion.dto';
import { UpdatePublicacionDto } from './dto/update-publicacion.dto';

@Injectable()
export class PublicacionService {
  constructor(
    @InjectRepository(Publicacion)
    private readonly publicacionRepository: Repository<Publicacion>,
  ) {}

  // Crear publicación
  async create(
    createPublicacionDto: CreatePublicacionDto,
  ): Promise<Publicacion> {
    const publicacion = this.publicacionRepository.create({
      ...createPublicacionDto,
    });

    // convertir fecha si viene como string
    if (createPublicacionDto.fechaPublicacion) {
      publicacion.fechaPublicacion = new Date(
        createPublicacionDto.fechaPublicacion,
      );
    }

    return this.publicacionRepository.save(publicacion);
  }

  // Listar todas
  async findAll(): Promise<Publicacion[]> {
    return this.publicacionRepository.find();
  }

  // Buscar por ID
  async findOne(id: number): Promise<Publicacion> {
    const publicacion = await this.publicacionRepository.findOne({
      where: { idpublicacion: id },
    });

    if (!publicacion) {
      throw new NotFoundException(`Publicación con id ${id} no encontrada`);
    }

    return publicacion;
  }

  // Listar por usuario
  async findByUsuario(usuarioId: number): Promise<Publicacion[]> {
    return this.publicacionRepository.find({
      where: { usuarioId },
      order: { fechaPublicacion: 'DESC' },
    });
  }

  // Actualizar
  async update(
    id: number,
    updatePublicacionDto: UpdatePublicacionDto,
  ): Promise<Publicacion> {
    const publicacion = await this.findOne(id);

    if (updatePublicacionDto.fechaPublicacion) {
      (updatePublicacionDto as any).fechaPublicacion = new Date(
        updatePublicacionDto.fechaPublicacion,
      );
    }

    Object.assign(publicacion, updatePublicacionDto);

    return this.publicacionRepository.save(publicacion);
  }

  // Eliminar
  async remove(id: number): Promise<void> {
    const publicacion = await this.findOne(id);
    await this.publicacionRepository.remove(publicacion);
  }
}
