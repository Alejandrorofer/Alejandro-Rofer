// src/billetera/dto/update-billetera.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateBilleteraDto } from './create-billetera.dto';

export class UpdateBilleteraDto extends PartialType(CreateBilleteraDto) {}
