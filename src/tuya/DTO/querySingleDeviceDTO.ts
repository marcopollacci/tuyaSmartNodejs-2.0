import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class QuerySingleDeviceDTO {

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    id: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    key: string;

    @IsNotEmpty()
    @IsString()
    @ApiProperty()
    use: string;
}
