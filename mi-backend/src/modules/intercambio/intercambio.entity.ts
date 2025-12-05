import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('intercambio', { schema: 'mydb' })
export class Intercambio {
  @PrimaryGeneratedColumn({ type: 'int', name: 'idintercambio' })
  idintercambio: number;

  @Column('int', { name: 'usuario_origen_id' })
  usuarioOrigenId: number;

  @Column('int', { name: 'usuario_destino_id' })
  usuarioDestinoId: number;

  @Column('int', { name: 'custodioCredito_id' })
  custodioCreditoId: number;

  @Column('int', {
    name: 'creditoVerde',
    nullable: true,
  })
  creditoVerde: number | null;

  @Column('int', {
    name: 'cantidad',
    nullable: true,
  })
  cantidad: number | null;

  @Column('varchar', {
    name: 'estadoIntercam',
    length: 45,
    nullable: true,
  })
  estadoIntercam: string | null;

  @Column('datetime', {
    name: 'fechaCreacion',
    nullable: true,
  })
  fechaCreacion: Date | null;

  @Column('datetime', {
    name: 'fechaFinal',
    nullable: true,
  })
  fechaFinal: Date | null;

  @Column('int', {
    name: 'publicacion_id',
    nullable: true,
  })
  publicacionId: number | null;
}
