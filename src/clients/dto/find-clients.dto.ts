import { ApiProperty } from '@nestjs/swagger'
import { Decimal } from '@prisma/client/runtime/library'
import { IsNumber, Max, Min } from 'class-validator'

export class FindClientDTO {
  @ApiProperty({ description: 'Balance client' })
  @ApiProperty({ type: 'number', format: 'decimal' })
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @Max(9999999999)
  balance: Decimal
}
