import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovimientoCredito } from './movimiento-credito.entity';
import { CreateMovimientoCreditoDto } from './dto/create-movimiento-credito.dto';
import { UpdateMovimientoCreditoDto } from './dto/update-movimiento-credito.dto';

@Injectable()
export class MovimientoCreditoService {
  constructor(
    @InjectRepository(MovimientoCredito)
    private readonly movimientoRepo: Repository<MovimientoCredito>,
  ) {}

  async create(dto: CreateMovimientoCreditoDto): Promise<MovimientoCredito> {
    const movimiento = this.movimientoRepo.create({
      tipoMovimiento: dto.tipoMovimiento,
      monto: dto.monto,
      descripcionMovi: dto.descripcionMovi ?? null,
      billeteraId: dto.billeteraId,
      intercambioId: dto.intercambioId ?? null,
    });

    return this.movimientoRepo.save(movimiento);
  }

  findAll(): Promise<MovimientoCredito[]> {
    return this.movimientoRepo.find({
      order: { fechaMovimiento: 'DESC' },
    });
  }

  async findOne(id: number): Promise<MovimientoCredito> {
    const mov = await this.movimientoRepo.findOne({
      where: { idmovimientoCredito: id },
    });

    if (!mov) {
      throw new NotFoundException('Movimiento no encontrado');
    }

    return mov;
  }

  async update(
    id: number,
    dto: UpdateMovimientoCreditoDto,
  ): Promise<MovimientoCredito> {
    const mov = await this.findOne(id);

    if (dto.tipoMovimiento !== undefined) mov.tipoMovimiento = dto.tipoMovimiento;
    if (dto.monto !== undefined) mov.monto = dto.monto;
    if (dto.descripcionMovi !== undefined)
      mov.descripcionMovi = dto.descripcionMovi;
    if (dto.billeteraId !== undefined) mov.billeteraId = dto.billeteraId;
    if (dto.intercambioId !== undefined)
      mov.intercambioId = dto.intercambioId;

    return this.movimientoRepo.save(mov);
  }

  async remove(id: number): Promise<void> {
    const mov = await this.findOne(id);
    await this.movimientoRepo.remove(mov);
  }
}
