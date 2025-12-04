// src/billetera/billetera.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Billetera } from './billetera.entity';
import { CreateBilleteraDto } from './dto/create-billetera.dto';
import { UpdateBilleteraDto } from './dto/update-billetera.dto';

@Injectable()
export class BilleteraService {
  constructor(
    @InjectRepository(Billetera)
    private readonly billeteraRepository: Repository<Billetera>,
  ) {}

  async create(createBilleteraDto: CreateBilleteraDto): Promise<Billetera> {
    const billetera = this.billeteraRepository.create({
      saldoActual: createBilleteraDto.saldoActual ?? '0.00',
      saldoRetenido: createBilleteraDto.saldoRetenido ?? '0.00',
      fechaUltima: createBilleteraDto.fechaUltima
        ? new Date(createBilleteraDto.fechaUltima)
        : null,
    });

    return this.billeteraRepository.save(billetera);
  }

  async findAll(): Promise<Billetera[]> {
    return this.billeteraRepository.find();
  }

  async findOne(id: number): Promise<Billetera> {
    const billetera = await this.billeteraRepository.findOne({
      where: { idbilletera: id },
    });

    if (!billetera) {
      throw new NotFoundException(`Billetera con id ${id} no encontrada`);
    }

    return billetera;
  }

  async update(
    id: number,
    updateBilleteraDto: UpdateBilleteraDto,
  ): Promise<Billetera> {
    const billetera = await this.findOne(id);

    if (updateBilleteraDto.saldoActual !== undefined) {
      billetera.saldoActual = updateBilleteraDto.saldoActual;
    }

    if (updateBilleteraDto.saldoRetenido !== undefined) {
      billetera.saldoRetenido = updateBilleteraDto.saldoRetenido;
    }

    if (updateBilleteraDto.fechaUltima !== undefined) {
      billetera.fechaUltima = updateBilleteraDto.fechaUltima
        ? new Date(updateBilleteraDto.fechaUltima)
        : null;
    }

    return this.billeteraRepository.save(billetera);
  }

  async remove(id: number): Promise<void> {
    const billetera = await this.findOne(id);
    await this.billeteraRepository.remove(billetera);
  }
}
