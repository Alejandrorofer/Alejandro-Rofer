import { PartialType } from '@nestjs/mapped-types';
import { CreateMovimientoCreditoDto } from './create-movimiento-credito.dto';

export class UpdateMovimientoCreditoDto extends PartialType(
  CreateMovimientoCreditoDto,
) {}
