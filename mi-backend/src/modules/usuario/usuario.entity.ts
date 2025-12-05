import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity('usuario', { schema: 'mydb' })
export class Usuario {

  @PrimaryGeneratedColumn({ type: 'int', name: 'idusuario' })
  idusuario: number;

  @Column('varchar', {
    name: 'nombre',
    length: 45,
    nullable: true,
  })
  nombre: string | null;

  @Column('varchar', {
    name: 'apellido',
    length: 45,
    nullable: true,
  })
  apellido: string | null;

  @Column('varchar', {
    name: 'nombreUser',
    length: 80,
  })
  nombreUser: string;

  @Column('varchar', {
    name: 'contrasena',
    length: 255,
  })
  contrasena: string;

  // ✅ SOLO FK, SIN RELACIÓN
  @Column('int', {
    name: 'billetera_id',
    nullable: true,
  })
  billeteraId: number | null;
}
