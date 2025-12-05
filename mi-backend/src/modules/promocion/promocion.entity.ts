import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('promocion', { schema: 'mydb' })
export class Promocion {
  @PrimaryGeneratedColumn({ type: 'int', name: 'idpromocion' })
  idpromocion: number;

  @Column('varchar', {
    name: 'tipoPromo',
    length: 45,
    nullable: true,
  })
  tipoPromo: string | null;

  @Column('date', {
    name: 'fechaIniPromo',
    nullable: true,
  })
  fechaIniPromo: Date | null;

  @Column('date', {
    name: 'fechaFinPromo',
    nullable: true,
  })
  fechaFinPromo: Date | null;
}
