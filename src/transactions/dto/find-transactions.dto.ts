import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString } from 'class-validator'

export class FindTransactionDTO {
  @ApiProperty({ description: 'to recipient cpf' })
  @IsString()
  @IsNotEmpty()
  to: string

  @ApiProperty({ description: 'start date filter' })
  @ApiProperty({ format: 'date', example: 'yyyy-mm-dd' })
  @IsNotEmpty()
  dt_ini: Date

  @ApiProperty({ description: 'filter end date' })
  @ApiProperty({ format: 'date', example: 'yyyy-mm-dd' })
  @IsNotEmpty()
  dt_fim: Date
}
