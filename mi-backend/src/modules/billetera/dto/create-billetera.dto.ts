import {
  IsOptional,
  IsDateString,
  IsNumberString,
} from 'class-validator';

export class CreateBilleteraDto {
  // Si no envías estos campos, MySQL usará el DEFAULT '0.00'
  @IsOptional()
  @IsNumberString()
  saldoActual?: string;

  @IsOptional()
  @IsNumberString()
  saldoRetenido?: string;

  @IsOptional()
  @IsDateString()
  fechaUltima?: string; // lo convertiremos a Date en el servicio si hace falta
}
