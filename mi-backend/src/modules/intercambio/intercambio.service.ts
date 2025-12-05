import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Intercambio } from './intercambio.entity';
import { CreateIntercambioDto } from './dto/create-intercambio.dto';
import { UpdateIntercambioDto } from './dto/update-intercambio.dto';

@Injectable()
export class IntercambioService {
  constructor(
    @InjectRepository(Intercambio)
    private readonly intercambioRepo: Repository<Intercambio>,
  ) {}

  async create(dto: CreateIntercambioDto): Promise<Intercambio> {
    const intercambio = this.intercambioRepo.create({
      ...dto,
      fechaCreacion: dto.fechaCreacion ? new Date(dto.fechaCreacion) : null,
      fechaFinal: dto.fechaFinal ? new Date(dto.fechaFinal) : null,
    });

    return this.intercambioRepo.save(intercambio);
  }

  findAll(): Promise<Intercambio[]> {
    return this.intercambioRepo.find();
  }

  async findOne(id: number): Promise<Intercambio> {
    const inter = await this.intercambioRepo.findOne({
      where: { idintercambio: id },
    });

    if (!inter) {
      throw new NotFoundException(`Intercambio con id ${id} no encontrado`);
    }

    return inter;
  }

  async update(
    id: number,
    dto: UpdateIntercambioDto,
  ): Promise<Intercambio> {
    const inter = await this.findOne(id);

    if (dto.fechaCreacion) {
      (dto as any).fechaCreacion = new Date(dto.fechaCreacion);
    }
    if (dto.fechaFinal) {
      (dto as any).fechaFinal = new Date(dto.fechaFinal);
    }

    Object.assign(inter, dto);
    return this.intercambioRepo.save(inter);
  }

  async remove(id: number): Promise<void> {
    const inter = await this.findOne(id);
    await this.intercambioRepo.remove(inter);
  }
}
