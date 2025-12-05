import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  IsNumberString,
  IsDateString,
} from 'class-validator';

export class CreatePublicacionDto {
  @IsInt()
  @IsNotEmpty()
  usuarioId: number;

  @IsOptional()
  @IsInt()
  promocionId?: number;

  @IsOptional()
  @IsInt()
  reporteId?: number;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  titulo?: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  descripcion?: string;

  @IsOptional()
  @IsNumberString()
  valorCredito?: string; // ej. "10.50"

  @IsOptional()
  @IsDateString()
  fechaPublicacion?: string; // lo convertimos a Date en el service

  @IsOptional()
  @IsString()
  @MaxLength(45)
  estadoPublica?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  foto?: string;
}
