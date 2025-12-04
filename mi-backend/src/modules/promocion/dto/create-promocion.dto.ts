// src/promocion/dto/create-promocion.dto.ts
import { IsOptional, IsString, MaxLength, IsDateString } from 'class-validator';

export class CreatePromocionDto {
  @IsOptional()
  @IsString()
  @MaxLength(45)
  tipoPromo?: string;

  @IsOptional()
  @IsDateString()
  // formato ISO: "2025-11-26" o "2025-11-26T00:00:00Z"
  fechaIniPromo?: string;

  @IsOptional()
  @IsDateString()
  fechaFinPromo?: string;
}
