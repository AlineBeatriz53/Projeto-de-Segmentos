import { MccsModel } from "./mccs-models";

export class SeguimentosModel {
    constructor(
        public id : string = '',
        public descricao :string = '',
        public mccs : Array<MccsModel> = new  Array<MccsModel>()
    ){}
}