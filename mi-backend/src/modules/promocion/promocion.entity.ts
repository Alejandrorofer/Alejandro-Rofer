// src/promocion/promocion.entity.ts
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'promocion' })
export class Promocion {
  @PrimaryGeneratedColumn({ type: 'int' })
  idpromocion: number;

  @Column({ type: 'varchar', length: 45, nullable: true, default: null })
  tipoPromo: string | null;

  @Column({ type: 'date', nullable: true, default: null })
  fechaIniPromo: Date | null;

  @Column({ type: 'date', nullable: true, default: null })
  fechaFinPromo: Date | null;
}
