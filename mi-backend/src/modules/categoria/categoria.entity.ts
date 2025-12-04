// src/categoria/categoria.entity.ts
import { Column, Entity, PrimaryGeneratedColumn, Unique, Index } from 'typeorm';

@Entity({ name: 'categoria' })
@Unique('uq_categoria_pub_cat_eq', ['publicacion_id', 'catalogo_id', 'tablaEquivalencia_id'])
@Index('publicacion_id', ['publicacion_id'])
@Index('tablaEquivalencia_id', ['tablaEquivalencia_id'])
@Index('catalogo_id', ['catalogo_id'])
@Index('ix_categoria_catalogo_pub', ['catalogo_id', 'publicacion_id'])
export class Categoria {
  @PrimaryGeneratedColumn({ type: 'int' })
  idcategoria: number;

  @Column({ type: 'int' })
  publicacion_id: number;

  @Column({ type: 'int' })
  tablaEquivalencia_id: number;

  @Column({ type: 'int' })
  catalogo_id: number;

  @Column('decimal', {
    precision: 14,
    scale: 4,
    nullable: true,
    default: null,
    comment:
      'Cantidad de unidades de la equivalencia asociada a esta publicación (ej: kg_plastico, kWh_solar, etc.)',
  })
  cantidadUnidad: string | null; // usar string para DECIMAL
}
