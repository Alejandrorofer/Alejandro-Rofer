import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  IsDateString,
} from 'class-validator';

export class CreateIntercambioDto {
  @IsInt()
  @IsNotEmpty()
  usuarioOrigenId: number;

  @IsInt()
  @IsNotEmpty()
  usuarioDestinoId: number;

  @IsInt()
  @IsNotEmpty()
  custodioCreditoId: number;

  @IsOptional()
  @IsInt()
  creditoVerde?: number;

  @IsOptional()
  @IsInt()
  cantidad?: number;

  @IsOptional()
  @IsString()
  @MaxLength(45)
  estadoIntercam?: string;

  @IsOptional()
  @IsDateString()
  fechaCreacion?: string;

  @IsOptional()
  @IsDateString()
  fechaFinal?: string;

  @IsOptional()
  @IsInt()
  publicacionId?: number;
}
