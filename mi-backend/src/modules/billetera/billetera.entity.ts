// src/billetera/billetera.entity.ts
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'billetera' })
export class Billetera {
  @PrimaryGeneratedColumn({ type: 'int' })
  idbilletera: number;

  @Column('decimal', { precision: 14, scale: 2, default: 0 })
  saldoActual: string; // se recomienda string para DECIMAL en TypeORM

  @Column('decimal', { precision: 14, scale: 2, default: 0 })
  saldoRetenido: string;

  @Column({ type: 'datetime', nullable: true, default: null })
  fechaUltima: Date | null;
}
