import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Box, FormControl,InputAdornment } from '@mui/material';
import { SeguimentosModel } from '../../../models/api/segmentos-model';
import { useSeguimentos } from '../../../data/api/seguimentos';
import { useCallback, useEffect, useState } from 'react';


export default function BotaoVolta() {
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
      <FormControl variant="filled">
        <Button onClick={() => setSegmento(new SeguimentosModel())} startIcon={<KeyboardArrowLeftIcon
          />}sx={{
            color: '#1999E3',
            backgroundColor: 'white',
            border: '1px solid',
            fontSize: '10px',
            float: 'left',
            width: '17em',
            justifyContent: 'center',
            top: '4rem',
            marginLeft: '10px',
            '&:hover': {
              backgroundColor: '#1999E3',
              color: 'white',
              boxShadow: 'none',
            }
        }} >Voltar</Button>
      </FormControl>
      </Box>
    </div>
  )
}



