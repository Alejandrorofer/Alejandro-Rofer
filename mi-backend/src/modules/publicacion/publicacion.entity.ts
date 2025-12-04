import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
} from 'typeorm';

@Entity('publicacion', { schema: 'mydb' })
@Index('ix_publicacion_usuario', ['usuarioId'])
@Index('ix_publicacion_usuario_fecha', ['usuarioId', 'fechaPublicacion'])
@Index('ix_publicacion_estado_fecha', ['estadoPublica', 'fechaPublicacion'])
export class Publicacion {
  @PrimaryGeneratedColumn({ type: 'int', name: 'idpublicacion' })
  idpublicacion: number;

  @Column('int', { name: 'usuario_id', nullable: false })
  usuarioId: number;

  @Column('int', { name: 'promocion_id', nullable: true })
  promocionId: number | null;

  @Column('int', { name: 'reporte_id', nullable: true })
  reporteId: number | null;

  @Column('varchar', { name: 'titulo', length: 100, nullable: true })
  titulo: string | null;

  @Column('varchar', { name: 'descripcion', length: 500, nullable: true })
  descripcion: string | null;

  @Column('decimal', {
    name: 'valorCredito',
    precision: 14,
    scale: 2,
    nullable: true,
  })
  valorCredito: number | null;

  @Column('date', { name: 'fechaPublicacion', nullable: true })
  fechaPublicacion: Date | null;

  @Column('varchar', { name: 'estadoPublica', length: 45, nullable: true })
  estadoPublica: string | null;

  @Column('varchar', { name: 'foto', length: 255, nullable: true })
  foto: string | null;
}
