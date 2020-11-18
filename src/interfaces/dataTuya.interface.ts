export interface IDps {
  [id: number]: boolean;
}

export interface IDataTuya {
  devId: string;
  dps: IDps;
}

export interface IDataSet {
  [id: number]: string | number | boolean;
}

export interface ISetData {
  multiple: boolean;
  data: IDataSet;
}
