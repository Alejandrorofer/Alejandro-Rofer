import { PartialType } from '@nestjs/mapped-types';
import { CreateIntercambioDto } from './create-intercambio.dto';

export class UpdateIntercambioDto extends PartialType(CreateIntercambioDto) {}
