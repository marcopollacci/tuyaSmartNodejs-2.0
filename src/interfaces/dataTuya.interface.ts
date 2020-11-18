export interface IDps {
    [id: number]: boolean;
}

export interface IDataTuya {
    devId: string;
    dps: IDps;
}