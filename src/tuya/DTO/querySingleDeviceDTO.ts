import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, Matches } from "class-validator";

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
    @Matches(/^(spegni|accendi)\b/, {
        message: `Use 'accendi' to turn on or 'spegni' to turn off`
    })
    @ApiProperty({
        description: 'Use "accendi" to turn on or "spegni" to turn off',
    })
    use: string;
}
