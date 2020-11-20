import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  Matches,
  IsNumberString,
  IsOptional,
} from 'class-validator';

export class QueryLifxDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  light: string;

  @IsNotEmpty()
  @IsString()
  @Matches(/^(ON|OFF|DIM)\b/, {
    message: `ON, OFF OR DIM`,
  })
  @ApiProperty({
    description: `ON, OFF OR DIM`,
  })
  state: string;

  @IsOptional()
  @IsNumberString({
    no_symbols: true, //evita caratteri che non siano numeri, compresi . e ,
  })
  @ApiProperty({
    minimum: 1,
    maximum: 100,
    required: false,
  })
  percentual: number;
}
