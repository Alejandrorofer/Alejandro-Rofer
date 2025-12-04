// src/categoria/dto/create-categoria.dto.ts
import { IsInt, IsNotEmpty, IsOptional, IsNumberString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCategoriaDto {
  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  publicacion_id: number;

  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  tablaEquivalencia_id: number;

  @IsNotEmpty()
  @IsInt()
  @Type(() => Number)
  catalogo_id: number;

  @IsOptional()
  @IsNumberString()
  // ejemplo: "10.5000"
  cantidadUnidad?: string;
}
