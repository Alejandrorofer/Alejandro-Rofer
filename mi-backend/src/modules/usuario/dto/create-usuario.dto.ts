// src/usuario/dto/create-usuario.dto.ts
import {
  IsInt,
  IsOptional,
  IsString,
  Length,
  IsNotEmpty,
} from 'class-validator';

export class CreateUsuarioDto {
  @IsOptional()
  @IsString()
  @Length(1, 45)
  nombre?: string;

  @IsOptional()
  @IsString()
  @Length(1, 45)
  apellido?: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 80)
  nombreUser: string;

  @IsString()
  @IsNotEmpty()
  @Length(1, 255)
  contrasenia: string; // aquí podrías enviar ya la contraseña hasheada o hashearla en el service

  @IsOptional()
  @IsInt()
  billeteraId?: number;
}
