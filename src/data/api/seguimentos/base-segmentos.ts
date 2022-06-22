import axios from "axios";
import { RespostaModel } from "../../../models/api/resposta-model";
import { SeguimentosModel } from "../../../models/api/segmentos-model";
import { useApi } from "../config";

export const useSeguimentos = () => {
  const { ApiSeguimentos  } = useApi();
  let temErros: boolean = true;
  let resultado: any;
  const getSeguimentos = async ( desc?: string ) : Promise<RespostaModel<SeguimentosModel>> => {
    await axios({
      method: "GET",
      url: `${ApiSeguimentos}api/segmentos?Descricao=${desc}`,
    }).then(function (response: { status: number; data: any; }) {
      if (response.status == 200) {
          resultado = response.data
      }
    });
    return resultado;
  };
  return {
    temErros,
    getSeguimentos,
    resultado
  }
}