import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('movimiento_credito', { schema: 'mydb' })
export class MovimientoCredito {

  @PrimaryGeneratedColumn({ name: 'idmovimiento_credito' })
  idmovimientoCredito: number;

  @Column('varchar', {
    name: 'tipoMovimiento',
    length: 45,
  })
  tipoMovimiento: string;

  @Column('decimal', {
    name: 'monto',
    precision: 14,
    scale: 2,
  })
  monto: string;

  @CreateDateColumn({
    name: 'fechaMovimiento',
    type: 'datetime',
  })
  fechaMovimiento: Date;

  @Column('varchar', {
    name: 'descripcionMovi',
    length: 255,
    nullable: true,
  })
  descripcionMovi: string | null;

  // ✅ FK DIRECTA
  @Column('int', { name: 'billetera_id' })
  billeteraId: number;

  @Column('int', {
    name: 'intercambio_id',
    nullable: true,
  })
  intercambioId: number | null;
}
