import { ApiProperty } from '@nestjs/swagger'
import { Decimal } from '@prisma/client/runtime/library'

import { IsNotEmpty, IsNumber, IsString, Max, Min } from 'class-validator'

export class CreateClientDTO {
  @ApiProperty({ description: 'cpf client' })
  @IsNotEmpty()
  cpf: string

  @ApiProperty({ description: 'Name client full ' })
  @IsString()
  name: string

  @ApiProperty({ type: 'number', format: 'decimal' })
  @ApiProperty({ description: 'Balance client' })
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @Max(9999999999)
  balance: Decimal
}
