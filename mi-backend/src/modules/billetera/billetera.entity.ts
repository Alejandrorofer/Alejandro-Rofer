import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('billetera', { schema: 'mydb' })
export class Billetera {
  @PrimaryGeneratedColumn({ type: 'int', name: 'idbilletera' })
  idbilletera: number;

  @Column('decimal', {
    name: 'saldoActual',
    precision: 14,
    scale: 2,
    default: () => "'0.00'",
  })
  saldoActual: string;

  @Column('decimal', {
    name: 'saldoRetenido',
    precision: 14,
    scale: 2,
    default: () => "'0.00'",
  })
  saldoRetenido: string;

  @Column('datetime', {
    name: 'fechaUltima',
    nullable: true,
  })
  fechaUltima: Date | null;
}
