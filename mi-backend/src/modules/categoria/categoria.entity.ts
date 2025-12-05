import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('categoria', { schema: 'mydb' })
export class Categoria {
  @PrimaryGeneratedColumn({ type: 'int', name: 'idcategoria' })
  idcategoria: number;

  @Column('int', {
    name: 'publicacion_id',
    nullable: false,
  })
  publicacionId: number;

  @Column('int', {
    name: 'tablaEquivalencia_id',
    nullable: false,
  })
  tablaEquivalenciaId: number;

  @Column('int', {
    name: 'catalogo_id',
    nullable: false,
  })
  catalogoId: number;

  @Column('decimal', {
    name: 'cantidadUnidad',
    precision: 14,
    scale: 4,
    nullable: true,
    comment:
      'Cantidad de unidades de la equivalencia asociada a esta publicación (ej: kg_plastico, kWh_solar, etc.)',
  })
  cantidadUnidad: string | null; // decimal -> string
}
