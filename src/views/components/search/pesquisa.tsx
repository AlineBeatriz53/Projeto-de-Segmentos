import Box from '@mui/material/Box';
import { FormControl, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from "@mui/material/InputAdornment";
import { SeguimentosModel } from '../../../models/api/segmentos-model';
import { useSeguimentos } from '../../../data/api/seguimentos';
import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRef } from 'react';
import Button from '@mui/material/Button';
import BorderColorIcon from '@mui/icons-material/BorderColor';

const Texto2 = styled.div`
  background: linear-gradient(55deg,#ECF9FD,#fff,#ECF9FD);
  margin-top: 13px;
  max-height: 25em;
  overflow: hidden;
  align-items: center;
  overflow-y: auto;
  font-family: 'Open sans', light, monospace ;

  ::-webkit-scrollbar{
    display: none;
  };
`;
//Estilização da tag 'h1'
const Texto = styled.h1`
  border-radius: 3px;
  margin-top: 25px;
  max-height: 10px;
  overflow: hidden;
  gap: 16px;
  cursor: pointer;
  padding: 34px;
  display: flex;
  justify-content: center;
  background: linear-gradient(55deg,#ECF9FD,#fff,#ECF9FD);
  color: #1999E3;
  font-size: 20px;
  font-family: 'Open sans', light, monospace;
  :hover { 
    background-color: #e9e9e9; 
  };
`;
const Seg = styled.p`
  text-align: center;
  color: #000;
  font-size: 15px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif ;`;


export default function BotaoPesquisa() {

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
    <div>
      <Box>
        <>
          <FormControl sx={{
            alignItems: 'center',
            width: '40rem',
            display: 'flex',
            justifyContent: 'center',
            top: '10px',
            color: 'white',
            fontFamily: 'Open sans,light,monospace',
          }} variant="filled" >
            <TextField fullWidth onChange={handlerSeguimentos}
              type="text"
              placeholder="Ex: Restaurante"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                )
              }}
            />
          </FormControl>


          <Texto2>


            {segmento.id === '' ?

              seguimentos.map((item) => (
                <div onClick={() => setSegmento(item)}><Texto>{item.descricao}</Texto></div>
              ))
              :
              <>
                <Seg>Segmento Selecionado:</Seg>
                <Texto>{segmento.descricao}</Texto>
                <FormControl sx={{
                  alignItems: 'center',
                  width: '30rem',
                  display: 'flex',
                  justifyContent: 'center',
                  left: '17em',
                  bottom: '80px',
                  color: '#1999E3',
                }} variant="filled">
                <Button onClick={() => setSegmento(new SeguimentosModel())}>
                  <BorderColorIcon />
                </Button>
                </FormControl>
                
              </>
            }
          </Texto2>
        </>
      </Box>
    </div>
  );
}