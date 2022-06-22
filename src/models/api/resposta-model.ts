import { SeguimentosModel } from "./segmentos-model";

export class RespostaModel<T> {
  constructor(
    public list : Array<T> = new  Array<T>(),
    public totalResults: number = 0,
    public totalPages: number = 0,
    public pageIndex: number = 0,
    public pageSize: number = 0,
    public query: string = ''
  ) {}
}
