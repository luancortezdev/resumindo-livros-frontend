// ** MUI imports
import { Button, TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';

export default function Formulario() {

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      my: '10%',
      mx: '10%'
    }}>
      <Typography component='h1' variant='h6' marginBottom={2}>Preencha o formulário e faça o resumo do capítulo</Typography>
      <Box
        component='form'
      >
        <Box>
          <TextField
            label="Título"
            variant="outlined"
            type='string'
            sx={{ width: 300, marginBottom: 2, mr: 2 }}
          />
          <TextField
            label="Autor"
            variant="outlined"
            type='string'
            sx={{ width: 300, marginBottom: 2 }}
          />
        </Box>
        <TextField
          label="Capítulo"
          variant="outlined"
          type='number'
          sx={{ width: 150, marginBottom: 2 }}
        />
        <TextField
          multiline
          maxRows={20}
          label="Resumo do capítulo"
          variant="outlined"
          type='string'
          sx={{ mb: 1 }}
          fullWidth
        />
        <Button variant='contained' color='warning'>Salvar</Button>
      </Box>
    </Box>
  );
}