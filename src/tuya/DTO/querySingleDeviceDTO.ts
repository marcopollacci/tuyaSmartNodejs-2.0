import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class QuerySingleDeviceDTO {

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    id: number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    key: number;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    use: number;
}
