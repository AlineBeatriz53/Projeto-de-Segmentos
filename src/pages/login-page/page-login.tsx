import Pesquisa from '../../views/components/search/pesquisa';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import { TextField } from "@mui/material";
import { useState, useCallback, useEffect} from 'react';
import BotaoVolta from '../../views/components/button/button-voltar';
import {SeguimentosModel} from '../../models/api/segmentos-model';
import { useSeguimentos } from '../../data/api/seguimentos';
import BotaoFinalizar from '../../views/components/button/button-finalizar';



const Texto = styled.h1`
  background: linear-gradient(55deg, #ECF9FD, #fff, #ECF9FD);
  color: #1999E3;
  text-align: center;
  font-family: 'Open sans', light, monospace ;
`;
const Texto1 = styled.p`
  color: #000;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif ;
  font-size: 15px;
  text-align: center;
`;

export const LoginPage = () => {
  const { getSeguimentos } = useSeguimentos()

  const [seguimentos, setSeguimentos] = useState(new Array<SeguimentosModel>());


  const [segmento, setSegmento] = useState(new SeguimentosModel())
  const handlerSeguimentos = async (event?: any) => {
    setSeguimentos((await getSeguimentos(event?.target?.value)).list)
  }

  useEffect(() => {
    console.log("teste")
  }, [segmento]);

  return (
    <>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          padding: '10em',
        }}
      >
        <div>
          <Texto> Segmentos da Empresa </Texto>

          <Texto1> Selecione abaixo o segmento que mais se aproxima com o ramo de atividade de sua empresa. </Texto1>
          <br />
          <Pesquisa />
          <BotaoVolta />
          <BotaoFinalizar />
          
        </div>
      </Box>
    </>
  );
}