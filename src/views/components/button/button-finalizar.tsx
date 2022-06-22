import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';


export default function BotaoFinalizar() {
  return (
    <div>
      <Box>
        <Button
          sx={{
            color: '#1999E3',
            backgroundColor: 'white',
            border: '1px solid',
            fontSize: '10px',
            width: '450px',
            float: 'left',
            marginLeft: '190px',
            top: '1.9rem',     
            boxShadow: 'none',       
            '&:hover': {
              backgroundColor: '#1999E3',
              color: '#fff',
              boxShadow: 'none',
              
            }
          }} variant="contained" startIcon={<CheckIcon
          />}>Finaliza Cadastro</Button>
      </Box>
    </div >
  )
}



