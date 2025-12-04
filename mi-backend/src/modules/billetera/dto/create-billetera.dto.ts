// src/billetera/dto/create-billetera.dto.ts
import { IsOptional, IsNumberString, IsDateString } from 'class-validator';

export class CreateBilleteraDto {
  @IsOptional()
  @IsNumberString()
  saldoActual?: string; // ejemplo "100.50"

  @IsOptional()
  @IsNumberString()
  saldoRetenido?: string;

  @IsOptional()
  @IsDateString()
  fechaUltima?: string; // ISO string, ej: "2025-11-26T10:30:00Z"
}
