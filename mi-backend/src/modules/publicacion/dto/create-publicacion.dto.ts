import {
  IsInt,
  IsOptional,
  IsString,
  IsNumber,
  IsDateString,
  Length,
} from 'class-validator';

export class CreatePublicacionDto {
  @IsInt()
  usuarioId: number;

  @IsOptional()
  @IsInt()
  promocionId?: number;

  @IsOptional()
  @IsInt()
  reporteId?: number;

  @IsOptional()
  @IsString()
  @Length(1, 100)
  titulo?: string;

  @IsOptional()
  @IsString()
  @Length(1, 500)
  descripcion?: string;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  valorCredito?: number;

  @IsOptional()
  @IsDateString()
  fechaPublicacion?: string;

  @IsOptional()
  @IsString()
  @Length(1, 45)
  estadoPublica?: string;

  @IsOptional()
  @IsString()
  @Length(1, 255)
  foto?: string;
}
