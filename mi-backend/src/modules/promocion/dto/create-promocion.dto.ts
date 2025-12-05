import { IsOptional, IsString, MaxLength, IsDateString } from 'class-validator';

export class CreatePromocionDto {
  @IsOptional()
  @IsString()
  @MaxLength(45)
  tipoPromo?: string;

  @IsOptional()
  @IsDateString()
  fechaIniPromo?: string; // la convertimos a Date en el service

  @IsOptional()
  @IsDateString()
  fechaFinPromo?: string; // igual
}
