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

  async create(
    createPublicacionDto: CreatePublicacionDto,
  ): Promise<Publicacion> {
    const publicacion = this.publicacionRepository.create({
      ...createPublicacionDto,
      fechaPublicacion: createPublicacionDto.fechaPublicacion
        ? new Date(createPublicacionDto.fechaPublicacion)
        : null,
    });

    return this.publicacionRepository.save(publicacion);
  }

  findAll(): Promise<Publicacion[]> {
    return this.publicacionRepository.find();
  }

  async findOne(id: number): Promise<Publicacion> {
    const pub = await this.publicacionRepository.findOne({
      where: { idpublicacion: id },
    });

    if (!pub) {
      throw new NotFoundException(`Publicación con id ${id} no encontrada`);
    }

    return pub;
  }

  async update(
    id: number,
    updatePublicacionDto: UpdatePublicacionDto,
  ): Promise<Publicacion> {
    const pub = await this.findOne(id);

    if (updatePublicacionDto.fechaPublicacion) {
      (updatePublicacionDto as any).fechaPublicacion = new Date(
        updatePublicacionDto.fechaPublicacion,
      );
    }

    const updated = Object.assign(pub, updatePublicacionDto);
    return this.publicacionRepository.save(updated);
  }

  async remove(id: number): Promise<void> {
    const pub = await this.findOne(id);
    await this.publicacionRepository.remove(pub);
  }
}
