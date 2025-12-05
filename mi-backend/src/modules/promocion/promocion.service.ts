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
      ...createPromocionDto,
      fechaIniPromo: createPromocionDto.fechaIniPromo
        ? new Date(createPromocionDto.fechaIniPromo)
        : null,
      fechaFinPromo: createPromocionDto.fechaFinPromo
        ? new Date(createPromocionDto.fechaFinPromo)
        : null,
    });

    return this.promocionRepository.save(promocion);
  }

  findAll(): Promise<Promocion[]> {
    return this.promocionRepository.find();
  }

  async findOne(id: number): Promise<Promocion> {
    const promo = await this.promocionRepository.findOne({
      where: { idpromocion: id },
    });

    if (!promo) {
      throw new NotFoundException(`Promoción con id ${id} no encontrada`);
    }

    return promo;
  }

  async update(
    id: number,
    updatePromocionDto: UpdatePromocionDto,
  ): Promise<Promocion> {
    const promo = await this.findOne(id);

    if (updatePromocionDto.fechaIniPromo) {
      (updatePromocionDto as any).fechaIniPromo = new Date(
        updatePromocionDto.fechaIniPromo,
      );
    }

    if (updatePromocionDto.fechaFinPromo) {
      (updatePromocionDto as any).fechaFinPromo = new Date(
        updatePromocionDto.fechaFinPromo,
      );
    }

    const updated = Object.assign(promo, updatePromocionDto);
    return this.promocionRepository.save(updated);
  }

  async remove(id: number): Promise<void> {
    const promo = await this.findOne(id);
    await this.promocionRepository.remove(promo);
  }
}
