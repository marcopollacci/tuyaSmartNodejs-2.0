import { ApiProperty } from '@nestjs/swagger';
import { IsNumberString, IsOptional, Matches } from 'class-validator';
import { QuerySingleDeviceDTO } from './querySingleDeviceDTO';

export class QueryNooieDeviceDTO extends QuerySingleDeviceDTO {
  @IsOptional()
  @IsNumberString({
    no_symbols: true, //evita caratteri che non siano numeri, compresi . e ,
  })
  @ApiProperty({
    required: false,
  })
  temperature: number;

  @IsOptional()
  @Matches(/^(colour|white)\b/, {
    message: `Use 'colour' or 'white'`,
  })
  @ApiProperty({
    description: `Use 'colour' or 'white'`,
    required: false,
  })
  mode: string;

  @IsOptional()
  @IsNumberString({
    no_symbols: true, //evita caratteri che non siano numeri, compresi . e ,
  })
  @ApiProperty({
    minimum: 1,
    maximum: 100,
    required: false,
  })
  dimmer: number;

  @IsOptional()
  @ApiProperty({
    description: `Color in RGB, es: '255,255,0'`,
    required: false,
  })
  @Matches(/(\d{1,3}),(\d{1,3}),(\d{1,3})/, {
    message: `Not Valid, es: 255,255,0`,
  })
  colour: string;
}
