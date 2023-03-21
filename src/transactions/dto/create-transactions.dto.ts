import { ApiProperty } from '@nestjs/swagger'
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  Min,
} from 'class-validator'
import { AttributeTypeEnum } from 'src/shared/enum/attribute-type.enum'
import { DescriptionEnum } from 'src/shared/enum/description-enum'

export class CreateTransactionDTO {
  @ApiProperty({ description: 'from sender' })
  @IsString()
  @IsNotEmpty()
  from: string

  @ApiProperty({ description: 'to recipient cpf' })
  @IsString()
  @IsNotEmpty()
  to: string

  @ApiProperty({ description: 'transaction description' })
  @IsString()
  @IsNotEmpty()
  @IsEnum(DescriptionEnum)
  desc_transaction: string

  @ApiProperty({ description: 'type transaction' })
  @IsString()
  @IsNotEmpty()
  @IsEnum(AttributeTypeEnum)
  tp_transaction: string

  @ApiProperty({ type: 'number', format: 'decimal' })
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  @Max(9999999999)
  @IsNotEmpty()
  amount: number

  @ApiProperty({ description: 'transaction identifier' })
  @IsString()
  @IsNotEmpty()
  id_transaction: string
}
