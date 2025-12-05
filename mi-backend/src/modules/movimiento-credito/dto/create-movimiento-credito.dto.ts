import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  IsNumberString,
} from 'class-validator';

export class CreateMovimientoCreditoDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(45)
  tipoMovimiento: string; // COMPRA, INTERCAMBIO, BONUS, etc.

  @IsNumberString()
  monto: string; // ej: "10.50"

  @IsOptional()
  @IsString()
  @MaxLength(255)
  descripcionMovi?: string;

  @IsInt()
  billeteraId: number;

  @IsOptional()
  @IsInt()
  intercambioId?: number;
}
