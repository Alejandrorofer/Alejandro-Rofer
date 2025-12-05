import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUsuarioDto {
  @IsOptional()
  @IsString()
  @MaxLength(45)
  nombre?: string;

  @IsOptional()
  @IsString()
  @MaxLength(45)
  apellido?: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(80)
  nombreUser: string;

  // OJO: en producción deberías hashear la contraseña en el service
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(255)
  contrasenia: string;

  @IsOptional()
  @IsInt()
  billeteraId?: number;
}
