import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsNumberString,
} from 'class-validator';

export class CreateCategoriaDto {
  @IsInt()
  @IsNotEmpty()
  publicacionId: number;

  @IsInt()
  @IsNotEmpty()
  tablaEquivalenciaId: number;

  @IsInt()
  @IsNotEmpty()
  catalogoId: number;

  @IsOptional()
  @IsNumberString()
  cantidadUnidad?: string; // ej: "12.5000"
}
