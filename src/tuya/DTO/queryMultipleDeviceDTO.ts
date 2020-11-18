import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumberString } from "class-validator";
import { QuerySingleDeviceDTO } from "./querySingleDeviceDTO";

export class QueryMultipleDeviceDTO extends QuerySingleDeviceDTO {

    @IsNotEmpty()
    @IsNumberString({
        no_symbols: true //evita caratteri che non siano numeri, compresi . e ,
    })
    @ApiProperty({
        maximum: 1
    })
    subdevice: number;

}
