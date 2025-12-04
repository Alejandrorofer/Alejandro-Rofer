// src/usuario/usuario.entity.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
} from 'typeorm';

@Entity('usuario', { schema: 'mydb' })
@Index('uq_usuario_nombreUser', ['nombreUser'], { unique: true })
@Index('uq_usuario_billetera', ['billeteraId'], { unique: true })
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
    nullable: false,
  })
  nombreUser: string;

  @Column('varchar', {
    name: 'contrasenia',
    length: 255,
    nullable: false,
  })
  contrasenia: string;

  @Column('int', {
    name: 'billetera_id',
    nullable: true,
  })
  billeteraId: number | null;

  // Si luego creas la entidad Billetera, podrías hacer algo así:
  //
  // @OneToOne(() => Billetera, (b) => b.usuario, { nullable: true })
  // @JoinColumn({ name: 'billetera_id' })
  // billetera: Billetera | null;
}
