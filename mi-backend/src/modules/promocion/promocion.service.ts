// src/promocion/promocion.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Promocion } from './promocion.entity';
import { CreatePromocionDto } from './dto/create-promocion.dto';
import { UpdatePromocionDto } from './dto/update-promocion.dto';

@Injectable()
export class PromocionService {
  constructor(
    @InjectRepository(Promocion)
    private readonly promocionRepository: Repository<Promocion>,
  ) {}

  async create(createPromocionDto: CreatePromocionDto): Promise<Promocion> {
    const promocion = this.promocionRepository.create({
      tipoPromo:
        createPromocionDto.tipoPromo !== undefined
          ? createPromocionDto.tipoPromo
          : null,
      fechaIniPromo: createPromocionDto.fechaIniPromo
        ? new Date(createPromocionDto.fechaIniPromo)
        : null,
      fechaFinPromo: createPromocionDto.fechaFinPromo
        ? new Date(createPromocionDto.fechaFinPromo)
        : null,
    });

    return this.promocionRepository.save(promocion);
  }

  async findAll(): Promise<Promocion[]> {
    return this.promocionRepository.find();
  }

  async findOne(id: number): Promise<Promocion> {
    const promocion = await this.promocionRepository.findOne({
      where: { idpromocion: id },
    });

    if (!promocion) {
      throw new NotFoundException(`Promoción con id ${id} no encontrada`);
    }

    return promocion;
  }

  async update(
    id: number,
    updatePromocionDto: UpdatePromocionDto,
  ): Promise<Promocion> {
    const promocion = await this.findOne(id);

    if (updatePromocionDto.tipoPromo !== undefined) {
      promocion.tipoPromo = updatePromocionDto.tipoPromo ?? null;
    }

    if (updatePromocionDto.fechaIniPromo !== undefined) {
      promocion.fechaIniPromo = updatePromocionDto.fechaIniPromo
        ? new Date(updatePromocionDto.fechaIniPromo)
        : null;
    }

    if (updatePromocionDto.fechaFinPromo !== undefined) {
      promocion.fechaFinPromo = updatePromocionDto.fechaFinPromo
        ? new Date(updatePromocionDto.fechaFinPromo)
        : null;
    }

    return this.promocionRepository.save(promocion);
  }

  async remove(id: number): Promise<void> {
    const promocion = await this.findOne(id);
    await this.promocionRepository.remove(promocion);
  }
}
